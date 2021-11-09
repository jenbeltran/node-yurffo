import { task1, task2 } from './part-2';

describe('#Part2', () => {
  it('task 1 should meet the expected data', () => {
    expect(task1()).toStrictEqual({ premium: 300, fee: 45 });
  });

  it('task 2 should meet the expected data', () => {
    expect(task2()).toStrictEqual({ premium: 315, fee: 30 });
  });

  /**
   * BONUS: Add additional test scenarios here
   * that you think it would be helpful to test against
   * Example Usage:
   *  it('', () => {});
   * */
});
