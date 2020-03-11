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


import { CustomContentSchemaUpdateAllOfAttachments } from './custom-content-schema-update-all-of-attachments';
import { CustomContentSchemaUpdateAllOfAuthor } from './custom-content-schema-update-all-of-author';
import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfImage } from './custom-content-schema-update-all-of-image';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfOwner } from './custom-content-schema-update-all-of-owner';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { CustomContentSchemaUpdateAllOfSiteSection } from './custom-content-schema-update-all-of-site-section';
import { CustomContentSchemaUpdateAllOfTeam } from './custom-content-schema-update-all-of-team';

/**
 * 
 * @export
 * @interface CustomContentSchemaUpdateAllOf
 */
export interface CustomContentSchemaUpdateAllOf {
    /**
     * The timestamp of the schedule date (in seconds). If present the content is scheduled for a workflow state change, if not, the workflow state will be changed immediately.
     * @type {number}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    schedule_date_timestamp?: number;
    /**
     * 
     * @type {CustomContentSchemaUpdateAllOfSiteSection}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    site_section?: CustomContentSchemaUpdateAllOfSiteSection;
    /**
     * 
     * @type {CustomContentSchemaUpdateAllOfImage}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    image?: CustomContentSchemaUpdateAllOfImage;
    /**
     * 
     * @type {CustomContentSchemaUpdateAllOfAuthor}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    author?: CustomContentSchemaUpdateAllOfAuthor;
    /**
     * The attatched files of this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfAttachments>}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    attachments?: Array<CustomContentSchemaUpdateAllOfAttachments>;
    /**
     * 
     * @type {CustomContentSchemaUpdateAllOfOwner}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    owner?: CustomContentSchemaUpdateAllOfOwner;
    /**
     * 
     * @type {CustomContentSchemaUpdateAllOfTeam}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    team?: CustomContentSchemaUpdateAllOfTeam;
    /**
     * The locations targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfLocations>}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    locations?: Array<CustomContentSchemaUpdateAllOfLocations>;
    /**
     * The grades targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfGrades>}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    grades?: Array<CustomContentSchemaUpdateAllOfGrades>;
    /**
     * The regions targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfRegions>}
     * @memberof CustomContentSchemaUpdateAllOf
     */
    regions?: Array<CustomContentSchemaUpdateAllOfRegions>;
}


