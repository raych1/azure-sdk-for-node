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
 * Identity properties of the factory resource.
 *
 */
class FactoryIdentity {
  /**
   * Create a FactoryIdentity.
   * @member {uuid} [principalId] The principal id of the identity.
   * @member {uuid} [tenantId] The client tenant id of the identity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of FactoryIdentity
   *
   * @returns {object} metadata of FactoryIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'FactoryIdentity',
      type: {
        name: 'Composite',
        className: 'FactoryIdentity',
        modelProperties: {
          type: {
            required: true,
            isConstant: true,
            serializedName: 'type',
            defaultValue: 'SystemAssigned',
            type: {
              name: 'String'
            }
          },
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = FactoryIdentity;