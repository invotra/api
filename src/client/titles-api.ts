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

import { InlineResponse20052 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
import { TitleSchema } from '../model';
import { TitleSchemaCommon } from '../model';
import { TitleSchemaCreate } from '../model';
/**
 * TitlesApi - axios parameter creator
 * @export
 */
export const TitlesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for titles. An empty array is returned if no titles are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/titles/list`;
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
         * Provision a new title.
         * @param {TitleSchemaCreate} TitleSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesPost(TitleSchemaCreate: TitleSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'TitleSchemaCreate' is not null or undefined
            if (TitleSchemaCreate === null || TitleSchemaCreate === undefined) {
                throw new RequiredError('TitleSchemaCreate','Required parameter TitleSchemaCreate was null or undefined when calling titlesPost.');
            }
            const localVarPath = `/titles`;
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
            const needsSerialization = (typeof TitleSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(TitleSchemaCreate !== undefined ? TitleSchemaCreate : {}) : (TitleSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdDelete(title_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'title_id' is not null or undefined
            if (title_id === null || title_id === undefined) {
                throw new RequiredError('title_id','Required parameter title_id was null or undefined when calling titlesTitleIdDelete.');
            }
            const localVarPath = `/titles/{title_id}`
                .replace(`{${"title_id"}}`, encodeURIComponent(String(title_id)));
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
         * Get information about the title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdGet(title_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'title_id' is not null or undefined
            if (title_id === null || title_id === undefined) {
                throw new RequiredError('title_id','Required parameter title_id was null or undefined when calling titlesTitleIdGet.');
            }
            const localVarPath = `/titles/{title_id}`
                .replace(`{${"title_id"}}`, encodeURIComponent(String(title_id)));
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
         * Update title information.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {TitleSchemaCommon} TitleSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options: any = {}): RequestArgs {
            // verify required parameter 'title_id' is not null or undefined
            if (title_id === null || title_id === undefined) {
                throw new RequiredError('title_id','Required parameter title_id was null or undefined when calling titlesTitleIdPut.');
            }
            // verify required parameter 'TitleSchemaCommon' is not null or undefined
            if (TitleSchemaCommon === null || TitleSchemaCommon === undefined) {
                throw new RequiredError('TitleSchemaCommon','Required parameter TitleSchemaCommon was null or undefined when calling titlesTitleIdPut.');
            }
            const localVarPath = `/titles/{title_id}`
                .replace(`{${"title_id"}}`, encodeURIComponent(String(title_id)));
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
            const needsSerialization = (typeof TitleSchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(TitleSchemaCommon !== undefined ? TitleSchemaCommon : {}) : (TitleSchemaCommon || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TitlesApi - functional programming interface
 * @export
 */
export const TitlesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for titles. An empty array is returned if no titles are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20052> {
            const localVarAxiosArgs = TitlesApiAxiosParamCreator(configuration).titlesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new title.
         * @param {TitleSchemaCreate} TitleSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = TitlesApiAxiosParamCreator(configuration).titlesPost(TitleSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdDelete(title_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = TitlesApiAxiosParamCreator(configuration).titlesTitleIdDelete(title_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdGet(title_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TitleSchema> {
            const localVarAxiosArgs = TitlesApiAxiosParamCreator(configuration).titlesTitleIdGet(title_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update title information.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {TitleSchemaCommon} TitleSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = TitlesApiAxiosParamCreator(configuration).titlesTitleIdPut(title_id, TitleSchemaCommon, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * TitlesApi - factory interface
 * @export
 */
export const TitlesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for titles. An empty array is returned if no titles are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20052> {
            return TitlesApiFp(configuration).titlesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new title.
         * @param {TitleSchemaCreate} TitleSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return TitlesApiFp(configuration).titlesPost(TitleSchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdDelete(title_id: string, options?: any): AxiosPromise<void> {
            return TitlesApiFp(configuration).titlesTitleIdDelete(title_id, options)(axios, basePath);
        },
        /**
         * Get information about the title.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdGet(title_id: string, options?: any): AxiosPromise<TitleSchema> {
            return TitlesApiFp(configuration).titlesTitleIdGet(title_id, options)(axios, basePath);
        },
        /**
         * Update title information.
         * @param {string} title_id The Invotra UUID of the title.
         * @param {TitleSchemaCommon} TitleSchemaCommon 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any): AxiosPromise<void> {
            return TitlesApiFp(configuration).titlesTitleIdPut(title_id, TitleSchemaCommon, options)(axios, basePath);
        },
    };
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
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApiInterface
     */
    titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20052>;

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
export class TitlesApi extends BaseAPI implements TitlesApiInterface {
    /**
     * Search for titles. An empty array is returned if no titles are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of titles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the title.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    public titlesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any) {
        return TitlesApiFp(this.configuration).titlesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new title.
     * @param {TitleSchemaCreate} TitleSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    public titlesPost(TitleSchemaCreate: TitleSchemaCreate, options?: any) {
        return TitlesApiFp(this.configuration).titlesPost(TitleSchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    public titlesTitleIdDelete(title_id: string, options?: any) {
        return TitlesApiFp(this.configuration).titlesTitleIdDelete(title_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the title.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    public titlesTitleIdGet(title_id: string, options?: any) {
        return TitlesApiFp(this.configuration).titlesTitleIdGet(title_id, options)(this.axios, this.basePath);
    }

    /**
     * Update title information.
     * @param {string} title_id The Invotra UUID of the title.
     * @param {TitleSchemaCommon} TitleSchemaCommon 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TitlesApi
     */
    public titlesTitleIdPut(title_id: string, TitleSchemaCommon: TitleSchemaCommon, options?: any) {
        return TitlesApiFp(this.configuration).titlesTitleIdPut(title_id, TitleSchemaCommon, options)(this.axios, this.basePath);
    }

}
