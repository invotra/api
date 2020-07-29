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
 * @interface InterestSchemaCommon
 */
export interface InterestSchemaCommon {
    /**
     * Name of the interest.
     * @type {string}
     * @memberof InterestSchemaCommon
     */
    name?: string;
    /**
     * Description of the interest.
     * @type {string}
     * @memberof InterestSchemaCommon
     */
    description?: string;
    /**
     * The interest external reference id.
     * @type {string}
     * @memberof InterestSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent interest.
     * @type {string}
     * @memberof InterestSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this interest is published.
     * @type {boolean}
     * @memberof InterestSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of an interest in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof InterestSchemaCommon
     */
    weight?: number;
}
