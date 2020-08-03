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
import { InlineResponse20023 } from '../model';
import { PollSchema } from '../model';
import { PollSchemaCreate } from '../model';
import { PollSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PollsApi - axios parameter creator
 * @export
 */
export declare const PollsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for polls. An empty array is returned if no polls where found.
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
    pollsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdDelete(poll_id: string, options?: any): RequestArgs;
    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdGet(poll_id: string, options?: any): RequestArgs;
    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): RequestArgs;
    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): RequestArgs;
};
/**
 * PollsApi - functional programming interface
 * @export
 */
export declare const PollsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for polls. An empty array is returned if no polls where found.
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
    pollsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20023>;
    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdDelete(poll_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdGet(poll_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<PollSchema>;
    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * PollsApi - factory interface
 * @export
 */
export declare const PollsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for polls. An empty array is returned if no polls where found.
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
    pollsListGet(author_uuid?: string | undefined, created_date?: string | undefined, updated_date?: string | undefined, state?: string | undefined, sort?: "timestamp_created" | "timestamp_updated" | undefined, order?: "asc" | "desc" | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20023>;
    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdDelete(poll_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdGet(poll_id: string, options?: any): AxiosPromise<PollSchema>;
    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * PollsApi - interface
 * @export
 * @interface PollsApi
 */
export interface PollsApiInterface {
    /**
     * Search for polls. An empty array is returned if no polls where found.
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
     * @memberof PollsApiInterface
     */
    pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20023>;
    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdDelete(poll_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdGet(poll_id: string, options?: any): AxiosPromise<PollSchema>;
    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApiInterface
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * PollsApi - object-oriented interface
 * @export
 * @class PollsApi
 * @extends {BaseAPI}
 */
export declare class PollsApi extends BaseAPI implements PollsApiInterface {
    /**
     * Search for polls. An empty array is returned if no polls where found.
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
     * @memberof PollsApi
     */
    pollsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20023>;
    /**
     * Delete a poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    pollsPollIdDelete(poll_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the poll.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    pollsPollIdGet(poll_id: string, options?: any): AxiosPromise<PollSchema>;
    /**
     * Update poll information.
     * @param {string} poll_id The Invotra UUID of the poll.
     * @param {PollSchemaUpdate} PollSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    pollsPollIdPut(poll_id: string, PollSchemaUpdate: PollSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new poll.
     * @param {PollSchemaCreate} PollSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PollsApi
     */
    pollsPost(PollSchemaCreate: PollSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
