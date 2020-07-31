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
 * The site section of this policy.
 * @export
 * @interface PolicySchemaAllOf1SiteSection
 */
export interface PolicySchemaAllOf1SiteSection {
    /**
     * Invotra UUID of the site section.
     * @type {string}
     * @memberof PolicySchemaAllOf1SiteSection
     */
    uuid?: string;
    /**
     * This is the name of the site section.
     * @type {string}
     * @memberof PolicySchemaAllOf1SiteSection
     */
    name?: string;
}
