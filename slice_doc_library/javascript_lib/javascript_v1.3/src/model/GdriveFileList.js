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
import GdriveFile from './GdriveFile';

/**
 * The GdriveFileList model module.
 * @module model/GdriveFileList
 * @version 1.0.0
 */
class GdriveFileList {
    /**
     * Constructs a new <code>GdriveFileList</code>.
     * @alias module:model/GdriveFileList
     * @param files {Array.<module:model/GdriveFile>} 
     */
    constructor(files) { 
        
        GdriveFileList.initialize(this, files);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, files) { 
        obj['files'] = files;
    }

    /**
     * Constructs a <code>GdriveFileList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveFileList} obj Optional instance to populate.
     * @return {module:model/GdriveFileList} The populated <code>GdriveFileList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GdriveFileList();

            if (data.hasOwnProperty('files')) {
                obj['files'] = ApiClient.convertToType(data['files'], [GdriveFile]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GdriveFile>} files
 */
GdriveFileList.prototype['files'] = undefined;






export default GdriveFileList;

