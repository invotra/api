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

import { InlineResponse20024 } from '../model';
import { PromotionSchema } from '../model';
import { PromotionSchemaCreate } from '../model';
import { PromotionSchemaUpdate } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * PromotionsApi - axios parameter creator
 * @export
 */
export const PromotionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Search for promotions. An empty array is returned if no promotions where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options: any = {}): RequestArgs {
            const localVarPath = `/promotions/list`;
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

            if (author_uuid !== undefined) {
                localVarQueryParameter['author_uuid'] = author_uuid;
            }

            if (created_date !== undefined) {
                localVarQueryParameter['created_date'] = created_date;
            }

            if (updated_date !== undefined) {
                localVarQueryParameter['updated_date'] = updated_date;
            }

            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
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
         * Provision a new promotion.
         * @param {PromotionSchemaCreate} PromotionSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPost(PromotionSchemaCreate: PromotionSchemaCreate, options: any = {}): RequestArgs {
            // verify required parameter 'PromotionSchemaCreate' is not null or undefined
            if (PromotionSchemaCreate === null || PromotionSchemaCreate === undefined) {
                throw new RequiredError('PromotionSchemaCreate','Required parameter PromotionSchemaCreate was null or undefined when calling promotionsPost.');
            }
            const localVarPath = `/promotions`;
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
            const needsSerialization = (typeof PromotionSchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PromotionSchemaCreate !== undefined ? PromotionSchemaCreate : {}) : (PromotionSchemaCreate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdDelete(promotion_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'promotion_id' is not null or undefined
            if (promotion_id === null || promotion_id === undefined) {
                throw new RequiredError('promotion_id','Required parameter promotion_id was null or undefined when calling promotionsPromotionIdDelete.');
            }
            const localVarPath = `/promotions/{promotion_id}`
                .replace(`{${"promotion_id"}}`, encodeURIComponent(String(promotion_id)));
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
         * Get information about the promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdGet(promotion_id: string, options: any = {}): RequestArgs {
            // verify required parameter 'promotion_id' is not null or undefined
            if (promotion_id === null || promotion_id === undefined) {
                throw new RequiredError('promotion_id','Required parameter promotion_id was null or undefined when calling promotionsPromotionIdGet.');
            }
            const localVarPath = `/promotions/{promotion_id}`
                .replace(`{${"promotion_id"}}`, encodeURIComponent(String(promotion_id)));
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
         * Update promotion information.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {PromotionSchemaUpdate} PromotionSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdPut(promotion_id: string, PromotionSchemaUpdate: PromotionSchemaUpdate, options: any = {}): RequestArgs {
            // verify required parameter 'promotion_id' is not null or undefined
            if (promotion_id === null || promotion_id === undefined) {
                throw new RequiredError('promotion_id','Required parameter promotion_id was null or undefined when calling promotionsPromotionIdPut.');
            }
            // verify required parameter 'PromotionSchemaUpdate' is not null or undefined
            if (PromotionSchemaUpdate === null || PromotionSchemaUpdate === undefined) {
                throw new RequiredError('PromotionSchemaUpdate','Required parameter PromotionSchemaUpdate was null or undefined when calling promotionsPromotionIdPut.');
            }
            const localVarPath = `/promotions/{promotion_id}`
                .replace(`{${"promotion_id"}}`, encodeURIComponent(String(promotion_id)));
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
            const needsSerialization = (typeof PromotionSchemaUpdate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PromotionSchemaUpdate !== undefined ? PromotionSchemaUpdate : {}) : (PromotionSchemaUpdate || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PromotionsApi - functional programming interface
 * @export
 */
export const PromotionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Search for promotions. An empty array is returned if no promotions where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse20024> {
            const localVarAxiosArgs = PromotionsApiAxiosParamCreator(configuration).promotionsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new promotion.
         * @param {PromotionSchemaCreate} PromotionSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPost(PromotionSchemaCreate: PromotionSchemaCreate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<SuccessfulPostResponseSchema> {
            const localVarAxiosArgs = PromotionsApiAxiosParamCreator(configuration).promotionsPost(PromotionSchemaCreate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdDelete(promotion_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PromotionsApiAxiosParamCreator(configuration).promotionsPromotionIdDelete(promotion_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdGet(promotion_id: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<PromotionSchema> {
            const localVarAxiosArgs = PromotionsApiAxiosParamCreator(configuration).promotionsPromotionIdGet(promotion_id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update promotion information.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {PromotionSchemaUpdate} PromotionSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdPut(promotion_id: string, PromotionSchemaUpdate: PromotionSchemaUpdate, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PromotionsApiAxiosParamCreator(configuration).promotionsPromotionIdPut(promotion_id, PromotionSchemaUpdate, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PromotionsApi - factory interface
 * @export
 */
export const PromotionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Search for promotions. An empty array is returned if no promotions where found.
         * @param {string} [author_uuid] Filter on Invotra UUID of the author.
         * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
         * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
         * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
         * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
         * @param {'asc' | 'desc'} [order] Sort order.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20024> {
            return PromotionsApiFp(configuration).promotionsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new promotion.
         * @param {PromotionSchemaCreate} PromotionSchemaCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPost(PromotionSchemaCreate: PromotionSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema> {
            return PromotionsApiFp(configuration).promotionsPost(PromotionSchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdDelete(promotion_id: string, options?: any): AxiosPromise<void> {
            return PromotionsApiFp(configuration).promotionsPromotionIdDelete(promotion_id, options)(axios, basePath);
        },
        /**
         * Get information about the promotion.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdGet(promotion_id: string, options?: any): AxiosPromise<PromotionSchema> {
            return PromotionsApiFp(configuration).promotionsPromotionIdGet(promotion_id, options)(axios, basePath);
        },
        /**
         * Update promotion information.
         * @param {string} promotion_id The Invotra UUID of the promotion.
         * @param {PromotionSchemaUpdate} PromotionSchemaUpdate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        promotionsPromotionIdPut(promotion_id: string, PromotionSchemaUpdate: PromotionSchemaUpdate, options?: any): AxiosPromise<void> {
            return PromotionsApiFp(configuration).promotionsPromotionIdPut(promotion_id, PromotionSchemaUpdate, options)(axios, basePath);
        },
    };
};

/**
 * PromotionsApi - interface
 * @export
 * @interface PromotionsApi
 */
export interface PromotionsApiInterface {
    /**
     * Search for promotions. An empty array is returned if no promotions where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApiInterface
     */
    promotionsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20024>;

    /**
     * Provision a new promotion.
     * @param {PromotionSchemaCreate} PromotionSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApiInterface
     */
    promotionsPost(PromotionSchemaCreate: PromotionSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;

    /**
     * Delete a promotion.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApiInterface
     */
    promotionsPromotionIdDelete(promotion_id: string, options?: any): AxiosPromise<void>;

    /**
     * Get information about the promotion.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApiInterface
     */
    promotionsPromotionIdGet(promotion_id: string, options?: any): AxiosPromise<PromotionSchema>;

    /**
     * Update promotion information.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {PromotionSchemaUpdate} PromotionSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApiInterface
     */
    promotionsPromotionIdPut(promotion_id: string, PromotionSchemaUpdate: PromotionSchemaUpdate, options?: any): AxiosPromise<void>;

}

/**
 * PromotionsApi - object-oriented interface
 * @export
 * @class PromotionsApi
 * @extends {BaseAPI}
 */
export class PromotionsApi extends BaseAPI implements PromotionsApiInterface {
    /**
     * Search for promotions. An empty array is returned if no promotions where found.
     * @param {string} [author_uuid] Filter on Invotra UUID of the author.
     * @param {string} [created_date] Filter on date created. Format: YYYY-MM-DD.
     * @param {string} [updated_date] Filter on date updated. Format: YYYY-MM-DD.
     * @param {string} [state] Filter the list of custom content on a comma seperated list of states. Valid statuses are \&quot;draft\&quot;, \&quot;needs_review\&quot;, \&quot;reviewed\&quot;, \&quot;published\&quot;, and \&quot;unpublished\&quot;. You may include multiple. The default when not supplied is \&quot;published\&quot; only.
     * @param {'timestamp_created' | 'timestamp_updated'} [sort] Field to sort by.
     * @param {'asc' | 'desc'} [order] Sort order.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApi
     */
    public promotionsListGet(author_uuid?: string, created_date?: string, updated_date?: string, state?: string, sort?: 'timestamp_created' | 'timestamp_updated', order?: 'asc' | 'desc', offset?: number, limit?: number, options?: any) {
        return PromotionsApiFp(this.configuration).promotionsListGet(author_uuid, created_date, updated_date, state, sort, order, offset, limit, options)(this.axios, this.basePath);
    }

    /**
     * Provision a new promotion.
     * @param {PromotionSchemaCreate} PromotionSchemaCreate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApi
     */
    public promotionsPost(PromotionSchemaCreate: PromotionSchemaCreate, options?: any) {
        return PromotionsApiFp(this.configuration).promotionsPost(PromotionSchemaCreate, options)(this.axios, this.basePath);
    }

    /**
     * Delete a promotion.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApi
     */
    public promotionsPromotionIdDelete(promotion_id: string, options?: any) {
        return PromotionsApiFp(this.configuration).promotionsPromotionIdDelete(promotion_id, options)(this.axios, this.basePath);
    }

    /**
     * Get information about the promotion.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApi
     */
    public promotionsPromotionIdGet(promotion_id: string, options?: any) {
        return PromotionsApiFp(this.configuration).promotionsPromotionIdGet(promotion_id, options)(this.axios, this.basePath);
    }

    /**
     * Update promotion information.
     * @param {string} promotion_id The Invotra UUID of the promotion.
     * @param {PromotionSchemaUpdate} PromotionSchemaUpdate 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PromotionsApi
     */
    public promotionsPromotionIdPut(promotion_id: string, PromotionSchemaUpdate: PromotionSchemaUpdate, options?: any) {
        return PromotionsApiFp(this.configuration).promotionsPromotionIdPut(promotion_id, PromotionSchemaUpdate, options)(this.axios, this.basePath);
    }

}
