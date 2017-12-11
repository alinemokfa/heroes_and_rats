const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.sayName = function() {
  return `My name is ${this.name}.`
}

module.exports = Hero;
