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
import FileTransferSourceConfig from './FileTransferSourceConfig';

/**
 * The FileTransfer model module.
 * @module model/FileTransfer
 * @version 1.0.0
 */
class FileTransfer {
    /**
     * Constructs a new <code>FileTransfer</code>.
     * @alias module:model/FileTransfer
     * @param sourceConfig {module:model/FileTransferSourceConfig} 
     * @param destinationConfig {module:model/FileTransferSourceConfig} 
     */
    constructor(sourceConfig, destinationConfig) { 
        
        FileTransfer.initialize(this, sourceConfig, destinationConfig);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sourceConfig, destinationConfig) { 
        obj['sourceConfig'] = sourceConfig;
        obj['destinationConfig'] = destinationConfig;
    }

    /**
     * Constructs a <code>FileTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileTransfer} obj Optional instance to populate.
     * @return {module:model/FileTransfer} The populated <code>FileTransfer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileTransfer();

            if (data.hasOwnProperty('sourceConfig')) {
                obj['sourceConfig'] = FileTransferSourceConfig.constructFromObject(data['sourceConfig']);
            }
            if (data.hasOwnProperty('destinationConfig')) {
                obj['destinationConfig'] = FileTransferSourceConfig.constructFromObject(data['destinationConfig']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/FileTransferSourceConfig} sourceConfig
 */
FileTransfer.prototype['sourceConfig'] = undefined;

/**
 * @member {module:model/FileTransferSourceConfig} destinationConfig
 */
FileTransfer.prototype['destinationConfig'] = undefined;






export default FileTransfer;
