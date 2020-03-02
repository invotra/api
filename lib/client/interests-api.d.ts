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
import { InlineResponse20040 } from '../model';
import { InterestSchema } from '../model';
import { InterestSchemaCommon } from '../model';
import { InterestSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * InterestsApi - axios parameter creator
 * @export
 */
export declare const InterestsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete an interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdDelete(interest_id: string, options?: any): RequestArgs;
    /**
     * Get information about the interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdGet(interest_id: string, options?: any): RequestArgs;
    /**
     * Update interest information.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {InterestSchemaCommon} InterestSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdPut(interest_id: string, InterestSchemaCommon: InterestSchemaCommon, options?: any): RequestArgs;
    /**
     * Search for interests. An empty array is returned if no interests are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of interests on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the interest.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new interest.
     * @param {InterestSchemaCreate} InterestSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsPost(InterestSchemaCreate: InterestSchemaCreate, options?: any): RequestArgs;
};
/**
 * InterestsApi - functional programming interface
 * @export
 */
export declare const InterestsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete an interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdDelete(interest_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdGet(interest_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InterestSchema>;
    /**
     * Update interest information.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {InterestSchemaCommon} InterestSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdPut(interest_id: string, InterestSchemaCommon: InterestSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for interests. An empty array is returned if no interests are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of interests on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the interest.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20040>;
    /**
     * Provision a new interest.
     * @param {InterestSchemaCreate} InterestSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsPost(InterestSchemaCreate: InterestSchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * InterestsApi - factory interface
 * @export
 */
export declare const InterestsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete an interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdDelete(interest_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdGet(interest_id: string, options?: any): AxiosPromise<InterestSchema>;
    /**
     * Update interest information.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {InterestSchemaCommon} InterestSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsInterestIdPut(interest_id: string, InterestSchemaCommon: InterestSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for interests. An empty array is returned if no interests are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of interests on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the interest.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20040>;
    /**
     * Provision a new interest.
     * @param {InterestSchemaCreate} InterestSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    interestsPost(InterestSchemaCreate: InterestSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * InterestsApi - interface
 * @export
 * @interface InterestsApi
 */
export interface InterestsApiInterface {
    /**
     * Delete an interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApiInterface
     */
    interestsInterestIdDelete(interest_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApiInterface
     */
    interestsInterestIdGet(interest_id: string, options?: any): AxiosPromise<InterestSchema>;
    /**
     * Update interest information.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {InterestSchemaCommon} InterestSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApiInterface
     */
    interestsInterestIdPut(interest_id: string, InterestSchemaCommon: InterestSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for interests. An empty array is returned if no interests are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of interests on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the interest.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApiInterface
     */
    interestsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20040>;
    /**
     * Provision a new interest.
     * @param {InterestSchemaCreate} InterestSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApiInterface
     */
    interestsPost(InterestSchemaCreate: InterestSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * InterestsApi - object-oriented interface
 * @export
 * @class InterestsApi
 * @extends {BaseAPI}
 */
export declare class InterestsApi extends BaseAPI implements InterestsApiInterface {
    /**
     * Delete an interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApi
     */
    interestsInterestIdDelete(interest_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the interest.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApi
     */
    interestsInterestIdGet(interest_id: string, options?: any): AxiosPromise<InterestSchema>;
    /**
     * Update interest information.
     * @param {string} interest_id The Invotra UUID of the interest.
     * @param {InterestSchemaCommon} InterestSchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApi
     */
    interestsInterestIdPut(interest_id: string, InterestSchemaCommon: InterestSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for interests. An empty array is returned if no interests are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of interests on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the interest.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApi
     */
    interestsListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20040>;
    /**
     * Provision a new interest.
     * @param {InterestSchemaCreate} InterestSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof InterestsApi
     */
    interestsPost(InterestSchemaCreate: InterestSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
