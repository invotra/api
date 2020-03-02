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


import { ManualPageListingSchema } from './manual-page-listing-schema';

/**
 * 
 * @export
 * @interface InlineResponse20025
 */
export interface InlineResponse20025 {
    /**
     * An array of manual pages
     * @type {Array<ManualPageListingSchema>}
     * @memberof InlineResponse20025
     */
    results?: Array<ManualPageListingSchema>;
    /**
     * The cursor to pass back to the endpoint for the next items.
     * @type {string}
     * @memberof InlineResponse20025
     */
    cursor?: string;
}


