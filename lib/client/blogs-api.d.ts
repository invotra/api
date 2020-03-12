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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { BlogSchema } from '../model';
import { BlogSchemaCreate } from '../model';
import { BlogSchemaUpdate } from '../model';
import { InlineResponse20015 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * BlogsApi - axios parameter creator
 * @export
 */
export declare const BlogsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete a blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdDelete(blog_id: string, options?: any): RequestArgs;
    /**
     * Get information about the blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdGet(blog_id: string, options?: any): RequestArgs;
    /**
     * Update blog information.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {BlogSchemaUpdate} BlogSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdPut(blog_id: string, BlogSchemaUpdate: BlogSchemaUpdate, options?: any): RequestArgs;
    /**
     * Search for blogs. An empty array is returned if no blogs where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of blogs on a comma seperated list of states. Valid states are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new blog.
     * @param {BlogSchemaCreate} BlogSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsPost(BlogSchemaCreate: BlogSchemaCreate, options?: any): RequestArgs;
};
/**
 * BlogsApi - functional programming interface
 * @export
 */
export declare const BlogsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete a blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdDelete(blog_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdGet(blog_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<BlogSchema>;
    /**
     * Update blog information.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {BlogSchemaUpdate} BlogSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdPut(blog_id: string, BlogSchemaUpdate: BlogSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for blogs. An empty array is returned if no blogs where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of blogs on a comma seperated list of states. Valid states are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20015>;
    /**
     * Provision a new blog.
     * @param {BlogSchemaCreate} BlogSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsPost(BlogSchemaCreate: BlogSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * BlogsApi - factory interface
 * @export
 */
export declare const BlogsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete a blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdDelete(blog_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdGet(blog_id: string, options?: any): AxiosPromise<BlogSchema>;
    /**
     * Update blog information.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {BlogSchemaUpdate} BlogSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsBlogIdPut(blog_id: string, BlogSchemaUpdate: BlogSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for blogs. An empty array is returned if no blogs where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of blogs on a comma seperated list of states. Valid states are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20015>;
    /**
     * Provision a new blog.
     * @param {BlogSchemaCreate} BlogSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    blogsPost(BlogSchemaCreate: BlogSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * BlogsApi - interface
 * @export
 * @interface BlogsApi
 */
export interface BlogsApiInterface {
    /**
     * Delete a blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApiInterface
     */
    blogsBlogIdDelete(blog_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApiInterface
     */
    blogsBlogIdGet(blog_id: string, options?: any): AxiosPromise<BlogSchema>;
    /**
     * Update blog information.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {BlogSchemaUpdate} BlogSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApiInterface
     */
    blogsBlogIdPut(blog_id: string, BlogSchemaUpdate: BlogSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for blogs. An empty array is returned if no blogs where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of blogs on a comma seperated list of states. Valid states are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApiInterface
     */
    blogsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20015>;
    /**
     * Provision a new blog.
     * @param {BlogSchemaCreate} BlogSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApiInterface
     */
    blogsPost(BlogSchemaCreate: BlogSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * BlogsApi - object-oriented interface
 * @export
 * @class BlogsApi
 * @extends {BaseAPI}
 */
export declare class BlogsApi extends BaseAPI implements BlogsApiInterface {
    /**
     * Delete a blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApi
     */
    blogsBlogIdDelete(blog_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the blog.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApi
     */
    blogsBlogIdGet(blog_id: string, options?: any): AxiosPromise<BlogSchema>;
    /**
     * Update blog information.
     * @param {string} blog_id The Invotra UUID of the blog.
     * @param {BlogSchemaUpdate} BlogSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApi
     */
    blogsBlogIdPut(blog_id: string, BlogSchemaUpdate: BlogSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for blogs. An empty array is returned if no blogs where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of blogs on a comma seperated list of states. Valid states are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApi
     */
    blogsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20015>;
    /**
     * Provision a new blog.
     * @param {BlogSchemaCreate} BlogSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BlogsApi
     */
    blogsPost(BlogSchemaCreate: BlogSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
