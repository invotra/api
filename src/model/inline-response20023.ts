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


import { PollSchema } from './poll-schema';

/**
 * 
 * @export
 * @interface InlineResponse20023
 */
export interface InlineResponse20023 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20023
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<PollSchema>}
     * @memberof InlineResponse20023
     */
    results?: Array<PollSchema>;
}


