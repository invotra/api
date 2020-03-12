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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

import { InlineResponse20047 } from '../model';
import { ProjectSchema } from '../model';
import { ProjectSchemaCommon } from '../model';
import { ProjectSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ProjectsApi - axios parameter creator
 * @export
 */
export const ProjectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for projects. An empty array is returned if no projects are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/projects/list`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/projects:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (external_id !== undefined) {
                localVarQueryParameter['external_id'] = external_id;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (valid_parents_for !== undefined) {
                localVarQueryParameter['valid_parents_for'] = valid_parents_for;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new project.
         * @param {ProjectSchemaCreate} ProjectSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'ProjectSchemaCreate' is not null or undefined
            if (ProjectSchemaCreate === null || ProjectSchemaCreate === undefined) {
                throw new RequiredError('ProjectSchemaCreate','Required parameter ProjectSchemaCreate was null or undefined when calling projectsPost.');
            }
            const localVarPath = `/projects`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/projects:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof ProjectSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(ProjectSchemaCreate !== undefined ? ProjectSchemaCreate : {}) : (ProjectSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdDelete(project_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'project_id' is not null or undefined
            if (project_id === null || project_id === undefined) {
                throw new RequiredError('project_id','Required parameter project_id was null or undefined when calling projectsProjectIdDelete.');
            }
            const localVarPath = `/projects/{project_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(project_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/projects:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about the project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdGet(project_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'project_id' is not null or undefined
            if (project_id === null || project_id === undefined) {
                throw new RequiredError('project_id','Required parameter project_id was null or undefined when calling projectsProjectIdGet.');
            }
            const localVarPath = `/projects/{project_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(project_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/projects:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update project information.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {ProjectSchemaCommon} ProjectSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'project_id' is not null or undefined
            if (project_id === null || project_id === undefined) {
                throw new RequiredError('project_id','Required parameter project_id was null or undefined when calling projectsProjectIdPut.');
            }
            // verify required parameter 'ProjectSchemaCommon' is not null or undefined
            if (ProjectSchemaCommon === null || ProjectSchemaCommon === undefined) {
                throw new RequiredError('ProjectSchemaCommon','Required parameter ProjectSchemaCommon was null or undefined when calling projectsProjectIdPut.');
            }
            const localVarPath = `/projects/{project_id}`
                .replace(`{${"project_id"}}`, encodeURIComponent(String(project_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/projects:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof ProjectSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(ProjectSchemaCommon !== undefined ? ProjectSchemaCommon : {}) : (ProjectSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProjectsApi - functional programming interface
 * @export
 */
export const ProjectsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for projects. An empty array is returned if no projects are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20047> {
            const localVarAxiosArgs = ProjectsApiAxiosParamCreator(configuration).projectsListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new project.
         * @param {ProjectSchemaCreate} ProjectSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = ProjectsApiAxiosParamCreator(configuration).projectsPost(ProjectSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdDelete(project_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ProjectsApiAxiosParamCreator(configuration).projectsProjectIdDelete(project_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdGet(project_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProjectSchema> {
            const localVarAxiosArgs = ProjectsApiAxiosParamCreator(configuration).projectsProjectIdGet(project_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update project information.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {ProjectSchemaCommon} ProjectSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ProjectsApiAxiosParamCreator(configuration).projectsProjectIdPut(project_id, ProjectSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProjectsApi - factory interface
 * @export
 */
export const ProjectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for projects. An empty array is returned if no projects are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20047> {
            return ProjectsApiFp(configuration).projectsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new project.
         * @param {ProjectSchemaCreate} ProjectSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return ProjectsApiFp(configuration).projectsPost(ProjectSchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdDelete(project_id: string, options?: any): AxiosPromise<void> {
            return ProjectsApiFp(configuration).projectsProjectIdDelete(project_id, options)(axios, basePath);
        },
        /**
         * Get information about the project.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdGet(project_id: string, options?: any): AxiosPromise<ProjectSchema> {
            return ProjectsApiFp(configuration).projectsProjectIdGet(project_id, options)(axios, basePath);
        },
        /**
         * Update project information.
         * @param {string} project_id The Invotra UUID of the project.
         * @param {ProjectSchemaCommon} ProjectSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any): AxiosPromise<void> {
            return ProjectsApiFp(configuration).projectsProjectIdPut(project_id, ProjectSchemaCommon, options)(axios, basePath);
        },
    };
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
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
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
export class ProjectsApi extends BaseAPI implements ProjectsApiInterface {
    /**
     * Search for projects. An empty array is returned if no projects are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of projects on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the project.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public projectsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return ProjectsApiFp(this.configuration).projectsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new project.
     * @param {ProjectSchemaCreate} ProjectSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public projectsPost(ProjectSchemaCreate: ProjectSchemaCreate, options?: any) {
        return ProjectsApiFp(this.configuration).projectsPost(ProjectSchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public projectsProjectIdDelete(project_id: string, options?: any) {
        return ProjectsApiFp(this.configuration).projectsProjectIdDelete(project_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the project.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public projectsProjectIdGet(project_id: string, options?: any) {
        return ProjectsApiFp(this.configuration).projectsProjectIdGet(project_id, options)(this.axios, this.basePath);
    }

    /**
     * Update project information.
     * @param {string} project_id The Invotra UUID of the project.
     * @param {ProjectSchemaCommon} ProjectSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProjectsApi
     */
    public projectsProjectIdPut(project_id: string, ProjectSchemaCommon: ProjectSchemaCommon, options?: any) {
        return ProjectsApiFp(this.configuration).projectsProjectIdPut(project_id, ProjectSchemaCommon, options)(this.axios, this.basePath);
    }

}
