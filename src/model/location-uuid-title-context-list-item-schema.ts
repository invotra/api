// tslint:disable
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


import { LocationContextListItemSchema } from './location-context-list-item-schema';

/**
 * 
 * @export
 * @interface LocationUuidTitleContextListItemSchema
 */
export interface LocationUuidTitleContextListItemSchema {
    /**
     * The entity UUID.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    uuid?: string;
    /**
     * The entity title.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    title?: string;
    /**
     * The location type.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    type?: LocationUuidTitleContextListItemSchemaTypeEnum;
    /**
     * The description of the location.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    description?: string;
    /**
     * The parent UUID.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    parent_uuid?: string;
    /**
     * The location external reference id.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    external_id?: string;
    /**
     * The first line of the location\'s postal address.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    address1?: string;
    /**
     * The second line of the location\'s postal address.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    address2?: string;
    /**
     * The third line of the location\'s postal address.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    address3?: string;
    /**
     * The town where the location is.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    town?: string;
    /**
     * The location\'s postal code or zip code, if any.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    postcode?: string;
    /**
     * A team associated with the location.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    team?: string;
    /**
     * The location\'s telephone number.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    phone?: string;
    /**
     * The location\'s email address.
     * @type {string}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    email?: string;
    /**
     * Parent items of the entity that was returned. Ordered from the immediate parent, 3 levels up, towards the root.
     * @type {Array<LocationContextListItemSchema>}
     * @memberof LocationUuidTitleContextListItemSchema
     */
    context?: Array<LocationContextListItemSchema>;
}

/**
    * @export
    * @enum {string}
    */
export enum LocationUuidTitleContextListItemSchemaTypeEnum {
    Site = 'site',
    Building = 'building',
    Floor = 'floor',
    Space = 'space'
}



