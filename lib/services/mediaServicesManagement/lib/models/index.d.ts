/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ApiEndpoint class.
 * @constructor
 * The properties for a Media Services REST API endpoint.
 *
 * @member {string} [endpoint] The Media Services REST endpoint.
 *
 * @member {string} [majorVersion] The version of Media Services REST API.
 *
 */
export interface ApiEndpoint {
  endpoint?: string;
  majorVersion?: string;
}

/**
 * @class
 * Initializes a new instance of the ApiError class.
 * @constructor
 * The error returned from a failed Media Services REST API call.
 *
 * @member {string} [code] Error code.
 *
 * @member {string} [message] Error message.
 *
 */
export interface ApiError {
  code?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityInput class.
 * @constructor
 * The request body for CheckNameAvailability API.
 *
 * @member {string} name The name of the resource. A name must be globally
 * unique.
 *
 */
export interface CheckNameAvailabilityInput {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityOutput class.
 * @constructor
 * The response body for CheckNameAvailability API.
 *
 * @member {boolean} [nameAvailable] Specifies if the name is available.
 *
 * @member {string} [reason] Specifies the reason if the name is not available.
 * Possible values include: 'None', 'Invalid', 'AlreadyExists'
 *
 * @member {string} [message] Specifies the detailed reason if the name is not
 * available.
 *
 */
export interface CheckNameAvailabilityOutput {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The properties of a storage account associated with this resource.
 *
 * @member {string} id The id of the storage account resource. Media Services
 * relies on tables and queues as well as blobs, so the primary storage account
 * must be a Standard Storage account (either Microsoft.ClassicStorage or
 * Microsoft.Storage). Blob only storage accounts can be added as secondary
 * storage accounts (isPrimary false).
 *
 * @member {boolean} isPrimary Is this storage account resource the primary
 * storage account for the Media Service resource. Blob only storage must set
 * this to false.
 *
 */
export interface StorageAccount {
  id: string;
  isPrimary: boolean;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Azure Resource Manager resource.
 *
 * @member {string} [id] The id of the resource.
 *
 * @member {string} [name] The name of the resource.
 *
 * @member {string} [type] The type of the resource
 *
 * @member {string} [location] The geographic location of the resource. This
 * must be one of the supported and registered Azure Geo Regions (for example,
 * West US, East US, Southeast Asia, and so forth).
 *
 * @member {object} [tags] Tags to help categorize the resource in the Azure
 * portal.
 *
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the MediaService class.
 * @constructor
 * The properties of a Media Service resource.
 *
 * @member {array} [apiEndpoints] Read-only property that lists the Media
 * Services REST API endpoints for this resource. If supplied on a PUT or
 * PATCH, the value will be ignored.
 *
 * @member {array} [storageAccounts] The storage accounts for this resource.
 *
 */
export interface MediaService extends Resource {
  readonly apiEndpoints?: ApiEndpoint[];
  storageAccounts?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the MediaServiceCollection class.
 * @constructor
 * The collection of Media Service resources.
 *
 * @member {array} [value]
 *
 */
export interface MediaServiceCollection {
  value?: MediaService[];
}

/**
 * @class
 * Initializes a new instance of the RegenerateKeyInput class.
 * @constructor
 * The request body for a RegenerateKey API.
 *
 * @member {string} keyType The keyType indicating which key you want to
 * regenerate, Primary or Secondary. Possible values include: 'Primary',
 * 'Secondary'
 *
 */
export interface RegenerateKeyInput {
  keyType: string;
}

/**
 * @class
 * Initializes a new instance of the RegenerateKeyOutput class.
 * @constructor
 * The response body for a RegenerateKey API.
 *
 * @member {string} [key] The new value of either the primary or secondary key.
 *
 */
export interface RegenerateKeyOutput {
  key?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceKeys class.
 * @constructor
 * The response body for a ListKeys API.
 *
 * @member {string} [primaryAuthEndpoint] The primary authorization endpoint.
 *
 * @member {string} [secondaryAuthEndpoint] The secondary authorization
 * endpoint.
 *
 * @member {string} [primaryKey] The primary key for the Media Service
 * resource.
 *
 * @member {string} [secondaryKey] The secondary key for the Media Service
 * resource.
 *
 * @member {string} [scope] The authorization scope.
 *
 */
export interface ServiceKeys {
  primaryAuthEndpoint?: string;
  secondaryAuthEndpoint?: string;
  primaryKey?: string;
  secondaryKey?: string;
  scope?: string;
}

/**
 * @class
 * Initializes a new instance of the SyncStorageKeysInput class.
 * @constructor
 * The request  body for a SyncStorageKeys API.
 *
 * @member {string} id The id of the storage account resource.
 *
 */
export interface SyncStorageKeysInput {
  id: string;
}

/**
 * @class
 * Initializes a new instance of the MediaServiceCollection class.
 * @constructor
 * The collection of Media Service resources.
 *
 * @member {array} [value]
 *
 */
export interface MediaServiceCollection {
  value?: MediaService[];
}


/**
 * @class
 * Initializes a new instance of the MediaServiceCollection class.
 * @constructor
 * The collection of Media Service resources.
 *
 */
export interface MediaServiceCollection extends Array<MediaService> {
}
