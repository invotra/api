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

import { InlineResponse20046 } from '../model';
import { PrimaryCategorySchema } from '../model';
import { PrimaryCategorySchemaCommon } from '../model';
import { PrimaryCategorySchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PrimaryCategoriesApi - axios parameter creator
 * @export
 */
export const PrimaryCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for primary categories. An empty array is returned if no primary categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of primary categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the primary category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/primary_categories/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/primary_categories:read"])
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
         * Provision a new primary category.
         * @param {PrimaryCategorySchemaCreate} PrimaryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPost(PrimaryCategorySchemaCreate: PrimaryCategorySchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PrimaryCategorySchemaCreate' is not null or undefined
            if (PrimaryCategorySchemaCreate === null || PrimaryCategorySchemaCreate === undefined) {
                throw new RequiredError('PrimaryCategorySchemaCreate','Required parameter PrimaryCategorySchemaCreate was null or undefined when calling primaryCategoriesPost.');
            }
            const localVarPath = `/primary_categories`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/primary_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PrimaryCategorySchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PrimaryCategorySchemaCreate !== undefined ? PrimaryCategorySchemaCreate : {}) : (PrimaryCategorySchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdDelete(primary_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'primary_category_id' is not null or undefined
            if (primary_category_id === null || primary_category_id === undefined) {
                throw new RequiredError('primary_category_id','Required parameter primary_category_id was null or undefined when calling primaryCategoriesPrimaryCategoryIdDelete.');
            }
            const localVarPath = `/primary_categories/{primary_category_id}`
                .replace(`{${"primary_category_id"}}`, encodeURIComponent(String(primary_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/primary_categories:write"])
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
         * Get information about the primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdGet(primary_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'primary_category_id' is not null or undefined
            if (primary_category_id === null || primary_category_id === undefined) {
                throw new RequiredError('primary_category_id','Required parameter primary_category_id was null or undefined when calling primaryCategoriesPrimaryCategoryIdGet.');
            }
            const localVarPath = `/primary_categories/{primary_category_id}`
                .replace(`{${"primary_category_id"}}`, encodeURIComponent(String(primary_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/primary_categories:read"])
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
         * Update primary category information.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {PrimaryCategorySchemaCommon} PrimaryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdPut(primary_category_id: string, PrimaryCategorySchemaCommon: PrimaryCategorySchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'primary_category_id' is not null or undefined
            if (primary_category_id === null || primary_category_id === undefined) {
                throw new RequiredError('primary_category_id','Required parameter primary_category_id was null or undefined when calling primaryCategoriesPrimaryCategoryIdPut.');
            }
            // verify required parameter 'PrimaryCategorySchemaCommon' is not null or undefined
            if (PrimaryCategorySchemaCommon === null || PrimaryCategorySchemaCommon === undefined) {
                throw new RequiredError('PrimaryCategorySchemaCommon','Required parameter PrimaryCategorySchemaCommon was null or undefined when calling primaryCategoriesPrimaryCategoryIdPut.');
            }
            const localVarPath = `/primary_categories/{primary_category_id}`
                .replace(`{${"primary_category_id"}}`, encodeURIComponent(String(primary_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/primary_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PrimaryCategorySchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PrimaryCategorySchemaCommon !== undefined ? PrimaryCategorySchemaCommon : {}) : (PrimaryCategorySchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PrimaryCategoriesApi - functional programming interface
 * @export
 */
export const PrimaryCategoriesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for primary categories. An empty array is returned if no primary categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of primary categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the primary category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20046> {
            const localVarAxiosArgs = PrimaryCategoriesApiAxiosParamCreator(configuration).primaryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new primary category.
         * @param {PrimaryCategorySchemaCreate} PrimaryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPost(PrimaryCategorySchemaCreate: PrimaryCategorySchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PrimaryCategoriesApiAxiosParamCreator(configuration).primaryCategoriesPost(PrimaryCategorySchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdDelete(primary_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PrimaryCategoriesApiAxiosParamCreator(configuration).primaryCategoriesPrimaryCategoryIdDelete(primary_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdGet(primary_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PrimaryCategorySchema> {
            const localVarAxiosArgs = PrimaryCategoriesApiAxiosParamCreator(configuration).primaryCategoriesPrimaryCategoryIdGet(primary_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update primary category information.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {PrimaryCategorySchemaCommon} PrimaryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdPut(primary_category_id: string, PrimaryCategorySchemaCommon: PrimaryCategorySchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PrimaryCategoriesApiAxiosParamCreator(configuration).primaryCategoriesPrimaryCategoryIdPut(primary_category_id, PrimaryCategorySchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PrimaryCategoriesApi - factory interface
 * @export
 */
export const PrimaryCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for primary categories. An empty array is returned if no primary categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of primary categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the primary category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20046> {
            return PrimaryCategoriesApiFp(configuration).primaryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new primary category.
         * @param {PrimaryCategorySchemaCreate} PrimaryCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPost(PrimaryCategorySchemaCreate: PrimaryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PrimaryCategoriesApiFp(configuration).primaryCategoriesPost(PrimaryCategorySchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdDelete(primary_category_id: string, options?: any): AxiosPromise<void> {
            return PrimaryCategoriesApiFp(configuration).primaryCategoriesPrimaryCategoryIdDelete(primary_category_id, options)(axios, basePath);
        },
        /**
         * Get information about the primary category.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdGet(primary_category_id: string, options?: any): AxiosPromise<PrimaryCategorySchema> {
            return PrimaryCategoriesApiFp(configuration).primaryCategoriesPrimaryCategoryIdGet(primary_category_id, options)(axios, basePath);
        },
        /**
         * Update primary category information.
         * @param {string} primary_category_id The Invotra UUID of the primary category.
         * @param {PrimaryCategorySchemaCommon} PrimaryCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        primaryCategoriesPrimaryCategoryIdPut(primary_category_id: string, PrimaryCategorySchemaCommon: PrimaryCategorySchemaCommon, options?: any): AxiosPromise<void> {
            return PrimaryCategoriesApiFp(configuration).primaryCategoriesPrimaryCategoryIdPut(primary_category_id, PrimaryCategorySchemaCommon, options)(axios, basePath);
        },
    };
};

/**
 * PrimaryCategoriesApi - interface
 * @export
 * @interface PrimaryCategoriesApi
 */
export interface PrimaryCategoriesApiInterface {
    /**
     * Search for primary categories. An empty array is returned if no primary categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of primary categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the primary category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApiInterface
     */
    primaryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20046>;

    /**
     * Provision a new primary category.
     * @param {PrimaryCategorySchemaCreate} PrimaryCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApiInterface
     */
    primaryCategoriesPost(PrimaryCategorySchemaCreate: PrimaryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

    /**
     * Delete a primary category.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApiInterface
     */
    primaryCategoriesPrimaryCategoryIdDelete(primary_category_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the primary category.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApiInterface
     */
    primaryCategoriesPrimaryCategoryIdGet(primary_category_id: string, options?: any): AxiosPromise<PrimaryCategorySchema>;

    /**
     * Update primary category information.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {PrimaryCategorySchemaCommon} PrimaryCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApiInterface
     */
    primaryCategoriesPrimaryCategoryIdPut(primary_category_id: string, PrimaryCategorySchemaCommon: PrimaryCategorySchemaCommon, options?: any): AxiosPromise<void>;

}

/**
 * PrimaryCategoriesApi - object-oriented interface
 * @export
 * @class PrimaryCategoriesApi
 * @extends {BaseAPI}
 */
export class PrimaryCategoriesApi extends BaseAPI implements PrimaryCategoriesApiInterface {
    /**
     * Search for primary categories. An empty array is returned if no primary categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of primary categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the primary category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApi
     */
    public primaryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return PrimaryCategoriesApiFp(this.configuration).primaryCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new primary category.
     * @param {PrimaryCategorySchemaCreate} PrimaryCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApi
     */
    public primaryCategoriesPost(PrimaryCategorySchemaCreate: PrimaryCategorySchemaCreate, options?: any) {
        return PrimaryCategoriesApiFp(this.configuration).primaryCategoriesPost(PrimaryCategorySchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a primary category.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApi
     */
    public primaryCategoriesPrimaryCategoryIdDelete(primary_category_id: string, options?: any) {
        return PrimaryCategoriesApiFp(this.configuration).primaryCategoriesPrimaryCategoryIdDelete(primary_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the primary category.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApi
     */
    public primaryCategoriesPrimaryCategoryIdGet(primary_category_id: string, options?: any) {
        return PrimaryCategoriesApiFp(this.configuration).primaryCategoriesPrimaryCategoryIdGet(primary_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Update primary category information.
     * @param {string} primary_category_id The Invotra UUID of the primary category.
     * @param {PrimaryCategorySchemaCommon} PrimaryCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PrimaryCategoriesApi
     */
    public primaryCategoriesPrimaryCategoryIdPut(primary_category_id: string, PrimaryCategorySchemaCommon: PrimaryCategorySchemaCommon, options?: any) {
        return PrimaryCategoriesApiFp(this.configuration).primaryCategoriesPrimaryCategoryIdPut(primary_category_id, PrimaryCategorySchemaCommon, options)(this.axios, this.basePath);
    }

}
