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
import { CustomContentSchemaCommonRelatedContentLinks } from './custom-content-schema-common-related-content-links';
import { CustomContentSchemaCommonRelatedExternalLinks } from './custom-content-schema-common-related-external-links';
/**
 *
 * @export
 * @interface PolicySchemaCommon
 */
export interface PolicySchemaCommon {
    /**
     * Title of the policy.
     * @type {string}
     * @memberof PolicySchemaCommon
     */
    title?: string;
    /**
     * The body of the policy.
     * @type {string}
     * @memberof PolicySchemaCommon
     */
    body?: string;
    /**
     * Indicates the workflow state of the policy.
     * @type {string}
     * @memberof PolicySchemaCommon
     */
    state?: PolicySchemaCommonStateEnum;
    /**
     * This is the timestamp (in seconds) of when the policy will start being implementated.
     * @type {number}
     * @memberof PolicySchemaCommon
     */
    implementation_start_timestamp?: number;
    /**
     * This is the timestamp (in seconds) of when the policy will end being implementated.
     * @type {number}
     * @memberof PolicySchemaCommon
     */
    implementation_end_timestamp?: number;
    /**
     * The review date timestamp for the policy (in seconds).
     * @type {number}
     * @memberof PolicySchemaCommon
     */
    review_date_timestamp?: number;
    /**
     * Related external links for the policy.
     * @type {Array<CustomContentSchemaCommonRelatedExternalLinks>}
     * @memberof PolicySchemaCommon
     */
    related_external_links?: Array<CustomContentSchemaCommonRelatedExternalLinks>;
    /**
     * Related content links for the policy.
     * @type {Array<CustomContentSchemaCommonRelatedContentLinks>}
     * @memberof PolicySchemaCommon
     */
    related_content_links?: Array<CustomContentSchemaCommonRelatedContentLinks>;
    /**
     * Indicates that comments are enabled for this content.
     * @type {boolean}
     * @memberof PolicySchemaCommon
     */
    enable_comments?: boolean;
    /**
     * Indicates that this content is featured.
     * @type {boolean}
     * @memberof PolicySchemaCommon
     */
    featured?: boolean;
    /**
     * The policy external reference id.
     * @type {string}
     * @memberof PolicySchemaCommon
     */
    external_id?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum PolicySchemaCommonStateEnum {
    Draft = "draft",
    NeedsReview = "needs_review",
    Reviewed = "reviewed",
    Published = "published",
    Unpublished = "unpublished"
}