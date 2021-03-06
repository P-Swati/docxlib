/**
 * Slice Doc Library - T3
 * This is api documentation for slice document library. Team `SLICE - T3`
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GdriveToken model module.
 * @module model/GdriveToken
 * @version 1.0.0
 */
class GdriveToken {
    /**
     * Constructs a new <code>GdriveToken</code>.
     * @alias module:model/GdriveToken
     * @param accessToken {String} 
     * @param refreshToken {String} 
     * @param scope {String} 
     * @param tokenType {String} 
     * @param expiryDate {Number} 
     */
    constructor(accessToken, refreshToken, scope, tokenType, expiryDate) { 
        
        GdriveToken.initialize(this, accessToken, refreshToken, scope, tokenType, expiryDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessToken, refreshToken, scope, tokenType, expiryDate) { 
        obj['access_token'] = accessToken;
        obj['refresh_token'] = refreshToken;
        obj['scope'] = scope;
        obj['token_type'] = tokenType;
        obj['expiry_date'] = expiryDate;
    }

    /**
     * Constructs a <code>GdriveToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveToken} obj Optional instance to populate.
     * @return {module:model/GdriveToken} The populated <code>GdriveToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GdriveToken();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
            if (data.hasOwnProperty('refresh_token')) {
                obj['refresh_token'] = ApiClient.convertToType(data['refresh_token'], 'String');
            }
            if (data.hasOwnProperty('scope')) {
                obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
            }
            if (data.hasOwnProperty('token_type')) {
                obj['token_type'] = ApiClient.convertToType(data['token_type'], 'String');
            }
            if (data.hasOwnProperty('expiry_date')) {
                obj['expiry_date'] = ApiClient.convertToType(data['expiry_date'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_token
 */
GdriveToken.prototype['access_token'] = undefined;

/**
 * @member {String} refresh_token
 */
GdriveToken.prototype['refresh_token'] = undefined;

/**
 * @member {String} scope
 */
GdriveToken.prototype['scope'] = undefined;

/**
 * @member {String} token_type
 */
GdriveToken.prototype['token_type'] = undefined;

/**
 * @member {Number} expiry_date
 */
GdriveToken.prototype['expiry_date'] = undefined;






export default GdriveToken;

