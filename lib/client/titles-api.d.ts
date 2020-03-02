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
import { InlineResponse20051 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
import { TitleSchema } from '../model';
import { TitleSchemaCommon } from '../model';
import { TitleSchemaCreate } from '../model';
/**
 * TitlesApi - axios parameter creator
 * @export
 */
export declare const TitlesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): RequestArgs;
    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdDelete(title_id: string, options?: any): RequestArgs;
    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdGet(title_id: string, options?: any): RequestArgs;
    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): RequestArgs;
};
/**
 * TitlesApi - functional programming interface
 * @export
 */
export declare const TitlesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20051>;
    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdDelete(title_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdGet(title_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TitleSchema>;
    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * TitlesApi - factory interface
 * @export
 */
export declare const TitlesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20051>;
    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdDelete(title_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdGet(title_id: string, options?: any): AxiosPromise<TitleSchema>;
    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): AxiosPromise<void>;
};
/**
 * TitlesApi - interface
 * @export
 * @interface TitlesApi
 */
export interface TitlesApiInterface {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20051>;
    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesTitleIdDelete(title_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesTitleIdGet(title_id: string, options?: any): AxiosPromise<TitleSchema>;
    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): AxiosPromise<void>;
}
/**
 * TitlesApi - object-oriented interface
 * @export
 * @class TitlesApi
 * @extends {BaseAPI}
 */
export declare class TitlesApi extends BaseAPI implements TitlesApiInterface {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20051>;
    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    titlesTitleIdDelete(title_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    titlesTitleIdGet(title_id: string, options?: any): AxiosPromise<TitleSchema>;
    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): AxiosPromise<void>;
}
