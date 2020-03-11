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
 * @interface CountrySchemaAllOf
 */
export interface CountrySchemaAllOf {
    /**
     * Invotra UUID of the country.
     * @type {string}
     * @memberof CountrySchemaAllOf
     */
    uuid?: string;
    /**
     * Indicates that this country has children.
     * @type {boolean}
     * @memberof CountrySchemaAllOf
     */
    has_children?: boolean;
}