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
import { GroupPollSchemaAllOfOptions } from './group-poll-schema-all-of-options';
import { UserTrimmedSchema } from './user-trimmed-schema';
/**
 *
 * @export
 * @interface PollSchemaAllOf
 */
export interface PollSchemaAllOf {
    /**
     * Invotra UUID of the poll.
     * @type {string}
     * @memberof PollSchemaAllOf
     */
    uuid?: string;
    /**
     * The question the poll is asking.
     * @type {string}
     * @memberof PollSchemaAllOf
     */
    title?: string;
    /**
     * The author of this poll.
     * @type {UserTrimmedSchema}
     * @memberof PollSchemaAllOf
     */
    author?: UserTrimmedSchema;
    /**
     * The options for this group poll, with vote counts.
     * @type {Array<GroupPollSchemaAllOfOptions>}
     * @memberof PollSchemaAllOf
     */
    options?: Array<GroupPollSchemaAllOfOptions>;
    /**
     * This is the timestamp (in seconds) of when the poll was created.
     * @type {number}
     * @memberof PollSchemaAllOf
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the poll was last updated.
     * @type {number}
     * @memberof PollSchemaAllOf
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the poll.
     * @type {number}
     * @memberof PollSchemaAllOf
     */
    comment_count?: number;
    /**
     * Count of likes on the poll.
     * @type {number}
     * @memberof PollSchemaAllOf
     */
    likes_count?: number;
    /**
     * Published status for the poll.
     * @type {boolean}
     * @memberof PollSchemaAllOf
     */
    published?: boolean;
}