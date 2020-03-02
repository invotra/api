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
 * @interface RegionSchemaCommon
 */
export interface RegionSchemaCommon {
    /**
     * Name of the region.
     * @type {string}
     * @memberof RegionSchemaCommon
     */
    name?: string;
    /**
     * Description of the region.
     * @type {string}
     * @memberof RegionSchemaCommon
     */
    description?: string;
    /**
     * The region external reference id.
     * @type {string}
     * @memberof RegionSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent region.
     * @type {string}
     * @memberof RegionSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this region is published.
     * @type {boolean}
     * @memberof RegionSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a region in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof RegionSchemaCommon
     */
    weight?: number;
}
