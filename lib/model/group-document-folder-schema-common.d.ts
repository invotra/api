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
 * @interface GroupDocumentFolderSchemaCommon
 */
export interface GroupDocumentFolderSchemaCommon {
    /**
     * Name of the group document folder.
     * @type {string}
     * @memberof GroupDocumentFolderSchemaCommon
     */
    name?: string;
    /**
     * The group document folder external reference id.
     * @type {string}
     * @memberof GroupDocumentFolderSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent group document folder.
     * @type {string}
     * @memberof GroupDocumentFolderSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Determines the position of a group document folder in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof GroupDocumentFolderSchemaCommon
     */
    weight?: number;
}