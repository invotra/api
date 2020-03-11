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
 * @interface LocationSpaceSchemaCommonAllOf
 */
export interface LocationSpaceSchemaCommonAllOf {
    /**
     * The Invotra UUID of the parent location. This location must be a floor.
     * @type {string}
     * @memberof LocationSpaceSchemaCommonAllOf
     */
    parent_uuid?: string;
}

