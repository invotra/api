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

import { InlineResponse20051 } from '../model';
import { SecurityClassificationSchema } from '../model';
import { SecurityClassificationSchemaCommon } from '../model';
import { SecurityClassificationSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * SecurityClassificationsApi - axios parameter creator
 * @export
 */
export const SecurityClassificationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for security classifications. An empty array is returned if no security classifications are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of security classifications on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the security classification.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/security_classifications/list`;
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
         * Provision a new security classification.
         * @param {SecurityClassificationSchemaCreate} SecurityClassificationSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsPost(SecurityClassificationSchemaCreate: SecurityClassificationSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'SecurityClassificationSchemaCreate' is not null or undefined
            if (SecurityClassificationSchemaCreate === null || SecurityClassificationSchemaCreate === undefined) {
                throw new RequiredError('SecurityClassificationSchemaCreate','Required parameter SecurityClassificationSchemaCreate was null or undefined when calling securityClassificationsPost.');
            }
            const localVarPath = `/security_classifications`;
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
            const needsSerialization = (typeof SecurityClassificationSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(SecurityClassificationSchemaCreate !== undefined ? SecurityClassificationSchemaCreate : {}) : (SecurityClassificationSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdDelete(security_classification_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'security_classification_id' is not null or undefined
            if (security_classification_id === null || security_classification_id === undefined) {
                throw new RequiredError('security_classification_id','Required parameter security_classification_id was null or undefined when calling securityClassificationsSecurityClassificationIdDelete.');
            }
            const localVarPath = `/security_classifications/{security_classification_id}`
                .replace(`{${"security_classification_id"}}`, encodeURIComponent(String(security_classification_id)));
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
         * Get information about the security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdGet(security_classification_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'security_classification_id' is not null or undefined
            if (security_classification_id === null || security_classification_id === undefined) {
                throw new RequiredError('security_classification_id','Required parameter security_classification_id was null or undefined when calling securityClassificationsSecurityClassificationIdGet.');
            }
            const localVarPath = `/security_classifications/{security_classification_id}`
                .replace(`{${"security_classification_id"}}`, encodeURIComponent(String(security_classification_id)));
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
         * Update security classification information.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {SecurityClassificationSchemaCommon} SecurityClassificationSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdPut(security_classification_id: string, SecurityClassificationSchemaCommon: SecurityClassificationSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'security_classification_id' is not null or undefined
            if (security_classification_id === null || security_classification_id === undefined) {
                throw new RequiredError('security_classification_id','Required parameter security_classification_id was null or undefined when calling securityClassificationsSecurityClassificationIdPut.');
            }
            // verify required parameter 'SecurityClassificationSchemaCommon' is not null or undefined
            if (SecurityClassificationSchemaCommon === null || SecurityClassificationSchemaCommon === undefined) {
                throw new RequiredError('SecurityClassificationSchemaCommon','Required parameter SecurityClassificationSchemaCommon was null or undefined when calling securityClassificationsSecurityClassificationIdPut.');
            }
            const localVarPath = `/security_classifications/{security_classification_id}`
                .replace(`{${"security_classification_id"}}`, encodeURIComponent(String(security_classification_id)));
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
            const needsSerialization = (typeof SecurityClassificationSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(SecurityClassificationSchemaCommon !== undefined ? SecurityClassificationSchemaCommon : {}) : (SecurityClassificationSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SecurityClassificationsApi - functional programming interface
 * @export
 */
export const SecurityClassificationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for security classifications. An empty array is returned if no security classifications are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of security classifications on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the security classification.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20051> {
            const localVarAxiosArgs = SecurityClassificationsApiAxiosParamCreator(configuration).securityClassificationsListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new security classification.
         * @param {SecurityClassificationSchemaCreate} SecurityClassificationSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsPost(SecurityClassificationSchemaCreate: SecurityClassificationSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = SecurityClassificationsApiAxiosParamCreator(configuration).securityClassificationsPost(SecurityClassificationSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdDelete(security_classification_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = SecurityClassificationsApiAxiosParamCreator(configuration).securityClassificationsSecurityClassificationIdDelete(security_classification_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdGet(security_classification_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SecurityClassificationSchema> {
            const localVarAxiosArgs = SecurityClassificationsApiAxiosParamCreator(configuration).securityClassificationsSecurityClassificationIdGet(security_classification_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update security classification information.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {SecurityClassificationSchemaCommon} SecurityClassificationSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdPut(security_classification_id: string, SecurityClassificationSchemaCommon: SecurityClassificationSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = SecurityClassificationsApiAxiosParamCreator(configuration).securityClassificationsSecurityClassificationIdPut(security_classification_id, SecurityClassificationSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SecurityClassificationsApi - factory interface
 * @export
 */
export const SecurityClassificationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for security classifications. An empty array is returned if no security classifications are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of security classifications on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the security classification.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20051> {
            return SecurityClassificationsApiFp(configuration).securityClassificationsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new security classification.
         * @param {SecurityClassificationSchemaCreate} SecurityClassificationSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsPost(SecurityClassificationSchemaCreate: SecurityClassificationSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return SecurityClassificationsApiFp(configuration).securityClassificationsPost(SecurityClassificationSchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdDelete(security_classification_id: string, options?: any): AxiosPromise<void> {
            return SecurityClassificationsApiFp(configuration).securityClassificationsSecurityClassificationIdDelete(security_classification_id, options)(axios, basePath);
        },
        /**
         * Get information about the security classification.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdGet(security_classification_id: string, options?: any): AxiosPromise<SecurityClassificationSchema> {
            return SecurityClassificationsApiFp(configuration).securityClassificationsSecurityClassificationIdGet(security_classification_id, options)(axios, basePath);
        },
        /**
         * Update security classification information.
         * @param {string} security_classification_id The Invotra UUID of the security classification.
         * @param {SecurityClassificationSchemaCommon} SecurityClassificationSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        securityClassificationsSecurityClassificationIdPut(security_classification_id: string, SecurityClassificationSchemaCommon: SecurityClassificationSchemaCommon, options?: any): AxiosPromise<void> {
            return SecurityClassificationsApiFp(configuration).securityClassificationsSecurityClassificationIdPut(security_classification_id, SecurityClassificationSchemaCommon, options)(axios, basePath);
        },
    };
};

/**
 * SecurityClassificationsApi - interface
 * @export
 * @interface SecurityClassificationsApi
 */
export interface SecurityClassificationsApiInterface {
    /**
     * Search for security classifications. An empty array is returned if no security classifications are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of security classifications on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the security classification.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApiInterface
     */
    securityClassificationsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20051>;

    /**
     * Provision a new security classification.
     * @param {SecurityClassificationSchemaCreate} SecurityClassificationSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApiInterface
     */
    securityClassificationsPost(SecurityClassificationSchemaCreate: SecurityClassificationSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

    /**
     * Delete a security classification.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApiInterface
     */
    securityClassificationsSecurityClassificationIdDelete(security_classification_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the security classification.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApiInterface
     */
    securityClassificationsSecurityClassificationIdGet(security_classification_id: string, options?: any): AxiosPromise<SecurityClassificationSchema>;

    /**
     * Update security classification information.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {SecurityClassificationSchemaCommon} SecurityClassificationSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApiInterface
     */
    securityClassificationsSecurityClassificationIdPut(security_classification_id: string, SecurityClassificationSchemaCommon: SecurityClassificationSchemaCommon, options?: any): AxiosPromise<void>;

}

/**
 * SecurityClassificationsApi - object-oriented interface
 * @export
 * @class SecurityClassificationsApi
 * @extends {BaseAPI}
 */
export class SecurityClassificationsApi extends BaseAPI implements SecurityClassificationsApiInterface {
    /**
     * Search for security classifications. An empty array is returned if no security classifications are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of security classifications on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the security classification.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApi
     */
    public securityClassificationsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return SecurityClassificationsApiFp(this.configuration).securityClassificationsListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new security classification.
     * @param {SecurityClassificationSchemaCreate} SecurityClassificationSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApi
     */
    public securityClassificationsPost(SecurityClassificationSchemaCreate: SecurityClassificationSchemaCreate, options?: any) {
        return SecurityClassificationsApiFp(this.configuration).securityClassificationsPost(SecurityClassificationSchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a security classification.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApi
     */
    public securityClassificationsSecurityClassificationIdDelete(security_classification_id: string, options?: any) {
        return SecurityClassificationsApiFp(this.configuration).securityClassificationsSecurityClassificationIdDelete(security_classification_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the security classification.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApi
     */
    public securityClassificationsSecurityClassificationIdGet(security_classification_id: string, options?: any) {
        return SecurityClassificationsApiFp(this.configuration).securityClassificationsSecurityClassificationIdGet(security_classification_id, options)(this.axios, this.basePath);
    }

    /**
     * Update security classification information.
     * @param {string} security_classification_id The Invotra UUID of the security classification.
     * @param {SecurityClassificationSchemaCommon} SecurityClassificationSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityClassificationsApi
     */
    public securityClassificationsSecurityClassificationIdPut(security_classification_id: string, SecurityClassificationSchemaCommon: SecurityClassificationSchemaCommon, options?: any) {
        return SecurityClassificationsApiFp(this.configuration).securityClassificationsSecurityClassificationIdPut(security_classification_id, SecurityClassificationSchemaCommon, options)(this.axios, this.basePath);
    }

}
