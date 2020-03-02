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
import { GradeSchema } from './grade-schema';
/**
 *
 * @export
 * @interface InlineResponse20037
 */
export interface InlineResponse20037 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20037
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<GradeSchema>}
     * @memberof InlineResponse20037
     */
    results?: Array<GradeSchema>;
}
