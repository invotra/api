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
 * @interface TitleSchemaCommon
 */
export interface TitleSchemaCommon {
    /**
     * Name of the title.
     * @type {string}
     * @memberof TitleSchemaCommon
     */
    name?: string;
    /**
     * Description of the title.
     * @type {string}
     * @memberof TitleSchemaCommon
     */
    description?: string;
    /**
     * The title external reference id.
     * @type {string}
     * @memberof TitleSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent title.
     * @type {string}
     * @memberof TitleSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this title is published.
     * @type {boolean}
     * @memberof TitleSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a title in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof TitleSchemaCommon
     */
    weight?: number;
}
