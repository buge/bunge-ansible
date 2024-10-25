
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

/** Resize window to 70% of the screen. */
slate.bind('c:ctrl;alt;cmd', slate.operation('move', {
  'x': 'screenOriginX + screenSizeX * 0.3 / 2',
  'y': 'screenOriginY + screenSizeY * 0.3 / 2',
  'width': 'screenSizeX * 0.7',
  'height': 'screenSizeY * 0.7',
}));


/** Resize window to 90% of the screen. */
slate.bind('v:ctrl;alt;cmd', slate.operation('move', {
  'x': 'screenOriginX + screenSizeX * 0.1 / 2',
  'y': 'screenOriginY + screenSizeY * 0.1 / 2',
  'width': 'screenSizeX * 0.9',
  'height': 'screenSizeY * 0.9',
}));


/** Resize window to 100% of the screen. */
slate.bind('b:ctrl;alt;cmd', slate.operation('move', {
  'x': 'screenOriginX',
  'y': 'screenOriginY',
  'width': 'screenSizeX',
  'height': 'screenSizeY',
}));

/** Throw window to center of other screen. */
slate.bind('o:ctrl;alt;cmd', slate.operation('throw', {
  'screen': 'next',
  'width': 'min({windowSizeX, screenSizeX})',
  'height': 'min({windowSizeY, screenSizeY})',
  'x': 'screenOriginX + (screenSizeX - min({windowSizeX, screenSizeX})) / 2',
  'y': 'screenOriginY + (screenSizeY - min({windowSizeY, screenSizeY})) / 2',
}));

/** Relaunch slate on keypress. */
slate.bind('r:ctrl;alt;cmd', slate.operation('relaunch'));
