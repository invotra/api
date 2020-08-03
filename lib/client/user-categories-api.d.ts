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
import { InlineResponse20053 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
import { UserCategorySchema } from '../model';
import { UserCategorySchemaCommon } from '../model';
import { UserCategorySchemaCreate } from '../model';
/**
 * UserCategoriesApi - axios parameter creator
 * @export
 */
export declare const UserCategoriesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): RequestArgs;
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): RequestArgs;
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): RequestArgs;
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): RequestArgs;
};
/**
 * UserCategoriesApi - functional programming interface
 * @export
 */
export declare const UserCategoriesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20053>;
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<UserCategorySchema>;
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * UserCategoriesApi - factory interface
 * @export
 */
export declare const UserCategoriesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20053>;
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): AxiosPromise<UserCategorySchema>;
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): AxiosPromise<void>;
};
/**
 * UserCategoriesApi - interface
 * @export
 * @interface UserCategoriesApi
 */
export interface UserCategoriesApiInterface {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20053>;
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): AxiosPromise<UserCategorySchema>;
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApiInterface
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): AxiosPromise<void>;
}
/**
 * UserCategoriesApi - object-oriented interface
 * @export
 * @class UserCategoriesApi
 * @extends {BaseAPI}
 */
export declare class UserCategoriesApi extends BaseAPI implements UserCategoriesApiInterface {
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    userCategoriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20053>;
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    userCategoriesPost(UserCategorySchemaCreate: UserCategorySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    userCategoriesUserCategoryIdDelete(user_category_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    userCategoriesUserCategoryIdGet(user_category_id: string, options?: any): AxiosPromise<UserCategorySchema>;
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    userCategoriesUserCategoryIdPut(user_category_id: string, UserCategorySchemaCommon: UserCategorySchemaCommon, options?: any): AxiosPromise<void>;
}
