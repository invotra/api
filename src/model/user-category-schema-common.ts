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
 * @interface UserCategorySchemaCommon
 */
export interface UserCategorySchemaCommon {
    /**
     * Name of the user category.
     * @type {string}
     * @memberof UserCategorySchemaCommon
     */
    name?: string;
    /**
     * Description of the user category.
     * @type {string}
     * @memberof UserCategorySchemaCommon
     */
    description?: string;
    /**
     * The user category external reference id.
     * @type {string}
     * @memberof UserCategorySchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent user category.
     * @type {string}
     * @memberof UserCategorySchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this user category is published.
     * @type {boolean}
     * @memberof UserCategorySchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a user category in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof UserCategorySchemaCommon
     */
    weight?: number;
    /**
     * Invotra UUIDs of users in this user category.
     * @type {Array<string>}
     * @memberof UserCategorySchemaCommon
     */
    users_uuids?: Array<string>;
}


