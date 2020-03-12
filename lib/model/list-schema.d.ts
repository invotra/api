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
import { ListSchemaAllOf } from './list-schema-all-of';
import { ListSchemaAllOf1 } from './list-schema-all-of1';
import { ListSchemaCommon } from './list-schema-common';
/**
 * @type ListSchema
 * @export
 */
export declare type ListSchema = ListSchemaAllOf & ListSchemaAllOf1 & ListSchemaCommon;
