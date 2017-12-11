const Task = require('../task.js')
const assert = require('assert')


describe('Task', function() {
  let buyTickets;
});


beforeEach(function() {
  buyTickets = new Task(2, 1, 'go home', false);
})


it('task should have a difficulty level', function() {
  assert.strictEqual(buyTickets.difficultyLevel, 2);
})

it('task should have an urgency level', function() {
  assert.strictEqual(buyTickets.urgencyLevel, 1);
})

it('task should have a reward ', function() {
  assert.strictEqual(buyTickets.reward, 'go home');
})

it('task should have a completion status', function() {
  assert.strictEqual(buyTickets.complete, false);
})

it('task should be able to update completion status', function() {
  buyTickets.setCompletionStatus();
  assert.strictEqual(buyTickets.complete, true );
})
