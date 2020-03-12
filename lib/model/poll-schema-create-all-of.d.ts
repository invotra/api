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
import { GroupPollSchemaCreateAllOfOptions } from './group-poll-schema-create-all-of-options';
import { PollSchemaCreateAllOfAuthor } from './poll-schema-create-all-of-author';
/**
 *
 * @export
 * @interface PollSchemaCreateAllOf
 */
export interface PollSchemaCreateAllOf {
    /**
     * The question the poll is asking.
     * @type {string}
     * @memberof PollSchemaCreateAllOf
     */
    title: string;
    /**
     *
     * @type {PollSchemaCreateAllOfAuthor}
     * @memberof PollSchemaCreateAllOf
     */
    author?: PollSchemaCreateAllOfAuthor;
    /**
     * The options for this group poll.
     * @type {Array<GroupPollSchemaCreateAllOfOptions>}
     * @memberof PollSchemaCreateAllOf
     */
    options: Array<GroupPollSchemaCreateAllOfOptions>;
}
