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
 * @interface LocationTrimmedSchema
 */
export interface LocationTrimmedSchema {
    /**
     * Invotra UUID of the location.
     * @type {string}
     * @memberof LocationTrimmedSchema
     */
    uuid?: string;
    /**
     * The name of the location.
     * @type {string}
     * @memberof LocationTrimmedSchema
     */
    name?: string;
    /**
     * The location type.
     * @type {string}
     * @memberof LocationTrimmedSchema
     */
    type?: LocationTrimmedSchemaTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum LocationTrimmedSchemaTypeEnum {
    Site = 'site',
    Building = 'building',
    Floor = 'floor',
    Space = 'space'
}



