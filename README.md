# IsAdrianGoing

[![Build
Status](https://travis-ci.org/atscott/is-adrian-going.svg?branch=master)](https://travis-ci.org/atscott/is-adrian-going)

## Contributing

 * Simply add a new image to the 
 [src/assets/images](https://github.com/atscott/is-adrian-going/tree/master/src/assets/images) folder
 * Images must be \*.png
 * Poorly cropped images will not be merged
 * Once merged, the project will automatically be rebuilt and deployed. 
 Check the build status on [Travis CI](https://travis-ci.org/atscott/is-adrian-going/builds)

## Development

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app
will automatically reload if you change any of the source files.

If you want to test the service worker, you'll need to instead run with
`npm run static-serve`. This builds the production sources, regenerates the
service-worker with sw-precache, and serves from the dist/.

### Build

Run `grunt build` to build the project. The build artifacts will be stored in the
`dist/` directory. You could do `ng build` instead, but it won't regenerate the
fortunes list or the service-worker.js file.

### Running unit tests

Run `ng test` to execute the unit tests via
[Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via
[Protractor](http://www.protractortest.org/). Before running the tests make sure
you are serving the app via `ng serve`.
