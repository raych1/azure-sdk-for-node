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
 * Initializes a new instance of the FileOperationResult class.
 * @constructor
 * The result of the request or operation.
 *
 * @member {boolean} [operationResult] the result of the operation or request.
 *
 */
export interface FileOperationResult {
  readonly operationResult?: boolean;
}

/**
 * @class
 * Initializes a new instance of the AclStatus class.
 * @constructor
 * Data Lake Store file or directory Access Control List information.
 *
 * @member {array} [entries] the list of ACLSpec entries on a file or
 * directory.
 *
 * @member {string} [group] the group owner, an AAD Object ID.
 *
 * @member {string} [owner] the user owner, an AAD Object ID.
 *
 * @member {number} [permission] The octal representation of the unnamed user,
 * mask and other permissions.
 *
 * @member {boolean} [stickyBit] the indicator of whether the sticky bit is on
 * or off.
 *
 */
export interface AclStatus {
  entries?: string[];
  group?: string;
  owner?: string;
  permission?: number;
  readonly stickyBit?: boolean;
}

/**
 * @class
 * Initializes a new instance of the AclStatusResult class.
 * @constructor
 * Data Lake Store file or directory Access Control List information.
 *
 * @member {object} [aclStatus] the AclStatus object for a given file or
 * directory.
 *
 * @member {array} [aclStatus.entries] the list of ACLSpec entries on a file or
 * directory.
 *
 * @member {string} [aclStatus.group] the group owner, an AAD Object ID.
 *
 * @member {string} [aclStatus.owner] the user owner, an AAD Object ID.
 *
 * @member {number} [aclStatus.permission] The octal representation of the
 * unnamed user, mask and other permissions.
 *
 * @member {boolean} [aclStatus.stickyBit] the indicator of whether the sticky
 * bit is on or off.
 *
 */
export interface AclStatusResult {
  aclStatus?: AclStatus;
}

/**
 * @class
 * Initializes a new instance of the ContentSummary class.
 * @constructor
 * Data Lake Store content summary information
 *
 * @member {number} [directoryCount] the number of directories.
 *
 * @member {number} [fileCount] the number of files.
 *
 * @member {number} [length] the number of bytes used by the content.
 *
 * @member {number} [spaceConsumed] the disk space consumed by the content.
 *
 */
export interface ContentSummary {
  readonly directoryCount?: number;
  readonly fileCount?: number;
  readonly length?: number;
  readonly spaceConsumed?: number;
}

/**
 * @class
 * Initializes a new instance of the ContentSummaryResult class.
 * @constructor
 * Data Lake Store filesystem content summary information response.
 *
 * @member {object} [contentSummary] the content summary for the specified path
 *
 * @member {number} [contentSummary.directoryCount] the number of directories.
 *
 * @member {number} [contentSummary.fileCount] the number of files.
 *
 * @member {number} [contentSummary.length] the number of bytes used by the
 * content.
 *
 * @member {number} [contentSummary.spaceConsumed] the disk space consumed by
 * the content.
 *
 */
export interface ContentSummaryResult {
  readonly contentSummary?: ContentSummary;
}

/**
 * @class
 * Initializes a new instance of the FileStatusProperties class.
 * @constructor
 * Data Lake Store file or directory information.
 *
 * @member {number} [accessTime] the last access time as ticks since the epoch.
 *
 * @member {number} [blockSize] the block size for the file.
 *
 * @member {number} [childrenNum] the number of children in the directory.
 *
 * @member {number} [expirationTime] Gets the expiration time, if any, as ticks
 * since the epoch. If the value is 0 or DateTime.MaxValue there is no
 * expiration.
 *
 * @member {string} [group] the group owner.
 *
 * @member {number} [length] the number of bytes in a file.
 *
 * @member {number} [modificationTime] the modification time as ticks since the
 * epoch.
 *
 * @member {string} [owner] the user who is the owner.
 *
 * @member {string} [pathSuffix] the path suffix.
 *
 * @member {string} [permission] the permission represented as an string.
 *
 * @member {string} [type] the type of the path object. Possible values
 * include: 'FILE', 'DIRECTORY'
 *
 * @member {boolean} [aclBit] flag to indicate if extended acls are enabled
 *
 */
export interface FileStatusProperties {
  readonly accessTime?: number;
  readonly blockSize?: number;
  readonly childrenNum?: number;
  readonly expirationTime?: number;
  readonly group?: string;
  readonly length?: number;
  readonly modificationTime?: number;
  readonly owner?: string;
  readonly pathSuffix?: string;
  readonly permission?: string;
  readonly type?: string;
  readonly aclBit?: boolean;
}

/**
 * @class
 * Initializes a new instance of the FileStatuses class.
 * @constructor
 * Data Lake Store file status list information.
 *
 * @member {array} [fileStatus] the object containing the list of properties of
 * the files.
 *
 */
export interface FileStatuses {
  readonly fileStatus?: FileStatusProperties[];
}

/**
 * @class
 * Initializes a new instance of the FileStatusesResult class.
 * @constructor
 * Data Lake Store filesystem file status list information response.
 *
 * @member {object} [fileStatuses] the object representing the list of file
 * statuses.
 *
 * @member {array} [fileStatuses.fileStatus] the object containing the list of
 * properties of the files.
 *
 */
export interface FileStatusesResult {
  readonly fileStatuses?: FileStatuses;
}

