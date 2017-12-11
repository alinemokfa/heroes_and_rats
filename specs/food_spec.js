const Food = require("../food.js")
const assert = require('assert')


describe("Food", function () {
  let food;
})


beforeEach(function() {
  food = new Food('strawberry', 3);
});


it('food should have a name', function() {
  assert.strictEqual(food.name, 'strawberry')
})

it('food should have a replenishment value', function() {
  assert.strictEqual(food.replenishmentValue, 3)
})
