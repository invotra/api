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
 * @interface GroupSchema
 */
export interface GroupSchema {
    /**
     * This is the name of the group
     * @type {string}
     * @memberof GroupSchema
     */
    title: string;
    /**
     * This is a description of the group.
     * @type {string}
     * @memberof GroupSchema
     */
    description: string;
    /**
     * The category for the group.
     * @type {string}
     * @memberof GroupSchema
     */
    group_category: string;
    /**
     * The uuid of the category
     * @type {string}
     * @memberof GroupSchema
     */
    group_category_uuid: string;
    /**
     * This is the privacy setting for the group.
     * @type {string}
     * @memberof GroupSchema
     */
    privacy_setting: GroupSchemaPrivacySettingEnum;
    /**
     * A count of members in group
     * @type {number}
     * @memberof GroupSchema
     */
    members_count: number;
    /**
     * Total likes for all content in the group.
     * @type {number}
     * @memberof GroupSchema
     */
    likes: number;
    /**
     * The uuid of the author
     * @type {string}
     * @memberof GroupSchema
     */
    author_uuid: string;
    /**
     * This is used to store the group\'s external reference ID.
     * @type {string}
     * @memberof GroupSchema
     */
    external_id?: string;
    /**
     * The timestamp (in seconds) of when the group was created
     * @type {number}
     * @memberof GroupSchema
     */
    timestamp_created?: number;
    /**
     * The timestamp (in seconds) of when the group was updated
     * @type {number}
     * @memberof GroupSchema
     */
    timestamp_updated?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum GroupSchemaPrivacySettingEnum {
    Public = 'Public',
    Private = 'Private',
    Secret = 'Secret'
}


