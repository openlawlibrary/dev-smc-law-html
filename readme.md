# Demo for Reader Lite for SMC
This is complied demo for SMC. 

Please note that these resources are not automatically cleaned up from unnecessary files, like we do for actual deployment. 

To start the basic server, run `py server.py` from root folder.


## Manual generation
To create everything manually from scratch, perform the following steps:

- Open `oll.conf` from user folder on your computer and change `partner` variable it to `oll.partners.us.ca.cities.san_mateo`
- CD into `publish` repository, follow instructions to install everything for platform and initiate local python env with
  ```bash
  workon YOUR_VIRTUAL_ENV
  ```
- Run this command to generate SMC HTML.
  ```bash
  oll build all
  ```
- Download and install latest NodeJS for your computer
- CD into `[platform]/publish-client/` and run command in terminal 
  ```bash
  npm run install
  ```
- CD into `[platform]/publish-client/partners/oll-core/v1/` and run command to build local front-end. This will generate front-end resources for SMC
  ```bash
  gulp buildLocal
  ```
- Manually create file `smc-law-html/version.json` and place this text inside:
  ```json
  {
    "meta": {
      "canonical-urls": {
        "html": "https://sanmateo.ca.us.open.law"
      }
    }
  }
  ```
- CD into generated `smc-law-html` directory and run 
  ```bash
  py server.py
  ```
- Open browser and link http://localhost:8000

---

## Running local development servers
- To run local servers for development from platform repository, first CD into `smc-law-html` and run 
  ```
  py server.py
  ``` 
- In `[platform]` repository, cd into `/publish-client/partners/oll-core/v1/` and run command 
  
  ```
  gulp watch
  ```

  This command will build everything for development and it will run local development servers at the end. You will see in console that development servers have been started. If any front-end files have been changed, they will be automatically recompiled and served.
- Open browser and link http://localhost:8002 to see SMC site with local front-end resources. Local resources like `css` and `js` will be loaded from platform, not from `smc-law-html`

## Running annotation and login servers
Running annotation and login servers is a bit different from regular server described above. There are few additional steps for this task.

These are the steps to run portal for front-end testing and development

```bash
cd portal\oll\portal
workon [YOUR_VIRTUAL_ENV]
set DJANGO_SETTINGS_MODULE=oll.portal.portalsite.settings.local_settings
py manage.py migrate
py manage.py loaddata portal/fixtures/test.json 
py manage.py loaddata annotations/fixtures/test.json
py manage.py runserver 5000
```

When the server has started, CD into `smc-law-html/` directory, where static HTML files are located, and start local server with the following command:

```bash
py server.py --portal-proxy-url=http://localhost:5000/
```

Servers must be started in this order:

1. Portal server
    ```bash
    cd [platform]/portal/oll/portal/
    workon [YOUR_VIRTUAL_ENV]
    py manage.py runserver 5000
    ```
2. HTML python server that proxies portal
    ```bash
    cd smc-law-html/
    py server.py --portal-proxy-url=http://localhost:5000/
    ```
3. Gulp server
    ```bash
    cd [platform]/publish-client/partners/oll-core/v1/
    workon [YOUR_VIRTUAL_ENV]
    gulp watch
    ```
