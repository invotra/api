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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { InlineResponse20043 } from '../model';
import { OrganisationalSkillSchema } from '../model';
import { OrganisationalSkillSchemaCommon } from '../model';
import { OrganisationalSkillSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * OrganisationalSkillsApi - axios parameter creator
 * @export
 */
export declare const OrganisationalSkillsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): RequestArgs;
    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): RequestArgs;
    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): RequestArgs;
    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): RequestArgs;
};
/**
 * OrganisationalSkillsApi - functional programming interface
 * @export
 */
export declare const OrganisationalSkillsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20043>;
    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<OrganisationalSkillSchema>;
    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * OrganisationalSkillsApi - factory interface
 * @export
 */
export declare const OrganisationalSkillsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20043>;
    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): AxiosPromise<OrganisationalSkillSchema>;
    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * OrganisationalSkillsApi - interface
 * @export
 * @interface OrganisationalSkillsApi
 */
export interface OrganisationalSkillsApiInterface {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApiInterface
     */
    organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20043>;
    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApiInterface
     */
    organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApiInterface
     */
    organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): AxiosPromise<OrganisationalSkillSchema>;
    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApiInterface
     */
    organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApiInterface
     */
    organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * OrganisationalSkillsApi - object-oriented interface
 * @export
 * @class OrganisationalSkillsApi
 * @extends {BaseAPI}
 */
export declare class OrganisationalSkillsApi extends BaseAPI implements OrganisationalSkillsApiInterface {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20043>;
    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): AxiosPromise<OrganisationalSkillSchema>;
    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
