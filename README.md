## HIGHPOINTPG

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
