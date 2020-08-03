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

import { InlineResponse20025 } from '../model';
import { InlineResponse20026 } from '../model';
import { ManualPageSchema } from '../model';
/**
 * ManualsApi - axios parameter creator
 * @export
 */
export const ManualsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get a listing of all manuals
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsGet(offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/manuals`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/manuals:read"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required

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
         * Get a manual page, including the root manual page
         * @param {string} manual_page_id The Invotra UUID of a manual page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsManualPageIdGet(manual_page_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'manual_page_id' is not null or undefined
            if (manual_page_id === null || manual_page_id === undefined) {
                throw new RequiredError('manual_page_id','Required parameter manual_page_id was null or undefined when calling manualsManualPageIdGet.');
            }
            const localVarPath = `/manuals/{manual_page_id}`
                .replace(`{${"manual_page_id"}}`, encodeURIComponent(String(manual_page_id)));
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/manuals:read"])
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
         * Get all pages in a manual or manual page.
         * @param {string} [cursor] The paging cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsPagesGet(cursor?: string, options: any = {}): RequestArgs {
            const localVarPath = `/manuals/pages`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication PdfExportJobSecret required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
    }
};

/**
 * ManualsApi - functional programming interface
 * @export
 */
export const ManualsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get a listing of all manuals
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsGet(offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20025> {
            const localVarAxiosArgs = ManualsApiAxiosParamCreator(configuration).manualsGet(offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get a manual page, including the root manual page
         * @param {string} manual_page_id The Invotra UUID of a manual page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsManualPageIdGet(manual_page_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<ManualPageSchema> {
            const localVarAxiosArgs = ManualsApiAxiosParamCreator(configuration).manualsManualPageIdGet(manual_page_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get all pages in a manual or manual page.
         * @param {string} [cursor] The paging cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsPagesGet(cursor?: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20026> {
            const localVarAxiosArgs = ManualsApiAxiosParamCreator(configuration).manualsPagesGet(cursor, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ManualsApi - factory interface
 * @export
 */
export const ManualsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get a listing of all manuals
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsGet(offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20025> {
            return ManualsApiFp(configuration).manualsGet(offset, limit, options)(axios, basePath);
        },
        /**
         * Get a manual page, including the root manual page
         * @param {string} manual_page_id The Invotra UUID of a manual page.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsManualPageIdGet(manual_page_id: string, options?: any): AxiosPromise<ManualPageSchema> {
            return ManualsApiFp(configuration).manualsManualPageIdGet(manual_page_id, options)(axios, basePath);
        },
        /**
         * Get all pages in a manual or manual page.
         * @param {string} [cursor] The paging cursor.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        manualsPagesGet(cursor?: string, options?: any): AxiosPromise<InlineResponse20026> {
            return ManualsApiFp(configuration).manualsPagesGet(cursor, options)(axios, basePath);
        },
    };
};

/**
 * ManualsApi - interface
 * @export
 * @interface ManualsApi
 */
export interface ManualsApiInterface {
    /**
     * Get a listing of all manuals
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApiInterface
     */
    manualsGet(offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20025>;

    /**
     * Get a manual page, including the root manual page
     * @param {string} manual_page_id The Invotra UUID of a manual page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApiInterface
     */
    manualsManualPageIdGet(manual_page_id: string, options?: any): AxiosPromise<ManualPageSchema>;

    /**
     * Get all pages in a manual or manual page.
     * @param {string} [cursor] The paging cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApiInterface
     */
    manualsPagesGet(cursor?: string, options?: any): AxiosPromise<InlineResponse20026>;

}

/**
 * ManualsApi - object-oriented interface
 * @export
 * @class ManualsApi
 * @extends {BaseAPI}
 */
export class ManualsApi extends BaseAPI implements ManualsApiInterface {
    /**
     * Get a listing of all manuals
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApi
     */
    public manualsGet(offset?: number, limit?: number, options?: any) {
        return ManualsApiFp(this.configuration).manualsGet(offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Get a manual page, including the root manual page
     * @param {string} manual_page_id The Invotra UUID of a manual page.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApi
     */
    public manualsManualPageIdGet(manual_page_id: string, options?: any) {
        return ManualsApiFp(this.configuration).manualsManualPageIdGet(manual_page_id, options)(this.axios, this.basePath);
    }

    /**
     * Get all pages in a manual or manual page.
     * @param {string} [cursor] The paging cursor.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManualsApi
     */
    public manualsPagesGet(cursor?: string, options?: any) {
        return ManualsApiFp(this.configuration).manualsPagesGet(cursor, options)(this.axios, this.basePath);
    }

}
