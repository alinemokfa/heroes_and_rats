const Hero = require('../hero.js')
const assert = require('assert')


describe('Hero', function() {
  let hero;
});

beforeEach(function() {
hero = new Hero('Noah', 80, 'strawberry', []);
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
