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

import { InlineResponse20023 } from '../model';
import { PollSchema } from '../model';
import { PollSchemaCreate } from '../model';
import { PollSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PollsApi - axios parameter creator
 * @export
 */
export const PollsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for polls. An empty array is returned if no polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/polls/list`;
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
         * Delete a poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdDelete(poll_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'poll_id' is not null or undefined
            if (poll_id === null || poll_id === undefined) {
                throw new RequiredError('poll_id','Required parameter poll_id was null or undefined when calling pollsPollIdDelete.');
            }
            const localVarPath = `/polls/{poll_id}`
                .replace(`{${"poll_id"}}`, encodeURIComponent(String(poll_id)));
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
         * Get information about the poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdGet(poll_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'poll_id' is not null or undefined
            if (poll_id === null || poll_id === undefined) {
                throw new RequiredError('poll_id','Required parameter poll_id was null or undefined when calling pollsPollIdGet.');
            }
            const localVarPath = `/polls/{poll_id}`
                .replace(`{${"poll_id"}}`, encodeURIComponent(String(poll_id)));
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
         * Update poll information.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {PollSchemaUpdate} PollSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'poll_id' is not null or undefined
            if (poll_id === null || poll_id === undefined) {
                throw new RequiredError('poll_id','Required parameter poll_id was null or undefined when calling pollsPollIdPut.');
            }
            // verify required parameter 'PollSchemaUpdate' is not null or undefined
            if (PollSchemaUpdate === null || PollSchemaUpdate === undefined) {
                throw new RequiredError('PollSchemaUpdate','Required parameter PollSchemaUpdate was null or undefined when calling pollsPollIdPut.');
            }
            const localVarPath = `/polls/{poll_id}`
                .replace(`{${"poll_id"}}`, encodeURIComponent(String(poll_id)));
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
            const needsSerialization = (typeof PollSchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PollSchemaUpdate !== undefined ? PollSchemaUpdate : {}) : (PollSchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new poll.
         * @param {PollSchemaCreate} PollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPost(PollSchemaCreate: PollSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PollSchemaCreate' is not null or undefined
            if (PollSchemaCreate === null || PollSchemaCreate === undefined) {
                throw new RequiredError('PollSchemaCreate','Required parameter PollSchemaCreate was null or undefined when calling pollsPost.');
            }
            const localVarPath = `/polls`;
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
            const needsSerialization = (typeof PollSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PollSchemaCreate !== undefined ? PollSchemaCreate : {}) : (PollSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PollsApi - functional programming interface
 * @export
 */
export const PollsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for polls. An empty array is returned if no polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20023> {
            const localVarAxiosArgs = PollsApiAxiosParamCreator(configuration).pollsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdDelete(poll_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PollsApiAxiosParamCreator(configuration).pollsPollIdDelete(poll_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdGet(poll_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PollSchema> {
            const localVarAxiosArgs = PollsApiAxiosParamCreator(configuration).pollsPollIdGet(poll_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update poll information.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {PollSchemaUpdate} PollSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PollsApiAxiosParamCreator(configuration).pollsPollIdPut(poll_id, PollSchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new poll.
         * @param {PollSchemaCreate} PollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PollsApiAxiosParamCreator(configuration).pollsPost(PollSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PollsApi - factory interface
 * @export
 */
export const PollsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for polls. An empty array is returned if no polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20023> {
            return PollsApiFp(configuration).pollsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdDelete(poll_id: string, options?: any): AxiosPromise<void> {
            return PollsApiFp(configuration).pollsPollIdDelete(poll_id, options)(axios, basePath);
        },
        /**
         * Get information about the poll.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdGet(poll_id: string, options?: any): AxiosPromise<PollSchema> {
            return PollsApiFp(configuration).pollsPollIdGet(poll_id, options)(axios, basePath);
        },
        /**
         * Update poll information.
         * @param {string} poll_id The Invotra UUID of the poll.
         * @param {PollSchemaUpdate} PollSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): AxiosPromise<void> {
            return PollsApiFp(configuration).pollsPollIdPut(poll_id, PollSchemaUpdate, options)(axios, basePath);
        },
        /**
         * Provision a new poll.
         * @param {PollSchemaCreate} PollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PollsApiFp(configuration).pollsPost(PollSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * PollsApi - interface
 * @export
 * @interface PollsApi
 */
export interface PollsApiInterface {
    /**
     * Search for polls. An empty array is returned if no polls where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20023>;

    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdDelete(poll_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdGet(poll_id: string, options?: any): AxiosPromise<PollSchema>;

    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): AxiosPromise<void>;

    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * PollsApi - object-oriented interface
 * @export
 * @class PollsApi
 * @extends {BaseAPI}
 */
export class PollsApi extends BaseAPI implements PollsApiInterface {
    /**
     * Search for polls. An empty array is returned if no polls where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    public pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return PollsApiFp(this.configuration).pollsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    public pollsPollIdDelete(poll_id: string, options?: any) {
        return PollsApiFp(this.configuration).pollsPollIdDelete(poll_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    public pollsPollIdGet(poll_id: string, options?: any) {
        return PollsApiFp(this.configuration).pollsPollIdGet(poll_id, options)(this.axios, this.basePath);
    }

    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    public pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any) {
        return PollsApiFp(this.configuration).pollsPollIdPut(poll_id, PollSchemaUpdate, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    public pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any) {
        return PollsApiFp(this.configuration).pollsPost(PollSchemaCreate, options)(this.axios, this.basePath);
    }

}
