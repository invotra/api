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
import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { NewsSchemaCreateAllOfAuthor } from './news-schema-create-all-of-author';
import { NewsSchemaUpdateAllOfImage } from './news-schema-update-all-of-image';
import { NewsSchemaUpdateAllOfOwner } from './news-schema-update-all-of-owner';
import { NewsSchemaUpdateAllOfSiteSection } from './news-schema-update-all-of-site-section';
import { NewsSchemaUpdateAllOfTeam } from './news-schema-update-all-of-team';
/**
 *
 * @export
 * @interface NewsSchemaCreateAllOf
 */
export interface NewsSchemaCreateAllOf {
    /**
     *
     * @type {NewsSchemaUpdateAllOfSiteSection}
     * @memberof NewsSchemaCreateAllOf
     */
    site_section: NewsSchemaUpdateAllOfSiteSection;
    /**
     *
     * @type {NewsSchemaUpdateAllOfImage}
     * @memberof NewsSchemaCreateAllOf
     */
    image?: NewsSchemaUpdateAllOfImage;
    /**
     *
     * @type {NewsSchemaCreateAllOfAuthor}
     * @memberof NewsSchemaCreateAllOf
     */
    author?: NewsSchemaCreateAllOfAuthor;
    /**
     * The attatched files of this news item.
     * @type {Array<CustomContentSchemaUpdateAllOfAttachments>}
     * @memberof NewsSchemaCreateAllOf
     */
    attachments?: Array<CustomContentSchemaUpdateAllOfAttachments>;
    /**
     *
     * @type {NewsSchemaUpdateAllOfOwner}
     * @memberof NewsSchemaCreateAllOf
     */
    owner: NewsSchemaUpdateAllOfOwner;
    /**
     *
     * @type {NewsSchemaUpdateAllOfTeam}
     * @memberof NewsSchemaCreateAllOf
     */
    team?: NewsSchemaUpdateAllOfTeam;
    /**
     * The locations targeting this news item.
     * @type {Array<CustomContentSchemaUpdateAllOfLocations>}
     * @memberof NewsSchemaCreateAllOf
     */
    locations?: Array<CustomContentSchemaUpdateAllOfLocations>;
    /**
     * The grades targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfGrades>}
     * @memberof NewsSchemaCreateAllOf
     */
    grades?: Array<CustomContentSchemaUpdateAllOfGrades>;
    /**
     * The regions targeting this custom content.
     * @type {Array<CustomContentSchemaUpdateAllOfRegions>}
     * @memberof NewsSchemaCreateAllOf
     */
    regions?: Array<CustomContentSchemaUpdateAllOfRegions>;
}