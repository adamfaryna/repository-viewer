# Repository Viewer

This project uses AngularJS, JSHint, BrowserSync, Less, Karma, Jasmine, PhantomJS, GulpJS.

Node.JS 5 is required.

## What is it?

This is simple single page responsive application showing usage of common Javascript technologies.

Main page state is a listing of repositories. When someone clicks on one of them state switch to details of this repository.

In current version the application uses two directives for rv-list for list of the repositories and rv-number-span for number-image pair element. It is very likely that this two components will be highly reusable. RvList could be placed in many different contexts other views. RvNumberImage would be used probably in all occurrences of numer-image pairs for views, stars and shares. When more mockups would be provided we could consider adding directive for list row.

I used angular-ui-router for controlling application state changes. Configuration is in config.js.

Services:
* logger - for events logging. In current version in just uses angular $log service under covers.
* rest - service for making REST calls for getting data from the server.

Views:
* Listing - show a list of repositories in tabular form. Default view.
* Details - shows details of the selected record. Required recordId parameter.

Application is build using GulpJS. Current version runs on BrowserSync.

Gulp tasks:
* gulp lint - runs lint checker.
* gulp less - compiles less sources and put them into /public/css
* gulp serve - starts HTTP server and open Firefox. Default.

Views are prepared with heavily use of flex boxes. It makes a lot easier to make responsive web designs using flex boxes.

I used autoprefixer to add browser specific prefixes to CSS formulas.

Tested on: Firefox 40.0.2, Chrome 48.0.+, Opera 35.0.

## How to install

npm install && bower install

## How to run

npm start

or

gulp serve

## How to run tests

npm test

Tests will be run in auto-watch-mode. When changes in code occur the tests will rerun.

# TODO - what I will do next

* Test on IE9+.
* Create directive for list record.
* Add sending logs to server in logger service.
* Add e2e tests.
* Unit tests for controllers.
* Prepare gulp configuration for production build (minify, uglify).

# Licence

This project is licensed under the [MIT licence](LICENSE.md).

# Enjoy!
