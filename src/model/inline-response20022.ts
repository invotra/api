// tslint:disable
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


import { PolicySchema } from './policy-schema';

/**
 * 
 * @export
 * @interface InlineResponse20022
 */
export interface InlineResponse20022 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20022
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<PolicySchema>}
     * @memberof InlineResponse20022
     */
    results?: Array<PolicySchema>;
}


