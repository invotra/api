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
 * @interface UserMetricsProfilesSchema
 */
export interface UserMetricsProfilesSchema {
    /**
     * The total number of active users (i.e. not blocked)
     * @type {number}
     * @memberof UserMetricsProfilesSchema
     */
    user_count?: number;
    /**
     * Number of active user (i.e. not blocked) profiles with a profile photo
     * @type {number}
     * @memberof UserMetricsProfilesSchema
     */
    users_with_profile_photos?: number;
    /**
     * Number of active user (i.e. not blocked) profiles with text in the description field
     * @type {number}
     * @memberof UserMetricsProfilesSchema
     */
    users_with_descriptions?: number;
}
