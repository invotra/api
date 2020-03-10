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



/**
 * 
 * @export
 * @interface NotificationItemSchema
 */
export interface NotificationItemSchema {
    /**
     * This is the uuid of the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    uuid: string;
    /**
     * This is the timestamp (in seconds) of when the notification was created
     * @type {number}
     * @memberof NotificationItemSchema
     */
    timestamp?: number;
    /**
     * This is image of the user who created the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    image?: string;
    /**
     * This is link to the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    link?: string;
    /**
     * This is text description of the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    message?: string;
    /**
     * This is type of the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    type?: NotificationItemSchemaTypeEnum;
    /**
     * Whether the notification has been read or not
     * @type {boolean}
     * @memberof NotificationItemSchema
     */
    status?: boolean;
    /**
     * This is the uuid of the entity that the notification links to
     * @type {string}
     * @memberof NotificationItemSchema
     */
    target_uuid?: string;
    /**
     * This is the type of the entity that the notification links to
     * @type {string}
     * @memberof NotificationItemSchema
     */
    target_type?: NotificationItemSchemaTargetTypeEnum;
    /**
     * This is the subtype (or \"bundle\" in Drupal parlance) of the entity that the notification links to
     * @type {string}
     * @memberof NotificationItemSchema
     */
    target_subtype?: string;
    /**
     * The user who generated the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    title?: string;
    /**
     * The subject of the notification
     * @type {string}
     * @memberof NotificationItemSchema
     */
    body?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationItemSchemaTypeEnum {
    UserMention = 'invotra.user.mention',
    UserFollow = 'invotra.user.follow',
    CommentReply = 'invotra.comment.reply',
    PostLike = 'invotra.post.like',
    PostComment = 'invotra.post.comment',
    CommentLike = 'invotra.comment.like'
}
/**
    * @export
    * @enum {string}
    */
export enum NotificationItemSchemaTargetTypeEnum {
    Node = 'node',
    User = 'user',
    Comment = 'comment'
}



