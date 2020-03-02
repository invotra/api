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
import { TitleSchema } from './title-schema';
/**
 *
 * @export
 * @interface InlineResponse20051
 */
export interface InlineResponse20051 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20051
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<TitleSchema>}
     * @memberof InlineResponse20051
     */
    results?: Array<TitleSchema>;
}
