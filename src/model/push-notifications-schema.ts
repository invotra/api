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
 * @interface PushNotificationsSchema
 */
export interface PushNotificationsSchema {
    /**
     * The type of file.
     * @type {string}
     * @memberof PushNotificationsSchema
     */
    token?: string;
    /**
     * The unique device id of the device the user is using.
     * @type {string}
     * @memberof PushNotificationsSchema
     */
    device_id?: string;
    /**
     * The OS platform of the user\'s device.
     * @type {string}
     * @memberof PushNotificationsSchema
     */
    platform?: PushNotificationsSchemaPlatformEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum PushNotificationsSchemaPlatformEnum {
    Ios = 'ios',
    Android = 'android'
}



