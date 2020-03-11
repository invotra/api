// tslint:disable
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


import { CustomContentSchemaCommonRelatedContentLinks } from './custom-content-schema-common-related-content-links';
import { CustomContentSchemaCommonRelatedExternalLinks } from './custom-content-schema-common-related-external-links';
import { CustomContentSchemaUpdateAllOfAttachments } from './custom-content-schema-update-all-of-attachments';
import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { PageSchemaCommon } from './page-schema-common';
import { PageSchemaUpdateAllOf } from './page-schema-update-all-of';
import { PageSchemaUpdateAllOfAuthor } from './page-schema-update-all-of-author';
import { PageSchemaUpdateAllOfImage } from './page-schema-update-all-of-image';
import { PageSchemaUpdateAllOfOwner } from './page-schema-update-all-of-owner';
import { PageSchemaUpdateAllOfSiteSection } from './page-schema-update-all-of-site-section';
import { PageSchemaUpdateAllOfTeam } from './page-schema-update-all-of-team';

/**
 * @type PageSchemaUpdate
 * @export
 */
export type PageSchemaUpdate = PageSchemaCommon & PageSchemaUpdateAllOf;


