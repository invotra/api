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
import { ListListContentSchema } from './list-list-content-schema';
import { ListListLinkSchema } from './list-list-link-schema';
import { ListListSiteSectionSchema } from './list-list-site-section-schema';
import { ListSchemaAllOf } from './list-schema-all-of';
import { ListSchemaAllOf1 } from './list-schema-all-of1';
import { ListSchemaAllOf1GeneralTopic } from './list-schema-all-of1-general-topic';
import { ListSchemaAllOf1SiteSection } from './list-schema-all-of1-site-section';
import { ListSchemaAllOf1Team } from './list-schema-all-of1-team';
import { ListSchemaCommon } from './list-schema-common';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * @type ListSchema
 * @export
 */
export type ListSchema = ListSchemaAllOf & ListSchemaAllOf1 & ListSchemaCommon;



