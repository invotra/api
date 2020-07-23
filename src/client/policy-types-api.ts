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

import { InlineResponse20045 } from '../model';
import { PolicyTypeSchema } from '../model';
import { PolicyTypeSchemaCommon } from '../model';
import { PolicyTypeSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PolicyTypesApi - axios parameter creator
 * @export
 */
export const PolicyTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for policy types. An empty array is returned if no policy types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of policy types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the policy type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/policy_types/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/policy_types:read"])
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
         * Delete a policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdDelete(policy_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'policy_type_id' is not null or undefined
            if (policy_type_id === null || policy_type_id === undefined) {
                throw new RequiredError('policy_type_id','Required parameter policy_type_id was null or undefined when calling policyTypesPolicyTypeIdDelete.');
            }
            const localVarPath = `/policy_types/{policy_type_id}`
                .replace(`{${"policy_type_id"}}`, encodeURIComponent(String(policy_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/policy_types:write"])
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
         * Get information about the policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdGet(policy_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'policy_type_id' is not null or undefined
            if (policy_type_id === null || policy_type_id === undefined) {
                throw new RequiredError('policy_type_id','Required parameter policy_type_id was null or undefined when calling policyTypesPolicyTypeIdGet.');
            }
            const localVarPath = `/policy_types/{policy_type_id}`
                .replace(`{${"policy_type_id"}}`, encodeURIComponent(String(policy_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/policy_types:read"])
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
         * Update policy type information.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {PolicyTypeSchemaCommon} PolicyTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdPut(policy_type_id: string, PolicyTypeSchemaCommon: PolicyTypeSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'policy_type_id' is not null or undefined
            if (policy_type_id === null || policy_type_id === undefined) {
                throw new RequiredError('policy_type_id','Required parameter policy_type_id was null or undefined when calling policyTypesPolicyTypeIdPut.');
            }
            // verify required parameter 'PolicyTypeSchemaCommon' is not null or undefined
            if (PolicyTypeSchemaCommon === null || PolicyTypeSchemaCommon === undefined) {
                throw new RequiredError('PolicyTypeSchemaCommon','Required parameter PolicyTypeSchemaCommon was null or undefined when calling policyTypesPolicyTypeIdPut.');
            }
            const localVarPath = `/policy_types/{policy_type_id}`
                .replace(`{${"policy_type_id"}}`, encodeURIComponent(String(policy_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/policy_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PolicyTypeSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PolicyTypeSchemaCommon !== undefined ? PolicyTypeSchemaCommon : {}) : (PolicyTypeSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new policy type.
         * @param {PolicyTypeSchemaCreate} PolicyTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPost(PolicyTypeSchemaCreate: PolicyTypeSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PolicyTypeSchemaCreate' is not null or undefined
            if (PolicyTypeSchemaCreate === null || PolicyTypeSchemaCreate === undefined) {
                throw new RequiredError('PolicyTypeSchemaCreate','Required parameter PolicyTypeSchemaCreate was null or undefined when calling policyTypesPost.');
            }
            const localVarPath = `/policy_types`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/policy_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PolicyTypeSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PolicyTypeSchemaCreate !== undefined ? PolicyTypeSchemaCreate : {}) : (PolicyTypeSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PolicyTypesApi - functional programming interface
 * @export
 */
export const PolicyTypesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for policy types. An empty array is returned if no policy types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of policy types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the policy type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20045> {
            const localVarAxiosArgs = PolicyTypesApiAxiosParamCreator(configuration).policyTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdDelete(policy_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PolicyTypesApiAxiosParamCreator(configuration).policyTypesPolicyTypeIdDelete(policy_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdGet(policy_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PolicyTypeSchema> {
            const localVarAxiosArgs = PolicyTypesApiAxiosParamCreator(configuration).policyTypesPolicyTypeIdGet(policy_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update policy type information.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {PolicyTypeSchemaCommon} PolicyTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdPut(policy_type_id: string, PolicyTypeSchemaCommon: PolicyTypeSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PolicyTypesApiAxiosParamCreator(configuration).policyTypesPolicyTypeIdPut(policy_type_id, PolicyTypeSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new policy type.
         * @param {PolicyTypeSchemaCreate} PolicyTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPost(PolicyTypeSchemaCreate: PolicyTypeSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PolicyTypesApiAxiosParamCreator(configuration).policyTypesPost(PolicyTypeSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PolicyTypesApi - factory interface
 * @export
 */
export const PolicyTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for policy types. An empty array is returned if no policy types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of policy types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the policy type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20045> {
            return PolicyTypesApiFp(configuration).policyTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdDelete(policy_type_id: string, options?: any): AxiosPromise<void> {
            return PolicyTypesApiFp(configuration).policyTypesPolicyTypeIdDelete(policy_type_id, options)(axios, basePath);
        },
        /**
         * Get information about the policy type.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdGet(policy_type_id: string, options?: any): AxiosPromise<PolicyTypeSchema> {
            return PolicyTypesApiFp(configuration).policyTypesPolicyTypeIdGet(policy_type_id, options)(axios, basePath);
        },
        /**
         * Update policy type information.
         * @param {string} policy_type_id The Invotra UUID of the policy type.
         * @param {PolicyTypeSchemaCommon} PolicyTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPolicyTypeIdPut(policy_type_id: string, PolicyTypeSchemaCommon: PolicyTypeSchemaCommon, options?: any): AxiosPromise<void> {
            return PolicyTypesApiFp(configuration).policyTypesPolicyTypeIdPut(policy_type_id, PolicyTypeSchemaCommon, options)(axios, basePath);
        },
        /**
         * Provision a new policy type.
         * @param {PolicyTypeSchemaCreate} PolicyTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        policyTypesPost(PolicyTypeSchemaCreate: PolicyTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PolicyTypesApiFp(configuration).policyTypesPost(PolicyTypeSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * PolicyTypesApi - interface
 * @export
 * @interface PolicyTypesApi
 */
export interface PolicyTypesApiInterface {
    /**
     * Search for policy types. An empty array is returned if no policy types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of policy types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the policy type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApiInterface
     */
    policyTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20045>;

    /**
     * Delete a policy type.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApiInterface
     */
    policyTypesPolicyTypeIdDelete(policy_type_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the policy type.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApiInterface
     */
    policyTypesPolicyTypeIdGet(policy_type_id: string, options?: any): AxiosPromise<PolicyTypeSchema>;

    /**
     * Update policy type information.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {PolicyTypeSchemaCommon} PolicyTypeSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApiInterface
     */
    policyTypesPolicyTypeIdPut(policy_type_id: string, PolicyTypeSchemaCommon: PolicyTypeSchemaCommon, options?: any): AxiosPromise<void>;

    /**
     * Provision a new policy type.
     * @param {PolicyTypeSchemaCreate} PolicyTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApiInterface
     */
    policyTypesPost(PolicyTypeSchemaCreate: PolicyTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * PolicyTypesApi - object-oriented interface
 * @export
 * @class PolicyTypesApi
 * @extends {BaseAPI}
 */
export class PolicyTypesApi extends BaseAPI implements PolicyTypesApiInterface {
    /**
     * Search for policy types. An empty array is returned if no policy types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of policy types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the policy type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApi
     */
    public policyTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return PolicyTypesApiFp(this.configuration).policyTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a policy type.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApi
     */
    public policyTypesPolicyTypeIdDelete(policy_type_id: string, options?: any) {
        return PolicyTypesApiFp(this.configuration).policyTypesPolicyTypeIdDelete(policy_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the policy type.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApi
     */
    public policyTypesPolicyTypeIdGet(policy_type_id: string, options?: any) {
        return PolicyTypesApiFp(this.configuration).policyTypesPolicyTypeIdGet(policy_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Update policy type information.
     * @param {string} policy_type_id The Invotra UUID of the policy type.
     * @param {PolicyTypeSchemaCommon} PolicyTypeSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApi
     */
    public policyTypesPolicyTypeIdPut(policy_type_id: string, PolicyTypeSchemaCommon: PolicyTypeSchemaCommon, options?: any) {
        return PolicyTypesApiFp(this.configuration).policyTypesPolicyTypeIdPut(policy_type_id, PolicyTypeSchemaCommon, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new policy type.
     * @param {PolicyTypeSchemaCreate} PolicyTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PolicyTypesApi
     */
    public policyTypesPost(PolicyTypeSchemaCreate: PolicyTypeSchemaCreate, options?: any) {
        return PolicyTypesApiFp(this.configuration).policyTypesPost(PolicyTypeSchemaCreate, options)(this.axios, this.basePath);
    }

}
