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
 * Machine Learning compute object.
 *
 */
class Compute {
  /**
   * Create a Compute.
   * @member {string} [computeLocation] Location for the underlying compute
   * @member {string} [provisioningState] The provision state of the cluster.
   * Valid values are Unknown, Updating, Provisioning, Succeeded, and Failed.
   * Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting',
   * 'Succeeded', 'Failed', 'Canceled'
   * @member {string} [description] The description of the Machine Learning
   * compute.
   * @member {date} [createdOn] The date and time when the compute was created.
   * @member {date} [modifiedOn] The date and time when the compute was last
   * modified.
   * @member {string} [resourceId] ARM resource id of the compute
   * @member {array} [provisioningErrors] Errors during provisioning
   * @member {string} computeType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of Compute
   *
   * @returns {object} metadata of Compute
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Compute',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'computeType',
          clientName: 'computeType'
        },
        uberParent: 'Compute',
        className: 'Compute',
        modelProperties: {
          computeLocation: {
            required: false,
            serializedName: 'computeLocation',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningState',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          createdOn: {
            required: false,
            readOnly: true,
            serializedName: 'createdOn',
            type: {
              name: 'DateTime'
            }
          },
          modifiedOn: {
            required: false,
            readOnly: true,
            serializedName: 'modifiedOn',
            type: {
              name: 'DateTime'
            }
          },
          resourceId: {
            required: false,
            serializedName: 'resourceId',
            type: {
              name: 'String'
            }
          },
          provisioningErrors: {
            required: false,
            readOnly: true,
            serializedName: 'provisioningErrors',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'MachineLearningServiceErrorElementType',
                  type: {
                    name: 'Composite',
                    className: 'MachineLearningServiceError'
                  }
              }
            }
          },
          computeType: {
            required: true,
            serializedName: 'computeType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Compute;
