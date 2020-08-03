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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

import { InlineResponse20043 } from '../model';
import { OrganisationalSkillSchema } from '../model';
import { OrganisationalSkillSchemaCommon } from '../model';
import { OrganisationalSkillSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * OrganisationalSkillsApi - axios parameter creator
 * @export
 */
export const OrganisationalSkillsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for organisational skills. An empty array is returned if no organisational skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of organisational skills on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/organisational_skills/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/organisational_skills:read"])
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
         * Delete an organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'organisational_skill_id' is not null or undefined
            if (organisational_skill_id === null || organisational_skill_id === undefined) {
                throw new RequiredError('organisational_skill_id','Required parameter organisational_skill_id was null or undefined when calling organisationalSkillsOrganisationalSkillIdDelete.');
            }
            const localVarPath = `/organisational_skills/{organisational_skill_id}`
                .replace(`{${"organisational_skill_id"}}`, encodeURIComponent(String(organisational_skill_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/organisational_skills:write"])
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
         * Get information about the organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'organisational_skill_id' is not null or undefined
            if (organisational_skill_id === null || organisational_skill_id === undefined) {
                throw new RequiredError('organisational_skill_id','Required parameter organisational_skill_id was null or undefined when calling organisationalSkillsOrganisationalSkillIdGet.');
            }
            const localVarPath = `/organisational_skills/{organisational_skill_id}`
                .replace(`{${"organisational_skill_id"}}`, encodeURIComponent(String(organisational_skill_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/organisational_skills:read"])
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
         * Update organisational skill information.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'organisational_skill_id' is not null or undefined
            if (organisational_skill_id === null || organisational_skill_id === undefined) {
                throw new RequiredError('organisational_skill_id','Required parameter organisational_skill_id was null or undefined when calling organisationalSkillsOrganisationalSkillIdPut.');
            }
            // verify required parameter 'OrganisationalSkillSchemaCommon' is not null or undefined
            if (OrganisationalSkillSchemaCommon === null || OrganisationalSkillSchemaCommon === undefined) {
                throw new RequiredError('OrganisationalSkillSchemaCommon','Required parameter OrganisationalSkillSchemaCommon was null or undefined when calling organisationalSkillsOrganisationalSkillIdPut.');
            }
            const localVarPath = `/organisational_skills/{organisational_skill_id}`
                .replace(`{${"organisational_skill_id"}}`, encodeURIComponent(String(organisational_skill_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/organisational_skills:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof OrganisationalSkillSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(OrganisationalSkillSchemaCommon !== undefined ? OrganisationalSkillSchemaCommon : {}) : (OrganisationalSkillSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new organisational skill.
         * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'OrganisationalSkillSchemaCreate' is not null or undefined
            if (OrganisationalSkillSchemaCreate === null || OrganisationalSkillSchemaCreate === undefined) {
                throw new RequiredError('OrganisationalSkillSchemaCreate','Required parameter OrganisationalSkillSchemaCreate was null or undefined when calling organisationalSkillsPost.');
            }
            const localVarPath = `/organisational_skills`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/organisational_skills:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof OrganisationalSkillSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(OrganisationalSkillSchemaCreate !== undefined ? OrganisationalSkillSchemaCreate : {}) : (OrganisationalSkillSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OrganisationalSkillsApi - functional programming interface
 * @export
 */
export const OrganisationalSkillsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for organisational skills. An empty array is returned if no organisational skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of organisational skills on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20043> {
            const localVarAxiosArgs = OrganisationalSkillsApiAxiosParamCreator(configuration).organisationalSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = OrganisationalSkillsApiAxiosParamCreator(configuration).organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<OrganisationalSkillSchema> {
            const localVarAxiosArgs = OrganisationalSkillsApiAxiosParamCreator(configuration).organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update organisational skill information.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = OrganisationalSkillsApiAxiosParamCreator(configuration).organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id, OrganisationalSkillSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new organisational skill.
         * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = OrganisationalSkillsApiAxiosParamCreator(configuration).organisationalSkillsPost(OrganisationalSkillSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OrganisationalSkillsApi - factory interface
 * @export
 */
export const OrganisationalSkillsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for organisational skills. An empty array is returned if no organisational skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of organisational skills on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20043> {
            return OrganisationalSkillsApiFp(configuration).organisationalSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete an organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any): AxiosPromise<void> {
            return OrganisationalSkillsApiFp(configuration).organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id, options)(axios, basePath);
        },
        /**
         * Get information about the organisational skill.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any): AxiosPromise<OrganisationalSkillSchema> {
            return OrganisationalSkillsApiFp(configuration).organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id, options)(axios, basePath);
        },
        /**
         * Update organisational skill information.
         * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
         * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any): AxiosPromise<void> {
            return OrganisationalSkillsApiFp(configuration).organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id, OrganisationalSkillSchemaCommon, options)(axios, basePath);
        },
        /**
         * Provision a new organisational skill.
         * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return OrganisationalSkillsApiFp(configuration).organisationalSkillsPost(OrganisationalSkillSchemaCreate, options)(axios, basePath);
        },
    };
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
     * @param {string} [status] Filter the list of organisational skills on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
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
export class OrganisationalSkillsApi extends BaseAPI implements OrganisationalSkillsApiInterface {
    /**
     * Search for organisational skills. An empty array is returned if no organisational skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of organisational skills on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the organisational skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    public organisationalSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return OrganisationalSkillsApiFp(this.configuration).organisationalSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete an organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    public organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id: string, options?: any) {
        return OrganisationalSkillsApiFp(this.configuration).organisationalSkillsOrganisationalSkillIdDelete(organisational_skill_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the organisational skill.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    public organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id: string, options?: any) {
        return OrganisationalSkillsApiFp(this.configuration).organisationalSkillsOrganisationalSkillIdGet(organisational_skill_id, options)(this.axios, this.basePath);
    }

    /**
     * Update organisational skill information.
     * @param {string} organisational_skill_id The Invotra UUID of the organisational skill.
     * @param {OrganisationalSkillSchemaCommon} OrganisationalSkillSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    public organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id: string, OrganisationalSkillSchemaCommon: OrganisationalSkillSchemaCommon, options?: any) {
        return OrganisationalSkillsApiFp(this.configuration).organisationalSkillsOrganisationalSkillIdPut(organisational_skill_id, OrganisationalSkillSchemaCommon, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new organisational skill.
     * @param {OrganisationalSkillSchemaCreate} OrganisationalSkillSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganisationalSkillsApi
     */
    public organisationalSkillsPost(OrganisationalSkillSchemaCreate: OrganisationalSkillSchemaCreate, options?: any) {
        return OrganisationalSkillsApiFp(this.configuration).organisationalSkillsPost(OrganisationalSkillSchemaCreate, options)(this.axios, this.basePath);
    }

}
