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

import { FreeSkillSchema } from '../model';
import { FreeSkillSchemaCommon } from '../model';
import { FreeSkillSchemaCreate } from '../model';
import { InlineResponse20036 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * FreeSkillsApi - axios parameter creator
 * @export
 */
export const FreeSkillsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdDelete(free_skill_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'free_skill_id' is not null or undefined
            if (free_skill_id === null || free_skill_id === undefined) {
                throw new RequiredError('free_skill_id','Required parameter free_skill_id was null or undefined when calling freeSkillsFreeSkillIdDelete.');
            }
            const localVarPath = `/free_skills/{free_skill_id}`
                .replace(`{${"free_skill_id"}}`, encodeURIComponent(String(free_skill_id)));
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
         * Get information about the free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdGet(free_skill_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'free_skill_id' is not null or undefined
            if (free_skill_id === null || free_skill_id === undefined) {
                throw new RequiredError('free_skill_id','Required parameter free_skill_id was null or undefined when calling freeSkillsFreeSkillIdGet.');
            }
            const localVarPath = `/free_skills/{free_skill_id}`
                .replace(`{${"free_skill_id"}}`, encodeURIComponent(String(free_skill_id)));
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
         * Update free skill information.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {FreeSkillSchemaCommon} FreeSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdPut(free_skill_id: string, FreeSkillSchemaCommon: FreeSkillSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'free_skill_id' is not null or undefined
            if (free_skill_id === null || free_skill_id === undefined) {
                throw new RequiredError('free_skill_id','Required parameter free_skill_id was null or undefined when calling freeSkillsFreeSkillIdPut.');
            }
            // verify required parameter 'FreeSkillSchemaCommon' is not null or undefined
            if (FreeSkillSchemaCommon === null || FreeSkillSchemaCommon === undefined) {
                throw new RequiredError('FreeSkillSchemaCommon','Required parameter FreeSkillSchemaCommon was null or undefined when calling freeSkillsFreeSkillIdPut.');
            }
            const localVarPath = `/free_skills/{free_skill_id}`
                .replace(`{${"free_skill_id"}}`, encodeURIComponent(String(free_skill_id)));
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

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof FreeSkillSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(FreeSkillSchemaCommon !== undefined ? FreeSkillSchemaCommon : {}) : (FreeSkillSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for free skills. An empty array is returned if no free skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of free skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the free skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/free_skills/list`;
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
         * Provision a new free skill.
         * @param {FreeSkillSchemaCreate} FreeSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsPost(FreeSkillSchemaCreate: FreeSkillSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'FreeSkillSchemaCreate' is not null or undefined
            if (FreeSkillSchemaCreate === null || FreeSkillSchemaCreate === undefined) {
                throw new RequiredError('FreeSkillSchemaCreate','Required parameter FreeSkillSchemaCreate was null or undefined when calling freeSkillsPost.');
            }
            const localVarPath = `/free_skills`;
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

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof FreeSkillSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(FreeSkillSchemaCreate !== undefined ? FreeSkillSchemaCreate : {}) : (FreeSkillSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FreeSkillsApi - functional programming interface
 * @export
 */
export const FreeSkillsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdDelete(free_skill_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = FreeSkillsApiAxiosParamCreator(configuration).freeSkillsFreeSkillIdDelete(free_skill_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdGet(free_skill_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<FreeSkillSchema> {
            const localVarAxiosArgs = FreeSkillsApiAxiosParamCreator(configuration).freeSkillsFreeSkillIdGet(free_skill_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update free skill information.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {FreeSkillSchemaCommon} FreeSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdPut(free_skill_id: string, FreeSkillSchemaCommon: FreeSkillSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = FreeSkillsApiAxiosParamCreator(configuration).freeSkillsFreeSkillIdPut(free_skill_id, FreeSkillSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search for free skills. An empty array is returned if no free skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of free skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the free skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20036> {
            const localVarAxiosArgs = FreeSkillsApiAxiosParamCreator(configuration).freeSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new free skill.
         * @param {FreeSkillSchemaCreate} FreeSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsPost(FreeSkillSchemaCreate: FreeSkillSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = FreeSkillsApiAxiosParamCreator(configuration).freeSkillsPost(FreeSkillSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * FreeSkillsApi - factory interface
 * @export
 */
export const FreeSkillsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdDelete(free_skill_id: string, options?: any): AxiosPromise<void> {
            return FreeSkillsApiFp(configuration).freeSkillsFreeSkillIdDelete(free_skill_id, options)(axios, basePath);
        },
        /**
         * Get information about the free skill.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdGet(free_skill_id: string, options?: any): AxiosPromise<FreeSkillSchema> {
            return FreeSkillsApiFp(configuration).freeSkillsFreeSkillIdGet(free_skill_id, options)(axios, basePath);
        },
        /**
         * Update free skill information.
         * @param {string} free_skill_id The Invotra UUID of the free skill.
         * @param {FreeSkillSchemaCommon} FreeSkillSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsFreeSkillIdPut(free_skill_id: string, FreeSkillSchemaCommon: FreeSkillSchemaCommon, options?: any): AxiosPromise<void> {
            return FreeSkillsApiFp(configuration).freeSkillsFreeSkillIdPut(free_skill_id, FreeSkillSchemaCommon, options)(axios, basePath);
        },
        /**
         * Search for free skills. An empty array is returned if no free skills are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of free skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the free skill.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20036> {
            return FreeSkillsApiFp(configuration).freeSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new free skill.
         * @param {FreeSkillSchemaCreate} FreeSkillSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        freeSkillsPost(FreeSkillSchemaCreate: FreeSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return FreeSkillsApiFp(configuration).freeSkillsPost(FreeSkillSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * FreeSkillsApi - interface
 * @export
 * @interface FreeSkillsApi
 */
export interface FreeSkillsApiInterface {
    /**
     * Delete a free skill.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApiInterface
     */
    freeSkillsFreeSkillIdDelete(free_skill_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the free skill.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApiInterface
     */
    freeSkillsFreeSkillIdGet(free_skill_id: string, options?: any): AxiosPromise<FreeSkillSchema>;

    /**
     * Update free skill information.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {FreeSkillSchemaCommon} FreeSkillSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApiInterface
     */
    freeSkillsFreeSkillIdPut(free_skill_id: string, FreeSkillSchemaCommon: FreeSkillSchemaCommon, options?: any): AxiosPromise<void>;

    /**
     * Search for free skills. An empty array is returned if no free skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of free skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the free skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApiInterface
     */
    freeSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20036>;

    /**
     * Provision a new free skill.
     * @param {FreeSkillSchemaCreate} FreeSkillSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApiInterface
     */
    freeSkillsPost(FreeSkillSchemaCreate: FreeSkillSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * FreeSkillsApi - object-oriented interface
 * @export
 * @class FreeSkillsApi
 * @extends {BaseAPI}
 */
export class FreeSkillsApi extends BaseAPI implements FreeSkillsApiInterface {
    /**
     * Delete a free skill.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApi
     */
    public freeSkillsFreeSkillIdDelete(free_skill_id: string, options?: any) {
        return FreeSkillsApiFp(this.configuration).freeSkillsFreeSkillIdDelete(free_skill_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the free skill.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApi
     */
    public freeSkillsFreeSkillIdGet(free_skill_id: string, options?: any) {
        return FreeSkillsApiFp(this.configuration).freeSkillsFreeSkillIdGet(free_skill_id, options)(this.axios, this.basePath);
    }

    /**
     * Update free skill information.
     * @param {string} free_skill_id The Invotra UUID of the free skill.
     * @param {FreeSkillSchemaCommon} FreeSkillSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApi
     */
    public freeSkillsFreeSkillIdPut(free_skill_id: string, FreeSkillSchemaCommon: FreeSkillSchemaCommon, options?: any) {
        return FreeSkillsApiFp(this.configuration).freeSkillsFreeSkillIdPut(free_skill_id, FreeSkillSchemaCommon, options)(this.axios, this.basePath);
    }

    /**
     * Search for free skills. An empty array is returned if no free skills are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of free skills on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the free skill.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApi
     */
    public freeSkillsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return FreeSkillsApiFp(this.configuration).freeSkillsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new free skill.
     * @param {FreeSkillSchemaCreate} FreeSkillSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FreeSkillsApi
     */
    public freeSkillsPost(FreeSkillSchemaCreate: FreeSkillSchemaCreate, options?: any) {
        return FreeSkillsApiFp(this.configuration).freeSkillsPost(FreeSkillSchemaCreate, options)(this.axios, this.basePath);
    }

}