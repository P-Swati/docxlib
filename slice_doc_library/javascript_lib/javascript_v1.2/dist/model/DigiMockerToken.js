"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DigiMockerToken model module.
 * @module model/DigiMockerToken
 * @version 1.0.0
 */
var DigiMockerToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DigiMockerToken</code>.
   * @alias module:model/DigiMockerToken
   */
  function DigiMockerToken() {
    _classCallCheck(this, DigiMockerToken);

    DigiMockerToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DigiMockerToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DigiMockerToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DigiMockerToken} obj Optional instance to populate.
     * @return {module:model/DigiMockerToken} The populated <code>DigiMockerToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DigiMockerToken();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DigiMockerToken;
}();
/**
 * @member {String} access_token
 */


DigiMockerToken.prototype['access_token'] = undefined;
var _default = DigiMockerToken;
exports["default"] = _default;