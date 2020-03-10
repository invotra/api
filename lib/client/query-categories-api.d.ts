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
import { InlineResponse20048 } from '../model';
import { QueryCategorySchema } from '../model';
import { QueryCategorySchemaCommon } from '../model';
import { QueryCategorySchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * QueryCategoriesApi - axios parameter creator
 * @export
 */
export declare const QueryCategoriesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): RequestArgs;
    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): RequestArgs;
    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): RequestArgs;
    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): RequestArgs;
};
/**
 * QueryCategoriesApi - functional programming interface
 * @export
 */
export declare const QueryCategoriesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20048>;
    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<QueryCategorySchema>;
    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * QueryCategoriesApi - factory interface
 * @export
 */
export declare const QueryCategoriesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20048>;
    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): AxiosPromise<QueryCategorySchema>;
    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): AxiosPromise<void>;
};
/**
 * QueryCategoriesApi - interface
 * @export
 * @interface QueryCategoriesApi
 */
export interface QueryCategoriesApiInterface {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20048>;
    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): AxiosPromise<QueryCategorySchema>;
    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApiInterface
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): AxiosPromise<void>;
}
/**
 * QueryCategoriesApi - object-oriented interface
 * @export
 * @class QueryCategoriesApi
 * @extends {BaseAPI}
 */
export declare class QueryCategoriesApi extends BaseAPI implements QueryCategoriesApiInterface {
    /**
     * Search for query categories. An empty array is returned if no query categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of query categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the query category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    queryCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20048>;
    /**
     * Provision a new query category.
     * @param {QueryCategorySchemaCreate} QueryCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    queryCategoriesPost(QueryCategorySchemaCreate: QueryCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    queryCategoriesQueryCategoryIdDelete(query_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the query category.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    queryCategoriesQueryCategoryIdGet(query_category_id: string, options?: any): AxiosPromise<QueryCategorySchema>;
    /**
     * Update query category information.
     * @param {string} query_category_id The Invotra UUID of the query category.
     * @param {QueryCategorySchemaCommon} QueryCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QueryCategoriesApi
     */
    queryCategoriesQueryCategoryIdPut(query_category_id: string, QueryCategorySchemaCommon: QueryCategorySchemaCommon, options?: any): AxiosPromise<void>;
}
