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


import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { CustomContentSchemaUpdateAllOfSiteSection } from './custom-content-schema-update-all-of-site-section';
import { ListListContentSchema } from './list-list-content-schema';
import { ListListLinkSchema } from './list-list-link-schema';
import { ListListSiteSectionSchema } from './list-list-site-section-schema';
import { ListSchemaCommon } from './list-schema-common';
import { ListSchemaCreateAllOf } from './list-schema-create-all-of';
import { ListSchemaCreateAllOfAuthor } from './list-schema-create-all-of-author';
import { ListSchemaUpdateAllOfGeneralTopic } from './list-schema-update-all-of-general-topic';
import { ListSchemaUpdateAllOfTeam } from './list-schema-update-all-of-team';

/**
 * @type ListSchemaCreate
 * @export
 */
export type ListSchemaCreate = ListSchemaCommon & ListSchemaCreateAllOf;



