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

/**
 * An alert status properties.
 *
 */
class MetricAlertStatusProperties {
  /**
   * Create a MetricAlertStatusProperties.
   * @member {object} [dimensions] An object describing the type of the
   * dimensions.
   * @member {string} [status] status value
   * @member {date} [timestamp] UTC time when the status was checked.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetricAlertStatusProperties
   *
   * @returns {object} metadata of MetricAlertStatusProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetricAlertStatusProperties',
      type: {
        name: 'Composite',
        className: 'MetricAlertStatusProperties',
        modelProperties: {
          dimensions: {
            required: false,
            serializedName: 'dimensions',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          status: {
            required: false,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          timestamp: {
            required: false,
            serializedName: 'timestamp',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = MetricAlertStatusProperties;