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


import { CustomContentSchemaAllOf1Grades } from './custom-content-schema-all-of1-grades';
import { CustomContentSchemaAllOf1Locations } from './custom-content-schema-all-of1-locations';
import { CustomContentSchemaAllOf1Regions } from './custom-content-schema-all-of1-regions';
import { FileSchema } from './file-schema';
import { PromotionSchemaAllOf } from './promotion-schema-all-of';
import { PromotionSchemaAllOf1 } from './promotion-schema-all-of1';
import { PromotionSchemaAllOf1SiteSection } from './promotion-schema-all-of1-site-section';
import { PromotionSchemaAllOf1Team } from './promotion-schema-all-of1-team';
import { PromotionSchemaCommon } from './promotion-schema-common';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * @type PromotionSchema
 * @export
 */
export type PromotionSchema = PromotionSchemaAllOf & PromotionSchemaAllOf1 & PromotionSchemaCommon;



