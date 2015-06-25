// Create one global container for app data
// rather than multiple global variables.
var appData = {
  navHidden: false
};

// Wait for the UI to finish loading then fetch the nav section so we can
// manipulate it later.
window.onload = function () {
  appData.nav = document.querySelector('nav');
};

// The following functions are globally available in the app,
// and are not needed if AngularJS ng-class and ng-click are used.
// See index-ng.html.
function addClass(element, className) {
  var classes = element.className.split(' ');
  classes.push(className);
  element.className = classes.join(' ');
}

function removeClass(element, className) {
  var classes = element.className.split(' ');
  classes.splice(classes.indexOf(className), 1);
  element.className = classes.join(' ');
}

// This allows for ng-click-like usage without AngularJS.
function toggleNav () {
  appData.navHidden = !appData.navHidden;
  if (appData.navHidden) {
    addClass(appData.nav, 'hidden');
  } else {
    removeClass(appData.nav, 'hidden');
  }
}
