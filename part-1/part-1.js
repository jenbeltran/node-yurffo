/**
 * Refer to the following data when completing your answers: (The following JSON
 * file contains providers available for an industry)
 */

const PROVIDERS = require("../shared/data.json");

/**
 * Create a query that returns total premiums and fees available for retail industry
 */
function task1() {
  /**
   * TODO: Your body goes here
   */
  // run a forEach loop to go through the data array
  // for each provider, check if the industry is 'retail'
  // then check if the premium and the fees are numbers
  // if so, tally the total and push into empty array
  const expectedTask1 = [];
  let totalValues = { totalPremium: 0, totalFees: 0 };
  PROVIDERS.forEach((provider) => {
    if (provider.industry == "retail") {
      {
        Number.isInteger(provider.prices[0].premium) == 1 &&
          (totalValues.totalPremium += provider.prices[0].premium);
      }
      {
        Number.isInteger(provider.prices[0].fee) == 1 &&
          (totalValues.totalFees += provider.prices[0].fee);
      }
    }
  });
  expectedTask1.push(totalValues);
  return expectedTask1;
}

/**
 * Create a query that returns the minimum premium available among the providers for technology industry
 */
function task2() {
  /**
   * TODO: Your body goes here
   */

  const expectedTask2 = [];
  let totalValues = { totalPremium: 0 };
  PROVIDERS.forEach((provider) => {
    if (provider.industry == "technology") {
      provider.prices.reduce((prev, curr) => {
        totalValues.totalPremium =
          prev.premium < curr.premium ? prev.premium : curr.premium;
      });
    }
  });
  expectedTask2.push(totalValues);
  return expectedTask2;
}

/**
 * Create a query that returns all the provider names available for technology industry
 * that has premium amount greater than 1000
 */
function task3() {
  /**
   * TODO: Your body goes here
   */
}

/**
 * To see the expected results, please refer to ./expected-data.json file in part-1 directory!
 * NOTE: Please ensure that all the tests in part-1.spec.js are passing!
 */

module.exports = {
  task1,
  task2,
  task3,
};
