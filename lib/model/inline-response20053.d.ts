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
import { UserCategorySchema } from './user-category-schema';
/**
 *
 * @export
 * @interface InlineResponse20053
 */
export interface InlineResponse20053 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20053
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<UserCategorySchema>}
     * @memberof InlineResponse20053
     */
    results?: Array<UserCategorySchema>;
}
