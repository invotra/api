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
 * The team targeting this promotion.
 * @export
 * @interface PromotionSchemaAllOf1Team
 */
export interface PromotionSchemaAllOf1Team {
    /**
     * Invotra UUID of the team.
     * @type {string}
     * @memberof PromotionSchemaAllOf1Team
     */
    uuid?: string;
    /**
     * This is the name of the team
     * @type {string}
     * @memberof PromotionSchemaAllOf1Team
     */
    name?: string;
}
