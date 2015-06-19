var ONE_KM = 1/5000;  // Km to pixel
var DISTANCE_EARTH_TO_SUN = 149600000;
/**
 * UniverseObject description
 * @param {string} elmID  ID of element in document
 * @param {Number} radius Radius of object (In KM unit)
 */
var UniverseObject = function(elmID, radius) {
  this.radius = radius;
  this.radiusInPx = radius * ONE_KM;
  this.elem = document.getElementById(elmID);
  this.elem.style.width = this.elem.style.height = this.radius * ONE_KM * 2 + 'px';
  this.x = 0;
  this.y = 0;
};

/**
 * Move object to a position
 * @param  {Number} x In KM unit
 * @param  {Number} y In KM unit
 * @return {[type]}   [description]
 */
UniverseObject.prototype.moveTo = function(x, y) {
  this.x = x;
  this.y = y;
  this.elem.style.left = (this.x * ONE_KM - this.radiusInPx) + 'px';
  this.elem.style.top = (this.y * ONE_KM - this.radiusInPx) + 'px';
};

/**
 * Main
 */
function main() {
  var sun = new UniverseObject('sun', 695800);
  var earth = new UniverseObject('earth', 6371);

  // Move sun to center of page
  sun.moveTo(window.innerWidth / 2 / ONE_KM, window.innerHeight / 2 / ONE_KM);
}

main();