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
import { CustomContentSchemaUpdateAllOfGrades } from './custom-content-schema-update-all-of-grades';
import { CustomContentSchemaUpdateAllOfLocations } from './custom-content-schema-update-all-of-locations';
import { CustomContentSchemaUpdateAllOfRegions } from './custom-content-schema-update-all-of-regions';
import { ListSchemaUpdateAllOfAuthor } from './list-schema-update-all-of-author';
import { ListSchemaUpdateAllOfGeneralTopic } from './list-schema-update-all-of-general-topic';
import { ListSchemaUpdateAllOfSiteSection } from './list-schema-update-all-of-site-section';
import { ListSchemaUpdateAllOfTeam } from './list-schema-update-all-of-team';
/**
 *
 * @export
 * @interface ListSchemaUpdateAllOf
 */
export interface ListSchemaUpdateAllOf {
    /**
     *
     * @type {ListSchemaUpdateAllOfSiteSection}
     * @memberof ListSchemaUpdateAllOf
     */
    site_section?: ListSchemaUpdateAllOfSiteSection;
    /**
     *
     * @type {ListSchemaUpdateAllOfAuthor}
     * @memberof ListSchemaUpdateAllOf
     */
    author?: ListSchemaUpdateAllOfAuthor;
    /**
     *
     * @type {ListSchemaUpdateAllOfGeneralTopic}
     * @memberof ListSchemaUpdateAllOf
     */
    general_topic?: ListSchemaUpdateAllOfGeneralTopic;
    /**
     *
     * @type {ListSchemaUpdateAllOfTeam}
     * @memberof ListSchemaUpdateAllOf
     */
    team?: ListSchemaUpdateAllOfTeam;
    /**
     * The locations targeting this list.
     * @type {Array<CustomContentSchemaUpdateAllOfLocations>}
     * @memberof ListSchemaUpdateAllOf
     */
    locations?: Array<CustomContentSchemaUpdateAllOfLocations>;
    /**
     * The grades targeting this list.
     * @type {Array<CustomContentSchemaUpdateAllOfGrades>}
     * @memberof ListSchemaUpdateAllOf
     */
    grades?: Array<CustomContentSchemaUpdateAllOfGrades>;
    /**
     * The regions targeting this list.
     * @type {Array<CustomContentSchemaUpdateAllOfRegions>}
     * @memberof ListSchemaUpdateAllOf
     */
    regions?: Array<CustomContentSchemaUpdateAllOfRegions>;
}
