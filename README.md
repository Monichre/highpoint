# HIGHPOINTPG

## Architecture, Directory Set Up

    1. app
    2. server

Run 'yarn install' in the root directory and upon completion run cd into /app and run 'yarn install' and then 'yarn start' to fire up the application.

The server/index.js file in the server directory of the application will simulate a traditional backend server on your local machine and present the application inside app/build as a static site.

HOWEVER, this is mostly unneccessary to do when developing locally. With that said, simply cd into app and run yarn start to get the application up and running.

After you've made your changes simply cd out into the project root and run 'yarn deploy-prod', this will build the client side React application located in /app and then deploy the entire site bundled and compressed.

Be sure to 'git add, git commit and push' afterwards.

## Portfolio Page is using [react-page-scroller](https://github.com/vikliegostaiev/react-page-scroller)

- It's vertical wheel event listener is overly sensitive so I've modified the source code and debounced its callback function using Lodash

### Pinch Zoom Gesture Bug

You want to use the gesturestart, gesturechange, and gestureend events. These get triggered any time 2 or more fingers touch the screen.

Depending on what you need to do with the pinch gesture, your approach will need to be adjusted. The scale multiplier can be examined to determine how dramatic the user's pinch gesture was. See Apple's TouchEvent documentation for details about how the scale property will behave.

```
  node.addEventListener('gestureend', function(e) {
      if (e.scale < 1.0) {
          // User moved fingers closer together
      } else if (e.scale > 1.0) {
          // User moved fingers further apart
      }
  }, false);
```
