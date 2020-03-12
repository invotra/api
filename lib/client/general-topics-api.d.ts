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
import { GeneralTopicSchema } from '../model';
import { GeneralTopicSchemaCommon } from '../model';
import { GeneralTopicSchemaCreate } from '../model';
import { InlineResponse20037 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * GeneralTopicsApi - axios parameter creator
 * @export
 */
export declare const GeneralTopicsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete a general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdDelete(general_topic_id: string, options?: any): RequestArgs;
    /**
     * Get information about the general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdGet(general_topic_id: string, options?: any): RequestArgs;
    /**
     * Update general topic information.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {GeneralTopicSchemaCommon} GeneralTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdPut(general_topic_id: string, GeneralTopicSchemaCommon: GeneralTopicSchemaCommon, options?: any): RequestArgs;
    /**
     * Search for general topics. An empty array is returned if no general topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of general topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the general topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new general topic.
     * @param {GeneralTopicSchemaCreate} GeneralTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsPost(GeneralTopicSchemaCreate: GeneralTopicSchemaCreate, options?: any): RequestArgs;
};
/**
 * GeneralTopicsApi - functional programming interface
 * @export
 */
export declare const GeneralTopicsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete a general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdDelete(general_topic_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdGet(general_topic_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<GeneralTopicSchema>;
    /**
     * Update general topic information.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {GeneralTopicSchemaCommon} GeneralTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdPut(general_topic_id: string, GeneralTopicSchemaCommon: GeneralTopicSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for general topics. An empty array is returned if no general topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of general topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the general topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20037>;
    /**
     * Provision a new general topic.
     * @param {GeneralTopicSchemaCreate} GeneralTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsPost(GeneralTopicSchemaCreate: GeneralTopicSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * GeneralTopicsApi - factory interface
 * @export
 */
export declare const GeneralTopicsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete a general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdDelete(general_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdGet(general_topic_id: string, options?: any): AxiosPromise<GeneralTopicSchema>;
    /**
     * Update general topic information.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {GeneralTopicSchemaCommon} GeneralTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsGeneralTopicIdPut(general_topic_id: string, GeneralTopicSchemaCommon: GeneralTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for general topics. An empty array is returned if no general topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of general topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the general topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20037>;
    /**
     * Provision a new general topic.
     * @param {GeneralTopicSchemaCreate} GeneralTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generalTopicsPost(GeneralTopicSchemaCreate: GeneralTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * GeneralTopicsApi - interface
 * @export
 * @interface GeneralTopicsApi
 */
export interface GeneralTopicsApiInterface {
    /**
     * Delete a general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApiInterface
     */
    generalTopicsGeneralTopicIdDelete(general_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApiInterface
     */
    generalTopicsGeneralTopicIdGet(general_topic_id: string, options?: any): AxiosPromise<GeneralTopicSchema>;
    /**
     * Update general topic information.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {GeneralTopicSchemaCommon} GeneralTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApiInterface
     */
    generalTopicsGeneralTopicIdPut(general_topic_id: string, GeneralTopicSchemaCommon: GeneralTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for general topics. An empty array is returned if no general topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of general topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the general topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApiInterface
     */
    generalTopicsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20037>;
    /**
     * Provision a new general topic.
     * @param {GeneralTopicSchemaCreate} GeneralTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApiInterface
     */
    generalTopicsPost(GeneralTopicSchemaCreate: GeneralTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * GeneralTopicsApi - object-oriented interface
 * @export
 * @class GeneralTopicsApi
 * @extends {BaseAPI}
 */
export declare class GeneralTopicsApi extends BaseAPI implements GeneralTopicsApiInterface {
    /**
     * Delete a general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApi
     */
    generalTopicsGeneralTopicIdDelete(general_topic_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the general topic.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApi
     */
    generalTopicsGeneralTopicIdGet(general_topic_id: string, options?: any): AxiosPromise<GeneralTopicSchema>;
    /**
     * Update general topic information.
     * @param {string} general_topic_id The Invotra UUID of the general topic.
     * @param {GeneralTopicSchemaCommon} GeneralTopicSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApi
     */
    generalTopicsGeneralTopicIdPut(general_topic_id: string, GeneralTopicSchemaCommon: GeneralTopicSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for general topics. An empty array is returned if no general topics are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of general topics on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the general topic.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApi
     */
    generalTopicsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20037>;
    /**
     * Provision a new general topic.
     * @param {GeneralTopicSchemaCreate} GeneralTopicSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GeneralTopicsApi
     */
    generalTopicsPost(GeneralTopicSchemaCreate: GeneralTopicSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
