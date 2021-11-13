const { Query } = require("mingo");
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

  // declare variables
  const expectedTask1 = [];
  let totalValues = { totalPremium: 0, totalFees: 0 };

  // query the providers array if the industry is "retail"
  let criteria = { industry: "retail" };
  let query = new Query(criteria);
  let providers = query.find(PROVIDERS);

  // run a for loop on the list of providers results
  // then check if the premium and the fees are numbers
  // if so, tally the premium and fee totals in the totalValues object
  // then push into expectedTask1 array
  for (let provider of providers) {
    {
      Number.isInteger(provider.prices[0].premium) == 1 &&
        (totalValues.totalPremium += provider.prices[0].premium);
    }
    {
      Number.isInteger(provider.prices[0].fee) == 1 &&
        (totalValues.totalFees += provider.prices[0].fee);
    }
  }
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
  //declare variables
  const expectedTask2 = [];
  let totalValues = { totalPremium: 0 };

  // query the providers array if the industry is "technology"
  let criteria = { industry: "technology" };
  let query = new Query(criteria);
  let providers = query.find(PROVIDERS);

  // run a for loop on the list of providers results
  // do array.reduce to compare the current premium in the array from the previous premium
  // if the previous premium is smaller than the current one, save the previous one
  // once the loop is done, save the smallest value as totalPremium
  // then push into expectedTask2 array
  for (let provider of providers) {
    provider.prices.reduce((prev, curr) => {
      totalValues.totalPremium =
        prev.premium < curr.premium ? prev.premium : curr.premium;
    });
  }

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
  const expectedTask3 = [];

  // query the providers array if the industry is "technology"
  let criteria = { industry: "technology" };
  let query = new Query(criteria);
  let providers = query.find(PROVIDERS);

  // run a for loop on the list of providers results
  // if the premium is greater or equal to 1000,
  // push the provider name into the expectedTask3 array;
  for (let provider of providers) {
    {
      provider.prices[0].premium >= 1000 && expectedTask3.push(provider.name);
    }
  }

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
