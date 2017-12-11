const Hero = require('../hero.js')
const Food = require('../food.js')
const Task = require('../task.js')
const assert = require('assert')


describe('Hero', function() {
  let hero;
  let strawberry;
  let banana;
  let buyTickets;

});

beforeEach(function() {
  hero = new Hero('Noah', 80, 'strawberry', []);
  strawberry = new Food('strawberry', 3);
  banana = new Food('banana', 2);
  buyTickets = new Task(2, 1, 'go home', false);
});

it('hero should have a name', function() {
  assert.strictEqual(hero.name, 'Noah');
})

it('hero should have a health level', function() {
  assert.strictEqual(hero.health, 80);
})

it('hero should have a favourite food', function() {
  assert.strictEqual(hero.favouriteFood, 'strawberry');
})

it('hero should be able to say his name', function() {
  assert.strictEqual(hero.sayName(), 'My name is Noah.');
})

it('tasks array starts empty', function() {
  assert.strictEqual(hero.tasks.length, 0);
})

it('hero should be able to add tasks', function () {
  hero.addTask(buyTickets);
  assert.strictEqual(hero.tasks.length, 1);
})

it('hero should be able to eat and update health', function() {
  hero.eat(banana);
  assert.strictEqual(hero.health, 82);
})

it('hero\'s health should go up by 1.5* when favourite food is ingested', function() {
  hero.eat(strawberry);
  assert.strictEqual(hero.health, 84.5);
})
