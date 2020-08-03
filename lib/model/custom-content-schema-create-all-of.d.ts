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
 * @interface CustomContentSchemaCreateAllOf
 */
export interface CustomContentSchemaCreateAllOf {
    /**
     *
     * @type {CustomContentSchemaUpdateAllOfSiteSection}
     * @memberof CustomContentSchemaCreateAllOf
     */
    site_section: CustomContentSchemaUpdateAllOfSiteSection;
    /**
     *
     * @type {CustomContentSchemaUpdateAllOfImage}
     * @memberof CustomContentSchemaCreateAllOf
     */
    image?: CustomContentSchemaUpdateAllOfImage;
    /**
     *
     * @type {CustomContentSchemaUpdateAllOfAuthor}
     * @memberof CustomContentSchemaCreateAllOf
     */
    author?: CustomContentSchemaUpdateAllOfAuthor;
    /**
     * The attached files of this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfAttachments>}
     * @memberof CustomContentSchemaCreateAllOf
     */
    attachments?: Array<CustomContentSchemaUpdateAllOfAttachments>;
    /**
     *
     * @type {CustomContentSchemaUpdateAllOfOwner}
     * @memberof CustomContentSchemaCreateAllOf
     */
    owner: CustomContentSchemaUpdateAllOfOwner;
    /**
     *
     * @type {CustomContentSchemaUpdateAllOfTeam}
     * @memberof CustomContentSchemaCreateAllOf
     */
    team?: CustomContentSchemaUpdateAllOfTeam;
    /**
     * The locations targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfLocations>}
     * @memberof CustomContentSchemaCreateAllOf
     */
    locations?: Array<CustomContentSchemaUpdateAllOfLocations>;
    /**
     * The grades targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfGrades>}
     * @memberof CustomContentSchemaCreateAllOf
     */
    grades?: Array<CustomContentSchemaUpdateAllOfGrades>;
    /**
     * The regions targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfRegions>}
     * @memberof CustomContentSchemaCreateAllOf
     */
    regions?: Array<CustomContentSchemaUpdateAllOfRegions>;
}
