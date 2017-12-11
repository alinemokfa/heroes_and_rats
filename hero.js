const Hero = function(name, health, favouriteFood, tasks) {
  this.name = name;
  this.health = health;
  this.favouriteFood = favouriteFood;
  this.tasks = [];
}

Hero.prototype.sayName = function() {
  return `My name is ${this.name}.`
}

Hero.prototype.addTask = function(task) {
   this.tasks.push(task);
 }






module.exports = Hero;
