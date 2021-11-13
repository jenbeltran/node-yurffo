const expectedDataP1 = require('./expected-data.js');
const part1 = require('./part-1.js');

describe('#Part1', () => {
  it('task 1 should meet the expected data', () => {
    expect(part1.task1()).toStrictEqual(expectedDataP1.expectedTask1);
  });

  // TODO: Implement the suite to match the length
  it('task 1 should have correct length', () => {
    // Fill this
    expect(part1.task1().length).toEqual(expectedDataP1.expectedTask1.length);
  });

  it('task 2 should meet the expected data', () => {
    expect(part1.task2()).toStrictEqual(expectedDataP1.expectedTask2);
  });

  it('task 3 should meet the expected data', () => {
    expect(part1.task3()).toStrictEqual(expectedDataP1.expectedTask3);
  });

  /**
   * BONUS: Add additional 3 test scenarios here
   * that you think it would be helpful to test against
   * Example Usage:
   *  it('', () => {});
   * */
});
