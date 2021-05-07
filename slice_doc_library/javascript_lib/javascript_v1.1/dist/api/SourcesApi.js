"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GdriveFileList = _interopRequireDefault(require("../model/GdriveFileList"));

var _GdriveToken = _interopRequireDefault(require("../model/GdriveToken"));

var _GdriveUrl = _interopRequireDefault(require("../model/GdriveUrl"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Sources service.
* @module api/SourcesApi
* @version 1.0.0
*/
var SourcesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SourcesApi. 
  * @alias module:api/SourcesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SourcesApi(apiClient) {
    _classCallCheck(this, SourcesApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the gDriveSourceAuth operation.
   * @callback module:api/SourcesApi~gDriveSourceAuthCallback
   * @param {String} error Error message, if any.
   * @param {module:model/GdriveUrl} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get Google Drive Auth Url
   * @param {Object} opts Optional parameters
   * @param {module:model/InlineObject} opts.inlineObject 
   * @param {module:api/SourcesApi~gDriveSourceAuthCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/GdriveUrl}
   */


  _createClass(SourcesApi, [{
    key: "gDriveSourceAuth",
    value: function gDriveSourceAuth(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GdriveUrl["default"];
      return this.apiClient.callApi('/source/gdrive/auth', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gDriveSourceAuthCallback operation.
     * @callback module:api/SourcesApi~gDriveSourceAuthCallbackCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GdriveToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns oauth token from google callback url
     * @param {module:model/null} UNKNOWN_PARAMETER_NAME Auth Code sent upon gdrive auth
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject1} opts.inlineObject1 
     * @param {module:api/SourcesApi~gDriveSourceAuthCallbackCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GdriveToken}
     */

  }, {
    key: "gDriveSourceAuthCallback",
    value: function gDriveSourceAuthCallback(UNKNOWN_PARAMETER_NAME, opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject1']; // verify the required parameter 'UNKNOWN_PARAMETER_NAME' is set

      if (UNKNOWN_PARAMETER_NAME === undefined || UNKNOWN_PARAMETER_NAME === null) {
        throw new Error("Missing the required parameter 'UNKNOWN_PARAMETER_NAME' when calling gDriveSourceAuthCallback");
      }

      var pathParams = {};
      var queryParams = {
        'code': UNKNOWN_PARAMETER_NAME
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GdriveToken["default"];
      return this.apiClient.callApi('/source/gdrive/oauth2callback', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the gDriveSourceListFiles operation.
     * @callback module:api/SourcesApi~gDriveSourceListFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GdriveFileList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of all files in authenticated user's google drive
     * @param {Object} opts Optional parameters
     * @param {module:model/InlineObject2} opts.inlineObject2 
     * @param {module:api/SourcesApi~gDriveSourceListFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GdriveFileList}
     */

  }, {
    key: "gDriveSourceListFiles",
    value: function gDriveSourceListFiles(opts, callback) {
      opts = opts || {};
      var postBody = opts['inlineObject2'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _GdriveFileList["default"];
      return this.apiClient.callApi('/source/gdrive/listFiles', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SourcesApi;
}();

exports["default"] = SourcesApi;