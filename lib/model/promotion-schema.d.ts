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
import { PromotionSchemaAllOf } from './promotion-schema-all-of';
import { PromotionSchemaAllOf1 } from './promotion-schema-all-of1';
import { PromotionSchemaCommon } from './promotion-schema-common';
/**
 * @type PromotionSchema
 * @export
 */
export declare type PromotionSchema = PromotionSchemaAllOf & PromotionSchemaAllOf1 & PromotionSchemaCommon;
