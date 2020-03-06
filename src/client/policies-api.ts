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

import { InlineResponse20022 } from '../model';
import { PolicySchema } from '../model';
import { PolicySchemaCreate } from '../model';
import { PolicySchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PoliciesApi - axios parameter creator
 * @export
 */
export const PoliciesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for policies. An empty array is returned if no policies where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/policies/list`;
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
         * Delete a policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdDelete(policy_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'policy_id' is not null or undefined
            if (policy_id === null || policy_id === undefined) {
                throw new RequiredError('policy_id','Required parameter policy_id was null or undefined when calling policiesPolicyIdDelete.');
            }
            const localVarPath = `/policies/{policy_id}`
                .replace(`{${"policy_id"}}`, encodeURIComponent(String(policy_id)));
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
         * Get information about the policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdGet(policy_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'policy_id' is not null or undefined
            if (policy_id === null || policy_id === undefined) {
                throw new RequiredError('policy_id','Required parameter policy_id was null or undefined when calling policiesPolicyIdGet.');
            }
            const localVarPath = `/policies/{policy_id}`
                .replace(`{${"policy_id"}}`, encodeURIComponent(String(policy_id)));
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
         * Update policy information.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {PolicySchemaUpdate} PolicySchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdPut(policy_id: string, PolicySchemaUpdate: PolicySchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'policy_id' is not null or undefined
            if (policy_id === null || policy_id === undefined) {
                throw new RequiredError('policy_id','Required parameter policy_id was null or undefined when calling policiesPolicyIdPut.');
            }
            // verify required parameter 'PolicySchemaUpdate' is not null or undefined
            if (PolicySchemaUpdate === null || PolicySchemaUpdate === undefined) {
                throw new RequiredError('PolicySchemaUpdate','Required parameter PolicySchemaUpdate was null or undefined when calling policiesPolicyIdPut.');
            }
            const localVarPath = `/policies/{policy_id}`
                .replace(`{${"policy_id"}}`, encodeURIComponent(String(policy_id)));
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
            const needsSerialization = (typeof PolicySchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PolicySchemaUpdate !== undefined ? PolicySchemaUpdate : {}) : (PolicySchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new policy.
         * @param {PolicySchemaCreate} PolicySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPost(PolicySchemaCreate: PolicySchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PolicySchemaCreate' is not null or undefined
            if (PolicySchemaCreate === null || PolicySchemaCreate === undefined) {
                throw new RequiredError('PolicySchemaCreate','Required parameter PolicySchemaCreate was null or undefined when calling policiesPost.');
            }
            const localVarPath = `/policies`;
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
            const needsSerialization = (typeof PolicySchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PolicySchemaCreate !== undefined ? PolicySchemaCreate : {}) : (PolicySchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PoliciesApi - functional programming interface
 * @export
 */
export const PoliciesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for policies. An empty array is returned if no policies where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20022> {
            const localVarAxiosArgs = PoliciesApiAxiosParamCreator(configuration).policiesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdDelete(policy_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PoliciesApiAxiosParamCreator(configuration).policiesPolicyIdDelete(policy_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdGet(policy_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicySchema> {
            const localVarAxiosArgs = PoliciesApiAxiosParamCreator(configuration).policiesPolicyIdGet(policy_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update policy information.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {PolicySchemaUpdate} PolicySchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdPut(policy_id: string, PolicySchemaUpdate: PolicySchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PoliciesApiAxiosParamCreator(configuration).policiesPolicyIdPut(policy_id, PolicySchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new policy.
         * @param {PolicySchemaCreate} PolicySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPost(PolicySchemaCreate: PolicySchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PoliciesApiAxiosParamCreator(configuration).policiesPost(PolicySchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PoliciesApi - factory interface
 * @export
 */
export const PoliciesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for policies. An empty array is returned if no policies where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20022> {
            return PoliciesApiFp(configuration).policiesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdDelete(policy_id: string, options?: any): AxiosPromise<void> {
            return PoliciesApiFp(configuration).policiesPolicyIdDelete(policy_id, options)(axios, basePath);
        },
        /**
         * Get information about the policy.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdGet(policy_id: string, options?: any): AxiosPromise<PolicySchema> {
            return PoliciesApiFp(configuration).policiesPolicyIdGet(policy_id, options)(axios, basePath);
        },
        /**
         * Update policy information.
         * @param {string} policy_id The Invotra UUID of the policy.
         * @param {PolicySchemaUpdate} PolicySchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPolicyIdPut(policy_id: string, PolicySchemaUpdate: PolicySchemaUpdate, options?: any): AxiosPromise<void> {
            return PoliciesApiFp(configuration).policiesPolicyIdPut(policy_id, PolicySchemaUpdate, options)(axios, basePath);
        },
        /**
         * Provision a new policy.
         * @param {PolicySchemaCreate} PolicySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policiesPost(PolicySchemaCreate: PolicySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PoliciesApiFp(configuration).policiesPost(PolicySchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * PoliciesApi - interface
 * @export
 * @interface PoliciesApi
 */
export interface PoliciesApiInterface {
    /**
     * Search for policies. An empty array is returned if no policies where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiInterface
     */
    policiesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20022>;

    /**
     * Delete a policy.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiInterface
     */
    policiesPolicyIdDelete(policy_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the policy.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiInterface
     */
    policiesPolicyIdGet(policy_id: string, options?: any): AxiosPromise<PolicySchema>;

    /**
     * Update policy information.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {PolicySchemaUpdate} PolicySchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiInterface
     */
    policiesPolicyIdPut(policy_id: string, PolicySchemaUpdate: PolicySchemaUpdate, options?: any): AxiosPromise<void>;

    /**
     * Provision a new policy.
     * @param {PolicySchemaCreate} PolicySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApiInterface
     */
    policiesPost(PolicySchemaCreate: PolicySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * PoliciesApi - object-oriented interface
 * @export
 * @class PoliciesApi
 * @extends {BaseAPI}
 */
export class PoliciesApi extends BaseAPI implements PoliciesApiInterface {
    /**
     * Search for policies. An empty array is returned if no policies where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApi
     */
    public policiesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return PoliciesApiFp(this.configuration).policiesListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a policy.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApi
     */
    public policiesPolicyIdDelete(policy_id: string, options?: any) {
        return PoliciesApiFp(this.configuration).policiesPolicyIdDelete(policy_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the policy.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApi
     */
    public policiesPolicyIdGet(policy_id: string, options?: any) {
        return PoliciesApiFp(this.configuration).policiesPolicyIdGet(policy_id, options)(this.axios, this.basePath);
    }

    /**
     * Update policy information.
     * @param {string} policy_id The Invotra UUID of the policy.
     * @param {PolicySchemaUpdate} PolicySchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApi
     */
    public policiesPolicyIdPut(policy_id: string, PolicySchemaUpdate: PolicySchemaUpdate, options?: any) {
        return PoliciesApiFp(this.configuration).policiesPolicyIdPut(policy_id, PolicySchemaUpdate, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new policy.
     * @param {PolicySchemaCreate} PolicySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PoliciesApi
     */
    public policiesPost(PolicySchemaCreate: PolicySchemaCreate, options?: any) {
        return PoliciesApiFp(this.configuration).policiesPost(PolicySchemaCreate, options)(this.axios, this.basePath);
    }

}
