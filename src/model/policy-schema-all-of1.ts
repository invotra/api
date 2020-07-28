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
import { FileSchema } from './file-schema';
import { PolicySchemaAllOf1Country } from './policy-schema-all-of1-country';
import { PolicySchemaAllOf1GeneralTopic } from './policy-schema-all-of1-general-topic';
import { PolicySchemaAllOf1PolicyType } from './policy-schema-all-of1-policy-type';
import { PolicySchemaAllOf1PrimaryCategory } from './policy-schema-all-of1-primary-category';
import { PolicySchemaAllOf1SiteSection } from './policy-schema-all-of1-site-section';
import { PolicySchemaAllOf1Team } from './policy-schema-all-of1-team';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * 
 * @export
 * @interface PolicySchemaAllOf1
 */
export interface PolicySchemaAllOf1 {
    /**
     * 
     * @type {PolicySchemaAllOf1SiteSection}
     * @memberof PolicySchemaAllOf1
     */
    site_section?: PolicySchemaAllOf1SiteSection;
    /**
     * 
     * @type {PolicySchemaAllOf1PolicyType}
     * @memberof PolicySchemaAllOf1
     */
    policy_type?: PolicySchemaAllOf1PolicyType;
    /**
     * 
     * @type {PolicySchemaAllOf1PrimaryCategory}
     * @memberof PolicySchemaAllOf1
     */
    primary_category?: PolicySchemaAllOf1PrimaryCategory;
    /**
     * 
     * @type {PolicySchemaAllOf1GeneralTopic}
     * @memberof PolicySchemaAllOf1
     */
    general_topic?: PolicySchemaAllOf1GeneralTopic;
    /**
     * 
     * @type {PolicySchemaAllOf1Country}
     * @memberof PolicySchemaAllOf1
     */
    country?: PolicySchemaAllOf1Country;
    /**
     * 
     * @type {PolicySchemaAllOf1Team}
     * @memberof PolicySchemaAllOf1
     */
    team?: PolicySchemaAllOf1Team;
    /**
     * The locations targeting this policy.
     * @type {Array<CustomContentSchemaAllOf1Locations>}
     * @memberof PolicySchemaAllOf1
     */
    locations?: Array<CustomContentSchemaAllOf1Locations>;
    /**
     * The grades targeting this policy.
     * @type {Array<CustomContentSchemaAllOf1Grades>}
     * @memberof PolicySchemaAllOf1
     */
    grades?: Array<CustomContentSchemaAllOf1Grades>;
    /**
     * The regions targeting this policy.
     * @type {Array<CustomContentSchemaAllOf1Regions>}
     * @memberof PolicySchemaAllOf1
     */
    regions?: Array<CustomContentSchemaAllOf1Regions>;
    /**
     * List of attachments on the policy.
     * @type {Array<FileSchema>}
     * @memberof PolicySchemaAllOf1
     */
    attachments?: Array<FileSchema>;
    /**
     * The owner user of the policy.
     * @type {UserTrimmedSchema}
     * @memberof PolicySchemaAllOf1
     */
    owner?: UserTrimmedSchema;
    /**
     * This is the timestamp (in seconds) of when the policy was created.
     * @type {number}
     * @memberof PolicySchemaAllOf1
     */
    timestamp_created?: number;
    /**
     * This is the timestamp (in seconds) of when the policy was last updated.
     * @type {number}
     * @memberof PolicySchemaAllOf1
     */
    timestamp_updated?: number;
    /**
     * Count of comments on the policy.
     * @type {number}
     * @memberof PolicySchemaAllOf1
     */
    comment_count?: number;
    /**
     * Count of likes on the policy.
     * @type {number}
     * @memberof PolicySchemaAllOf1
     */
    likes_count?: number;
    /**
     * Published status for the policy.
     * @type {boolean}
     * @memberof PolicySchemaAllOf1
     */
    published?: boolean;
}


