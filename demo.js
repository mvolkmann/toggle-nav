// Provide some global variables for nav.
// This is only needed to make it easier to consume without IDs.
// AngularJS removes this need.
var appData = {
  navHidden: false
};

// Wait for the UI to finish loading then fetch the nav section so we can
// manipulate it later.
window.onload = function () {
  appData.nav = document.querySelector('nav');
};

// NOTE: All of these functions are globally available in the app.
// The next two functions are not needed
// if AngularJS ng-class is used.
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

// This allows for ng-click-esq usage without AngularJS
function toggleNav () {
  appData.navHidden = !appData.navHidden;
  if (appData.navHidden) {
    addClass(appData.nav, 'hidden');
  } else {
    removeClass(appData.nav, 'hidden');
  }
}
