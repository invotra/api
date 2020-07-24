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
import { InlineResponse20021 } from '../model';
import { PageSchema } from '../model';
import { PageSchemaCreate } from '../model';
import { PageSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PagesApi - axios parameter creator
 * @export
 */
export declare const PagesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdDelete(page_id: string, options?: any): RequestArgs;
    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdGet(page_id: string, options?: any): RequestArgs;
    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): RequestArgs;
    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): RequestArgs;
};
/**
 * PagesApi - functional programming interface
 * @export
 */
export declare const PagesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20021>;
    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdDelete(page_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdGet(page_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PageSchema>;
    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * PagesApi - factory interface
 * @export
 */
export declare const PagesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20021>;
    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdDelete(page_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdGet(page_id: string, options?: any): AxiosPromise<PageSchema>;
    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * PagesApi - interface
 * @export
 * @interface PagesApi
 */
export interface PagesApiInterface {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20021>;
    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdDelete(page_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdGet(page_id: string, options?: any): AxiosPromise<PageSchema>;
    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApiInterface
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * PagesApi - object-oriented interface
 * @export
 * @class PagesApi
 * @extends {BaseAPI}
 */
export declare class PagesApi extends BaseAPI implements PagesApiInterface {
    /**
     * Search for pages. An empty array is returned if no pages where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma-separated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    pagesListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20021>;
    /**
     * Delete a page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    pagesPageIdDelete(page_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the page.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    pagesPageIdGet(page_id: string, options?: any): AxiosPromise<PageSchema>;
    /**
     * Update page information.
     * @param {string} page_id The Invotra UUID of the page.
     * @param {PageSchemaUpdate} PageSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    pagesPageIdPut(page_id: string, PageSchemaUpdate: PageSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new page.
     * @param {PageSchemaCreate} PageSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PagesApi
     */
    pagesPost(PageSchemaCreate: PageSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
