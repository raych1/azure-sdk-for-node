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
 * Initializes a new instance of the StorageAccountCheckNameAvailabilityParameters class.
 * @constructor
 * The parameters used to check the availabity of the storage account name.
 *
 * @member {string} name
 *
 */
export interface StorageAccountCheckNameAvailabilityParameters {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameAvailabilityResult class.
 * @constructor
 * The CheckNameAvailability operation response.
 *
 * @member {boolean} [nameAvailable] Gets a boolean value that indicates
 * whether the name is available for you to use. If true, the name is
 * available. If false, the name has already been taken or is invalid and
 * cannot be used.
 *
 * @member {string} [reason] Gets the reason that a storage account name could
 * not be used. The Reason element is only returned if NameAvailable is false.
 * Possible values include: 'AccountNameInvalid', 'AlreadyExists'
 *
 * @member {string} [message] Gets an error message explaining the Reason value
 * in more detail.
 *
 */
export interface CheckNameAvailabilityResult {
  readonly nameAvailable?: boolean;
  readonly reason?: string;
  readonly message?: string;
}

/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * The SKU of the storage account.
 *
 * @member {string} name Gets or sets the sku name. Required for account
 * creation; optional for update. Note that in older versions, sku name was
 * called accountType. Possible values include: 'Standard_LRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
 *
 * @member {string} [tier] Gets the sku tier. This is based on the SKU name.
 * Possible values include: 'Standard', 'Premium'
 *
 */
export interface Sku {
  name: string;
  readonly tier?: string;
}

/**
 * @class
 * Initializes a new instance of the CustomDomain class.
 * @constructor
 * The custom domain assigned to this storage account. This can be set via
 * Update.
 *
 * @member {string} name Gets or sets the custom domain name assigned to the
 * storage account. Name is the CNAME source.
 *
 * @member {boolean} [useSubDomain] Indicates whether indirect CName validation
 * is enabled. Default value is false. This should only be set on updates.
 *
 */
export interface CustomDomain {
  name: string;
  useSubDomain?: boolean;
}

/**
 * @class
 * Initializes a new instance of the EncryptionService class.
 * @constructor
 * A service that allows server-side encryption to be used.
 *
 * @member {boolean} [enabled] A boolean indicating whether or not the service
 * encrypts the data as it is stored.
 *
 * @member {date} [lastEnabledTime] Gets a rough estimate of the date/time when
 * the encryption was last enabled by the user. Only returned when encryption
 * is enabled. There might be some unencrypted blobs which were written after
 * this time, as it is just a rough estimate.
 *
 */
export interface EncryptionService {
  enabled?: boolean;
  readonly lastEnabledTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the EncryptionServices class.
 * @constructor
 * A list of services that support encryption.
 *
 * @member {object} [blob] The encryption function of the blob storage service.
 *
 * @member {boolean} [blob.enabled] A boolean indicating whether or not the
 * service encrypts the data as it is stored.
 *
 * @member {date} [blob.lastEnabledTime] Gets a rough estimate of the date/time
 * when the encryption was last enabled by the user. Only returned when
 * encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [file] The encryption function of the file storage service.
 *
 * @member {boolean} [file.enabled] A boolean indicating whether or not the
 * service encrypts the data as it is stored.
 *
 * @member {date} [file.lastEnabledTime] Gets a rough estimate of the date/time
 * when the encryption was last enabled by the user. Only returned when
 * encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [table] The encryption function of the table storage
 * service.
 *
 * @member {boolean} [table.enabled] A boolean indicating whether or not the
 * service encrypts the data as it is stored.
 *
 * @member {date} [table.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [queue] The encryption function of the queue storage
 * service.
 *
 * @member {boolean} [queue.enabled] A boolean indicating whether or not the
 * service encrypts the data as it is stored.
 *
 * @member {date} [queue.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 */
export interface EncryptionServices {
  blob?: EncryptionService;
  file?: EncryptionService;
  readonly table?: EncryptionService;
  readonly queue?: EncryptionService;
}

/**
 * @class
 * Initializes a new instance of the Encryption class.
 * @constructor
 * The encryption settings on the storage account.
 *
 * @member {object} [services] List of services which support encryption.
 *
 * @member {object} [services.blob] The encryption function of the blob storage
 * service.
 *
 * @member {boolean} [services.blob.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.blob.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.file] The encryption function of the file storage
 * service.
 *
 * @member {boolean} [services.file.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.file.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.table] The encryption function of the table
 * storage service.
 *
 * @member {boolean} [services.table.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.table.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 * @member {object} [services.queue] The encryption function of the queue
 * storage service.
 *
 * @member {boolean} [services.queue.enabled] A boolean indicating whether or
 * not the service encrypts the data as it is stored.
 *
 * @member {date} [services.queue.lastEnabledTime] Gets a rough estimate of the
 * date/time when the encryption was last enabled by the user. Only returned
 * when encryption is enabled. There might be some unencrypted blobs which were
 * written after this time, as it is just a rough estimate.
 *
 */
export interface Encryption {
  services?: EncryptionServices;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountCreateParameters class.
 * @constructor
 * The parameters used when creating a storage account.
 *
 * @member {object} sku Required. Gets or sets the sku name.
 *
 * @member {string} [sku.name] Gets or sets the sku name. Required for account
 * creation; optional for update. Note that in older versions, sku name was
 * called accountType. Possible values include: 'Standard_LRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
 *
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name. Possible values include: 'Standard', 'Premium'
 *
 * @member {string} kind Required. Indicates the type of storage account.
 * Possible values include: 'Storage', 'BlobStorage'
 *
 * @member {string} location Required. Gets or sets the location of the
 * resource. This will be one of the supported and registered Azure Geo Regions
 * (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource
 * cannot be changed once it is created, but if an identical geo region is
 * specified on update, the request will succeed.
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used for viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key with a length no greater than 128
 * characters and a value with a length no greater than 256 characters.
 *
 * @member {object} [customDomain] User domain assigned to the storage account.
 * Name is the CNAME source. Only one custom domain is supported per storage
 * account at this time. To clear the existing custom domain, use an empty
 * string for the custom domain name property.
 *
 * @member {string} [customDomain.name] Gets or sets the custom domain name
 * assigned to the storage account. Name is the CNAME source.
 *
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be set
 * on updates.
 *
 * @member {object} [encryption] Provides the encryption settings on the
 * account. If left unspecified the account encryption settings will remain the
 * same. The default setting is unencrypted.
 *
 * @member {object} [encryption.services] List of services which support
 * encryption.
 *
 * @member {object} [encryption.services.blob] The encryption function of the
 * blob storage service.
 *
 * @member {boolean} [encryption.services.blob.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.blob.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.file] The encryption function of the
 * file storage service.
 *
 * @member {boolean} [encryption.services.file.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.file.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.table] The encryption function of the
 * table storage service.
 *
 * @member {boolean} [encryption.services.table.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.table.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.queue] The encryption function of the
 * queue storage service.
 *
 * @member {boolean} [encryption.services.queue.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.queue.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {string} [accessTier] Required for storage accounts where kind =
 * BlobStorage. The access tier used for billing. Possible values include:
 * 'Hot', 'Cool'
 *
 */
export interface StorageAccountCreateParameters {
  sku: Sku;
  kind: string;
  location: string;
  tags?: { [propertyName: string]: string };
  customDomain?: CustomDomain;
  encryption?: Encryption;
  accessTier?: string;
}

/**
 * @class
 * Initializes a new instance of the Endpoints class.
 * @constructor
 * The URIs that are used to perform a retrieval of a public blob, queue, or
 * table object.
 *
 * @member {string} [blob] Gets the blob endpoint.
 *
 * @member {string} [queue] Gets the queue endpoint.
 *
 * @member {string} [table] Gets the table endpoint.
 *
 * @member {string} [file] Gets the file endpoint.
 *
 */
export interface Endpoints {
  readonly blob?: string;
  readonly queue?: string;
  readonly table?: string;
  readonly file?: string;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Describes a storage resource.
 *
 * @member {string} [id] Resource Id
 *
 * @member {string} [name] Resource name
 *
 * @member {string} [type] Resource type
 *
 * @member {string} [location] Resource location
 *
 * @member {object} [tags] Tags assigned to a resource; can be used for viewing
 * and grouping a resource (across resource groups).
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
 * Initializes a new instance of the StorageAccount class.
 * @constructor
 * The storage account.
 *
 * @member {object} [sku] Gets the SKU.
 *
 * @member {string} [sku.name] Gets or sets the sku name. Required for account
 * creation; optional for update. Note that in older versions, sku name was
 * called accountType. Possible values include: 'Standard_LRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
 *
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name. Possible values include: 'Standard', 'Premium'
 *
 * @member {string} [kind] Gets the Kind. Possible values include: 'Storage',
 * 'BlobStorage'
 *
 * @member {string} [provisioningState] Gets the status of the storage account
 * at the time the operation was called. Possible values include: 'Creating',
 * 'ResolvingDNS', 'Succeeded'
 *
 * @member {object} [primaryEndpoints] Gets the URLs that are used to perform a
 * retrieval of a public blob, queue, or table object. Note that Standard_ZRS
 * and Premium_LRS accounts only return the blob endpoint.
 *
 * @member {string} [primaryEndpoints.blob] Gets the blob endpoint.
 *
 * @member {string} [primaryEndpoints.queue] Gets the queue endpoint.
 *
 * @member {string} [primaryEndpoints.table] Gets the table endpoint.
 *
 * @member {string} [primaryEndpoints.file] Gets the file endpoint.
 *
 * @member {string} [primaryLocation] Gets the location of the primary data
 * center for the storage account.
 *
 * @member {string} [statusOfPrimary] Gets the status indicating whether the
 * primary location of the storage account is available or unavailable.
 * Possible values include: 'available', 'unavailable'
 *
 * @member {date} [lastGeoFailoverTime] Gets the timestamp of the most recent
 * instance of a failover to the secondary location. Only the most recent
 * timestamp is retained. This element is not returned if there has never been
 * a failover instance. Only available if the accountType is Standard_GRS or
 * Standard_RAGRS.
 *
 * @member {string} [secondaryLocation] Gets the location of the geo-replicated
 * secondary for the storage account. Only available if the accountType is
 * Standard_GRS or Standard_RAGRS.
 *
 * @member {string} [statusOfSecondary] Gets the status indicating whether the
 * secondary location of the storage account is available or unavailable. Only
 * available if the SKU name is Standard_GRS or Standard_RAGRS. Possible values
 * include: 'available', 'unavailable'
 *
 * @member {date} [creationTime] Gets the creation date and time of the storage
 * account in UTC.
 *
 * @member {object} [customDomain] Gets the custom domain the user assigned to
 * this storage account.
 *
 * @member {string} [customDomain.name] Gets or sets the custom domain name
 * assigned to the storage account. Name is the CNAME source.
 *
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be set
 * on updates.
 *
 * @member {object} [secondaryEndpoints] Gets the URLs that are used to perform
 * a retrieval of a public blob, queue, or table object from the secondary
 * location of the storage account. Only available if the SKU name is
 * Standard_RAGRS.
 *
 * @member {string} [secondaryEndpoints.blob] Gets the blob endpoint.
 *
 * @member {string} [secondaryEndpoints.queue] Gets the queue endpoint.
 *
 * @member {string} [secondaryEndpoints.table] Gets the table endpoint.
 *
 * @member {string} [secondaryEndpoints.file] Gets the file endpoint.
 *
 * @member {object} [encryption] Gets the encryption settings on the account.
 * If unspecified, the account is unencrypted.
 *
 * @member {object} [encryption.services] List of services which support
 * encryption.
 *
 * @member {object} [encryption.services.blob] The encryption function of the
 * blob storage service.
 *
 * @member {boolean} [encryption.services.blob.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.blob.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.file] The encryption function of the
 * file storage service.
 *
 * @member {boolean} [encryption.services.file.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.file.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.table] The encryption function of the
 * table storage service.
 *
 * @member {boolean} [encryption.services.table.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.table.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.queue] The encryption function of the
 * queue storage service.
 *
 * @member {boolean} [encryption.services.queue.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.queue.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {string} [accessTier] Required for storage accounts where kind =
 * BlobStorage. The access tier used for billing. Possible values include:
 * 'Hot', 'Cool'
 *
 */
export interface StorageAccount extends Resource {
  readonly sku?: Sku;
  readonly kind?: string;
  readonly provisioningState?: string;
  readonly primaryEndpoints?: Endpoints;
  readonly primaryLocation?: string;
  readonly statusOfPrimary?: string;
  readonly lastGeoFailoverTime?: Date;
  readonly secondaryLocation?: string;
  readonly statusOfSecondary?: string;
  readonly creationTime?: Date;
  readonly customDomain?: CustomDomain;
  readonly secondaryEndpoints?: Endpoints;
  readonly encryption?: Encryption;
  readonly accessTier?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountKey class.
 * @constructor
 * An access key for the storage account.
 *
 * @member {string} [keyName] Name of the key.
 *
 * @member {string} [value] Base 64-encoded value of the key.
 *
 * @member {string} [permissions] Permissions for the key -- read-only or full
 * permissions. Possible values include: 'Read', 'Full'
 *
 */
export interface StorageAccountKey {
  readonly keyName?: string;
  readonly value?: string;
  readonly permissions?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountListResult class.
 * @constructor
 * The response from the List Storage Accounts operation.
 *
 * @member {array} [value] Gets the list of storage accounts and their
 * properties.
 *
 */
export interface StorageAccountListResult {
  readonly value?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the StorageAccountListKeysResult class.
 * @constructor
 * The response from the ListKeys operation.
 *
 * @member {array} [keys] Gets the list of storage account keys and their
 * properties for the specified storage account.
 *
 */
export interface StorageAccountListKeysResult {
  readonly keys?: StorageAccountKey[];
}

/**
 * @class
 * Initializes a new instance of the StorageAccountRegenerateKeyParameters class.
 * @constructor
 * The parameters used to regenerate the storage account key.
 *
 * @member {string} keyName
 *
 */
export interface StorageAccountRegenerateKeyParameters {
  keyName: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountUpdateParameters class.
 * @constructor
 * The parameters that can be provided when updating the storage account
 * properties.
 *
 * @member {object} [sku] Gets or sets the SKU name. Note that the SKU name
 * cannot be updated to Standard_ZRS or Premium_LRS, nor can accounts of those
 * sku names be updated to any other value.
 *
 * @member {string} [sku.name] Gets or sets the sku name. Required for account
 * creation; optional for update. Note that in older versions, sku name was
 * called accountType. Possible values include: 'Standard_LRS', 'Standard_GRS',
 * 'Standard_RAGRS', 'Standard_ZRS', 'Premium_LRS'
 *
 * @member {string} [sku.tier] Gets the sku tier. This is based on the SKU
 * name. Possible values include: 'Standard', 'Premium'
 *
 * @member {object} [tags] Gets or sets a list of key value pairs that describe
 * the resource. These tags can be used in viewing and grouping this resource
 * (across resource groups). A maximum of 15 tags can be provided for a
 * resource. Each tag must have a key no greater in length than 128 characters
 * and a value no greater in length than 256 characters.
 *
 * @member {object} [customDomain] Custom domain assigned to the storage
 * account by the user. Name is the CNAME source. Only one custom domain is
 * supported per storage account at this time. To clear the existing custom
 * domain, use an empty string for the custom domain name property.
 *
 * @member {string} [customDomain.name] Gets or sets the custom domain name
 * assigned to the storage account. Name is the CNAME source.
 *
 * @member {boolean} [customDomain.useSubDomain] Indicates whether indirect
 * CName validation is enabled. Default value is false. This should only be set
 * on updates.
 *
 * @member {object} [encryption] Provides the encryption settings on the
 * account. The default setting is unencrypted.
 *
 * @member {object} [encryption.services] List of services which support
 * encryption.
 *
 * @member {object} [encryption.services.blob] The encryption function of the
 * blob storage service.
 *
 * @member {boolean} [encryption.services.blob.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.blob.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.file] The encryption function of the
 * file storage service.
 *
 * @member {boolean} [encryption.services.file.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.file.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.table] The encryption function of the
 * table storage service.
 *
 * @member {boolean} [encryption.services.table.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.table.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {object} [encryption.services.queue] The encryption function of the
 * queue storage service.
 *
 * @member {boolean} [encryption.services.queue.enabled] A boolean indicating
 * whether or not the service encrypts the data as it is stored.
 *
 * @member {date} [encryption.services.queue.lastEnabledTime] Gets a rough
 * estimate of the date/time when the encryption was last enabled by the user.
 * Only returned when encryption is enabled. There might be some unencrypted
 * blobs which were written after this time, as it is just a rough estimate.
 *
 * @member {string} [accessTier] Required for storage accounts where kind =
 * BlobStorage. The access tier used for billing. Possible values include:
 * 'Hot', 'Cool'
 *
 */
export interface StorageAccountUpdateParameters {
  sku?: Sku;
  tags?: { [propertyName: string]: string };
  customDomain?: CustomDomain;
  encryption?: Encryption;
  accessTier?: string;
}

/**
 * @class
 * Initializes a new instance of the UsageName class.
 * @constructor
 * The usage names that can be used; currently limited to StorageAccount.
 *
 * @member {string} [value] Gets a string describing the resource name.
 *
 * @member {string} [localizedValue] Gets a localized string describing the
 * resource name.
 *
 */
export interface UsageName {
  readonly value?: string;
  readonly localizedValue?: string;
}

/**
 * @class
 * Initializes a new instance of the Usage class.
 * @constructor
 * Describes Storage Resource Usage.
 *
 * @member {string} [unit] Gets the unit of measurement. Possible values
 * include: 'Count', 'Bytes', 'Seconds', 'Percent', 'CountsPerSecond',
 * 'BytesPerSecond'
 *
 * @member {number} [currentValue] Gets the current count of the allocated
 * resources in the subscription.
 *
 * @member {number} [limit] Gets the maximum count of the resources that can be
 * allocated in the subscription.
 *
 * @member {object} [name] Gets the name of the type of usage.
 *
 * @member {string} [name.value] Gets a string describing the resource name.
 *
 * @member {string} [name.localizedValue] Gets a localized string describing
 * the resource name.
 *
 */
export interface Usage {
  readonly unit?: string;
  readonly currentValue?: number;
  readonly limit?: number;
  readonly name?: UsageName;
}

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The response from the List Usages operation.
 *
 * @member {array} [value] Gets or sets the list of Storage Resource Usages.
 *
 */
export interface UsageListResult {
  value?: Usage[];
}

/**
 * @class
 * Initializes a new instance of the AccountSasParameters class.
 * @constructor
 * The parameters to list SAS credentials of a storage account.
 *
 * @member {string} services The signed services accessible with the account
 * SAS. Possible values include: Blob (b), Queue (q), Table (t), File (f).
 * Possible values include: 'b', 'q', 't', 'f'
 *
 * @member {string} resourceTypes The signed resource types that are accessible
 * with the account SAS. Service (s): Access to service-level APIs; Container
 * (c): Access to container-level APIs; Object (o): Access to object-level APIs
 * for blobs, queue messages, table entities, and files. Possible values
 * include: 's', 'c', 'o'
 *
 * @member {string} permissions The signed permissions for the account SAS.
 * Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a),
 * Create (c), Update (u) and Process (p). Possible values include: 'r', 'd',
 * 'w', 'l', 'a', 'c', 'u', 'p'
 *
 * @member {string} [iPAddressOrRange] An IP address or a range of IP addresses
 * from which to accept requests.
 *
 * @member {string} [protocols] The protocol permitted for a request made with
 * the account SAS. Possible values include: 'https,http', 'https'
 *
 * @member {date} [sharedAccessStartTime] The time at which the SAS becomes
 * valid.
 *
 * @member {date} sharedAccessExpiryTime The time at which the shared access
 * signature becomes invalid.
 *
 * @member {string} [keyToSign] The key to sign the account SAS token with.
 *
 */
export interface AccountSasParameters {
  services: string;
  resourceTypes: string;
  permissions: string;
  iPAddressOrRange?: string;
  protocols?: string;
  sharedAccessStartTime?: Date;
  sharedAccessExpiryTime: Date;
  keyToSign?: string;
}

/**
 * @class
 * Initializes a new instance of the ListAccountSasResponse class.
 * @constructor
 * The List SAS credentials operation response.
 *
 * @member {string} [accountSasToken] List SAS credentials of storage account.
 *
 */
export interface ListAccountSasResponse {
  readonly accountSasToken?: string;
}

/**
 * @class
 * Initializes a new instance of the ServiceSasParameters class.
 * @constructor
 * The parameters to list service SAS credentials of a speicific resource.
 *
 * @member {string} canonicalizedResource The canonical path to the signed
 * resource.
 *
 * @member {string} resource The signed services accessible with the service
 * SAS. Possible values include: Blob (b), Container (c), File (f), Share (s).
 * Possible values include: 'b', 'c', 'f', 's'
 *
 * @member {string} [permissions] The signed permissions for the service SAS.
 * Possible values include: Read (r), Write (w), Delete (d), List (l), Add (a),
 * Create (c), Update (u) and Process (p). Possible values include: 'r', 'd',
 * 'w', 'l', 'a', 'c', 'u', 'p'
 *
 * @member {string} [iPAddressOrRange] An IP address or a range of IP addresses
 * from which to accept requests.
 *
 * @member {string} [protocols] The protocol permitted for a request made with
 * the account SAS. Possible values include: 'https,http', 'https'
 *
 * @member {date} [sharedAccessStartTime] The time at which the SAS becomes
 * valid.
 *
 * @member {date} [sharedAccessExpiryTime] The time at which the shared access
 * signature becomes invalid.
 *
 * @member {string} [identifier] A unique value up to 64 characters in length
 * that correlates to an access policy specified for the container, queue, or
 * table.
 *
 * @member {string} [partitionKeyStart] The start of partition key.
 *
 * @member {string} [partitionKeyEnd] The end of partition key.
 *
 * @member {string} [rowKeyStart] The start of row key.
 *
 * @member {string} [rowKeyEnd] The end of row key.
 *
 * @member {string} [keyToSign] The key to sign the account SAS token with.
 *
 * @member {string} [cacheControl] The response header override for cache
 * control.
 *
 * @member {string} [contentDisposition] The response header override for
 * content disposition.
 *
 * @member {string} [contentEncoding] The response header override for content
 * encoding.
 *
 * @member {string} [contentLanguage] The response header override for content
 * language.
 *
 * @member {string} [contentType] The response header override for content
 * type.
 *
 */
export interface ServiceSasParameters {
  canonicalizedResource: string;
  resource: string;
  permissions?: string;
  iPAddressOrRange?: string;
  protocols?: string;
  sharedAccessStartTime?: Date;
  sharedAccessExpiryTime?: Date;
  identifier?: string;
  partitionKeyStart?: string;
  partitionKeyEnd?: string;
  rowKeyStart?: string;
  rowKeyEnd?: string;
  keyToSign?: string;
  cacheControl?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentType?: string;
}

/**
 * @class
 * Initializes a new instance of the ListServiceSasResponse class.
 * @constructor
 * The List service SAS credentials operation response.
 *
 * @member {string} [serviceSasToken] List service SAS credentials of speicific
 * resource.
 *
 */
export interface ListServiceSasResponse {
  readonly serviceSasToken?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountListResult class.
 * @constructor
 * The response from the List Storage Accounts operation.
 *
 * @member {array} [value] Gets the list of storage accounts and their
 * properties.
 *
 */
export interface StorageAccountListResult {
  readonly value?: StorageAccount[];
}

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The response from the List Usages operation.
 *
 * @member {array} [value] Gets or sets the list of Storage Resource Usages.
 *
 */
export interface UsageListResult {
  value?: Usage[];
}


/**
 * @class
 * Initializes a new instance of the StorageAccountListResult class.
 * @constructor
 * The response from the List Storage Accounts operation.
 *
 */
export interface StorageAccountListResult extends Array<StorageAccount> {
}

/**
 * @class
 * Initializes a new instance of the UsageListResult class.
 * @constructor
 * The response from the List Usages operation.
 *
 */
export interface UsageListResult extends Array<Usage> {
}
