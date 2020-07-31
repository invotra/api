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
 * The owner of this promotion. The owner is mandatory if configured to be in Invotra admin.
 * @export
 * @interface PromotionSchemaCreateAllOfOwner
 */
export interface PromotionSchemaCreateAllOfOwner {
    /**
     * Invotra UUID of the user.
     * @type {string}
     * @memberof PromotionSchemaCreateAllOfOwner
     */
    uuid?: string;
}
