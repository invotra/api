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


import { BadgeSchema } from './badge-schema';

/**
 * 
 * @export
 * @interface InlineResponse20030
 */
export interface InlineResponse20030 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20030
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<BadgeSchema>}
     * @memberof InlineResponse20030
     */
    results?: Array<BadgeSchema>;
}


