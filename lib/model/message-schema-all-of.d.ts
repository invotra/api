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
import { MessageSchemaAllOfMessageType } from './message-schema-all-of-message-type';
import { UserTrimmedSchema } from './user-trimmed-schema';
/**
 *
 * @export
 * @interface MessageSchemaAllOf
 */
export interface MessageSchemaAllOf {
    /**
     * Invotra UUID of the message.
     * @type {string}
     * @memberof MessageSchemaAllOf
     */
    uuid?: string;
    /**
     * The author of this message.
     * @type {UserTrimmedSchema}
     * @memberof MessageSchemaAllOf
     */
    author?: UserTrimmedSchema;
    /**
     *
     * @type {MessageSchemaAllOfMessageType}
     * @memberof MessageSchemaAllOf
     */
    message_type?: MessageSchemaAllOfMessageType;
    /**
     * This is the timestamp (in seconds) of when the message was created.
     * @type {number}
     * @memberof MessageSchemaAllOf
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the message was last updated.
     * @type {number}
     * @memberof MessageSchemaAllOf
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the message.
     * @type {number}
     * @memberof MessageSchemaAllOf
     */
    comment_count?: number;
    /**
     * Count of likes on the message.
     * @type {number}
     * @memberof MessageSchemaAllOf
     */
    likes_count?: number;
}
