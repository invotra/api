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

import { InlineResponse20027 } from '../model';
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export const CommentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for comments. An empty array is returned if no comments are found.
         * @param {string} [content_type] Filter on content type.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [category] Filter on category (Only for post comments).
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/comments/list`;
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

            if (content_type !== undefined) {
                localVarQueryParameter['content_type'] = content_type;
            }

            if (author_uuid !== undefined) {
                localVarQueryParameter['author_uuid'] = author_uuid;
            }

            if (created_date !== undefined) {
                localVarQueryParameter['created_date'] = created_date;
            }

            if (updated_date !== undefined) {
                localVarQueryParameter['updated_date'] = updated_date;
            }

            if (category !== undefined) {
                localVarQueryParameter['category'] = category;
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
    }
};

/**
 * CommentsApi - functional programming interface
 * @export
 */
export const CommentsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for comments. An empty array is returned if no comments are found.
         * @param {string} [content_type] Filter on content type.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [category] Filter on category (Only for post comments).
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20027> {
            const localVarAxiosArgs = CommentsApiAxiosParamCreator(configuration).commentsListGet(content_type, author_uuid, created_date, updated_date, category, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CommentsApi - factory interface
 * @export
 */
export const CommentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for comments. An empty array is returned if no comments are found.
         * @param {string} [content_type] Filter on content type.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [category] Filter on category (Only for post comments).
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20027> {
            return CommentsApiFp(configuration).commentsListGet(content_type, author_uuid, created_date, updated_date, category, sort, order, offset, limit, options)(axios, basePath);
        },
    };
};

/**
 * CommentsApi - interface
 * @export
 * @interface CommentsApi
 */
export interface CommentsApiInterface {
    /**
     * Search for comments. An empty array is returned if no comments are found.
     * @param {string} [content_type] Filter on content type.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [category] Filter on category (Only for post comments).
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApiInterface
     */
    commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20027>;

}

/**
 * CommentsApi - object-oriented interface
 * @export
 * @class CommentsApi
 * @extends {BaseAPI}
 */
export class CommentsApi extends BaseAPI implements CommentsApiInterface {
    /**
     * Search for comments. An empty array is returned if no comments are found.
     * @param {string} [content_type] Filter on content type.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [category] Filter on category (Only for post comments).
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CommentsApi
     */
    public commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return CommentsApiFp(this.configuration).commentsListGet(content_type, author_uuid, created_date, updated_date, category, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

}
