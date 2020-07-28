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
import { GroupSchema } from './group-schema';
/**
 *
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse2008
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<GroupSchema>}
     * @memberof InlineResponse2008
     */
    results?: Array<GroupSchema>;
}
