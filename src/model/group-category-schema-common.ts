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
 * @interface GroupCategorySchemaCommon
 */
export interface GroupCategorySchemaCommon {
    /**
     * Name of the group category.
     * @type {string}
     * @memberof GroupCategorySchemaCommon
     */
    name?: string;
    /**
     * Description of the group category.
     * @type {string}
     * @memberof GroupCategorySchemaCommon
     */
    description?: string;
    /**
     * The group category external reference id.
     * @type {string}
     * @memberof GroupCategorySchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent group category.
     * @type {string}
     * @memberof GroupCategorySchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this group category is published.
     * @type {boolean}
     * @memberof GroupCategorySchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a group category in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof GroupCategorySchemaCommon
     */
    weight?: number;
}


