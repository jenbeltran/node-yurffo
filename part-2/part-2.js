/***** TASK 1 *****/

/**
 * The following class represents a simplified version of one we
 * use frequently in different parts of our codebase. We use it
 * to encapsulate price data so we don't have to pass the raw
 * data around whenever we need it. Instead of saving the total
 * price, we save the small parts of it so that we can refer to
 * that information if we have to (total price = premium + fee).
 */
class Price {
  //each time an object with { fee, premium } gets passed in,
  //set the class property of 'premium' to be { premium }
  //and the class property of 'fee' to be { fee }
  constructor({ fee, premium }) {
    (this.premium = premium), (this.fee = fee);
  }

  //when the add() function is called, it takes in an array of prices
  // run a forEach loop on the prices array
  // and then tally the premiums and the fees
  // an object named `combinedPrice` is returned and has two properties which is the premium total and the fee total
  add(...prices) {
    prices.forEach((price) => {
      this.premium += price.premium;
      this.fee += price.fee;
    });

    const combinedPrice = {
      premium: this.premium,
      fee: this.fee,
    };

    return combinedPrice;
  }
}

/**
 * Right now this function doesn't work because the Price class
 * is not implemented. Your task is to update the class so that
 * the following code produces the correct result as held by the
 * `result` constant.
 *
 * Note that the `.add()` function can take any number of
 * arguments, not just 2 as used here.
 */
function task1() {
  const priceA = new Price({
    premium: 100,
    fee: 10,
  });
  const priceB = new Price({
    premium: 120,
    fee: 15,
  });
  const priceC = new Price({
    premium: 80,
    fee: 20,
  });

  const result = priceA.add(priceB, priceC);

  // result should have a premium of 300 and a fee of 45
  return result;
}

console.log(task1());

/***** TASK 2 *****/

/**
 * Requirements have now changed and we now need to allow prices
 * to be composed of sub prices.
 */
class NestedPrice extends Price {
  /**
   * The argument `prices` should be an array of instances of
   * the class Price or NestedPrice.
   */
  //since this is a subclass, super() the props to use them
  //run a forEach loop to get each price instance
  // tally the total of the fees and the premiums
  //set the class property of 'fee' to be the total fees
  //and the class property of 'premium' to be the total premiums
  constructor(prices) {
    super({ fee: 0, premium: 0 });
    prices.forEach((price) => {
      this.fee += price.fee;
      this.premium += price.premium;
    });
  }
}

/**
 * Your task is to implement `NestedClass` so that the
 * following code also produces the correct results without
 * affecting `Price` (i.e.: both classes need to work on their
 * own).
 */
function task2() {
  const priceA = new NestedPrice([
    new Price({ fee: 5, premium: 50 }),
    new Price({ fee: 10, premium: 130 }),
  ]);
  const priceB = new NestedPrice([
    new Price({ fee: 10, premium: 70 }),
    new Price({ fee: 0, premium: 30 }),
    new NestedPrice([
      new Price({ fee: 0, premium: 10 }),
      new Price({ fee: 5, premium: 25 }),
    ]),
  ]);

  const result = priceA.add(priceB);

  // result should have a premium of 315 and a fee of 30
  return result;
}

console.log(task2());

module.exports = {
  task1,
  task2,
};
