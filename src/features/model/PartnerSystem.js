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
import {EnabledIntegration} from './EnabledIntegration';

/**
 * The PartnerSystem model module.
 * @module model/PartnerSystem
 * @version 1.0.1
 */
export class PartnerSystem {
  /**
   * Constructs a new <code>PartnerSystem</code>.
   * @alias module:model/PartnerSystem
   * @class
   * @param name {String} 
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>PartnerSystem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartnerSystem} obj Optional instance to populate.
   * @return {module:model/PartnerSystem} The populated <code>PartnerSystem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartnerSystem();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('authUser'))
        obj.authUser = ApiClient.convertToType(data['authUser'], 'String');
      if (data.hasOwnProperty('authPW'))
        obj.authPW = ApiClient.convertToType(data['authPW'], 'String');
      if (data.hasOwnProperty('apiKey'))
        obj.apiKey = ApiClient.convertToType(data['apiKey'], 'String');
      if (data.hasOwnProperty('hostName'))
        obj.hostName = ApiClient.convertToType(data['hostName'], 'String');
      if (data.hasOwnProperty('port'))
        obj.port = ApiClient.convertToType(data['port'], 'String');
      if (data.hasOwnProperty('tenantId'))
        obj.tenantId = ApiClient.convertToType(data['tenantId'], 'String');
      if (data.hasOwnProperty('authEndpoint'))
        obj.authEndpoint = ApiClient.convertToType(data['authEndpoint'], 'String');
      if (data.hasOwnProperty('apiVersion'))
        obj.apiVersion = ApiClient.convertToType(data['apiVersion'], 'String');
      if (data.hasOwnProperty('uriTemplate'))
        obj.uriTemplate = ApiClient.convertToType(data['uriTemplate'], 'String');
      if (data.hasOwnProperty('providerId'))
        obj.providerId = ApiClient.convertToType(data['providerId'], 'String');
      if (data.hasOwnProperty('providerName'))
        obj.providerName = ApiClient.convertToType(data['providerName'], 'String');
      if (data.hasOwnProperty('filePattern'))
        obj.filePattern = ApiClient.convertToType(data['filePattern'], 'String');
      if (data.hasOwnProperty('containerName'))
        obj.containerName = ApiClient.convertToType(data['containerName'], 'String');
      if (data.hasOwnProperty('format'))
        obj.format = ApiClient.convertToType(data['format'], 'String');
      if (data.hasOwnProperty('sshkey'))
        obj.sshkey = ApiClient.convertToType(data['sshkey'], 'String');
      if (data.hasOwnProperty('enabledIntegrations'))
        obj.enabledIntegrations = ApiClient.convertToType(data['enabledIntegrations'], [EnabledIntegration]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
PartnerSystem.prototype.name = undefined;

/**
 * @member {String} authUser
 */
PartnerSystem.prototype.authUser = undefined;

/**
 * @member {String} authPW
 */
PartnerSystem.prototype.authPW = undefined;

/**
 * @member {String} apiKey
 */
PartnerSystem.prototype.apiKey = undefined;

/**
 * @member {String} hostName
 */
PartnerSystem.prototype.hostName = undefined;

/**
 * @member {String} port
 */
PartnerSystem.prototype.port = undefined;

/**
 * @member {String} tenantId
 */
PartnerSystem.prototype.tenantId = undefined;

/**
 * @member {String} authEndpoint
 */
PartnerSystem.prototype.authEndpoint = undefined;

/**
 * @member {String} apiVersion
 */
PartnerSystem.prototype.apiVersion = undefined;

/**
 * @member {String} uriTemplate
 */
PartnerSystem.prototype.uriTemplate = undefined;

/**
 * @member {String} providerId
 */
PartnerSystem.prototype.providerId = undefined;

/**
 * @member {String} providerName
 */
PartnerSystem.prototype.providerName = undefined;

/**
 * @member {String} filePattern
 */
PartnerSystem.prototype.filePattern = undefined;

/**
 * @member {String} containerName
 */
PartnerSystem.prototype.containerName = undefined;

/**
 * @member {String} format
 */
PartnerSystem.prototype.format = undefined;

/**
 * @member {String} sshkey
 */
PartnerSystem.prototype.sshkey = undefined;

/**
 * @member {Array.<module:model/EnabledIntegration>} enabledIntegrations
 */
PartnerSystem.prototype.enabledIntegrations = undefined;
