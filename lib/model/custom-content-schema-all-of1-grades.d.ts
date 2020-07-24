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
/**
 *
 * @export
 * @interface CustomContentSchemaAllOf1Grades
 */
export interface CustomContentSchemaAllOf1Grades {
    /**
     * Invotra UUID of the grade.
     * @type {string}
     * @memberof CustomContentSchemaAllOf1Grades
     */
    uuid?: string;
    /**
     * Name of the grade.
     * @type {string}
     * @memberof CustomContentSchemaAllOf1Grades
     */
    name?: string;
}
