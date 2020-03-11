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
 * @interface PersonTypeSchemaCommon
 */
export interface PersonTypeSchemaCommon {
    /**
     * Name of the person type.
     * @type {string}
     * @memberof PersonTypeSchemaCommon
     */
    name?: string;
    /**
     * Description of the person type.
     * @type {string}
     * @memberof PersonTypeSchemaCommon
     */
    description?: string;
    /**
     * The person type external reference id.
     * @type {string}
     * @memberof PersonTypeSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent person type.
     * @type {string}
     * @memberof PersonTypeSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this person type is published.
     * @type {boolean}
     * @memberof PersonTypeSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a person type in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof PersonTypeSchemaCommon
     */
    weight?: number;
}


