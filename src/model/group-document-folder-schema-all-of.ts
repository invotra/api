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
 * @interface GroupDocumentFolderSchemaAllOf
 */
export interface GroupDocumentFolderSchemaAllOf {
    /**
     * Invotra UUID of the group document folder.
     * @type {string}
     * @memberof GroupDocumentFolderSchemaAllOf
     */
    uuid?: string;
    /**
     * Indicates that this group document folder has children.
     * @type {boolean}
     * @memberof GroupDocumentFolderSchemaAllOf
     */
    has_children?: boolean;
}


