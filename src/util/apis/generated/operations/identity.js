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

const msRest = require('ms-rest');
const WebResource = msRest.WebResource;

/**
 * @summary Returns users of a tenant.
 * Returns all users if no searchTerm param is specified.
 *
 * @param {string} ownerName The name of the owner
 *
 * @param {string} appName The name of the application
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.acAuthorizationMicrosoftGraph] MSGraph Auth Token
 *
 * @param {string} [options.searchTerm] User search term
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _getUsers(ownerName, appName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let acAuthorizationMicrosoftGraph = (options && options.acAuthorizationMicrosoftGraph !== undefined) ? options.acAuthorizationMicrosoftGraph : undefined;
  let searchTerm = (options && options.searchTerm !== undefined) ? options.searchTerm : undefined;
  // Validate
  try {
    if (acAuthorizationMicrosoftGraph !== null && acAuthorizationMicrosoftGraph !== undefined && typeof acAuthorizationMicrosoftGraph.valueOf() !== 'string') {
      throw new Error('acAuthorizationMicrosoftGraph must be of type string.');
    }
    if (searchTerm !== null && searchTerm !== undefined && typeof searchTerm.valueOf() !== 'string') {
      throw new Error('searchTerm must be of type string.');
    }
    if (ownerName === null || ownerName === undefined || typeof ownerName.valueOf() !== 'string') {
      throw new Error('ownerName cannot be null or undefined and it must be of type string.');
    }
    if (appName === null || appName === undefined || typeof appName.valueOf() !== 'string') {
      throw new Error('appName cannot be null or undefined and it must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'v0.1/apps/{owner_name}/{app_name}/auth/users';
  requestUrl = requestUrl.replace('{owner_name}', encodeURIComponent(ownerName));
  requestUrl = requestUrl.replace('{app_name}', encodeURIComponent(appName));
  let queryParameters = [];
  if (searchTerm !== null && searchTerm !== undefined) {
    queryParameters.push('searchTerm=' + encodeURIComponent(searchTerm));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (acAuthorizationMicrosoftGraph !== undefined && acAuthorizationMicrosoftGraph !== null) {
    httpRequest.headers['AC-Authorization-Microsoft-Graph'] = acAuthorizationMicrosoftGraph;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  httpRequest.streamedResponse = true;
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }

    let statusCode = response.statusCode;
    if (statusCode !== 200 && statusCode !== 401 && statusCode !== 500) {
      let error = new Error(`Unexpected status code: ${statusCode}`);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        if (responseBody !== undefined) parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }

    // Create Result
    let result = response;
    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a Identity. */
class Identity {
  /**
   * Create a Identity.
   * @param {AppCenterClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._getUsers = _getUsers;
  }

  /**
   * @summary Returns users of a tenant.
   * Returns all users if no searchTerm param is specified.
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.acAuthorizationMicrosoftGraph] MSGraph Auth Token
   *
   * @param {string} [options.searchTerm] User search term
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<Object>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getUsersWithHttpOperationResponse(ownerName, appName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._getUsers(ownerName, appName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * @summary Returns users of a tenant.
   * Returns all users if no searchTerm param is specified.
   *
   * @param {string} ownerName The name of the owner
   *
   * @param {string} appName The name of the application
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.acAuthorizationMicrosoftGraph] MSGraph Auth Token
   *
   * @param {string} [options.searchTerm] User search term
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {Object} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  getUsers(ownerName, appName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._getUsers(ownerName, appName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._getUsers(ownerName, appName, options, optionalCallback);
    }
  }

}

module.exports = Identity;
