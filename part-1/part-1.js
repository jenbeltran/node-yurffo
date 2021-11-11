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
  // run a forEach loop to go through the providers array
  // for each provider, check if the industry is 'retail'
  // then check if the premium and the fees are numbers
  // if so, tally the premium and fee totals in the totalValues object
  // then push into expectedTask1 array
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
  // run a forEach loop to go through the providers array
  // for each provider, check if the industry is technology
  // if so, do array.reduce to compare the current premium in the array from the previous premium
  // if the previous premium is smaller than the current one, save the previous one
  // once the loop is done, save the smallest value as totalPremium
  // then push into expectedTask2 array
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
  // run a forEach loop through the providers array
  // if the provider indistry is technology AND if the premium is greater or equal to 1000,
  // push the provider name into the expectedTask3 array;
  const expectedTask3 = [];
  PROVIDERS.forEach((provider) => {
    if (
      provider.industry == "technology" &&
      provider.prices[0].premium >= 1000
    ) {
      expectedTask3.push(provider.name);
    }
  });
  return expectedTask3;
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
