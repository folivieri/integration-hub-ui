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
import {ApiClient} from "../ApiClient";
import {LoginBody} from '../model/LoginBody';
import {SignupBody} from '../model/SignupBody';
import {UserInterfaceState} from '../model/UserInterfaceState';

/**
* Admin service.
* @module api/AdminApi
* @version 1.0.1
*/
export class AdminApi {

    /**
    * Constructs a new AdminApi. 
    * @alias module:api/AdminApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createIntegrationCustomer operation.
     * @callback moduleapi/AdminApi~createIntegrationCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInterfaceState{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates an IntegrationCustomer using supplied credentials
     * Adds an IntegrationCustomer to the system
     * @param {module:model/SignupBody} body 
     * @param {module:api/AdminApi~createIntegrationCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createIntegrationCustomer(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createIntegrationCustomer");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserInterfaceState;

      return this.apiClient.callApi(
        '/signup', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the login operation.
     * @callback moduleapi/AdminApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserInterfaceState{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login and load IntegrationCustomer record
     * @param {module:model/LoginBody} body 
     * @param {module:api/AdminApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    login(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling login");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserInterfaceState;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}