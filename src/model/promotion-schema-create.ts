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


import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { PromotionSchemaCommon } from './promotion-schema-common';
import { PromotionSchemaCreateAllOf } from './promotion-schema-create-all-of';
import { PromotionSchemaCreateAllOfAuthor } from './promotion-schema-create-all-of-author';
import { PromotionSchemaCreateAllOfOwner } from './promotion-schema-create-all-of-owner';
import { PromotionSchemaUpdateAllOfImage } from './promotion-schema-update-all-of-image';
import { PromotionSchemaUpdateAllOfSiteSection } from './promotion-schema-update-all-of-site-section';
import { PromotionSchemaUpdateAllOfTeam } from './promotion-schema-update-all-of-team';

/**
 * @type PromotionSchemaCreate
 * @export
 */
export type PromotionSchemaCreate = PromotionSchemaCommon & PromotionSchemaCreateAllOf;



