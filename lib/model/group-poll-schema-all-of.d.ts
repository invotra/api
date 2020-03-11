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
import { GroupSchema } from './group-schema';
import { UserTrimmedSchema } from './user-trimmed-schema';
/**
 *
 * @export
 * @interface GroupPollSchemaAllOf
 */
export interface GroupPollSchemaAllOf {
    /**
     * Invotra UUID of the group poll.
     * @type {string}
     * @memberof GroupPollSchemaAllOf
     */
    uuid?: string;
    /**
     * The author of this group poll.
     * @type {UserTrimmedSchema}
     * @memberof GroupPollSchemaAllOf
     */
    author?: UserTrimmedSchema;
    /**
     * The group for this group poll.
     * @type {GroupSchema}
     * @memberof GroupPollSchemaAllOf
     */
    group?: GroupSchema;
    /**
     * The options for this group poll, with vote counts.
     * @type {Array<GroupPollSchemaAllOfOptions>}
     * @memberof GroupPollSchemaAllOf
     */
    options?: Array<GroupPollSchemaAllOfOptions>;
    /**
     * This is the timestamp (in seconds) of when the group poll was created.
     * @type {number}
     * @memberof GroupPollSchemaAllOf
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the group poll was last updated.
     * @type {number}
     * @memberof GroupPollSchemaAllOf
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the group poll.
     * @type {number}
     * @memberof GroupPollSchemaAllOf
     */
    comment_count?: number;
    /**
     * Count of likes on the group poll.
     * @type {number}
     * @memberof GroupPollSchemaAllOf
     */
    likes_count?: number;
}