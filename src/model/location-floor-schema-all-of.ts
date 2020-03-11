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


import { LocationContextListItemSchema } from './location-context-list-item-schema';

/**
 * 
 * @export
 * @interface LocationFloorSchemaAllOf
 */
export interface LocationFloorSchemaAllOf {
    /**
     * This is the Invotra UUID of the floor.
     * @type {string}
     * @memberof LocationFloorSchemaAllOf
     */
    uuid?: string;
    /**
     * The type of location.
     * @type {string}
     * @memberof LocationFloorSchemaAllOf
     */
    type?: LocationFloorSchemaAllOfTypeEnum;
    /**
     * Parent items of the entity that was returned. Ordered from the immediate parent, 3 levels up, towards the root.
     * @type {Array<LocationContextListItemSchema>}
     * @memberof LocationFloorSchemaAllOf
     */
    context?: Array<LocationContextListItemSchema>;
}

/**
    * @export
    * @enum {string}
    */
export enum LocationFloorSchemaAllOfTypeEnum {
    Floor = 'floor'
}


