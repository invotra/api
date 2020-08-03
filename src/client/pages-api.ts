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

import { InlineResponse20021 } from '../model';
import { PageSchema } from '../model';
import { PageSchemaCreate } from '../model';
import { PageSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PagesApi - axios parameter creator
 * @export
 */
export const PagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for pages. An empty array is returned if no pages where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/pages/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/pages:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required

            if (author_uuid !== undefined) {
                localVarQueryParameter['author_uuid'] = author_uuid;
            }

            if (created_date !== undefined) {
                localVarQueryParameter['created_date'] = created_date;
            }

            if (updated_date !== undefined) {
                localVarQueryParameter['updated_date'] = updated_date;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
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
         * Delete a page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdDelete(page_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'page_id' is not null or undefined
            if (page_id === null || page_id === undefined) {
                throw new RequiredError('page_id','Required parameter page_id was null or undefined when calling pagesPageIdDelete.');
            }
            const localVarPath = `/pages/{page_id}`
                .replace(`{${"page_id"}}`, encodeURIComponent(String(page_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/pages:write"])
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
         * Get information about the page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdGet(page_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'page_id' is not null or undefined
            if (page_id === null || page_id === undefined) {
                throw new RequiredError('page_id','Required parameter page_id was null or undefined when calling pagesPageIdGet.');
            }
            const localVarPath = `/pages/{page_id}`
                .replace(`{${"page_id"}}`, encodeURIComponent(String(page_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/pages:read"])
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
         * Update page information.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {PageSchemaUpdate} PageSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'page_id' is not null or undefined
            if (page_id === null || page_id === undefined) {
                throw new RequiredError('page_id','Required parameter page_id was null or undefined when calling pagesPageIdPut.');
            }
            // verify required parameter 'PageSchemaUpdate' is not null or undefined
            if (PageSchemaUpdate === null || PageSchemaUpdate === undefined) {
                throw new RequiredError('PageSchemaUpdate','Required parameter PageSchemaUpdate was null or undefined when calling pagesPageIdPut.');
            }
            const localVarPath = `/pages/{page_id}`
                .replace(`{${"page_id"}}`, encodeURIComponent(String(page_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/pages:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PageSchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PageSchemaUpdate !== undefined ? PageSchemaUpdate : {}) : (PageSchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new page.
         * @param {PageSchemaCreate} PageSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPost(PageSchemaCreate: PageSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PageSchemaCreate' is not null or undefined
            if (PageSchemaCreate === null || PageSchemaCreate === undefined) {
                throw new RequiredError('PageSchemaCreate','Required parameter PageSchemaCreate was null or undefined when calling pagesPost.');
            }
            const localVarPath = `/pages`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/pages:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PageSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PageSchemaCreate !== undefined ? PageSchemaCreate : {}) : (PageSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PagesApi - functional programming interface
 * @export
 */
export const PagesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for pages. An empty array is returned if no pages where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20021> {
            const localVarAxiosArgs = PagesApiAxiosParamCreator(configuration).pagesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdDelete(page_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PagesApiAxiosParamCreator(configuration).pagesPageIdDelete(page_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdGet(page_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PageSchema> {
            const localVarAxiosArgs = PagesApiAxiosParamCreator(configuration).pagesPageIdGet(page_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update page information.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {PageSchemaUpdate} PageSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PagesApiAxiosParamCreator(configuration).pagesPageIdPut(page_id, PageSchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new page.
         * @param {PageSchemaCreate} PageSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PagesApiAxiosParamCreator(configuration).pagesPost(PageSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PagesApi - factory interface
 * @export
 */
export const PagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for pages. An empty array is returned if no pages where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20021> {
            return PagesApiFp(configuration).pagesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdDelete(page_id: string, options?: any): AxiosPromise<void> {
            return PagesApiFp(configuration).pagesPageIdDelete(page_id, options)(axios, basePath);
        },
        /**
         * Get information about the page.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdGet(page_id: string, options?: any): AxiosPromise<PageSchema> {
            return PagesApiFp(configuration).pagesPageIdGet(page_id, options)(axios, basePath);
        },
        /**
         * Update page information.
         * @param {string} page_id The Invotra UUID of the page.
         * @param {PageSchemaUpdate} PageSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): AxiosPromise<void> {
            return PagesApiFp(configuration).pagesPageIdPut(page_id, PageSchemaUpdate, options)(axios, basePath);
        },
        /**
         * Provision a new page.
         * @param {PageSchemaCreate} PageSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PagesApiFp(configuration).pagesPost(PageSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * PagesApi - interface
 * @export
 * @interface PagesApi
 */
export interface PagesApiInterface {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20021>;

    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdDelete(page_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdGet(page_id: string, options?: any): AxiosPromise<PageSchema>;

    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): AxiosPromise<void>;

    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * PagesApi - object-oriented interface
 * @export
 * @class PagesApi
 * @extends {BaseAPI}
 */
export class PagesApi extends BaseAPI implements PagesApiInterface {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return PagesApiFp(this.configuration).pagesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public pagesPageIdDelete(page_id: string, options?: any) {
        return PagesApiFp(this.configuration).pagesPageIdDelete(page_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public pagesPageIdGet(page_id: string, options?: any) {
        return PagesApiFp(this.configuration).pagesPageIdGet(page_id, options)(this.axios, this.basePath);
    }

    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any) {
        return PagesApiFp(this.configuration).pagesPageIdPut(page_id, PageSchemaUpdate, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    public pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any) {
        return PagesApiFp(this.configuration).pagesPost(PageSchemaCreate, options)(this.axios, this.basePath);
    }

}
