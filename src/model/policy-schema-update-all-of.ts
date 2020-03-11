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
import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { PolicySchemaUpdateAllOfCountry } from './policy-schema-update-all-of-country';
import { PolicySchemaUpdateAllOfGeneralTopic } from './policy-schema-update-all-of-general-topic';
import { PolicySchemaUpdateAllOfOwner } from './policy-schema-update-all-of-owner';
import { PolicySchemaUpdateAllOfPolicyType } from './policy-schema-update-all-of-policy-type';
import { PolicySchemaUpdateAllOfPrimaryCategory } from './policy-schema-update-all-of-primary-category';
import { PolicySchemaUpdateAllOfSiteSection } from './policy-schema-update-all-of-site-section';
import { PolicySchemaUpdateAllOfTeam } from './policy-schema-update-all-of-team';

/**
 * 
 * @export
 * @interface PolicySchemaUpdateAllOf
 */
export interface PolicySchemaUpdateAllOf {
    /**
     * 
     * @type {PolicySchemaUpdateAllOfSiteSection}
     * @memberof PolicySchemaUpdateAllOf
     */
    site_section?: PolicySchemaUpdateAllOfSiteSection;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfPolicyType}
     * @memberof PolicySchemaUpdateAllOf
     */
    policy_type?: PolicySchemaUpdateAllOfPolicyType;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfPrimaryCategory}
     * @memberof PolicySchemaUpdateAllOf
     */
    primary_category?: PolicySchemaUpdateAllOfPrimaryCategory;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfGeneralTopic}
     * @memberof PolicySchemaUpdateAllOf
     */
    general_topic?: PolicySchemaUpdateAllOfGeneralTopic;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfCountry}
     * @memberof PolicySchemaUpdateAllOf
     */
    country?: PolicySchemaUpdateAllOfCountry;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfTeam}
     * @memberof PolicySchemaUpdateAllOf
     */
    team?: PolicySchemaUpdateAllOfTeam;
    /**
     * The locations targeting this policy.
     * @type {Array<CustomContentSchemaUpdateAllOfLocations>}
     * @memberof PolicySchemaUpdateAllOf
     */
    locations?: Array<CustomContentSchemaUpdateAllOfLocations>;
    /**
     * The grades targeting this policy.
     * @type {Array<CustomContentSchemaUpdateAllOfGrades>}
     * @memberof PolicySchemaUpdateAllOf
     */
    grades?: Array<CustomContentSchemaUpdateAllOfGrades>;
    /**
     * The regions targeting this policy.
     * @type {Array<CustomContentSchemaUpdateAllOfRegions>}
     * @memberof PolicySchemaUpdateAllOf
     */
    regions?: Array<CustomContentSchemaUpdateAllOfRegions>;
    /**
     * The attatched files of this policy.
     * @type {Array<CustomContentSchemaUpdateAllOfAttachments>}
     * @memberof PolicySchemaUpdateAllOf
     */
    attachments?: Array<CustomContentSchemaUpdateAllOfAttachments>;
    /**
     * 
     * @type {PolicySchemaUpdateAllOfOwner}
     * @memberof PolicySchemaUpdateAllOf
     */
    owner?: PolicySchemaUpdateAllOfOwner;
}

