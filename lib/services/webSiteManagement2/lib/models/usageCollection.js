/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the UsageCollection class.
 * @constructor
 * Collection of usages
 * @member {array} [value] Collection of resources
 * 
 * @member {string} [nextLink] Link to next page of resources
 * 
 */
function UsageCollection() {
}

/**
 * Defines the metadata of UsageCollection
 *
 * @returns {object} metadata of UsageCollection
 *
 */
UsageCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'UsageCollection',
    type: {
      name: 'Composite',
      className: 'UsageCollection',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'UsageElementType',
                type: {
                  name: 'Composite',
                  className: 'Usage'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = UsageCollection;