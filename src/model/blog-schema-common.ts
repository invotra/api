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



/**
 * 
 * @export
 * @interface BlogSchemaCommon
 */
export interface BlogSchemaCommon {
    /**
     * Title of the blog.
     * @type {string}
     * @memberof BlogSchemaCommon
     */
    title?: string;
    /**
     * The body of the blog.
     * @type {string}
     * @memberof BlogSchemaCommon
     */
    body?: string;
    /**
     * Indicates the workflow state of the blog.
     * @type {string}
     * @memberof BlogSchemaCommon
     */
    state?: BlogSchemaCommonStateEnum;
    /**
     * The review date timestamp for the blog (in seconds). The review date is mandatory if configured to be in Invotra admin.
     * @type {number}
     * @memberof BlogSchemaCommon
     */
    review_date_timestamp?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum BlogSchemaCommonStateEnum {
    Published = 'published',
    Unpublished = 'unpublished'
}



