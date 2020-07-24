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



/**
 * 
 * @export
 * @interface OrganisationalSkillSchemaCommon
 */
export interface OrganisationalSkillSchemaCommon {
    /**
     * Name of the organisational skill.
     * @type {string}
     * @memberof OrganisationalSkillSchemaCommon
     */
    name?: string;
    /**
     * Description of the organisational skill.
     * @type {string}
     * @memberof OrganisationalSkillSchemaCommon
     */
    description?: string;
    /**
     * The organisational skill external reference id.
     * @type {string}
     * @memberof OrganisationalSkillSchemaCommon
     */
    external_id?: string;
    /**
     * Invotra UUID of the parent organisational skill.
     * @type {string}
     * @memberof OrganisationalSkillSchemaCommon
     */
    parent_uuid?: string;
    /**
     * Indicates that this organisational skill is published.
     * @type {boolean}
     * @memberof OrganisationalSkillSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of an organisational skill in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof OrganisationalSkillSchemaCommon
     */
    weight?: number;
}


