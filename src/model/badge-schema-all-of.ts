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
 * @interface BadgeSchemaAllOf
 */
export interface BadgeSchemaAllOf {
    /**
     * Invotra UUID of the badge.
     * @type {string}
     * @memberof BadgeSchemaAllOf
     */
    uuid?: string;
    /**
     * Indicates that this badge has children.
     * @type {boolean}
     * @memberof BadgeSchemaAllOf
     */
    has_children?: boolean;
}

