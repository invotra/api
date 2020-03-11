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

import { PdfExportCompletionSchema } from '../model';
import { PdfExportErrorSchema } from '../model';
/**
 * PdfExportApi - axios parameter creator
 * @export
 */
export const PdfExportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema?: PdfExportCompletionSchema | PdfExportErrorSchema, options: any = {}): RequestArgs {
            const localVarPath = `/pdf-export/close-job`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof PdfExportCompletionSchema___PdfExportErrorSchema !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(PdfExportCompletionSchema___PdfExportErrorSchema !== undefined ? PdfExportCompletionSchema___PdfExportErrorSchema : {}) : (PdfExportCompletionSchema___PdfExportErrorSchema || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get content in HTML for PDF export.
         * @param {string} content_id The Invotra UUID of content.
         * @param {boolean} [workflow] Include workflow history in HTML.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportContentIdGet(content_id: string, workflow?: boolean, options: any = {}): RequestArgs {
            // verify required parameter 'content_id' is not null or undefined
            if (content_id === null || content_id === undefined) {
                throw new RequiredError('content_id','Required parameter content_id was null or undefined when calling pdfExportContentIdGet.');
            }
            const localVarPath = `/pdf-export/{content_id}`
                .replace(`{${"content_id"}}`, encodeURIComponent(String(content_id)));
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

            if (workflow !== undefined) {
                localVarQueryParameter['workflow'] = workflow;
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
 * PdfExportApi - functional programming interface
 * @export
 */
export const PdfExportApiFp = function(configuration?: Configuration) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema?: PdfExportCompletionSchema | PdfExportErrorSchema, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = PdfExportApiAxiosParamCreator(configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get content in HTML for PDF export.
         * @param {string} content_id The Invotra UUID of content.
         * @param {boolean} [workflow] Include workflow history in HTML.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportContentIdGet(content_id: string, workflow?: boolean, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<string> {
            const localVarAxiosArgs = PdfExportApiAxiosParamCreator(configuration).pdfExportContentIdGet(content_id, workflow, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * PdfExportApi - factory interface
 * @export
 */
export const PdfExportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema?: PdfExportCompletionSchema | PdfExportErrorSchema, options?: any): AxiosPromise<void> {
            return PdfExportApiFp(configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options)(axios, basePath);
        },
        /**
         * Get content in HTML for PDF export.
         * @param {string} content_id The Invotra UUID of content.
         * @param {boolean} [workflow] Include workflow history in HTML.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportContentIdGet(content_id: string, workflow?: boolean, options?: any): AxiosPromise<string> {
            return PdfExportApiFp(configuration).pdfExportContentIdGet(content_id, workflow, options)(axios, basePath);
        },
    };
};

/**
 * PdfExportApi - interface
 * @export
 * @interface PdfExportApi
 */
export interface PdfExportApiInterface {
    /**
     * PDF export render completion callback.
     * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApiInterface
     */
    pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema?: PdfExportCompletionSchema | PdfExportErrorSchema, options?: any): AxiosPromise<void>;

    /**
     * Get content in HTML for PDF export.
     * @param {string} content_id The Invotra UUID of content.
     * @param {boolean} [workflow] Include workflow history in HTML.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApiInterface
     */
    pdfExportContentIdGet(content_id: string, workflow?: boolean, options?: any): AxiosPromise<string>;

}

/**
 * PdfExportApi - object-oriented interface
 * @export
 * @class PdfExportApi
 * @extends {BaseAPI}
 */
export class PdfExportApi extends BaseAPI implements PdfExportApiInterface {
    /**
     * PDF export render completion callback.
     * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApi
     */
    public pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema?: PdfExportCompletionSchema | PdfExportErrorSchema, options?: any) {
        return PdfExportApiFp(this.configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options)(this.axios, this.basePath);
    }

    /**
     * Get content in HTML for PDF export.
     * @param {string} content_id The Invotra UUID of content.
     * @param {boolean} [workflow] Include workflow history in HTML.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApi
     */
    public pdfExportContentIdGet(content_id: string, workflow?: boolean, options?: any) {
        return PdfExportApiFp(this.configuration).pdfExportContentIdGet(content_id, workflow, options)(this.axios, this.basePath);
    }

}