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

import { InlineResponse20048 } from '../model';
import { QueryCategorySchema } from '../model';
import { QueryCategorySchemaCommon } from '../model';
import { QueryCategorySchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * QueryCategoriesApi - axios parameter creator
 * @export
 */
export const QueryCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for query categories. An empty array is returned if no query categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/query_categories/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/query_categories:read"])
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
         * Provision a new query category.
         * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'QueryCategorySchemaCreate' is not null or undefined
            if (QueryCategorySchemaCreate === null || QueryCategorySchemaCreate === undefined) {
                throw new RequiredError('QueryCategorySchemaCreate','Required parameter QueryCategorySchemaCreate was null or undefined when calling queryCategoriesPost.');
            }
            const localVarPath = `/query_categories`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/query_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof QueryCategorySchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(QueryCategorySchemaCreate !== undefined ? QueryCategorySchemaCreate : {}) : (QueryCategorySchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdDelete(query_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'query_category_id' is not null or undefined
            if (query_category_id === null || query_category_id === undefined) {
                throw new RequiredError('query_category_id','Required parameter query_category_id was null or undefined when calling queryCategoriesQueryCategoryIdDelete.');
            }
            const localVarPath = `/query_categories/{query_category_id}`
                .replace(`{${"query_category_id"}}`, encodeURIComponent(String(query_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/query_categories:write"])
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
         * Get information about the query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdGet(query_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'query_category_id' is not null or undefined
            if (query_category_id === null || query_category_id === undefined) {
                throw new RequiredError('query_category_id','Required parameter query_category_id was null or undefined when calling queryCategoriesQueryCategoryIdGet.');
            }
            const localVarPath = `/query_categories/{query_category_id}`
                .replace(`{${"query_category_id"}}`, encodeURIComponent(String(query_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/query_categories:read"])
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
         * Update query category information.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'query_category_id' is not null or undefined
            if (query_category_id === null || query_category_id === undefined) {
                throw new RequiredError('query_category_id','Required parameter query_category_id was null or undefined when calling queryCategoriesQueryCategoryIdPut.');
            }
            // verify required parameter 'QueryCategorySchemaCommon' is not null or undefined
            if (QueryCategorySchemaCommon === null || QueryCategorySchemaCommon === undefined) {
                throw new RequiredError('QueryCategorySchemaCommon','Required parameter QueryCategorySchemaCommon was null or undefined when calling queryCategoriesQueryCategoryIdPut.');
            }
            const localVarPath = `/query_categories/{query_category_id}`
                .replace(`{${"query_category_id"}}`, encodeURIComponent(String(query_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/query_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof QueryCategorySchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(QueryCategorySchemaCommon !== undefined ? QueryCategorySchemaCommon : {}) : (QueryCategorySchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QueryCategoriesApi - functional programming interface
 * @export
 */
export const QueryCategoriesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for query categories. An empty array is returned if no query categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20048> {
            const localVarAxiosArgs = QueryCategoriesApiAxiosParamCreator(configuration).queryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new query category.
         * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = QueryCategoriesApiAxiosParamCreator(configuration).queryCategoriesPost(QueryCategorySchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = QueryCategoriesApiAxiosParamCreator(configuration).queryCategoriesQueryCategoryIdDelete(query_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<QueryCategorySchema> {
            const localVarAxiosArgs = QueryCategoriesApiAxiosParamCreator(configuration).queryCategoriesQueryCategoryIdGet(query_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update query category information.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = QueryCategoriesApiAxiosParamCreator(configuration).queryCategoriesQueryCategoryIdPut(query_category_id, QueryCategorySchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * QueryCategoriesApi - factory interface
 * @export
 */
export const QueryCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for query categories. An empty array is returned if no query categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20048> {
            return QueryCategoriesApiFp(configuration).queryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new query category.
         * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return QueryCategoriesApiFp(configuration).queryCategoriesPost(QueryCategorySchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): AxiosPromise<void> {
            return QueryCategoriesApiFp(configuration).queryCategoriesQueryCategoryIdDelete(query_category_id, options)(axios, basePath);
        },
        /**
         * Get information about the query category.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): AxiosPromise<QueryCategorySchema> {
            return QueryCategoriesApiFp(configuration).queryCategoriesQueryCategoryIdGet(query_category_id, options)(axios, basePath);
        },
        /**
         * Update query category information.
         * @param {string} query_category_id The Invotra UUID of the query category.
         * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): AxiosPromise<void> {
            return QueryCategoriesApiFp(configuration).queryCategoriesQueryCategoryIdPut(query_category_id, QueryCategorySchemaCommon, options)(axios, basePath);
        },
    };
};

/**
 * QueryCategoriesApi - interface
 * @export
 * @interface QueryCategoriesApi
 */
export interface QueryCategoriesApiInterface {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20048>;

    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): AxiosPromise<QueryCategorySchema>;

    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): AxiosPromise<void>;

}

/**
 * QueryCategoriesApi - object-oriented interface
 * @export
 * @class QueryCategoriesApi
 * @extends {BaseAPI}
 */
export class QueryCategoriesApi extends BaseAPI implements QueryCategoriesApiInterface {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    public queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return QueryCategoriesApiFp(this.configuration).queryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    public queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any) {
        return QueryCategoriesApiFp(this.configuration).queryCategoriesPost(QueryCategorySchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    public queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any) {
        return QueryCategoriesApiFp(this.configuration).queryCategoriesQueryCategoryIdDelete(query_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    public queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any) {
        return QueryCategoriesApiFp(this.configuration).queryCategoriesQueryCategoryIdGet(query_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    public queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any) {
        return QueryCategoriesApiFp(this.configuration).queryCategoriesQueryCategoryIdPut(query_category_id, QueryCategorySchemaCommon, options)(this.axios, this.basePath);
    }

}
