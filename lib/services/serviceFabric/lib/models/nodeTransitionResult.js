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

const models = require('./index');

/**
 * Represents information about an operation in a terminal state (Completed or
 * Faulted).
 *
 */
class NodeTransitionResult {
  /**
   * Create a NodeTransitionResult.
   * @member {number} [errorCode] If OperationState is Completed, this is 0.
   * If OperationState is Faulted, this is an error code indicating the reason.
   * @member {object} [nodeResult]
   * @member {string} [nodeResult.nodeName]
   * @member {string} [nodeResult.nodeInstanceId] The node instance id.
   */
  constructor() {
  }

  /**
   * Defines the metadata of NodeTransitionResult
   *
   * @returns {object} metadata of NodeTransitionResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'NodeTransitionResult',
      type: {
        name: 'Composite',
        className: 'NodeTransitionResult',
        modelProperties: {
          errorCode: {
            required: false,
            serializedName: 'ErrorCode',
            type: {
              name: 'Number'
            }
          },
          nodeResult: {
            required: false,
            serializedName: 'NodeResult',
            type: {
              name: 'Composite',
              className: 'NodeResult'
            }
          }
        }
      }
    };
  }
}

module.exports = NodeTransitionResult;