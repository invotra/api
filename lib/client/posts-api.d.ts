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
import { CommonStatusSchema } from '../model';
import { InlineResponse20012 } from '../model';
import { InlineResponse20014 } from '../model';
import { InlineResponse2009 } from '../model';
import { PostCategorySchema } from '../model';
import { PostReportSchemaCreate } from '../model';
import { PostSchema } from '../model';
import { PostSchemaBase } from '../model';
import { PostSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
import { UuidListSchema } from '../model';
/**
 * PostsApi - axios parameter creator
 * @export
 */
export declare const PostsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * List post categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsCategoriesGet(options?: any): RequestArgs;
    /**
     * Search for posts.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsGet(external_id: string, options?: any): RequestArgs;
    /**
     * List of posts. An empty array is returned if no posts are found.
     * @summary List of posts.
     * @param {'timestamp' | 'comment_count' | 'likes_count'} [sort] Field to sort by
     * @param {'asc' | 'desc'} [order] Sort order
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsListGet(sort?: "timestamp" | "comment_count" | "likes_count" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Create a post.
     * @param {PostSchemaCreate} PostSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPost(PostSchemaCreate: PostSchemaCreate, options?: any): RequestArgs;
    /**
     * Get information about the post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdGet(post_id: string, options?: any): RequestArgs;
    /**
     * Remove the current user\'s like from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeDelete(post_id: string, options?: any): RequestArgs;
    /**
     * Check if the current user has liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeGet(post_id: string, options?: any): RequestArgs;
    /**
     * Like a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikePut(post_id: string, options?: any): RequestArgs;
    /**
     * Get a list of users who have liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Update post information.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostSchemaBase} PostSchemaBase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdPut(post_id: string, PostSchemaBase: PostSchemaBase, options?: any): RequestArgs;
    /**
     * Get a list of post replies. The replies are returned in thread order, old-to-new. Replies to a post appear after the post but before the next post at the same level, and posts are ordered oldest-to-newest within each level.
     * @summary Get the replies to a post.
     * @param {string} post_id The Invotra UUID of the parent post. Currently this must be a top-level post in its group. This restriction may be relaxed in a future API version.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdRepliesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Remove the current user\'s report flag from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportDelete(post_id: string, options?: any): RequestArgs;
    /**
     * Check if the current user has reported a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportGet(post_id: string, options?: any): RequestArgs;
    /**
     * Report a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostReportSchemaCreate} PostReportSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportPut(post_id: string, PostReportSchemaCreate: PostReportSchemaCreate, options?: any): RequestArgs;
};
/**
 * PostsApi - functional programming interface
 * @export
 */
export declare const PostsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * List post categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsCategoriesGet(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PostCategorySchema[]>;
    /**
     * Search for posts.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsGet(external_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<UuidListSchema>;
    /**
     * List of posts. An empty array is returned if no posts are found.
     * @summary List of posts.
     * @param {'timestamp' | 'comment_count' | 'likes_count'} [sort] Field to sort by
     * @param {'asc' | 'desc'} [order] Sort order
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsListGet(sort?: "timestamp" | "comment_count" | "likes_count" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20014>;
    /**
     * Create a post.
     * @param {PostSchemaCreate} PostSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPost(PostSchemaCreate: PostSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Get information about the post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdGet(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PostSchema>;
    /**
     * Remove the current user\'s like from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeDelete(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Check if the current user has liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeGet(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<CommonStatusSchema>;
    /**
     * Like a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikePut(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get a list of users who have liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20012>;
    /**
     * Update post information.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostSchemaBase} PostSchemaBase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdPut(post_id: string, PostSchemaBase: PostSchemaBase, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get a list of post replies. The replies are returned in thread order, old-to-new. Replies to a post appear after the post but before the next post at the same level, and posts are ordered oldest-to-newest within each level.
     * @summary Get the replies to a post.
     * @param {string} post_id The Invotra UUID of the parent post. Currently this must be a top-level post in its group. This restriction may be relaxed in a future API version.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdRepliesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse2009>;
    /**
     * Remove the current user\'s report flag from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportDelete(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Check if the current user has reported a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportGet(post_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<CommonStatusSchema>;
    /**
     * Report a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostReportSchemaCreate} PostReportSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportPut(post_id: string, PostReportSchemaCreate: PostReportSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * PostsApi - factory interface
 * @export
 */
export declare const PostsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * List post categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsCategoriesGet(options?: any): AxiosPromise<PostCategorySchema[]>;
    /**
     * Search for posts.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * List of posts. An empty array is returned if no posts are found.
     * @summary List of posts.
     * @param {'timestamp' | 'comment_count' | 'likes_count'} [sort] Field to sort by
     * @param {'asc' | 'desc'} [order] Sort order
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsListGet(sort?: "timestamp" | "comment_count" | "likes_count" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20014>;
    /**
     * Create a post.
     * @param {PostSchemaCreate} PostSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPost(PostSchemaCreate: PostSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Get information about the post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdGet(post_id: string, options?: any): AxiosPromise<PostSchema>;
    /**
     * Remove the current user\'s like from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikeGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Like a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikePut(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get a list of users who have liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdLikesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20012>;
    /**
     * Update post information.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostSchemaBase} PostSchemaBase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdPut(post_id: string, PostSchemaBase: PostSchemaBase, options?: any): AxiosPromise<void>;
    /**
     * Get a list of post replies. The replies are returned in thread order, old-to-new. Replies to a post appear after the post but before the next post at the same level, and posts are ordered oldest-to-newest within each level.
     * @summary Get the replies to a post.
     * @param {string} post_id The Invotra UUID of the parent post. Currently this must be a top-level post in its group. This restriction may be relaxed in a future API version.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdRepliesGet(post_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse2009>;
    /**
     * Remove the current user\'s report flag from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has reported a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Report a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostReportSchemaCreate} PostReportSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    postsPostIdReportPut(post_id: string, PostReportSchemaCreate: PostReportSchemaCreate, options?: any): AxiosPromise<void>;
};
/**
 * PostsApi - interface
 * @export
 * @interface PostsApi
 */
export interface PostsApiInterface {
    /**
     * List post categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsCategoriesGet(options?: any): AxiosPromise<Array<PostCategorySchema>>;
    /**
     * Search for posts.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * List of posts. An empty array is returned if no posts are found.
     * @summary List of posts.
     * @param {'timestamp' | 'comment_count' | 'likes_count'} [sort] Field to sort by
     * @param {'asc' | 'desc'} [order] Sort order
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsListGet(sort?: 'timestamp' | 'comment_count' | 'likes_count', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20014>;
    /**
     * Create a post.
     * @param {PostSchemaCreate} PostSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPost(PostSchemaCreate: PostSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Get information about the post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdGet(post_id: string, options?: any): AxiosPromise<PostSchema>;
    /**
     * Remove the current user\'s like from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdLikeDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdLikeGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Like a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdLikePut(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get a list of users who have liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdLikesGet(post_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20012>;
    /**
     * Update post information.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostSchemaBase} PostSchemaBase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdPut(post_id: string, PostSchemaBase: PostSchemaBase, options?: any): AxiosPromise<void>;
    /**
     * Get a list of post replies. The replies are returned in thread order, old-to-new. Replies to a post appear after the post but before the next post at the same level, and posts are ordered oldest-to-newest within each level.
     * @summary Get the replies to a post.
     * @param {string} post_id The Invotra UUID of the parent post. Currently this must be a top-level post in its group. This restriction may be relaxed in a future API version.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdRepliesGet(post_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse2009>;
    /**
     * Remove the current user\'s report flag from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdReportDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has reported a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdReportGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Report a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostReportSchemaCreate} PostReportSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApiInterface
     */
    postsPostIdReportPut(post_id: string, PostReportSchemaCreate: PostReportSchemaCreate, options?: any): AxiosPromise<void>;
}
/**
 * PostsApi - object-oriented interface
 * @export
 * @class PostsApi
 * @extends {BaseAPI}
 */
export declare class PostsApi extends BaseAPI implements PostsApiInterface {
    /**
     * List post categories.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsCategoriesGet(options?: any): AxiosPromise<PostCategorySchema[]>;
    /**
     * Search for posts.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * List of posts. An empty array is returned if no posts are found.
     * @summary List of posts.
     * @param {'timestamp' | 'comment_count' | 'likes_count'} [sort] Field to sort by
     * @param {'asc' | 'desc'} [order] Sort order
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsListGet(sort?: 'timestamp' | 'comment_count' | 'likes_count', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20014>;
    /**
     * Create a post.
     * @param {PostSchemaCreate} PostSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPost(PostSchemaCreate: PostSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Get information about the post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdGet(post_id: string, options?: any): AxiosPromise<PostSchema>;
    /**
     * Remove the current user\'s like from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdLikeDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdLikeGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Like a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdLikePut(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get a list of users who have liked a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdLikesGet(post_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20012>;
    /**
     * Update post information.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostSchemaBase} PostSchemaBase
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdPut(post_id: string, PostSchemaBase: PostSchemaBase, options?: any): AxiosPromise<void>;
    /**
     * Get a list of post replies. The replies are returned in thread order, old-to-new. Replies to a post appear after the post but before the next post at the same level, and posts are ordered oldest-to-newest within each level.
     * @summary Get the replies to a post.
     * @param {string} post_id The Invotra UUID of the parent post. Currently this must be a top-level post in its group. This restriction may be relaxed in a future API version.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdRepliesGet(post_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse2009>;
    /**
     * Remove the current user\'s report flag from a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdReportDelete(post_id: string, options?: any): AxiosPromise<void>;
    /**
     * Check if the current user has reported a post.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdReportGet(post_id: string, options?: any): AxiosPromise<CommonStatusSchema>;
    /**
     * Report a post as the current user.
     * @param {string} post_id The Invotra UUID of the post.
     * @param {PostReportSchemaCreate} PostReportSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostsApi
     */
    postsPostIdReportPut(post_id: string, PostReportSchemaCreate: PostReportSchemaCreate, options?: any): AxiosPromise<void>;
}
