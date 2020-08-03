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
import { PolicySchemaAllOf } from './policy-schema-all-of';
import { PolicySchemaAllOf1 } from './policy-schema-all-of1';
import { PolicySchemaCommon } from './policy-schema-common';
/**
 * @type PolicySchema
 * @export
 */
export declare type PolicySchema = PolicySchemaAllOf & PolicySchemaAllOf1 & PolicySchemaCommon;
