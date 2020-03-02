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
import { CommentSchemaCategory } from './comment-schema-category';
import { FileSchema } from './file-schema';
/**
 *
 * @export
 * @interface CommentSchema
 */
export interface CommentSchema {
    /**
     * Invotra UUID of the comment.
     * @type {string}
     * @memberof CommentSchema
     */
    uuid: string;
    /**
     * The main body text of the comment.
     * @type {string}
     * @memberof CommentSchema
     */
    body: string;
    /**
     * Invotra UUID of the author.
     * @type {string}
     * @memberof CommentSchema
     */
    author_uuid?: string;
    /**
     * The timestamp (in seconds) of when the comment was created
     * @type {number}
     * @memberof CommentSchema
     */
    timestamp_created: number;
    /**
     * The timestamp (in seconds) of when the comment was updated
     * @type {number}
     * @memberof CommentSchema
     */
    timestamp_updated: number;
    /**
     * This is the Invotra UUID of the parent of the comment. Only present on replies.
     * @type {string}
     * @memberof CommentSchema
     */
    parent_uuid?: string;
    /**
     * This is the Invotra UUID of the content.
     * @type {string}
     * @memberof CommentSchema
     */
    content_uuid: string;
    /**
     * The content type machine name of the comment.
     * @type {string}
     * @memberof CommentSchema
     */
    content_type: string;
    /**
     *
     * @type {CommentSchemaCategory}
     * @memberof CommentSchema
     */
    category?: CommentSchemaCategory;
    /**
     * The total number of likes for the comment.
     * @type {number}
     * @memberof CommentSchema
     */
    likes_count: number;
    /**
     * List of attachments on the comment.
     * @type {Array<FileSchema>}
     * @memberof CommentSchema
     */
    attachments?: Array<FileSchema>;
}
