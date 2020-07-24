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
import { FileSchema } from './file-schema';
import { LocationTrimmedSchema } from './location-trimmed-schema';
import { PageSchemaAllOf1SiteSection } from './page-schema-all-of1-site-section';
import { PageSchemaAllOf1Team } from './page-schema-all-of1-team';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * 
 * @export
 * @interface PageSchemaAllOf1
 */
export interface PageSchemaAllOf1 {
    /**
     * 
     * @type {PageSchemaAllOf1SiteSection}
     * @memberof PageSchemaAllOf1
     */
    site_section?: PageSchemaAllOf1SiteSection;
    /**
     * Page Image.
     * @type {FileSchema}
     * @memberof PageSchemaAllOf1
     */
    image?: FileSchema;
    /**
     * The author of this page.
     * @type {UserTrimmedSchema}
     * @memberof PageSchemaAllOf1
     */
    author?: UserTrimmedSchema;
    /**
     * A list of attachments for the page.
     * @type {Array<FileSchema>}
     * @memberof PageSchemaAllOf1
     */
    attachments?: Array<FileSchema>;
    /**
     * The owner user of the page.
     * @type {UserTrimmedSchema}
     * @memberof PageSchemaAllOf1
     */
    owner?: UserTrimmedSchema;
    /**
     * 
     * @type {PageSchemaAllOf1Team}
     * @memberof PageSchemaAllOf1
     */
    team?: PageSchemaAllOf1Team;
    /**
     * The locations targeting this page.
     * @type {Array<LocationTrimmedSchema>}
     * @memberof PageSchemaAllOf1
     */
    locations?: Array<LocationTrimmedSchema>;
    /**
     * The grades targeting this page.
     * @type {Array<CustomContentSchemaAllOf1Grades>}
     * @memberof PageSchemaAllOf1
     */
    grades?: Array<CustomContentSchemaAllOf1Grades>;
    /**
     * The regions targeting this page.
     * @type {Array<CustomContentSchemaAllOf1Regions>}
     * @memberof PageSchemaAllOf1
     */
    regions?: Array<CustomContentSchemaAllOf1Regions>;
    /**
     * This is the timestamp (in seconds) of when the page was created.
     * @type {number}
     * @memberof PageSchemaAllOf1
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the page was last updated.
     * @type {number}
     * @memberof PageSchemaAllOf1
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the page.
     * @type {number}
     * @memberof PageSchemaAllOf1
     */
    comment_count?: number;
    /**
     * Count of likes on the page.
     * @type {number}
     * @memberof PageSchemaAllOf1
     */
    likes_count?: number;
    /**
     * Published status for the page.
     * @type {boolean}
     * @memberof PageSchemaAllOf1
     */
    published?: boolean;
}


