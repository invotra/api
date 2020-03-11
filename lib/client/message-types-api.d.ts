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
import { InlineResponse20042 } from '../model';
import { MessageTypeSchema } from '../model';
import { MessageTypeSchemaCreate } from '../model';
import { MessageTypeSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * MessageTypesApi - axios parameter creator
 * @export
 */
export declare const MessageTypesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for message types. An empty array is returned if no message types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of message types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the message type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): RequestArgs;
    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdGet(message_type_id: string, options?: any): RequestArgs;
    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): RequestArgs;
    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): RequestArgs;
};
/**
 * MessageTypesApi - functional programming interface
 * @export
 */
export declare const MessageTypesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for message types. An empty array is returned if no message types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of message types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the message type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20042>;
    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdGet(message_type_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<MessageTypeSchema>;
    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * MessageTypesApi - factory interface
 * @export
 */
export declare const MessageTypesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for message types. An empty array is returned if no message types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of message types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the message type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20042>;
    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdGet(message_type_id: string, options?: any): AxiosPromise<MessageTypeSchema>;
    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * MessageTypesApi - interface
 * @export
 * @interface MessageTypesApi
 */
export interface MessageTypesApiInterface {
    /**
     * Search for message types. An empty array is returned if no message types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of message types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the message type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApiInterface
     */
    messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20042>;
    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApiInterface
     */
    messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApiInterface
     */
    messageTypesMessageTypeIdGet(message_type_id: string, options?: any): AxiosPromise<MessageTypeSchema>;
    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApiInterface
     */
    messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApiInterface
     */
    messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * MessageTypesApi - object-oriented interface
 * @export
 * @class MessageTypesApi
 * @extends {BaseAPI}
 */
export declare class MessageTypesApi extends BaseAPI implements MessageTypesApiInterface {
    /**
     * Search for message types. An empty array is returned if no message types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of message types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the message type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20042>;
    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    messageTypesMessageTypeIdGet(message_type_id: string, options?: any): AxiosPromise<MessageTypeSchema>;
    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}