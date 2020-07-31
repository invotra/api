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
import { ContentCategorySchema } from '../model';
import { ContentCategorySchemaCommon } from '../model';
import { ContentCategorySchemaCreate } from '../model';
import { InlineResponse20031 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ContentCategoriesApi - axios parameter creator
 * @export
 */
export declare const ContentCategoriesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete a content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdDelete(content_category_id: string, options?: any): RequestArgs;
    /**
     * Get information about the content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdGet(content_category_id: string, options?: any): RequestArgs;
    /**
     * Update content category information.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {ContentCategorySchemaCommon} ContentCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdPut(content_category_id: string, ContentCategorySchemaCommon: ContentCategorySchemaCommon, options?: any): RequestArgs;
    /**
     * Search for content categories. An empty array is returned if no content categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new content category.
     * @param {ContentCategorySchemaCreate} ContentCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesPost(ContentCategorySchemaCreate: ContentCategorySchemaCreate, options?: any): RequestArgs;
};
/**
 * ContentCategoriesApi - functional programming interface
 * @export
 */
export declare const ContentCategoriesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete a content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdDelete(content_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdGet(content_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ContentCategorySchema>;
    /**
     * Update content category information.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {ContentCategorySchemaCommon} ContentCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdPut(content_category_id: string, ContentCategorySchemaCommon: ContentCategorySchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for content categories. An empty array is returned if no content categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content category.
     * @param {ContentCategorySchemaCreate} ContentCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesPost(ContentCategorySchemaCreate: ContentCategorySchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ContentCategoriesApi - factory interface
 * @export
 */
export declare const ContentCategoriesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete a content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdDelete(content_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdGet(content_category_id: string, options?: any): AxiosPromise<ContentCategorySchema>;
    /**
     * Update content category information.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {ContentCategorySchemaCommon} ContentCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesContentCategoryIdPut(content_category_id: string, ContentCategorySchemaCommon: ContentCategorySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for content categories. An empty array is returned if no content categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content category.
     * @param {ContentCategorySchemaCreate} ContentCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentCategoriesPost(ContentCategorySchemaCreate: ContentCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ContentCategoriesApi - interface
 * @export
 * @interface ContentCategoriesApi
 */
export interface ContentCategoriesApiInterface {
    /**
     * Delete a content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApiInterface
     */
    contentCategoriesContentCategoryIdDelete(content_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApiInterface
     */
    contentCategoriesContentCategoryIdGet(content_category_id: string, options?: any): AxiosPromise<ContentCategorySchema>;
    /**
     * Update content category information.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {ContentCategorySchemaCommon} ContentCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApiInterface
     */
    contentCategoriesContentCategoryIdPut(content_category_id: string, ContentCategorySchemaCommon: ContentCategorySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for content categories. An empty array is returned if no content categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApiInterface
     */
    contentCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content category.
     * @param {ContentCategorySchemaCreate} ContentCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApiInterface
     */
    contentCategoriesPost(ContentCategorySchemaCreate: ContentCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * ContentCategoriesApi - object-oriented interface
 * @export
 * @class ContentCategoriesApi
 * @extends {BaseAPI}
 */
export declare class ContentCategoriesApi extends BaseAPI implements ContentCategoriesApiInterface {
    /**
     * Delete a content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApi
     */
    contentCategoriesContentCategoryIdDelete(content_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content category.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApi
     */
    contentCategoriesContentCategoryIdGet(content_category_id: string, options?: any): AxiosPromise<ContentCategorySchema>;
    /**
     * Update content category information.
     * @param {string} content_category_id The Invotra UUID of the content category.
     * @param {ContentCategorySchemaCommon} ContentCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApi
     */
    contentCategoriesContentCategoryIdPut(content_category_id: string, ContentCategorySchemaCommon: ContentCategorySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for content categories. An empty array is returned if no content categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApi
     */
    contentCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content category.
     * @param {ContentCategorySchemaCreate} ContentCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentCategoriesApi
     */
    contentCategoriesPost(ContentCategorySchemaCreate: ContentCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
