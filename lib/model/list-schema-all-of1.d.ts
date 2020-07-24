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
import { ListSchemaAllOf1GeneralTopic } from './list-schema-all-of1-general-topic';
import { ListSchemaAllOf1SiteSection } from './list-schema-all-of1-site-section';
import { ListSchemaAllOf1Team } from './list-schema-all-of1-team';
import { UserTrimmedSchema } from './user-trimmed-schema';
/**
 *
 * @export
 * @interface ListSchemaAllOf1
 */
export interface ListSchemaAllOf1 {
    /**
     *
     * @type {ListSchemaAllOf1SiteSection}
     * @memberof ListSchemaAllOf1
     */
    site_section?: ListSchemaAllOf1SiteSection;
    /**
     * The author of this list.
     * @type {UserTrimmedSchema}
     * @memberof ListSchemaAllOf1
     */
    author?: UserTrimmedSchema;
    /**
     *
     * @type {ListSchemaAllOf1GeneralTopic}
     * @memberof ListSchemaAllOf1
     */
    general_topic?: ListSchemaAllOf1GeneralTopic;
    /**
     *
     * @type {ListSchemaAllOf1Team}
     * @memberof ListSchemaAllOf1
     */
    team?: ListSchemaAllOf1Team;
    /**
     * The locations targeting this list.
     * @type {Array<CustomContentSchemaAllOf1Locations>}
     * @memberof ListSchemaAllOf1
     */
    locations?: Array<CustomContentSchemaAllOf1Locations>;
    /**
     * The grades targeting this list.
     * @type {Array<CustomContentSchemaAllOf1Grades>}
     * @memberof ListSchemaAllOf1
     */
    grades?: Array<CustomContentSchemaAllOf1Grades>;
    /**
     * The regions targeting this list.
     * @type {Array<CustomContentSchemaAllOf1Regions>}
     * @memberof ListSchemaAllOf1
     */
    regions?: Array<CustomContentSchemaAllOf1Regions>;
    /**
     * This is the timestamp (in seconds) of when the list was created.
     * @type {number}
     * @memberof ListSchemaAllOf1
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the list was last updated.
     * @type {number}
     * @memberof ListSchemaAllOf1
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the list.
     * @type {number}
     * @memberof ListSchemaAllOf1
     */
    comment_count?: number;
    /**
     * Count of likes on the list.
     * @type {number}
     * @memberof ListSchemaAllOf1
     */
    likes_count?: number;
    /**
     * Published status of the list.
     * @type {boolean}
     * @memberof ListSchemaAllOf1
     */
    published?: boolean;
}
