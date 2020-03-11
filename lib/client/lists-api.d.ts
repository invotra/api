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
import { InlineResponse20018 } from '../model';
import { ListSchema } from '../model';
import { ListSchemaCreate } from '../model';
import { ListSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ListsApi - axios parameter creator
 * @export
 */
export declare const ListsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for lists. An empty array is returned if no lists where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of lists on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Delete a list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdDelete(list_id: string, options?: any): RequestArgs;
    /**
     * Get information about the list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdGet(list_id: string, options?: any): RequestArgs;
    /**
     * Update list information.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {ListSchemaUpdate} ListSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdPut(list_id: string, ListSchemaUpdate: ListSchemaUpdate, options?: any): RequestArgs;
    /**
     * Provision a new list.
     * @param {ListSchemaCreate} ListSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsPost(ListSchemaCreate: ListSchemaCreate, options?: any): RequestArgs;
};
/**
 * ListsApi - functional programming interface
 * @export
 */
export declare const ListsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for lists. An empty array is returned if no lists where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of lists on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20018>;
    /**
     * Delete a list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdDelete(list_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdGet(list_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ListSchema>;
    /**
     * Update list information.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {ListSchemaUpdate} ListSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdPut(list_id: string, ListSchemaUpdate: ListSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new list.
     * @param {ListSchemaCreate} ListSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsPost(ListSchemaCreate: ListSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ListsApi - factory interface
 * @export
 */
export declare const ListsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for lists. An empty array is returned if no lists where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of lists on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20018>;
    /**
     * Delete a list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdDelete(list_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdGet(list_id: string, options?: any): AxiosPromise<ListSchema>;
    /**
     * Update list information.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {ListSchemaUpdate} ListSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsListIdPut(list_id: string, ListSchemaUpdate: ListSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new list.
     * @param {ListSchemaCreate} ListSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listsPost(ListSchemaCreate: ListSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ListsApi - interface
 * @export
 * @interface ListsApi
 */
export interface ListsApiInterface {
    /**
     * Search for lists. An empty array is returned if no lists where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of lists on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20018>;
    /**
     * Delete a list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsListIdDelete(list_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsListIdGet(list_id: string, options?: any): AxiosPromise<ListSchema>;
    /**
     * Update list information.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {ListSchemaUpdate} ListSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsListIdPut(list_id: string, ListSchemaUpdate: ListSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new list.
     * @param {ListSchemaCreate} ListSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApiInterface
     */
    listsPost(ListSchemaCreate: ListSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * ListsApi - object-oriented interface
 * @export
 * @class ListsApi
 * @extends {BaseAPI}
 */
export declare class ListsApi extends BaseAPI implements ListsApiInterface {
    /**
     * Search for lists. An empty array is returned if no lists where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of lists on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    listsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20018>;
    /**
     * Delete a list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    listsListIdDelete(list_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the list.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    listsListIdGet(list_id: string, options?: any): AxiosPromise<ListSchema>;
    /**
     * Update list information.
     * @param {string} list_id The Invotra UUID of the list.
     * @param {ListSchemaUpdate} ListSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    listsListIdPut(list_id: string, ListSchemaUpdate: ListSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new list.
     * @param {ListSchemaCreate} ListSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ListsApi
     */
    listsPost(ListSchemaCreate: ListSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}