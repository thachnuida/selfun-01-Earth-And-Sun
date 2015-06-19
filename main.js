var ONE_KM = 1 / 10000;  // Km to pixel
var DISTANCE_EARTH_TO_SUN = 149600000 * ONE_KM / 50; // This is fake data (Real is 149600000)
var SUN_RADIUS = 695800 * ONE_KM;
var EARTH_RADIUS = 6371 * 10 * ONE_KM; // This is fake data (Real is 6371)
var FAKE_SECOND = 1 / 1000;
var ONE_DAY = 24 * 60 * 60 * 1000 * FAKE_SECOND;
var EARTH_SPEED = 360 / ONE_DAY * (Math.PI / 180) * 4; // radian/second ( * 4 for faster speed :D)
/**
 * UniverseObject description
 * @param {string} elmID  ID of element in document
 * @param {Number} radius Radius of object (In px unit)
 */
var UniverseObject = function(elmID, radius) {
  this.radius = radius;
  this.elem = document.getElementById(elmID);
  this.elem.style.width = this.elem.style.height = this.radius * 2 + 'px';
  this.x = 0;
  this.y = 0;
};

/**
 * Move object to a position
 * @param  {Number} x In px unit
 * @param  {Number} y In px unit
 * @return {[type]}   [description]
 */
UniverseObject.prototype.moveTo = function(x, y) {
  this.x = x;
  this.y = y;
  this.elem.style.left = (this.x - this.radius) + 'px';
  this.elem.style.top = (this.y - this.radius) + 'px';
};

/**
 * Main
 */
function main() {
  var sun = new UniverseObject('sun', SUN_RADIUS);
  var earth = new UniverseObject('earth', EARTH_RADIUS);
  var time = 0;
  var deltaTime = 1000 / 60;
  var angle = 0;
  var deltaX;
  var deltaY;

  // Move sun to center of page
  sun.moveTo(window.innerWidth / 2, window.innerHeight / 2);

  // Move Earth around the Sun
  setInterval(function() {
    angle = EARTH_SPEED * time;
    deltaX = DISTANCE_EARTH_TO_SUN * Math.sin(angle);
    deltaY = DISTANCE_EARTH_TO_SUN * Math.cos(angle);
    earth.moveTo(sun.x + deltaX, sun.y + deltaY);
    time += deltaTime;
    if (time > ONE_DAY) time = 0;
  }, deltaTime);
}

main();