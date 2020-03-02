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
import { ContentTypeSchema } from '../model';
import { ContentTypeSchemaCreate } from '../model';
import { ContentTypeSchemaUpdate } from '../model';
import { InlineResponse20031 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * ContentTypesApi - axios parameter creator
 * @export
 */
export declare const ContentTypesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): RequestArgs;
    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): RequestArgs;
    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): RequestArgs;
    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): RequestArgs;
};
/**
 * ContentTypesApi - functional programming interface
 * @export
 */
export declare const ContentTypesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ContentTypeSchema>;
    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ContentTypesApi - factory interface
 * @export
 */
export declare const ContentTypesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): AxiosPromise<ContentTypeSchema>;
    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * ContentTypesApi - interface
 * @export
 * @interface ContentTypesApi
 */
export interface ContentTypesApiInterface {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): AxiosPromise<ContentTypeSchema>;
    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApiInterface
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * ContentTypesApi - object-oriented interface
 * @export
 * @class ContentTypesApi
 * @extends {BaseAPI}
 */
export declare class ContentTypesApi extends BaseAPI implements ContentTypesApiInterface {
    /**
     * Delete a content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    contentTypesContentTypeIdDelete(content_type_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the content type.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    contentTypesContentTypeIdGet(content_type_id: string, options?: any): AxiosPromise<ContentTypeSchema>;
    /**
     * Update content type information.
     * @param {string} content_type_id The Invotra UUID of the content type.
     * @param {ContentTypeSchemaUpdate} ContentTypeSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    contentTypesContentTypeIdPut(content_type_id: string, ContentTypeSchemaUpdate: ContentTypeSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Search for content types. An empty array is returned if no content types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of content types on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the content type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    contentTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20031>;
    /**
     * Provision a new content type.
     * @param {ContentTypeSchemaCreate} ContentTypeSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContentTypesApi
     */
    contentTypesPost(ContentTypeSchemaCreate: ContentTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
