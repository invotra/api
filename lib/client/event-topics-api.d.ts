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
import { EventTopicSchema } from '../model';
import { EventTopicSchemaCommon } from '../model';
import { EventTopicSchemaCreate } from '../model';
import { InlineResponse20035 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * EventTopicsApi - axios parameter creator
 * @export
 */
export declare const EventTopicsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete an event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdDelete(event_topic_id: string, options?: any): RequestArgs;
    /**
     * Get information about the event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdGet(event_topic_id: string, options?: any): RequestArgs;
    /**
     * Update event topic information.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {EventTopicSchemaCommon} EventTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdPut(event_topic_id: string, EventTopicSchemaCommon: EventTopicSchemaCommon, options?: any): RequestArgs;
    /**
     * Search for event topics. An empty array is returned if no event topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new event topic.
     * @param {EventTopicSchemaCreate} EventTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsPost(EventTopicSchemaCreate: EventTopicSchemaCreate, options?: any): RequestArgs;
};
/**
 * EventTopicsApi - functional programming interface
 * @export
 */
export declare const EventTopicsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete an event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdDelete(event_topic_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdGet(event_topic_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<EventTopicSchema>;
    /**
     * Update event topic information.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {EventTopicSchemaCommon} EventTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdPut(event_topic_id: string, EventTopicSchemaCommon: EventTopicSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for event topics. An empty array is returned if no event topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20035>;
    /**
     * Provision a new event topic.
     * @param {EventTopicSchemaCreate} EventTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsPost(EventTopicSchemaCreate: EventTopicSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * EventTopicsApi - factory interface
 * @export
 */
export declare const EventTopicsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete an event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdDelete(event_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdGet(event_topic_id: string, options?: any): AxiosPromise<EventTopicSchema>;
    /**
     * Update event topic information.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {EventTopicSchemaCommon} EventTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsEventTopicIdPut(event_topic_id: string, EventTopicSchemaCommon: EventTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event topics. An empty array is returned if no event topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20035>;
    /**
     * Provision a new event topic.
     * @param {EventTopicSchemaCreate} EventTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    eventTopicsPost(EventTopicSchemaCreate: EventTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * EventTopicsApi - interface
 * @export
 * @interface EventTopicsApi
 */
export interface EventTopicsApiInterface {
    /**
     * Delete an event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApiInterface
     */
    eventTopicsEventTopicIdDelete(event_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApiInterface
     */
    eventTopicsEventTopicIdGet(event_topic_id: string, options?: any): AxiosPromise<EventTopicSchema>;
    /**
     * Update event topic information.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {EventTopicSchemaCommon} EventTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApiInterface
     */
    eventTopicsEventTopicIdPut(event_topic_id: string, EventTopicSchemaCommon: EventTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event topics. An empty array is returned if no event topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApiInterface
     */
    eventTopicsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20035>;
    /**
     * Provision a new event topic.
     * @param {EventTopicSchemaCreate} EventTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApiInterface
     */
    eventTopicsPost(EventTopicSchemaCreate: EventTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * EventTopicsApi - object-oriented interface
 * @export
 * @class EventTopicsApi
 * @extends {BaseAPI}
 */
export declare class EventTopicsApi extends BaseAPI implements EventTopicsApiInterface {
    /**
     * Delete an event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApi
     */
    eventTopicsEventTopicIdDelete(event_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the event topic.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApi
     */
    eventTopicsEventTopicIdGet(event_topic_id: string, options?: any): AxiosPromise<EventTopicSchema>;
    /**
     * Update event topic information.
     * @param {string} event_topic_id The Invotra UUID of the event topic.
     * @param {EventTopicSchemaCommon} EventTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApi
     */
    eventTopicsEventTopicIdPut(event_topic_id: string, EventTopicSchemaCommon: EventTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for event topics. An empty array is returned if no event topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of event topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the event topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApi
     */
    eventTopicsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20035>;
    /**
     * Provision a new event topic.
     * @param {EventTopicSchemaCreate} EventTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventTopicsApi
     */
    eventTopicsPost(EventTopicSchemaCreate: EventTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
