/*
 * Integration Hub API
 * This API is used to create the items necessary for the SkyHive IntegrationHub product to consume
 *
 * OpenAPI spec version: 1.0.1
 * Contact: fred@skyhive.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The SignupBody model module.
 * @module model/SignupBody
 * @version 1.0.1
 */
export class SignupBody {
  /**
   * Constructs a new <code>SignupBody</code>.
   * @alias module:model/SignupBody
   * @class
   * @param authUser {String} the username for the SkyHive account
   * @param authPw {String} the password for the SkyHive account
   */
  constructor(authUser, authPw) {
    this.authUser = authUser;
    this.authPw = authPw;
  }

  /**
   * Constructs a <code>SignupBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignupBody} obj Optional instance to populate.
   * @return {module:model/SignupBody} The populated <code>SignupBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SignupBody();
      if (data.hasOwnProperty('companyName'))
        obj.companyName = ApiClient.convertToType(data['companyName'], 'String');
      if (data.hasOwnProperty('authUser'))
        obj.authUser = ApiClient.convertToType(data['authUser'], 'String');
      if (data.hasOwnProperty('authPw'))
        obj.authPw = ApiClient.convertToType(data['authPw'], 'String');
    }
    return obj;
  }
}

/**
 * the name of the customer company
 * @member {String} companyName
 */
SignupBody.prototype.companyName = undefined;

/**
 * the username for the SkyHive account
 * @member {String} authUser
 */
SignupBody.prototype.authUser = undefined;

/**
 * the password for the SkyHive account
 * @member {String} authPw
 */
SignupBody.prototype.authPw = undefined;

