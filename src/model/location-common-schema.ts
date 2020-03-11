// tslint:disable
/**
 * InvotraAPI
 * In general most fields are optional for update (PUT) requests; you can leave them blank (pass an empty string / array / whatever as appropriate) to clear them, or omit the key to leave them unchanged.
 *
 * The version of the OpenAPI document: 0.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface LocationCommonSchema
 */
export interface LocationCommonSchema {
    /**
     * This is the name of the location.
     * @type {string}
     * @memberof LocationCommonSchema
     */
    title?: string;
    /**
     * This is a description of the location.
     * @type {string}
     * @memberof LocationCommonSchema
     */
    description?: string;
    /**
     * This is used to store the location\'s external reference id.
     * @type {string}
     * @memberof LocationCommonSchema
     */
    external_id?: string;
}


