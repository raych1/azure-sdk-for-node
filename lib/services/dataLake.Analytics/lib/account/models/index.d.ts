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
 * Initializes a new instance of the SubResource class.
 * @constructor
 * The Sub Resource model definition.
 *
 * @member {string} [id] Resource Id
 *
 * @member {string} name Resource name
 *
 * @member {string} [type] Resource type
 *
 */
export interface SubResource {
  readonly id?: string;
  name: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageAccountInfo class.
 * @constructor
 * Azure Storage account information.
 *
 * @member {string} accessKey the access key associated with this Azure Storage
 * account that will be used to connect to it.
 *
 * @member {string} [suffix] the optional suffix for the storage account.
 *
 */
export interface StorageAccountInfo extends SubResource {
  accessKey: string;
  suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the StorageContainer class.
 * @constructor
 * Azure Storage blob container information.
 *
 * @member {string} [name] the name of the blob container.
 *
 * @member {string} [id] the unique identifier of the blob container.
 *
 * @member {string} [type] the type of the blob container.
 *
 * @member {date} [lastModifiedTime] the last modified time of the blob
 * container.
 *
 */
export interface StorageContainer {
  readonly name?: string;
  readonly id?: string;
  readonly type?: string;
  readonly lastModifiedTime?: Date;
}

/**
 * @class
 * Initializes a new instance of the ListStorageContainersResult class.
 * @constructor
 * The list of blob containers associated with the storage account attached to
 * the Data Lake Analytics account.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListStorageContainersResult {
  readonly value?: StorageContainer[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the SasTokenInfo class.
 * @constructor
 * SAS token information.
 *
 * @member {string} [accessToken] the access token for the associated Azure
 * Storage Container.
 *
 */
export interface SasTokenInfo {
  readonly accessToken?: string;
}

/**
 * @class
 * Initializes a new instance of the ListSasTokensResult class.
 * @constructor
 * The SAS response that contains the storage account, container and associated
 * SAS token for connection use.
 *
 * @member {array} [value]
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListSasTokensResult {
  readonly value?: SasTokenInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeStoreAccountInfo class.
 * @constructor
 * Data Lake Store account information.
 *
 * @member {string} [suffix] the optional suffix for the Data Lake Store
 * account.
 *
 */
export interface DataLakeStoreAccountInfo extends SubResource {
  suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListStorageAccountsResult class.
 * @constructor
 * Azure Storage Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListStorageAccountsResult {
  readonly value?: StorageAccountInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListDataLakeStoreResult class.
 * @constructor
 * Data Lake Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListDataLakeStoreResult {
  readonly value?: DataLakeStoreAccountInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the OptionalSubResource class.
 * @constructor
 * The Resource model definition for a nested resource with no required
 * properties.
 *
 * @member {string} [id] Resource Id
 *
 * @member {string} [name] Resource name
 *
 * @member {string} [type] Resource type
 *
 */
export interface OptionalSubResource {
  readonly id?: string;
  name?: string;
  readonly type?: string;
}

/**
 * @class
 * Initializes a new instance of the FirewallRule class.
 * @constructor
 * Data Lake Analytics firewall rule information
 *
 * @member {string} startIpAddress the start IP address for the firewall rule.
 * This can be either ipv4 or ipv6. Start and End should be in the same
 * protocol.
 *
 * @member {string} endIpAddress the end IP address for the firewall rule. This
 * can be either ipv4 or ipv6. Start and End should be in the same protocol.
 *
 */
export interface FirewallRule extends OptionalSubResource {
  startIpAddress: string;
  endIpAddress: string;
}

/**
 * @class
 * Initializes a new instance of the AddDataLakeStoreParameters class.
 * @constructor
 * Additional Data Lake Store parameters.
 *
 * @member {string} [suffix] the optional suffix for the Data Lake Store
 * account.
 *
 */
export interface AddDataLakeStoreParameters {
  suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the AddStorageAccountParameters class.
 * @constructor
 * Storage account parameters for a storage account being added to a Data Lake
 * Analytics account.
 *
 * @member {string} accessKey the access key associated with this Azure Storage
 * account that will be used to connect to it.
 *
 * @member {string} [suffix] the optional suffix for the storage account.
 *
 */
export interface AddStorageAccountParameters {
  accessKey: string;
  suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdateStorageAccountParameters class.
 * @constructor
 * Storage account parameters for a storage account being updated in a Data
 * Lake Analytics account.
 *
 * @member {string} [accessKey] the updated access key associated with this
 * Azure Storage account that will be used to connect to it.
 *
 * @member {string} [suffix] the optional suffix for the storage account.
 *
 */
export interface UpdateStorageAccountParameters {
  accessKey?: string;
  suffix?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountUpdateParameters class.
 * @constructor
 * The parameters that can be used to update an existing Data Lake Analytics
 * account.
 *
 * @member {object} [tags] Resource tags
 *
 * @member {number} [maxDegreeOfParallelism] the maximum supported degree of
 * parallelism for this account.
 *
 * @member {number} [queryStoreRetention] the number of days that job metadata
 * is retained.
 *
 * @member {number} [maxJobCount] the maximum supported jobs running under the
 * account at the same time.
 *
 * @member {string} [newTier] the commitment tier to use for next month.
 * Possible values include: 'Consumption', 'Commitment_100AUHours',
 * 'Commitment_500AUHours', 'Commitment_1000AUHours', 'Commitment_5000AUHours',
 * 'Commitment_10000AUHours', 'Commitment_50000AUHours',
 * 'Commitment_100000AUHours', 'Commitment_500000AUHours'
 *
 * @member {string} [firewallState] The current state of the IP address
 * firewall for this Data Lake Analytics account. Possible values include:
 * 'Enabled', 'Disabled'
 *
 * @member {string} [firewallAllowAzureIps] The current state of allowing or
 * disallowing IPs originating within Azure through the firewall. If the
 * firewall is disabled, this is not enforced. Possible values include:
 * 'Enabled', 'Disabled'
 *
 * @member {array} [firewallRules] The list of firewall rules associated with
 * this Data Lake Analytics account.
 *
 */
export interface DataLakeAnalyticsAccountUpdateParameters {
  tags?: { [propertyName: string]: string };
  maxDegreeOfParallelism?: number;
  queryStoreRetention?: number;
  maxJobCount?: number;
  newTier?: string;
  firewallState?: string;
  firewallAllowAzureIps?: string;
  firewallRules?: FirewallRule[];
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * The Resource model definition.
 *
 * @member {string} [id] Resource Id
 *
 * @member {string} [name] Resource name
 *
 * @member {string} [type] Resource type
 *
 * @member {string} location Resource location
 *
 * @member {object} [tags] Resource tags
 *
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccount class.
 * @constructor
 * A Data Lake Analytics account object, containing all information associated
 * with the named Data Lake Analytics account.
 *
 * @member {string} [provisioningState] the provisioning status of the Data
 * Lake Analytics account. Possible values include: 'Failed', 'Creating',
 * 'Running', 'Succeeded', 'Patching', 'Suspending', 'Resuming', 'Deleting',
 * 'Deleted'
 *
 * @member {string} [state] the state of the Data Lake Analytics account.
 * Possible values include: 'Active', 'Suspended'
 *
 * @member {string} defaultDataLakeStoreAccount the default data lake storage
 * account associated with this Data Lake Analytics account.
 *
 * @member {number} [maxDegreeOfParallelism] the maximum supported degree of
 * parallelism for this account. Default value: 30 .
 *
 * @member {number} [queryStoreRetention] the number of days that job metadata
 * is retained. Default value: 30 .
 *
 * @member {number} [maxJobCount] the maximum supported jobs running under the
 * account at the same time. Default value: 3 .
 *
 * @member {number} [systemMaxDegreeOfParallelism] the system defined maximum
 * supported degree of parallelism for this account, which restricts the
 * maximum value of parallelism the user can set for the account..
 *
 * @member {number} [systemMaxJobCount] the system defined maximum supported
 * jobs running under the account at the same time, which restricts the maximum
 * number of running jobs the user can set for the account.
 *
 * @member {array} dataLakeStoreAccounts the list of Data Lake storage accounts
 * associated with this account.
 *
 * @member {array} [storageAccounts] the list of Azure Blob storage accounts
 * associated with this account.
 *
 * @member {date} [creationTime] the account creation time.
 *
 * @member {date} [lastModifiedTime] the account last modified time.
 *
 * @member {string} [endpoint] the full CName endpoint for this account.
 *
 * @member {string} [newTier] the commitment tier for the next month. Possible
 * values include: 'Consumption', 'Commitment_100AUHours',
 * 'Commitment_500AUHours', 'Commitment_1000AUHours', 'Commitment_5000AUHours',
 * 'Commitment_10000AUHours', 'Commitment_50000AUHours',
 * 'Commitment_100000AUHours', 'Commitment_500000AUHours'
 *
 * @member {string} [currentTier] the commitment tier in use for the current
 * month. Possible values include: 'Consumption', 'Commitment_100AUHours',
 * 'Commitment_500AUHours', 'Commitment_1000AUHours', 'Commitment_5000AUHours',
 * 'Commitment_10000AUHours', 'Commitment_50000AUHours',
 * 'Commitment_100000AUHours', 'Commitment_500000AUHours'
 *
 * @member {string} [firewallState] The current state of the IP address
 * firewall for this Data Lake Analytics account. Possible values include:
 * 'Enabled', 'Disabled'
 *
 * @member {string} [firewallAllowAzureIps] The current state of allowing or
 * disallowing IPs originating within Azure through the firewall. If the
 * firewall is disabled, this is not enforced. Possible values include:
 * 'Enabled', 'Disabled'
 *
 * @member {array} [firewallRules] The list of firewall rules associated with
 * this Data Lake Analytics account.
 *
 */
export interface DataLakeAnalyticsAccount extends Resource {
  readonly provisioningState?: string;
  readonly state?: string;
  defaultDataLakeStoreAccount: string;
  maxDegreeOfParallelism?: number;
  queryStoreRetention?: number;
  maxJobCount?: number;
  readonly systemMaxDegreeOfParallelism?: number;
  readonly systemMaxJobCount?: number;
  dataLakeStoreAccounts: DataLakeStoreAccountInfo[];
  storageAccounts?: StorageAccountInfo[];
  readonly creationTime?: Date;
  readonly lastModifiedTime?: Date;
  readonly endpoint?: string;
  newTier?: string;
  readonly currentTier?: string;
  firewallState?: string;
  firewallAllowAzureIps?: string;
  firewallRules?: FirewallRule[];
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListResult class.
 * @constructor
 * DataLakeAnalytics Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListResult {
  readonly value?: DataLakeAnalyticsAccount[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsFirewallRuleListResult class.
 * @constructor
 * Data Lake Analytics firewall rule list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsFirewallRuleListResult {
  readonly value?: FirewallRule[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the UpdateFirewallRuleParameters class.
 * @constructor
 * Data Lake Analytics firewall rule update parameters
 *
 * @member {string} [startIpAddress] the start IP address for the firewall
 * rule. This can be either ipv4 or ipv6. Start and End should be in the same
 * protocol.
 *
 * @member {string} [endIpAddress] the end IP address for the firewall rule.
 * This can be either ipv4 or ipv6. Start and End should be in the same
 * protocol.
 *
 */
export interface UpdateFirewallRuleParameters {
  startIpAddress?: string;
  endIpAddress?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsFirewallRuleListResult class.
 * @constructor
 * Data Lake Analytics firewall rule list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsFirewallRuleListResult {
  readonly value?: FirewallRule[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ListStorageContainersResult class.
 * @constructor
 * The list of blob containers associated with the storage account attached to
 * the Data Lake Analytics account.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListStorageContainersResult {
  readonly value?: StorageContainer[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ListSasTokensResult class.
 * @constructor
 * The SAS response that contains the storage account, container and associated
 * SAS token for connection use.
 *
 * @member {array} [value]
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListSasTokensResult {
  readonly value?: SasTokenInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListStorageAccountsResult class.
 * @constructor
 * Azure Storage Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListStorageAccountsResult {
  readonly value?: StorageAccountInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListDataLakeStoreResult class.
 * @constructor
 * Data Lake Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListDataLakeStoreResult {
  readonly value?: DataLakeStoreAccountInfo[];
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListResult class.
 * @constructor
 * DataLakeAnalytics Account list information.
 *
 * @member {array} [value] the results of the list operation
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListResult {
  readonly value?: DataLakeAnalyticsAccount[];
  readonly nextLink?: string;
}


/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsFirewallRuleListResult class.
 * @constructor
 * Data Lake Analytics firewall rule list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsFirewallRuleListResult extends Array<FirewallRule> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ListStorageContainersResult class.
 * @constructor
 * The list of blob containers associated with the storage account attached to
 * the Data Lake Analytics account.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListStorageContainersResult extends Array<StorageContainer> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ListSasTokensResult class.
 * @constructor
 * The SAS response that contains the storage account, container and associated
 * SAS token for connection use.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface ListSasTokensResult extends Array<SasTokenInfo> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListStorageAccountsResult class.
 * @constructor
 * Azure Storage Account list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListStorageAccountsResult extends Array<StorageAccountInfo> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListDataLakeStoreResult class.
 * @constructor
 * Data Lake Account list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListDataLakeStoreResult extends Array<DataLakeStoreAccountInfo> {
  readonly nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DataLakeAnalyticsAccountListResult class.
 * @constructor
 * DataLakeAnalytics Account list information.
 *
 * @member {string} [nextLink] the link (url) to the next page of results.
 *
 */
export interface DataLakeAnalyticsAccountListResult extends Array<DataLakeAnalyticsAccount> {
  readonly nextLink?: string;
}
