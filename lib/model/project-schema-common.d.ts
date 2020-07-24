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
 * @interface ProjectSchemaCommon
 */
export interface ProjectSchemaCommon {
    /**
     * Name of the project.
     * @type {string}
     * @memberof ProjectSchemaCommon
     */
    name?: string;
    /**
     * Description of the project.
     * @type {string}
     * @memberof ProjectSchemaCommon
     */
    description?: string;
    /**
     * The project external reference id.
     * @type {string}
     * @memberof ProjectSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent project.
     * @type {string}
     * @memberof ProjectSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this project is published.
     * @type {boolean}
     * @memberof ProjectSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a project in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof ProjectSchemaCommon
     */
    weight?: number;
}
