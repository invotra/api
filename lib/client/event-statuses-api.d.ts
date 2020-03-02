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
import { EventStatusSchema } from '../model';
import { EventStatusSchemaCommon } from '../model';
import { EventStatusSchemaCreate } from '../model';
import { InlineResponse20033 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * EventStatusesApi - axios parameter creator
 * @export
 */
export declare const EventStatusesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete an event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdDelete(event_status_id: string, options?: any): RequestArgs;
    /**
     * Get information about the event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdGet(event_status_id: string, options?: any): RequestArgs;
    /**
     * Update event status information.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {EventStatusSchemaCommon} EventStatusSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdPut(event_status_id: string, EventStatusSchemaCommon: EventStatusSchemaCommon, options?: any): RequestArgs;
    /**
     * Search for event statuses. An empty array is returned if no event statuses are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event statuses on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event status.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new event status.
     * @param {EventStatusSchemaCreate} EventStatusSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesPost(EventStatusSchemaCreate: EventStatusSchemaCreate, options?: any): RequestArgs;
};
/**
 * EventStatusesApi - functional programming interface
 * @export
 */
export declare const EventStatusesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete an event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdDelete(event_status_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdGet(event_status_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<EventStatusSchema>;
    /**
     * Update event status information.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {EventStatusSchemaCommon} EventStatusSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdPut(event_status_id: string, EventStatusSchemaCommon: EventStatusSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for event statuses. An empty array is returned if no event statuses are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event statuses on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event status.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20033>;
    /**
     * Provision a new event status.
     * @param {EventStatusSchemaCreate} EventStatusSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesPost(EventStatusSchemaCreate: EventStatusSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * EventStatusesApi - factory interface
 * @export
 */
export declare const EventStatusesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete an event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdDelete(event_status_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdGet(event_status_id: string, options?: any): AxiosPromise<EventStatusSchema>;
    /**
     * Update event status information.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {EventStatusSchemaCommon} EventStatusSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesEventStatusIdPut(event_status_id: string, EventStatusSchemaCommon: EventStatusSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event statuses. An empty array is returned if no event statuses are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event statuses on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event status.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20033>;
    /**
     * Provision a new event status.
     * @param {EventStatusSchemaCreate} EventStatusSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventStatusesPost(EventStatusSchemaCreate: EventStatusSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * EventStatusesApi - interface
 * @export
 * @interface EventStatusesApi
 */
export interface EventStatusesApiInterface {
    /**
     * Delete an event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApiInterface
     */
    eventStatusesEventStatusIdDelete(event_status_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApiInterface
     */
    eventStatusesEventStatusIdGet(event_status_id: string, options?: any): AxiosPromise<EventStatusSchema>;
    /**
     * Update event status information.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {EventStatusSchemaCommon} EventStatusSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApiInterface
     */
    eventStatusesEventStatusIdPut(event_status_id: string, EventStatusSchemaCommon: EventStatusSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event statuses. An empty array is returned if no event statuses are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event statuses on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event status.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApiInterface
     */
    eventStatusesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20033>;
    /**
     * Provision a new event status.
     * @param {EventStatusSchemaCreate} EventStatusSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApiInterface
     */
    eventStatusesPost(EventStatusSchemaCreate: EventStatusSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * EventStatusesApi - object-oriented interface
 * @export
 * @class EventStatusesApi
 * @extends {BaseAPI}
 */
export declare class EventStatusesApi extends BaseAPI implements EventStatusesApiInterface {
    /**
     * Delete an event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApi
     */
    eventStatusesEventStatusIdDelete(event_status_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event status.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApi
     */
    eventStatusesEventStatusIdGet(event_status_id: string, options?: any): AxiosPromise<EventStatusSchema>;
    /**
     * Update event status information.
     * @param {string} event_status_id The Invotra UUID of the event status.
     * @param {EventStatusSchemaCommon} EventStatusSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApi
     */
    eventStatusesEventStatusIdPut(event_status_id: string, EventStatusSchemaCommon: EventStatusSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event statuses. An empty array is returned if no event statuses are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event statuses on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event status.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApi
     */
    eventStatusesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20033>;
    /**
     * Provision a new event status.
     * @param {EventStatusSchemaCreate} EventStatusSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventStatusesApi
     */
    eventStatusesPost(EventStatusSchemaCreate: EventStatusSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
