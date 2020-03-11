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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as globalImportUrl from 'url';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, BaseAPI, RequiredError } from '../base';
/**
 * PdfExportApi - axios parameter creator
 * @export
 */
export var PdfExportApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost: function (PdfExportCompletionSchema___PdfExportErrorSchema, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/pdf-export/close-job";
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication PdfExportJobSecret required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                var accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            var needsSerialization = (typeof PdfExportCompletionSchema___PdfExportErrorSchema !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(PdfExportCompletionSchema___PdfExportErrorSchema !== undefined ? PdfExportCompletionSchema___PdfExportErrorSchema : {}) : (PdfExportCompletionSchema___PdfExportErrorSchema || "");
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
        pdfExportContentIdGet: function (content_id, workflow, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'content_id' is not null or undefined
            if (content_id === null || content_id === undefined) {
                throw new RequiredError('content_id', 'Required parameter content_id was null or undefined when calling pdfExportContentIdGet.');
            }
            var localVarPath = "/pdf-export/{content_id}"
                .replace("{" + "content_id" + "}", encodeURIComponent(String(content_id)));
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication PdfExportJobSecret required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                var accessToken = typeof configuration.accessToken === 'function'
                    ? configuration.accessToken()
                    : configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }
            if (workflow !== undefined) {
                localVarQueryParameter['workflow'] = workflow;
            }
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * PdfExportApi - functional programming interface
 * @export
 */
export var PdfExportApiFp = function (configuration) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost: function (PdfExportCompletionSchema___PdfExportErrorSchema, options) {
            var localVarAxiosArgs = PdfExportApiAxiosParamCreator(configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
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
        pdfExportContentIdGet: function (content_id, workflow, options) {
            var localVarAxiosArgs = PdfExportApiAxiosParamCreator(configuration).pdfExportContentIdGet(content_id, workflow, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
    };
};
/**
 * PdfExportApi - factory interface
 * @export
 */
export var PdfExportApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * PDF export render completion callback.
         * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportCloseJobPost: function (PdfExportCompletionSchema___PdfExportErrorSchema, options) {
            return PdfExportApiFp(configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options)(axios, basePath);
        },
        /**
         * Get content in HTML for PDF export.
         * @param {string} content_id The Invotra UUID of content.
         * @param {boolean} [workflow] Include workflow history in HTML.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        pdfExportContentIdGet: function (content_id, workflow, options) {
            return PdfExportApiFp(configuration).pdfExportContentIdGet(content_id, workflow, options)(axios, basePath);
        },
    };
};
/**
 * PdfExportApi - object-oriented interface
 * @export
 * @class PdfExportApi
 * @extends {BaseAPI}
 */
var PdfExportApi = /** @class */ (function (_super) {
    __extends(PdfExportApi, _super);
    function PdfExportApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * PDF export render completion callback.
     * @param {PdfExportCompletionSchema | PdfExportErrorSchema} [PdfExportCompletionSchema___PdfExportErrorSchema]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApi
     */
    PdfExportApi.prototype.pdfExportCloseJobPost = function (PdfExportCompletionSchema___PdfExportErrorSchema, options) {
        return PdfExportApiFp(this.configuration).pdfExportCloseJobPost(PdfExportCompletionSchema___PdfExportErrorSchema, options)(this.axios, this.basePath);
    };
    /**
     * Get content in HTML for PDF export.
     * @param {string} content_id The Invotra UUID of content.
     * @param {boolean} [workflow] Include workflow history in HTML.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PdfExportApi
     */
    PdfExportApi.prototype.pdfExportContentIdGet = function (content_id, workflow, options) {
        return PdfExportApiFp(this.configuration).pdfExportContentIdGet(content_id, workflow, options)(this.axios, this.basePath);
    };
    return PdfExportApi;
}(BaseAPI));
export { PdfExportApi };
//# sourceMappingURL=pdf-export-api.js.map