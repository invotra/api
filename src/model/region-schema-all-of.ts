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
 * @interface RegionSchemaAllOf
 */
export interface RegionSchemaAllOf {
    /**
     * Invotra UUID of the region.
     * @type {string}
     * @memberof RegionSchemaAllOf
     */
    uuid?: string;
    /**
     * Indicates that this region has children.
     * @type {boolean}
     * @memberof RegionSchemaAllOf
     */
    has_children?: boolean;
}


