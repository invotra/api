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

import { InlineResponse20053 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
import { UserCategorySchema } from '../model';
import { UserCategorySchemaCommon } from '../model';
import { UserCategorySchemaCreate } from '../model';
/**
 * UserCategoriesApi - axios parameter creator
 * @export
 */
export const UserCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/user_categories/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/user_categories:read"])
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
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'UserCategorySchemaCreate' is not null or undefined
            if (UserCategorySchemaCreate === null || UserCategorySchemaCreate === undefined) {
                throw new RequiredError('UserCategorySchemaCreate','Required parameter UserCategorySchemaCreate was null or undefined when calling userCategoriesPost.');
            }
            const localVarPath = `/user_categories`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/user_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof UserCategorySchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(UserCategorySchemaCreate !== undefined ? UserCategorySchemaCreate : {}) : (UserCategorySchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete(user_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id','Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdDelete.');
            }
            const localVarPath = `/user_categories/{user_category_id}`
                .replace(`{${"user_category_id"}}`, encodeURIComponent(String(user_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/user_categories:write"])
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
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet(user_category_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id','Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdGet.');
            }
            const localVarPath = `/user_categories/{user_category_id}`
                .replace(`{${"user_category_id"}}`, encodeURIComponent(String(user_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/user_categories:read"])
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
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id','Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdPut.');
            }
            // verify required parameter 'UserCategorySchemaCommon' is not null or undefined
            if (UserCategorySchemaCommon === null || UserCategorySchemaCommon === undefined) {
                throw new RequiredError('UserCategorySchemaCommon','Required parameter UserCategorySchemaCommon was null or undefined when calling userCategoriesUserCategoryIdPut.');
            }
            const localVarPath = `/user_categories/{user_category_id}`
                .replace(`{${"user_category_id"}}`, encodeURIComponent(String(user_category_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/user_categories:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof UserCategorySchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(UserCategorySchemaCommon !== undefined ? UserCategorySchemaCommon : {}) : (UserCategorySchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserCategoriesApi - functional programming interface
 * @export
 */
export const UserCategoriesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20053> {
            const localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesPost(UserCategorySchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdDelete(user_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserCategorySchema> {
            const localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdGet(user_category_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * UserCategoriesApi - factory interface
 * @export
 */
export const UserCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20053> {
            return UserCategoriesApiFp(configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return UserCategoriesApiFp(configuration).userCategoriesPost(UserCategorySchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): AxiosPromise<void> {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdDelete(user_category_id, options)(axios, basePath);
        },
        /**
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): AxiosPromise<UserCategorySchema> {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdGet(user_category_id, options)(axios, basePath);
        },
        /**
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): AxiosPromise<void> {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options)(axios, basePath);
        },
    };
};

/**
 * UserCategoriesApi - interface
 * @export
 * @interface UserCategoriesApi
 */
export interface UserCategoriesApiInterface {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20053>;

    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): AxiosPromise<UserCategorySchema>;

    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): AxiosPromise<void>;

}

/**
 * UserCategoriesApi - object-oriented interface
 * @export
 * @class UserCategoriesApi
 * @extends {BaseAPI}
 */
export class UserCategoriesApi extends BaseAPI implements UserCategoriesApiInterface {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    public userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return UserCategoriesApiFp(this.configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    public userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any) {
        return UserCategoriesApiFp(this.configuration).userCategoriesPost(UserCategorySchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    public userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdDelete(user_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    public userCategoriesUserCategoryIdGet(user_category_id: string, options?: any) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdGet(user_category_id, options)(this.axios, this.basePath);
    }

    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    public userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options)(this.axios, this.basePath);
    }

}
