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
 * VpnClientConnectionHealth properties
 *
 */
class VpnClientConnectionHealth {
  /**
   * Create a VpnClientConnectionHealth.
   * @member {number} [totalIngressBytesTransferred] Total of the Ingress Bytes
   * Transferred in this P2S Vpn connection
   * @member {number} [totalEgressBytesTransferred] Total of the Egress Bytes
   * Transferred in this connection
   * @member {number} [vpnClientConnectionsCount] The total of p2s vpn clients
   * connected at this time to this P2SVpnGateway.
   * @member {array} [allocatedIpAddresses] List of allocated ip addresses to
   * the connected p2s vpn clients.
   */
  constructor() {
  }

  /**
   * Defines the metadata of VpnClientConnectionHealth
   *
   * @returns {object} metadata of VpnClientConnectionHealth
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VpnClientConnectionHealth',
      type: {
        name: 'Composite',
        className: 'VpnClientConnectionHealth',
        modelProperties: {
          totalIngressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'totalIngressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          totalEgressBytesTransferred: {
            required: false,
            readOnly: true,
            serializedName: 'totalEgressBytesTransferred',
            type: {
              name: 'Number'
            }
          },
          vpnClientConnectionsCount: {
            required: false,
            serializedName: 'vpnClientConnectionsCount',
            type: {
              name: 'Number'
            }
          },
          allocatedIpAddresses: {
            required: false,
            serializedName: 'allocatedIpAddresses',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = VpnClientConnectionHealth;