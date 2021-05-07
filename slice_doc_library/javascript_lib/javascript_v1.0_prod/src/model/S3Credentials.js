/**
 * docxlib_js
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
 * The S3Credentials model module.
 * @module model/S3Credentials
 * @version 1.0.0
 */
class S3Credentials {
    /**
     * Constructs a new <code>S3Credentials</code>.
     * @alias module:model/S3Credentials
     * @param ACCESS_KEY {String} 
     * @param SECRET_KEY {String} 
     */
    constructor(ACCESS_KEY, SECRET_KEY) { 
        
        S3Credentials.initialize(this, ACCESS_KEY, SECRET_KEY);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, ACCESS_KEY, SECRET_KEY) { 
        obj['ACCESS_KEY'] = ACCESS_KEY;
        obj['SECRET_KEY'] = SECRET_KEY;
    }

    /**
     * Constructs a <code>S3Credentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3Credentials} obj Optional instance to populate.
     * @return {module:model/S3Credentials} The populated <code>S3Credentials</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new S3Credentials();

            if (data.hasOwnProperty('ACCESS_KEY')) {
                obj['ACCESS_KEY'] = ApiClient.convertToType(data['ACCESS_KEY'], 'String');
            }
            if (data.hasOwnProperty('SECRET_KEY')) {
                obj['SECRET_KEY'] = ApiClient.convertToType(data['SECRET_KEY'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ACCESS_KEY
 */
S3Credentials.prototype['ACCESS_KEY'] = undefined;

/**
 * @member {String} SECRET_KEY
 */
S3Credentials.prototype['SECRET_KEY'] = undefined;






export default S3Credentials;

