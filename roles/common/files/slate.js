/**
 * Helper method to determine the next screen, relative to the current window.
 */
var nextScreen_ = function(window) {
  var currentScreen = window.screen();

  // The screen IDs should just be integers, so we determine the next screen by
  // incrementing the current screen's ID by 1.
  var screenId = ((currentScreen.id() + 1) % slate.screenCount()).toString();
  return slate.screenForRef(screenId);
};


/**
 * Returns an operation that will center the window and optionally resize it on
 * the given screen.
 */
var center_ = function(window, screen, opt_width, opt_height) {
  var screenRect = screen.rect();

  // Determine width and height of the window after the move, clamping it to
  // the size of the screen.
  var width = opt_width ? opt_width : window.rect().width;
  if (width > screenRect.width) {
    width = screenRect.width
  }
  var height = opt_height ? opt_height : window.rect().height;
  if (height > screenRect.height) {
    height = screenRect.height;
  }

  var x = screenRect.x + (screenRect.width - width) / 2;
  var y = screenRect.y + (screenRect.height - height) / 2;

  window.doOperation(slate.operation('move', {
    'x': x,
    'y': y,
    'width': width,
    'height': height,
  }));
};


/**
 * Creates an opertion that centers and resizes the window.
 * @param {number} size as a fraction of the screen size.
 */
var centerResize_ = function(size) {
  return function(window) {
    var screen = window.screen();
    var width = size * screen.rect().width;
    var height = size * screen.rect().height;
    center_(window, screen, width, height)
  };
};


/** Throw window to center of other screen. */
slate.bind('o:ctrl;alt;cmd', function(window) {
  center_(window, nextScreen_(window));
});


/** Align the window on the left. */
slate.bind('left:ctrl;alt;cmd', slate.operation('push', {
  'direction': 'left',
  'style': 'bar-resize:screenSizeX/2'
}));


/** Align the window on the right. */
slate.bind('right:ctrl;alt;cmd', slate.operation('push', {
  'direction': 'right',
  'style': 'bar-resize:screenSizeX/2'
}));


/** Relaunch slate on keypress. */
slate.bind('r:ctrl;alt;cmd', slate.operation('relaunch'));


/** Resize window to 70% of the screen. */
slate.bind('c:ctrl;alt;cmd', centerResize_(0.7));


/** Resize window to 90% of the screen. */
slate.bind('v:ctrl;alt;cmd', centerResize_(0.9));


/** Resize window to 100% of the screen. */
slate.bind('b:ctrl;alt;cmd', centerResize_(1.0));
