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


import { BlogSchemaAllOf1GeneralTopic } from './blog-schema-all-of1-general-topic';
import { FileSchema } from './file-schema';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * 
 * @export
 * @interface BlogSchemaAllOf1
 */
export interface BlogSchemaAllOf1 {
    /**
     * Blog Image.
     * @type {FileSchema}
     * @memberof BlogSchemaAllOf1
     */
    image?: FileSchema;
    /**
     * The author of this blog.
     * @type {UserTrimmedSchema}
     * @memberof BlogSchemaAllOf1
     */
    author?: UserTrimmedSchema;
    /**
     * 
     * @type {BlogSchemaAllOf1GeneralTopic}
     * @memberof BlogSchemaAllOf1
     */
    general_topic?: BlogSchemaAllOf1GeneralTopic;
    /**
     * This is the timestamp (in seconds) of when the blog was created.
     * @type {number}
     * @memberof BlogSchemaAllOf1
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the blog was last updated.
     * @type {number}
     * @memberof BlogSchemaAllOf1
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the blog.
     * @type {number}
     * @memberof BlogSchemaAllOf1
     */
    comment_count?: number;
    /**
     * Count of likes on the blog.
     * @type {number}
     * @memberof BlogSchemaAllOf1
     */
    likes_count?: number;
    /**
     * Published status of the blog.
     * @type {boolean}
     * @memberof BlogSchemaAllOf1
     */
    published?: boolean;
}


