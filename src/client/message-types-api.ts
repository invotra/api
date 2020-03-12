// tslint:disable
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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

import { InlineResponse20042 } from '../model';
import { MessageTypeSchema } from '../model';
import { MessageTypeSchemaCreate } from '../model';
import { MessageTypeSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * MessageTypesApi - axios parameter creator
 * @export
 */
export const MessageTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
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
        messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/message_types/list`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication SessionCookieHeader required

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (external_id !== undefined) {
                localVarQueryParameter['external_id'] = external_id;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (valid_parents_for !== undefined) {
                localVarQueryParameter['valid_parents_for'] = valid_parents_for;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdDelete(message_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'message_type_id' is not null or undefined
            if (message_type_id === null || message_type_id === undefined) {
                throw new RequiredError('message_type_id','Required parameter message_type_id was null or undefined when calling messageTypesMessageTypeIdDelete.');
            }
            const localVarPath = `/message_types/{message_type_id}`
                .replace(`{${"message_type_id"}}`, encodeURIComponent(String(message_type_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication SessionCookieHeader required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about the message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdGet(message_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'message_type_id' is not null or undefined
            if (message_type_id === null || message_type_id === undefined) {
                throw new RequiredError('message_type_id','Required parameter message_type_id was null or undefined when calling messageTypesMessageTypeIdGet.');
            }
            const localVarPath = `/message_types/{message_type_id}`
                .replace(`{${"message_type_id"}}`, encodeURIComponent(String(message_type_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication SessionCookieHeader required


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update message type information.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'message_type_id' is not null or undefined
            if (message_type_id === null || message_type_id === undefined) {
                throw new RequiredError('message_type_id','Required parameter message_type_id was null or undefined when calling messageTypesMessageTypeIdPut.');
            }
            // verify required parameter 'MessageTypeSchemaUpdate' is not null or undefined
            if (MessageTypeSchemaUpdate === null || MessageTypeSchemaUpdate === undefined) {
                throw new RequiredError('MessageTypeSchemaUpdate','Required parameter MessageTypeSchemaUpdate was null or undefined when calling messageTypesMessageTypeIdPut.');
            }
            const localVarPath = `/message_types/{message_type_id}`
                .replace(`{${"message_type_id"}}`, encodeURIComponent(String(message_type_id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof MessageTypeSchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(MessageTypeSchemaUpdate !== undefined ? MessageTypeSchemaUpdate : {}) : (MessageTypeSchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new message type.
         * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'MessageTypeSchemaCreate' is not null or undefined
            if (MessageTypeSchemaCreate === null || MessageTypeSchemaCreate === undefined) {
                throw new RequiredError('MessageTypeSchemaCreate','Required parameter MessageTypeSchemaCreate was null or undefined when calling messageTypesPost.');
            }
            const localVarPath = `/message_types`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof MessageTypeSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(MessageTypeSchemaCreate !== undefined ? MessageTypeSchemaCreate : {}) : (MessageTypeSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MessageTypesApi - functional programming interface
 * @export
 */
export const MessageTypesApiFp = function(configuration?: Configuration) {
    return {
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
        messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20042> {
            const localVarAxiosArgs = MessageTypesApiAxiosParamCreator(configuration).messageTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = MessageTypesApiAxiosParamCreator(configuration).messageTypesMessageTypeIdDelete(message_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdGet(message_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<MessageTypeSchema> {
            const localVarAxiosArgs = MessageTypesApiAxiosParamCreator(configuration).messageTypesMessageTypeIdGet(message_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update message type information.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = MessageTypesApiAxiosParamCreator(configuration).messageTypesMessageTypeIdPut(message_type_id, MessageTypeSchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new message type.
         * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = MessageTypesApiAxiosParamCreator(configuration).messageTypesPost(MessageTypeSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MessageTypesApi - factory interface
 * @export
 */
export const MessageTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
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
        messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20042> {
            return MessageTypesApiFp(configuration).messageTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdDelete(message_type_id: string, options?: any): AxiosPromise<void> {
            return MessageTypesApiFp(configuration).messageTypesMessageTypeIdDelete(message_type_id, options)(axios, basePath);
        },
        /**
         * Get information about the message type.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdGet(message_type_id: string, options?: any): AxiosPromise<MessageTypeSchema> {
            return MessageTypesApiFp(configuration).messageTypesMessageTypeIdGet(message_type_id, options)(axios, basePath);
        },
        /**
         * Update message type information.
         * @param {string} message_type_id The Invotra UUID of the message type.
         * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any): AxiosPromise<void> {
            return MessageTypesApiFp(configuration).messageTypesMessageTypeIdPut(message_type_id, MessageTypeSchemaUpdate, options)(axios, basePath);
        },
        /**
         * Provision a new message type.
         * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return MessageTypesApiFp(configuration).messageTypesPost(MessageTypeSchemaCreate, options)(axios, basePath);
        },
    };
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
export class MessageTypesApi extends BaseAPI implements MessageTypesApiInterface {
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
    public messageTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return MessageTypesApiFp(this.configuration).messageTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    public messageTypesMessageTypeIdDelete(message_type_id: string, options?: any) {
        return MessageTypesApiFp(this.configuration).messageTypesMessageTypeIdDelete(message_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the message type.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    public messageTypesMessageTypeIdGet(message_type_id: string, options?: any) {
        return MessageTypesApiFp(this.configuration).messageTypesMessageTypeIdGet(message_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Update message type information.
     * @param {string} message_type_id The Invotra UUID of the message type.
     * @param {MessageTypeSchemaUpdate} MessageTypeSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    public messageTypesMessageTypeIdPut(message_type_id: string, MessageTypeSchemaUpdate: MessageTypeSchemaUpdate, options?: any) {
        return MessageTypesApiFp(this.configuration).messageTypesMessageTypeIdPut(message_type_id, MessageTypeSchemaUpdate, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new message type.
     * @param {MessageTypeSchemaCreate} MessageTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessageTypesApi
     */
    public messageTypesPost(MessageTypeSchemaCreate: MessageTypeSchemaCreate, options?: any) {
        return MessageTypesApiFp(this.configuration).messageTypesPost(MessageTypeSchemaCreate, options)(this.axios, this.basePath);
    }

}
