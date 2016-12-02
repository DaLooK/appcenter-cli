/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the TestSeries class.
 * @constructor
 * @summary Test Series
 *
 * Summary of a single test series
 *
 * @member {string} slug Unique, human-readable identifier of the test series
 * 
 * @member {string} name Name of the test series
 * 
 * @member {string} [mostRecentActivity] Date of the latest test run that used
 * this test series
 * 
 * @member {array} [testRuns] Most recent test runs
 * 
 */
function TestSeries() {
}

/**
 * Defines the metadata of TestSeries
 *
 * @returns {object} metadata of TestSeries
 *
 */
TestSeries.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TestSeries',
    type: {
      name: 'Composite',
      className: 'TestSeries',
      modelProperties: {
        slug: {
          required: true,
          serializedName: 'slug',
          type: {
            name: 'String'
          }
        },
        name: {
          required: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        mostRecentActivity: {
          required: false,
          serializedName: 'mostRecentActivity',
          type: {
            name: 'String'
          }
        },
        testRuns: {
          required: false,
          serializedName: 'testRuns',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'TestRunSummaryElementType',
                type: {
                  name: 'Composite',
                  className: 'TestRunSummary'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = TestSeries;