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

import { GroupPollSchema } from '../model';
import { GroupPollSchemaCreate } from '../model';
import { InlineResponse20017 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * GroupPollsApi - axios parameter creator
 * @export
 */
export const GroupPollsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdDelete(group_poll_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'group_poll_id' is not null or undefined
            if (group_poll_id === null || group_poll_id === undefined) {
                throw new RequiredError('group_poll_id','Required parameter group_poll_id was null or undefined when calling groupPollsGroupPollIdDelete.');
            }
            const localVarPath = `/group_polls/{group_poll_id}`
                .replace(`{${"group_poll_id"}}`, encodeURIComponent(String(group_poll_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/group_polls:write"])
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
         * Get information about the group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdGet(group_poll_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'group_poll_id' is not null or undefined
            if (group_poll_id === null || group_poll_id === undefined) {
                throw new RequiredError('group_poll_id','Required parameter group_poll_id was null or undefined when calling groupPollsGroupPollIdGet.');
            }
            const localVarPath = `/group_polls/{group_poll_id}`
                .replace(`{${"group_poll_id"}}`, encodeURIComponent(String(group_poll_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/group_polls:read"])
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
         * Search for group polls. An empty array is returned if no group polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [group_uuid] Filter on Invotra UUID of the group.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsListGet(author_uuid?: string, group_uuid?: string, created_date?: string, updated_date?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/group_polls/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/group_polls:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required

            if (author_uuid !== undefined) {
                localVarQueryParameter['author_uuid'] = author_uuid;
            }

            if (group_uuid !== undefined) {
                localVarQueryParameter['group_uuid'] = group_uuid;
            }

            if (created_date !== undefined) {
                localVarQueryParameter['created_date'] = created_date;
            }

            if (updated_date !== undefined) {
                localVarQueryParameter['updated_date'] = updated_date;
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
         * Provision a new group poll.
         * @param {GroupPollSchemaCreate} GroupPollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsPost(GroupPollSchemaCreate: GroupPollSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'GroupPollSchemaCreate' is not null or undefined
            if (GroupPollSchemaCreate === null || GroupPollSchemaCreate === undefined) {
                throw new RequiredError('GroupPollSchemaCreate','Required parameter GroupPollSchemaCreate was null or undefined when calling groupPollsPost.');
            }
            const localVarPath = `/group_polls`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/group_polls:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof GroupPollSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(GroupPollSchemaCreate !== undefined ? GroupPollSchemaCreate : {}) : (GroupPollSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GroupPollsApi - functional programming interface
 * @export
 */
export const GroupPollsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdDelete(group_poll_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = GroupPollsApiAxiosParamCreator(configuration).groupPollsGroupPollIdDelete(group_poll_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdGet(group_poll_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<GroupPollSchema> {
            const localVarAxiosArgs = GroupPollsApiAxiosParamCreator(configuration).groupPollsGroupPollIdGet(group_poll_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search for group polls. An empty array is returned if no group polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [group_uuid] Filter on Invotra UUID of the group.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsListGet(author_uuid?: string, group_uuid?: string, created_date?: string, updated_date?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20017> {
            const localVarAxiosArgs = GroupPollsApiAxiosParamCreator(configuration).groupPollsListGet(author_uuid, group_uuid, created_date, updated_date, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new group poll.
         * @param {GroupPollSchemaCreate} GroupPollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsPost(GroupPollSchemaCreate: GroupPollSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = GroupPollsApiAxiosParamCreator(configuration).groupPollsPost(GroupPollSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * GroupPollsApi - factory interface
 * @export
 */
export const GroupPollsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdDelete(group_poll_id: string, options?: any): AxiosPromise<void> {
            return GroupPollsApiFp(configuration).groupPollsGroupPollIdDelete(group_poll_id, options)(axios, basePath);
        },
        /**
         * Get information about the group poll.
         * @param {string} group_poll_id The Invotra UUID of the group poll.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsGroupPollIdGet(group_poll_id: string, options?: any): AxiosPromise<GroupPollSchema> {
            return GroupPollsApiFp(configuration).groupPollsGroupPollIdGet(group_poll_id, options)(axios, basePath);
        },
        /**
         * Search for group polls. An empty array is returned if no group polls where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [group_uuid] Filter on Invotra UUID of the group.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsListGet(author_uuid?: string, group_uuid?: string, created_date?: string, updated_date?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20017> {
            return GroupPollsApiFp(configuration).groupPollsListGet(author_uuid, group_uuid, created_date, updated_date, sort, order, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new group poll.
         * @param {GroupPollSchemaCreate} GroupPollSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        groupPollsPost(GroupPollSchemaCreate: GroupPollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return GroupPollsApiFp(configuration).groupPollsPost(GroupPollSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * GroupPollsApi - interface
 * @export
 * @interface GroupPollsApi
 */
export interface GroupPollsApiInterface {
    /**
     * Delete a group poll.
     * @param {string} group_poll_id The Invotra UUID of the group poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApiInterface
     */
    groupPollsGroupPollIdDelete(group_poll_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the group poll.
     * @param {string} group_poll_id The Invotra UUID of the group poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApiInterface
     */
    groupPollsGroupPollIdGet(group_poll_id: string, options?: any): AxiosPromise<GroupPollSchema>;

    /**
     * Search for group polls. An empty array is returned if no group polls where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [group_uuid] Filter on Invotra UUID of the group.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApiInterface
     */
    groupPollsListGet(author_uuid?: string, group_uuid?: string, created_date?: string, updated_date?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20017>;

    /**
     * Provision a new group poll.
     * @param {GroupPollSchemaCreate} GroupPollSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApiInterface
     */
    groupPollsPost(GroupPollSchemaCreate: GroupPollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * GroupPollsApi - object-oriented interface
 * @export
 * @class GroupPollsApi
 * @extends {BaseAPI}
 */
export class GroupPollsApi extends BaseAPI implements GroupPollsApiInterface {
    /**
     * Delete a group poll.
     * @param {string} group_poll_id The Invotra UUID of the group poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApi
     */
    public groupPollsGroupPollIdDelete(group_poll_id: string, options?: any) {
        return GroupPollsApiFp(this.configuration).groupPollsGroupPollIdDelete(group_poll_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the group poll.
     * @param {string} group_poll_id The Invotra UUID of the group poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApi
     */
    public groupPollsGroupPollIdGet(group_poll_id: string, options?: any) {
        return GroupPollsApiFp(this.configuration).groupPollsGroupPollIdGet(group_poll_id, options)(this.axios, this.basePath);
    }

    /**
     * Search for group polls. An empty array is returned if no group polls where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [group_uuid] Filter on Invotra UUID of the group.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApi
     */
    public groupPollsListGet(author_uuid?: string, group_uuid?: string, created_date?: string, updated_date?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return GroupPollsApiFp(this.configuration).groupPollsListGet(author_uuid, group_uuid, created_date, updated_date, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new group poll.
     * @param {GroupPollSchemaCreate} GroupPollSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GroupPollsApi
     */
    public groupPollsPost(GroupPollSchemaCreate: GroupPollSchemaCreate, options?: any) {
        return GroupPollsApiFp(this.configuration).groupPollsPost(GroupPollSchemaCreate, options)(this.axios, this.basePath);
    }

}
