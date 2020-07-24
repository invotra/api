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
import { CustomContentSchemaAllOf1Regions } from './custom-content-schema-all-of1-regions';
import { CustomContentSchemaCommonRelatedContentLinks } from './custom-content-schema-common-related-content-links';
import { CustomContentSchemaCommonRelatedExternalLinks } from './custom-content-schema-common-related-external-links';
import { FileSchema } from './file-schema';
import { LocationTrimmedSchema } from './location-trimmed-schema';
import { NewsSchemaAllOf } from './news-schema-all-of';
import { NewsSchemaAllOfSiteSection } from './news-schema-all-of-site-section';
import { NewsSchemaAllOfTeam } from './news-schema-all-of-team';
import { NewsSchemaCommon } from './news-schema-common';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * @type NewsSchema
 * @export
 */
export type NewsSchema = NewsSchemaAllOf & NewsSchemaCommon;



