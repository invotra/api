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
 * @interface SessionSchema
 */
export interface SessionSchema {
    /**
     * The username that the user logs in with
     * @type {string}
     * @memberof SessionSchema
     */
    username: string;
    /**
     * The password that the user logs in with
     * @type {string}
     * @memberof SessionSchema
     */
    password: string;
}
