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
import { InlineResponse20047 } from '../model';
import { ProjectSchema } from '../model';
import { ProjectSchemaCommon } from '../model';
import { ProjectSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export declare const ProjectsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): RequestArgs;
    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdDelete(project_id: string, options?: any): RequestArgs;
    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdGet(project_id: string, options?: any): RequestArgs;
    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): RequestArgs;
};
/**
 * ProjectsApi - functional programming interface
 * @export
 */
export declare const ProjectsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20047>;
    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdDelete(project_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdGet(project_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ProjectSchema>;
    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * ProjectsApi - factory interface
 * @export
 */
export declare const ProjectsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20047>;
    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdDelete(project_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdGet(project_id: string, options?: any): AxiosPromise<ProjectSchema>;
    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): AxiosPromise<void>;
};
/**
 * ProjectsApi - interface
 * @export
 * @interface ProjectsApi
 */
export interface ProjectsApiInterface {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20047>;
    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    projectsProjectIdDelete(project_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    projectsProjectIdGet(project_id: string, options?: any): AxiosPromise<ProjectSchema>;
    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApiInterface
     */
    projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): AxiosPromise<void>;
}
/**
 * ProjectsApi - object-oriented interface
 * @export
 * @class ProjectsApi
 * @extends {BaseAPI}
 */
export declare class ProjectsApi extends BaseAPI implements ProjectsApiInterface {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20047>;
    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    projectsProjectIdDelete(project_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    projectsProjectIdGet(project_id: string, options?: any): AxiosPromise<ProjectSchema>;
    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): AxiosPromise<void>;
}
