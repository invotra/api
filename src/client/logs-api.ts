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

import { LogSchema } from '../model';
/**
 * LogsApi - axios parameter creator
 * @export
 */
export const LogsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Write log entries to the applications log.
         * @param {Array<LogSchema>} LogSchema An array containing one or more log entry objects. A maximum of 25 entries is permitted per request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logsPost(LogSchema: Array<LogSchema>, options: any = {}): RequestArgs {
            // verify required parameter 'LogSchema' is not null or undefined
            if (LogSchema === null || LogSchema === undefined) {
                throw new RequiredError('LogSchema','Required parameter LogSchema was null or undefined when calling logsPost.');
            }
            const localVarPath = `/logs`;
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
                    ? configuration.accessToken("CognitoJwt", ["invotra/logs:write"])
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }

            // authentication SessionCookieHeader required


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof LogSchema !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(LogSchema !== undefined ? LogSchema : {}) : (LogSchema || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LogsApi - functional programming interface
 * @export
 */
export const LogsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Write log entries to the applications log.
         * @param {Array<LogSchema>} LogSchema An array containing one or more log entry objects. A maximum of 25 entries is permitted per request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logsPost(LogSchema: Array<LogSchema>, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = LogsApiAxiosParamCreator(configuration).logsPost(LogSchema, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LogsApi - factory interface
 * @export
 */
export const LogsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Write log entries to the applications log.
         * @param {Array<LogSchema>} LogSchema An array containing one or more log entry objects. A maximum of 25 entries is permitted per request.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logsPost(LogSchema: Array<LogSchema>, options?: any): AxiosPromise<void> {
            return LogsApiFp(configuration).logsPost(LogSchema, options)(axios, basePath);
        },
    };
};

/**
 * LogsApi - interface
 * @export
 * @interface LogsApi
 */
export interface LogsApiInterface {
    /**
     * Write log entries to the applications log.
     * @param {Array<LogSchema>} LogSchema An array containing one or more log entry objects. A maximum of 25 entries is permitted per request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApiInterface
     */
    logsPost(LogSchema: Array<LogSchema>, options?: any): AxiosPromise<void>;

}

/**
 * LogsApi - object-oriented interface
 * @export
 * @class LogsApi
 * @extends {BaseAPI}
 */
export class LogsApi extends BaseAPI implements LogsApiInterface {
    /**
     * Write log entries to the applications log.
     * @param {Array<LogSchema>} LogSchema An array containing one or more log entry objects. A maximum of 25 entries is permitted per request.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogsApi
     */
    public logsPost(LogSchema: Array<LogSchema>, options?: any) {
        return LogsApiFp(this.configuration).logsPost(LogSchema, options)(this.axios, this.basePath);
    }

}
