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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { InlineResponse20027 } from '../model';
/**
 * CommentsApi - axios parameter creator
 * @export
 */
export declare const CommentsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
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
    commentsListGet(content_type?: string | undefined, author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, category?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
};
/**
 * CommentsApi - functional programming interface
 * @export
 */
export declare const CommentsApiFp: (configuration?: Configuration | undefined) => {
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
    commentsListGet(content_type?: string | undefined, author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, category?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20027>;
};
/**
 * CommentsApi - factory interface
 * @export
 */
export declare const CommentsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
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
    commentsListGet(content_type?: string | undefined, author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, category?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20027>;
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
export declare class CommentsApi extends BaseAPI implements CommentsApiInterface {
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
    commentsListGet(content_type?: string, author_uuid?: string, created_date?: string, updated_date?: string, category?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20027>;
}
