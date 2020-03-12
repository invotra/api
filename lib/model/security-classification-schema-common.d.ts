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
 * @interface SecurityClassificationSchemaCommon
 */
export interface SecurityClassificationSchemaCommon {
    /**
     * Name of the security classification.
     * @type {string}
     * @memberof SecurityClassificationSchemaCommon
     */
    name?: string;
    /**
     * Description of the security classification.
     * @type {string}
     * @memberof SecurityClassificationSchemaCommon
     */
    description?: string;
    /**
     * The security classification external reference id.
     * @type {string}
     * @memberof SecurityClassificationSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent security classification.
     * @type {string}
     * @memberof SecurityClassificationSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this security classification is published.
     * @type {boolean}
     * @memberof SecurityClassificationSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a security classification in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof SecurityClassificationSchemaCommon
     */
    weight?: number;
}
