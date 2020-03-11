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
 * @interface FileSchemaUpdate
 */
export interface FileSchemaUpdate {
    /**
     * This is the filename. If using multipart/form-data this field may be omitted in favour of the \'filename\' directive of the subpart Content-Disposition header.
     * @type {string}
     * @memberof FileSchemaUpdate
     */
    filename?: string;
    /**
     * The type of file.
     * @type {string}
     * @memberof FileSchemaUpdate
     */
    type?: FileSchemaUpdateTypeEnum;
    /**
     * The MIME type for the file. If using multipart/form-data this field may be omitted in favour of the subpart Content-Type header.
     * @type {string}
     * @memberof FileSchemaUpdate
     */
    filemime?: string;
    /**
     * Base64 encoded version of the file.
     * @type {string}
     * @memberof FileSchemaUpdate
     */
    file?: string;
    /**
     * Alt text for an image.
     * @type {string}
     * @memberof FileSchemaUpdate
     */
    alt_text?: string;
}
/**
    * @export
    * @enum {string}
    */
export declare enum FileSchemaUpdateTypeEnum {
    Image = "image",
    Document = "document",
    Audio = "audio",
    Video = "video"
}