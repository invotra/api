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

import { ContentTypeSchema } from '../model';
import { ContentTypeSchemaCreate } from '../model';
import { ContentTypeSchemaUpdate } from '../model';
import { InlineResponse20032 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ContentTypesApi - axios parameter creator
 * @export
 */
export const ContentTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdDelete(content_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'content_type_id' is not null or undefined
            if (content_type_id === null || content_type_id === undefined) {
                throw new RequiredError('content_type_id','Required parameter content_type_id was null or undefined when calling contentTypesContentTypeIdDelete.');
            }
            const localVarPath = `/content_types/{content_type_id}`
                .replace(`{${"content_type_id"}}`, encodeURIComponent(String(content_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/content_types:write"])
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
         * Get information about the content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdGet(content_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'content_type_id' is not null or undefined
            if (content_type_id === null || content_type_id === undefined) {
                throw new RequiredError('content_type_id','Required parameter content_type_id was null or undefined when calling contentTypesContentTypeIdGet.');
            }
            const localVarPath = `/content_types/{content_type_id}`
                .replace(`{${"content_type_id"}}`, encodeURIComponent(String(content_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/content_types:read"])
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
         * Update content type information.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'content_type_id' is not null or undefined
            if (content_type_id === null || content_type_id === undefined) {
                throw new RequiredError('content_type_id','Required parameter content_type_id was null or undefined when calling contentTypesContentTypeIdPut.');
            }
            // verify required parameter 'ContentTypeSchemaUpdate' is not null or undefined
            if (ContentTypeSchemaUpdate === null || ContentTypeSchemaUpdate === undefined) {
                throw new RequiredError('ContentTypeSchemaUpdate','Required parameter ContentTypeSchemaUpdate was null or undefined when calling contentTypesContentTypeIdPut.');
            }
            const localVarPath = `/content_types/{content_type_id}`
                .replace(`{${"content_type_id"}}`, encodeURIComponent(String(content_type_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/content_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof ContentTypeSchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(ContentTypeSchemaUpdate !== undefined ? ContentTypeSchemaUpdate : {}) : (ContentTypeSchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Search for content types. An empty array is returned if no content types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of content types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/content_types/list`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/content_types:read"])
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
         * Provision a new content type.
         * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'ContentTypeSchemaCreate' is not null or undefined
            if (ContentTypeSchemaCreate === null || ContentTypeSchemaCreate === undefined) {
                throw new RequiredError('ContentTypeSchemaCreate','Required parameter ContentTypeSchemaCreate was null or undefined when calling contentTypesPost.');
            }
            const localVarPath = `/content_types`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/content_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof ContentTypeSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(ContentTypeSchemaCreate !== undefined ? ContentTypeSchemaCreate : {}) : (ContentTypeSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContentTypesApi - functional programming interface
 * @export
 */
export const ContentTypesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdDelete(content_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ContentTypesApiAxiosParamCreator(configuration).contentTypesContentTypeIdDelete(content_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdGet(content_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ContentTypeSchema> {
            const localVarAxiosArgs = ContentTypesApiAxiosParamCreator(configuration).contentTypesContentTypeIdGet(content_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update content type information.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = ContentTypesApiAxiosParamCreator(configuration).contentTypesContentTypeIdPut(content_type_id, ContentTypeSchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search for content types. An empty array is returned if no content types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of content types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20032> {
            const localVarAxiosArgs = ContentTypesApiAxiosParamCreator(configuration).contentTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new content type.
         * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = ContentTypesApiAxiosParamCreator(configuration).contentTypesPost(ContentTypeSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ContentTypesApi - factory interface
 * @export
 */
export const ContentTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdDelete(content_type_id: string, options?: any): AxiosPromise<void> {
            return ContentTypesApiFp(configuration).contentTypesContentTypeIdDelete(content_type_id, options)(axios, basePath);
        },
        /**
         * Get information about the content type.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdGet(content_type_id: string, options?: any): AxiosPromise<ContentTypeSchema> {
            return ContentTypesApiFp(configuration).contentTypesContentTypeIdGet(content_type_id, options)(axios, basePath);
        },
        /**
         * Update content type information.
         * @param {string} content_type_id The Invotra UUID of the content type.
         * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): AxiosPromise<void> {
            return ContentTypesApiFp(configuration).contentTypesContentTypeIdPut(content_type_id, ContentTypeSchemaUpdate, options)(axios, basePath);
        },
        /**
         * Search for content types. An empty array is returned if no content types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of content types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20032> {
            return ContentTypesApiFp(configuration).contentTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new content type.
         * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return ContentTypesApiFp(configuration).contentTypesPost(ContentTypeSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * ContentTypesApi - interface
 * @export
 * @interface ContentTypesApi
 */
export interface ContentTypesApiInterface {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): AxiosPromise<ContentTypeSchema>;

    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): AxiosPromise<void>;

    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20032>;

    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * ContentTypesApi - object-oriented interface
 * @export
 * @class ContentTypesApi
 * @extends {BaseAPI}
 */
export class ContentTypesApi extends BaseAPI implements ContentTypesApiInterface {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    public contentTypesContentTypeIdDelete(content_type_id: string, options?: any) {
        return ContentTypesApiFp(this.configuration).contentTypesContentTypeIdDelete(content_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    public contentTypesContentTypeIdGet(content_type_id: string, options?: any) {
        return ContentTypesApiFp(this.configuration).contentTypesContentTypeIdGet(content_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    public contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any) {
        return ContentTypesApiFp(this.configuration).contentTypesContentTypeIdPut(content_type_id, ContentTypeSchemaUpdate, options)(this.axios, this.basePath);
    }

    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    public contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return ContentTypesApiFp(this.configuration).contentTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    public contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any) {
        return ContentTypesApiFp(this.configuration).contentTypesPost(ContentTypeSchemaCreate, options)(this.axios, this.basePath);
    }

}
