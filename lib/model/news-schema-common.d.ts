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
import { CustomContentSchemaCommonRelatedContentLinks } from './custom-content-schema-common-related-content-links';
import { CustomContentSchemaCommonRelatedExternalLinks } from './custom-content-schema-common-related-external-links';
/**
 *
 * @export
 * @interface NewsSchemaCommon
 */
export interface NewsSchemaCommon {
    /**
     * Title of the news.
     * @type {string}
     * @memberof NewsSchemaCommon
     */
    title?: string;
    /**
     * The body of the news.
     * @type {string}
     * @memberof NewsSchemaCommon
     */
    body?: string;
    /**
     * Indicates the workflow state of the news.
     * @type {string}
     * @memberof NewsSchemaCommon
     */
    state?: NewsSchemaCommonStateEnum;
    /**
     * The timestamp of the schedule date (in seconds). If present the content is scheduled for a workflow state change, if not, the workflow state will be changed immediately.
     * @type {number}
     * @memberof NewsSchemaCommon
     */
    schedule_date_timestamp?: number;
    /**
     * The review date timestamp for the custom content (in seconds).
     * @type {number}
     * @memberof NewsSchemaCommon
     */
    review_date_timestamp?: number;
    /**
     * Related external links for the custom content
     * @type {Array<CustomContentSchemaCommonRelatedExternalLinks>}
     * @memberof NewsSchemaCommon
     */
    related_external_links?: Array<CustomContentSchemaCommonRelatedExternalLinks>;
    /**
     * Related content links for the custom content
     * @type {Array<CustomContentSchemaCommonRelatedContentLinks>}
     * @memberof NewsSchemaCommon
     */
    related_content_links?: Array<CustomContentSchemaCommonRelatedContentLinks>;
    /**
     * Indicates that comments are enabled for this content.
     * @type {boolean}
     * @memberof NewsSchemaCommon
     */
    enable_comments?: boolean;
    /**
     * Indicates that this news item is featured.
     * @type {boolean}
     * @memberof NewsSchemaCommon
     */
    featured?: boolean;
    /**
     * The news item external reference id.
     * @type {string}
     * @memberof NewsSchemaCommon
     */
    external_id?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum NewsSchemaCommonStateEnum {
    Draft = "draft",
    NeedsReview = "needs_review",
    Reviewed = "reviewed",
    Published = "published",
    Unpublished = "unpublished"
}