/**
 * @class
 * Initializes a new instance of the FileStatusResult class.
 * @constructor
 * Data Lake Store filesystem file status information response.
 *
 * @member {object} [fileStatus] the file status object associated with the
 * specified path.
 *
 * @member {number} [fileStatus.accessTime] the last access time as ticks since
 * the epoch.
 *
 * @member {number} [fileStatus.blockSize] the block size for the file.
 *
 * @member {number} [fileStatus.childrenNum] the number of children in the
 * directory.
 *
 * @member {number} [fileStatus.expirationTime] Gets the expiration time, if
 * any, as ticks since the epoch. If the value is 0 or DateTime.MaxValue there
 * is no expiration.
 *
 * @member {string} [fileStatus.group] the group owner.
 *
 * @member {number} [fileStatus.length] the number of bytes in a file.
 *
 * @member {number} [fileStatus.modificationTime] the modification time as
 * ticks since the epoch.
 *
 * @member {string} [fileStatus.owner] the user who is the owner.
 *
 * @member {string} [fileStatus.pathSuffix] the path suffix.
 *
 * @member {string} [fileStatus.permission] the permission represented as an
 * string.
 *
 * @member {string} [fileStatus.type] the type of the path object. Possible
 * values include: 'FILE', 'DIRECTORY'
 *
 * @member {boolean} [fileStatus.aclBit] flag to indicate if extended acls are
 * enabled
 *
 */
export interface FileStatusResult {
  readonly fileStatus?: FileStatusProperties;
}

/**
 * @class
 * Initializes a new instance of the AdlsRemoteException class.
 * @constructor
 * Data Lake Store filesystem exception based on the WebHDFS definition for
 * RemoteExceptions. This is a WebHDFS 'catch all' exception
 *
 * @member {string} [javaClassName] the full class package name for the
 * exception thrown, such as 'java.lang.IllegalArgumentException'.
 *
 * @member {string} [message] the message associated with the exception that
 * was thrown, such as 'Invalid value for webhdfs parameter "permission":...'.
 *
 * @member {string} exception Polymorphic Discriminator
 *
 */
export interface AdlsRemoteException {
  readonly javaClassName?: string;
  readonly message?: string;
  exception: string;
}

/**
 * @class
 * Initializes a new instance of the AdlsIllegalArgumentException class.
 * @constructor
 * A WebHDFS exception thrown indicating that one more arguments is incorrect.
 * Thrown when a 400 error response code is returned (bad request).
 *
 */
export interface AdlsIllegalArgumentException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsUnsupportedOperationException class.
 * @constructor
 * A WebHDFS exception thrown indicating that the requested operation is not
 * supported. Thrown when a 400 error response code is returned (bad request).
 *
 */
export interface AdlsUnsupportedOperationException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsSecurityException class.
 * @constructor
 * A WebHDFS exception thrown indicating that access is denied. Thrown when a
 * 401 error response code is returned (Unauthorized).
 *
 */
export interface AdlsSecurityException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsIOException class.
 * @constructor
 * A WebHDFS exception thrown indicating there was an IO (read or write) error.
 * Thrown when a 403 error response code is returned (forbidden).
 *
 */
export interface AdlsIOException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsFileNotFoundException class.
 * @constructor
 * A WebHDFS exception thrown indicating the file or folder could not be found.
 * Thrown when a 404 error response code is returned (not found).
 *
 */
export interface AdlsFileNotFoundException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsFileAlreadyExistsException class.
 * @constructor
 * A WebHDFS exception thrown indicating the file or folder already exists.
 * Thrown when a 403 error response code is returned (forbidden).
 *
 */
export interface AdlsFileAlreadyExistsException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsBadOffsetException class.
 * @constructor
 * A WebHDFS exception thrown indicating the append or read is from a bad
 * offset. Thrown when a 400 error response code is returned for append and
 * open operations (Bad request).
 *
 */
export interface AdlsBadOffsetException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsRuntimeException class.
 * @constructor
 * A WebHDFS exception thrown when an unexpected error occurs during an
 * operation. Thrown when a 500 error response code is returned (Internal
 * server error).
 *
 */
export interface AdlsRuntimeException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsAccessControlException class.
 * @constructor
 * A WebHDFS exception thrown indicating that access is denied due to
 * insufficient permissions. Thrown when a 403 error response code is returned
 * (forbidden).
 *
 */
export interface AdlsAccessControlException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsThrottledException class.
 * @constructor
 * A WebHDFS exception thrown indicating that the request is being throttled.
 * Reducing the number of requests or request size helps to mitigate this
 * error.
 *
 */
export interface AdlsThrottledException extends AdlsRemoteException {
}

/**
 * @class
 * Initializes a new instance of the AdlsError class.
 * @constructor
 * Data Lake Store filesystem error containing a specific WebHDFS exception.
 *
 * @member {object} [remoteException] the object representing the actual
 * WebHDFS exception being returned.
 *
 * @member {string} [remoteException.javaClassName] the full class package name
 * for the exception thrown, such as 'java.lang.IllegalArgumentException'.
 *
 * @member {string} [remoteException.message] the message associated with the
 * exception that was thrown, such as 'Invalid value for webhdfs parameter
 * "permission":...'.
 *
 * @member {string} [remoteException.exception] Polymorphic Discriminator
 *
 */
export interface AdlsError {
  readonly remoteException?: AdlsRemoteException;
}

