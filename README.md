
# BackOffice Protractor Project #

## Setup:
* Install [Node](http://nodejs.org) (v4.x.x or later)
* `git clone https://github.com/josedeita/bo_protractor`
* `npm install` to install the project dependancies
* `node_modules/.bin/webdriver_manager update` to update drivers
* Set up environment variables, for windows please see this [link](https://www.techjunkie.com/environment-variables-windows-10/)
in macOx and linux type:
```sh
export KYANI_USER="5xx"
export KYANI_KEY="password"
```

## Run tests:
* Run `npm test` or
* `node_modules/.bin/protractor conf.js`
