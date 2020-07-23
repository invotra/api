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
/**
 *
 * @export
 * @interface EventTopicSchemaCommon
 */
export interface EventTopicSchemaCommon {
    /**
     * Name of the event topic.
     * @type {string}
     * @memberof EventTopicSchemaCommon
     */
    name?: string;
    /**
     * Description of the event topic.
     * @type {string}
     * @memberof EventTopicSchemaCommon
     */
    description?: string;
    /**
     * The event topic external reference id.
     * @type {string}
     * @memberof EventTopicSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent event topic.
     * @type {string}
     * @memberof EventTopicSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this event topic is published.
     * @type {boolean}
     * @memberof EventTopicSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of an event topic in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof EventTopicSchemaCommon
     */
    weight?: number;
}
