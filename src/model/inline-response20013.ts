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


import { PostSchema } from './post-schema';

/**
 * 
 * @export
 * @interface InlineResponse20013
 */
export interface InlineResponse20013 {
    /**
     * Count of results.
     * @type {number}
     * @memberof InlineResponse20013
     */
    count?: number;
    /**
     * The results set.
     * @type {Array<PostSchema>}
     * @memberof InlineResponse20013
     */
    results?: Array<PostSchema>;
}


