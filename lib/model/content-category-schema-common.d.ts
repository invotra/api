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
 * @interface ContentCategorySchemaCommon
 */
export interface ContentCategorySchemaCommon {
    /**
     * Name of the content category.
     * @type {string}
     * @memberof ContentCategorySchemaCommon
     */
    name?: string;
    /**
     * Description of the content category.
     * @type {string}
     * @memberof ContentCategorySchemaCommon
     */
    description?: string;
    /**
     * The content category external reference id.
     * @type {string}
     * @memberof ContentCategorySchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent content category.
     * @type {string}
     * @memberof ContentCategorySchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this content category is published.
     * @type {boolean}
     * @memberof ContentCategorySchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a content category in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof ContentCategorySchemaCommon
     */
    weight?: number;
    /**
     * The content type machine names within this content category.
     * @type {Array<string>}
     * @memberof ContentCategorySchemaCommon
     */
    content_types?: Array<string>;
}
