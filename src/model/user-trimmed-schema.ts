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
 * @interface UserTrimmedSchema
 */
export interface UserTrimmedSchema {
    /**
     * Invotra UUID of the user.
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    uuid?: string;
    /**
     * The user\'s username
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    username?: string;
    /**
     * The user\'s title
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    title?: UserTrimmedSchemaTitleEnum;
    /**
     * The user\'s first name
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    firstname?: string;
    /**
     * The user\'s surname
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    surname?: string;
    /**
     * The user\'s image
     * @type {string}
     * @memberof UserTrimmedSchema
     */
    user_avatar?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum UserTrimmedSchemaTitleEnum {
    Empty = '',
    Dr = 'Dr',
    Mr = 'Mr',
    Miss = 'Miss',
    Mrs = 'Mrs',
    Ms = 'Ms'
}


