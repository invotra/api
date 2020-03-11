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
 * @interface CustomContentSchemaAllOf1Locations
 */
export interface CustomContentSchemaAllOf1Locations {
    /**
     * Invotra UUID of the location.
     * @type {string}
     * @memberof CustomContentSchemaAllOf1Locations
     */
    uuid?: string;
    /**
     * The name of the location.
     * @type {string}
     * @memberof CustomContentSchemaAllOf1Locations
     */
    name?: string;
    /**
     * The location type.
     * @type {string}
     * @memberof CustomContentSchemaAllOf1Locations
     */
    type?: CustomContentSchemaAllOf1LocationsTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CustomContentSchemaAllOf1LocationsTypeEnum {
    Site = 'site',
    Building = 'building',
    Floor = 'floor',
    Space = 'space'
}


