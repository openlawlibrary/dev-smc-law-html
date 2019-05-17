"""
Server for hosting website locally

Requires python 3.3 or greater.

Run `python3 server.py`

Visit `localhost:8000` in your web browser.
"""

from http.server import SimpleHTTPRequestHandler, HTTPServer
import argparse
import sys
import os
import urllib.parse
import urllib.request
import http.client
import posixpath
import json


DIR = os.path.abspath(os.path.dirname(__file__))

# make sure our working directory for this server is the same as this file is in
os.chdir(DIR)

with open('metadata.json') as f:
    VERSION_INFO = json.load(f)

DEFAULT_SEARCH_URL = VERSION_INFO['meta']['canonical-urls']['html']
PORTAL_CLIENT_CLASS = None
PORTAL_HOST = None
SEARCH_CLIENT_CLASS = None
SEARCH_HOST = None

filetypes = {
    'html',
    'pdf',
    'jpg',
    'svg',
    'png',
    'gif',
    'css',
    'js',
    'mustache',
    'json',
    'bulk',
    'map',
    'ttf',
    'eot',
    'woff',
    'woff2',
}


class RequestHandler(SimpleHTTPRequestHandler):
    def _proxy(self, Client, host, upstream_name):
        """
        proxy the current request to the given host using the given
        http.client Client class. 404 if not configured to proxy
        the path.
        """
        if Client is None:
            self.send_response(400)
            self.end_headers()
            message = 'Local server not configured to proxy {0}. Please run with the "--{0}-proxy-url" flag '.format(
                upstream_name)
            self.wfile.write(message.encode('utf-8'))
            return
        client = Client(host)
        req_headers = {}
        req_headers.update(self.headers)
        req_headers.pop('Host', None)
        req_headers.update({
            'X-Forwarded-For': 'self.address_string()',
            'X-Forwarded-Host': self.headers['Host'],
            'X-Forwarded-Proto': 'http',
        })
        client.request('GET', self.path, headers=req_headers)
        try:
            resp = client.getresponse()
        except:
            self.send_response(500)
            self.end_headers()
            host = client.host
            scheme = type(client).__name__[:-10].lower()
            url = urllib.parse.urlunsplit((host, scheme, '', ''))
            message = 'Something went wrong proxying to {}'.format(url)
            self.wfile.write(message.encode('utf-8'))
        else:
            self.send_response(resp.code)
            for k, v in resp.headers.items():
                if k not in ('Transfer-Encoding', 'Connection'):
                    self.send_header(k, v)
            self.end_headers()
            self.copyfile(resp, self.wfile)

    def do_GET(self):
        if self.path.startswith('/_portal'):
            return self._proxy(PORTAL_CLIENT_CLASS, PORTAL_HOST, 'portal')

        if self.path.startswith('/_search'):
            return self._proxy(SEARCH_CLIENT_CLASS, SEARCH_HOST, 'search')

        redirect = self.server.redirects.get(self.path)
        if redirect:
            sa = self.server.socket.getsockname()
            location = 'http://{}:{}{}'.format(*sa, redirect)
            self.send_response(302)
            self.send_header('Location', location)
            self.end_headers()
        else:
            # default to html if no valid filetype - this is not the right way to do this - it should be a retry.
            if not self.path.endswith('/') and ('.' not in self.path or self.path.rsplit('.', 1)[1] not in filetypes):
                self.path = self.path + '.html'
            super().do_GET()

    def translate_path(self, path):
        """Translate a /-separated PATH to the local filename syntax.

        Components that mean special things to the local file system
        (e.g. drive or directory names) are ignored.  (XXX They should
        probably be diagnosed.)

        """
        # replace colons (not allowed in win paths) with tilde
        path = path.replace(':', '~')
        # abandon query parameters
        path = path.split('?', 1)[0]
        path = path.split('#', 1)[0]
        # Don't forget explicit trailing slash when normalizing. Issue17324
        trailing_slash = path.rstrip().endswith('/')
        try:
            path = urllib.parse.unquote(path, errors='surrogatepass')
        except UnicodeDecodeError:
            path = urllib.parse.unquote(path)
        path = posixpath.normpath(path)
        words = path.split('/')
        words = filter(None, words)
        path = DIR
        for word in words:
            if os.path.dirname(word) or word in (os.curdir, os.pardir):
                # Ignore components that are not a simple file/directory name
                continue
            path = os.path.join(path, word)
        if trailing_slash:
            path += '/'
        return path


def get_http_client_info(upstream_name, url):
    """
    return the http.client class and host needed to reach the given url
    """
    if not url:
        return None, None
    scheme, host, *_ = urllib.parse.urlparse(url)
    if not scheme:
        print('Must include scheme in {}-proxy-url (e.g. https://example.com, rather than example.com)'.format(upstream_name))
    Client = getattr(http.client, scheme.upper() + 'Connection')
    print('PROXYING: "/_{}" to {}'.format(upstream_name, url))
    return Client, host


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--bind', '-b', default='127.0.0.1', metavar='ADDRESS',
                        help='Specify alternate bind address '
                             '[default: localhost]')
    parser.add_argument('port', action='store',
                        default=8000, type=int,
                        nargs='?',
                        help='Specify alternate port [default: 8000]')
    parser.add_argument('--search-proxy-url', default=DEFAULT_SEARCH_URL, metavar='SEARCH_URL',
                        help='url to proxy search requests to. [default: {}'.format(DEFAULT_SEARCH_URL))
    parser.add_argument('--portal-proxy-url', default=None, metavar='PORTAL_URL',
                        help='url to proxy portal requests to. [default: None]')

    args = parser.parse_args()
    server_address = (args.bind, args.port)

    httpd = HTTPServer(server_address, RequestHandler)

    raw_redirects = []
    try:
        with open(os.path.join(DIR, 'redirects.json')) as f:
            raw_redirects = json.load(f)
    except:
        pass
    redirects = {r[0]: r[1] for r in raw_redirects}
    httpd.redirects = redirects

    sa = httpd.socket.getsockname()
    print("Serving HTTP on", sa[0], "port", sa[1], "...")
    print("\n\n*** This server is designed for local use. DO NOT USE IN PRODUCTION ***\n\n")
    PORTAL_CLIENT_CLASS, PORTAL_HOST = get_http_client_info('portal', args.portal_proxy_url)

    SEARCH_CLIENT_CLASS, SEARCH_HOST = get_http_client_info('search', args.search_proxy_url)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nKeyboard interrupt received, exiting.")
        httpd.server_close()
        sys.exit(0)
