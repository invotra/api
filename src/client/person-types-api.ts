// tslint:disable
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


import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';

import { InlineResponse20044 } from '../model';
import { PersonTypeSchema } from '../model';
import { PersonTypeSchemaCommon } from '../model';
import { PersonTypeSchemaCreate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PersonTypesApi - axios parameter creator
 * @export
 */
export const PersonTypesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for person types. An empty array is returned if no person types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of person types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the person type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/person_types/list`;
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

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/person_types:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
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
         * Delete a person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdDelete(person_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'person_type_id' is not null or undefined
            if (person_type_id === null || person_type_id === undefined) {
                throw new RequiredError('person_type_id','Required parameter person_type_id was null or undefined when calling personTypesPersonTypeIdDelete.');
            }
            const localVarPath = `/person_types/{person_type_id}`
                .replace(`{${"person_type_id"}}`, encodeURIComponent(String(person_type_id)));
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

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/person_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
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
         * Get information about the person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdGet(person_type_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'person_type_id' is not null or undefined
            if (person_type_id === null || person_type_id === undefined) {
                throw new RequiredError('person_type_id','Required parameter person_type_id was null or undefined when calling personTypesPersonTypeIdGet.');
            }
            const localVarPath = `/person_types/{person_type_id}`
                .replace(`{${"person_type_id"}}`, encodeURIComponent(String(person_type_id)));
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

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/person_types:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
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
         * Update person type information.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {PersonTypeSchemaCommon} PersonTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdPut(person_type_id: string, PersonTypeSchemaCommon: PersonTypeSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'person_type_id' is not null or undefined
            if (person_type_id === null || person_type_id === undefined) {
                throw new RequiredError('person_type_id','Required parameter person_type_id was null or undefined when calling personTypesPersonTypeIdPut.');
            }
            // verify required parameter 'PersonTypeSchemaCommon' is not null or undefined
            if (PersonTypeSchemaCommon === null || PersonTypeSchemaCommon === undefined) {
                throw new RequiredError('PersonTypeSchemaCommon','Required parameter PersonTypeSchemaCommon was null or undefined when calling personTypesPersonTypeIdPut.');
            }
            const localVarPath = `/person_types/{person_type_id}`
                .replace(`{${"person_type_id"}}`, encodeURIComponent(String(person_type_id)));
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

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/person_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PersonTypeSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PersonTypeSchemaCommon !== undefined ? PersonTypeSchemaCommon : {}) : (PersonTypeSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new person type.
         * @param {PersonTypeSchemaCreate} PersonTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPost(PersonTypeSchemaCreate: PersonTypeSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PersonTypeSchemaCreate' is not null or undefined
            if (PersonTypeSchemaCreate === null || PersonTypeSchemaCreate === undefined) {
                throw new RequiredError('PersonTypeSchemaCreate','Required parameter PersonTypeSchemaCreate was null or undefined when calling personTypesPost.');
            }
            const localVarPath = `/person_types`;
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

            // authentication CognitoJwt required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken("CognitoJwt", ["invotra/person_types:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PersonTypeSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PersonTypeSchemaCreate !== undefined ? PersonTypeSchemaCreate : {}) : (PersonTypeSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PersonTypesApi - functional programming interface
 * @export
 */
export const PersonTypesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for person types. An empty array is returned if no person types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of person types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the person type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20044> {
            const localVarAxiosArgs = PersonTypesApiAxiosParamCreator(configuration).personTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdDelete(person_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PersonTypesApiAxiosParamCreator(configuration).personTypesPersonTypeIdDelete(person_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdGet(person_type_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonTypeSchema> {
            const localVarAxiosArgs = PersonTypesApiAxiosParamCreator(configuration).personTypesPersonTypeIdGet(person_type_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update person type information.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {PersonTypeSchemaCommon} PersonTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdPut(person_type_id: string, PersonTypeSchemaCommon: PersonTypeSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PersonTypesApiAxiosParamCreator(configuration).personTypesPersonTypeIdPut(person_type_id, PersonTypeSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new person type.
         * @param {PersonTypeSchemaCreate} PersonTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPost(PersonTypeSchemaCreate: PersonTypeSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PersonTypesApiAxiosParamCreator(configuration).personTypesPost(PersonTypeSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PersonTypesApi - factory interface
 * @export
 */
export const PersonTypesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for person types. An empty array is returned if no person types are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of person types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the person type.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20044> {
            return PersonTypesApiFp(configuration).personTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Delete a person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdDelete(person_type_id: string, options?: any): AxiosPromise<void> {
            return PersonTypesApiFp(configuration).personTypesPersonTypeIdDelete(person_type_id, options)(axios, basePath);
        },
        /**
         * Get information about the person type.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdGet(person_type_id: string, options?: any): AxiosPromise<PersonTypeSchema> {
            return PersonTypesApiFp(configuration).personTypesPersonTypeIdGet(person_type_id, options)(axios, basePath);
        },
        /**
         * Update person type information.
         * @param {string} person_type_id The Invotra UUID of the person type.
         * @param {PersonTypeSchemaCommon} PersonTypeSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPersonTypeIdPut(person_type_id: string, PersonTypeSchemaCommon: PersonTypeSchemaCommon, options?: any): AxiosPromise<void> {
            return PersonTypesApiFp(configuration).personTypesPersonTypeIdPut(person_type_id, PersonTypeSchemaCommon, options)(axios, basePath);
        },
        /**
         * Provision a new person type.
         * @param {PersonTypeSchemaCreate} PersonTypeSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        personTypesPost(PersonTypeSchemaCreate: PersonTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PersonTypesApiFp(configuration).personTypesPost(PersonTypeSchemaCreate, options)(axios, basePath);
        },
    };
};

/**
 * PersonTypesApi - interface
 * @export
 * @interface PersonTypesApi
 */
export interface PersonTypesApiInterface {
    /**
     * Search for person types. An empty array is returned if no person types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of person types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the person type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApiInterface
     */
    personTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20044>;

    /**
     * Delete a person type.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApiInterface
     */
    personTypesPersonTypeIdDelete(person_type_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the person type.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApiInterface
     */
    personTypesPersonTypeIdGet(person_type_id: string, options?: any): AxiosPromise<PersonTypeSchema>;

    /**
     * Update person type information.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {PersonTypeSchemaCommon} PersonTypeSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApiInterface
     */
    personTypesPersonTypeIdPut(person_type_id: string, PersonTypeSchemaCommon: PersonTypeSchemaCommon, options?: any): AxiosPromise<void>;

    /**
     * Provision a new person type.
     * @param {PersonTypeSchemaCreate} PersonTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApiInterface
     */
    personTypesPost(PersonTypeSchemaCreate: PersonTypeSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

}

/**
 * PersonTypesApi - object-oriented interface
 * @export
 * @class PersonTypesApi
 * @extends {BaseAPI}
 */
export class PersonTypesApi extends BaseAPI implements PersonTypesApiInterface {
    /**
     * Search for person types. An empty array is returned if no person types are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of person types on a comma-separated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;. You may include both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the person type.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApi
     */
    public personTypesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return PersonTypesApiFp(this.configuration).personTypesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Delete a person type.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApi
     */
    public personTypesPersonTypeIdDelete(person_type_id: string, options?: any) {
        return PersonTypesApiFp(this.configuration).personTypesPersonTypeIdDelete(person_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the person type.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApi
     */
    public personTypesPersonTypeIdGet(person_type_id: string, options?: any) {
        return PersonTypesApiFp(this.configuration).personTypesPersonTypeIdGet(person_type_id, options)(this.axios, this.basePath);
    }

    /**
     * Update person type information.
     * @param {string} person_type_id The Invotra UUID of the person type.
     * @param {PersonTypeSchemaCommon} PersonTypeSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApi
     */
    public personTypesPersonTypeIdPut(person_type_id: string, PersonTypeSchemaCommon: PersonTypeSchemaCommon, options?: any) {
        return PersonTypesApiFp(this.configuration).personTypesPersonTypeIdPut(person_type_id, PersonTypeSchemaCommon, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new person type.
     * @param {PersonTypeSchemaCreate} PersonTypeSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PersonTypesApi
     */
    public personTypesPost(PersonTypeSchemaCreate: PersonTypeSchemaCreate, options?: any) {
        return PersonTypesApiFp(this.configuration).personTypesPost(PersonTypeSchemaCreate, options)(this.axios, this.basePath);
    }

}
