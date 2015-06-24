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

// This event handling is not needed
// if AngularJS ng-click is used.
// See index-ng.html.
window.onload = function () {
  var nav = document.getElementById('my-nav');
  var toggleBtn = document.getElementById('toggle-btn');
  var navHidden = false;

  toggleBtn.onclick = function () {
    navHidden = !navHidden;
    if (navHidden) {
      addClass(nav, 'hidden');
    } else {
      removeClass(nav, 'hidden');
    }
  };
};
