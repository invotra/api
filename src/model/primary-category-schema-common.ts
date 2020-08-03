// tslint:disable
/**
 * Invotra API
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
 * @interface PrimaryCategorySchemaCommon
 */
export interface PrimaryCategorySchemaCommon {
    /**
     * Name of the primary category.
     * @type {string}
     * @memberof PrimaryCategorySchemaCommon
     */
    name?: string;
    /**
     * Description of the primary category.
     * @type {string}
     * @memberof PrimaryCategorySchemaCommon
     */
    description?: string;
    /**
     * The primary category external reference id.
     * @type {string}
     * @memberof PrimaryCategorySchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent primary category.
     * @type {string}
     * @memberof PrimaryCategorySchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this primary category is published.
     * @type {boolean}
     * @memberof PrimaryCategorySchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a primary category in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof PrimaryCategorySchemaCommon
     */
    weight?: number;
}


