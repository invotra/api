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
 * UserCategoriesApi - axios parameter creator
 * @export
 */
export var UserCategoriesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet: function (name, external_id, status, valid_parents_for, offset, limit, options) {
            if (options === void 0) { options = {}; }
            var localVarPath = "/user_categories/list";
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = typeof configuration.apiKey === 'function'
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
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost: function (UserCategorySchemaCreate, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'UserCategorySchemaCreate' is not null or undefined
            if (UserCategorySchemaCreate === null || UserCategorySchemaCreate === undefined) {
                throw new RequiredError('UserCategorySchemaCreate', 'Required parameter UserCategorySchemaCreate was null or undefined when calling userCategoriesPost.');
            }
            var localVarPath = "/user_categories";
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }
            // authentication SessionCookieHeader required
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            var needsSerialization = (typeof UserCategorySchemaCreate !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(UserCategorySchemaCreate !== undefined ? UserCategorySchemaCreate : {}) : (UserCategorySchemaCreate || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete: function (user_category_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id', 'Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdDelete.');
            }
            var localVarPath = "/user_categories/{user_category_id}"
                .replace("{" + "user_category_id" + "}", encodeURIComponent(String(user_category_id)));
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'DELETE' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }
            // authentication SessionCookieHeader required
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet: function (user_category_id, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id', 'Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdGet.');
            }
            var localVarPath = "/user_categories/{user_category_id}"
                .replace("{" + "user_category_id" + "}", encodeURIComponent(String(user_category_id)));
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'GET' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }
            // authentication SessionCookieHeader required
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut: function (user_category_id, UserCategorySchemaCommon, options) {
            if (options === void 0) { options = {}; }
            // verify required parameter 'user_category_id' is not null or undefined
            if (user_category_id === null || user_category_id === undefined) {
                throw new RequiredError('user_category_id', 'Required parameter user_category_id was null or undefined when calling userCategoriesUserCategoryIdPut.');
            }
            // verify required parameter 'UserCategorySchemaCommon' is not null or undefined
            if (UserCategorySchemaCommon === null || UserCategorySchemaCommon === undefined) {
                throw new RequiredError('UserCategorySchemaCommon', 'Required parameter UserCategorySchemaCommon was null or undefined when calling userCategoriesUserCategoryIdPut.');
            }
            var localVarPath = "/user_categories/{user_category_id}"
                .replace("{" + "user_category_id" + "}", encodeURIComponent(String(user_category_id)));
            var localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            var baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            var localVarRequestOptions = __assign(__assign({ method: 'PUT' }, baseOptions), options);
            var localVarHeaderParameter = {};
            var localVarQueryParameter = {};
            // authentication APIKeyHeader required
            if (configuration && configuration.apiKey) {
                var localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? configuration.apiKey("X-API-Key")
                    : configuration.apiKey;
                localVarHeaderParameter["X-API-Key"] = localVarApiKeyValue;
            }
            // authentication SessionCookieHeader required
            localVarHeaderParameter['Content-Type'] = 'application/json';
            localVarUrlObj.query = __assign(__assign(__assign({}, localVarUrlObj.query), localVarQueryParameter), options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = __assign(__assign({}, localVarHeaderParameter), options.headers);
            var needsSerialization = (typeof UserCategorySchemaCommon !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data = needsSerialization ? JSON.stringify(UserCategorySchemaCommon !== undefined ? UserCategorySchemaCommon : {}) : (UserCategorySchemaCommon || "");
            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * UserCategoriesApi - functional programming interface
 * @export
 */
export var UserCategoriesApiFp = function (configuration) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet: function (name, external_id, status, valid_parents_for, offset, limit, options) {
            var localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost: function (UserCategorySchemaCreate, options) {
            var localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesPost(UserCategorySchemaCreate, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete: function (user_category_id, options) {
            var localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdDelete(user_category_id, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet: function (user_category_id, options) {
            var localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdGet(user_category_id, options);
            return function (axios, basePath) {
                if (axios === void 0) { axios = globalAxios; }
                if (basePath === void 0) { basePath = BASE_PATH; }
                var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut: function (user_category_id, UserCategorySchemaCommon, options) {
            var localVarAxiosArgs = UserCategoriesApiAxiosParamCreator(configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options);
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
 * UserCategoriesApi - factory interface
 * @export
 */
export var UserCategoriesApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Search for user categories. An empty array is returned if no user categories are found.
         * @param {string} [name] Filter by name. Matches on whole words.
         * @param {string} [external_id] Filter by external ID.
         * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
         * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
         * @param {number} [offset] The number of items to skip before starting to collect the result set.
         * @param {number} [limit] The numbers of items to return.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesListGet: function (name, external_id, status, valid_parents_for, offset, limit, options) {
            return UserCategoriesApiFp(configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(axios, basePath);
        },
        /**
         * Provision a new user category.
         * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesPost: function (UserCategorySchemaCreate, options) {
            return UserCategoriesApiFp(configuration).userCategoriesPost(UserCategorySchemaCreate, options)(axios, basePath);
        },
        /**
         * Delete a user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdDelete: function (user_category_id, options) {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdDelete(user_category_id, options)(axios, basePath);
        },
        /**
         * Get information about the user category.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdGet: function (user_category_id, options) {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdGet(user_category_id, options)(axios, basePath);
        },
        /**
         * Update user category information.
         * @param {string} user_category_id The Invotra UUID of the user category.
         * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCategoriesUserCategoryIdPut: function (user_category_id, UserCategorySchemaCommon, options) {
            return UserCategoriesApiFp(configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options)(axios, basePath);
        },
    };
};
/**
 * UserCategoriesApi - object-oriented interface
 * @export
 * @class UserCategoriesApi
 * @extends {BaseAPI}
 */
var UserCategoriesApi = /** @class */ (function (_super) {
    __extends(UserCategoriesApi, _super);
    function UserCategoriesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Search for user categories. An empty array is returned if no user categories are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of user categories on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the user category.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    UserCategoriesApi.prototype.userCategoriesListGet = function (name, external_id, status, valid_parents_for, offset, limit, options) {
        return UserCategoriesApiFp(this.configuration).userCategoriesListGet(name, external_id, status, valid_parents_for, offset, limit, options)(this.axios, this.basePath);
    };
    /**
     * Provision a new user category.
     * @param {UserCategorySchemaCreate} UserCategorySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    UserCategoriesApi.prototype.userCategoriesPost = function (UserCategorySchemaCreate, options) {
        return UserCategoriesApiFp(this.configuration).userCategoriesPost(UserCategorySchemaCreate, options)(this.axios, this.basePath);
    };
    /**
     * Delete a user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    UserCategoriesApi.prototype.userCategoriesUserCategoryIdDelete = function (user_category_id, options) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdDelete(user_category_id, options)(this.axios, this.basePath);
    };
    /**
     * Get information about the user category.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    UserCategoriesApi.prototype.userCategoriesUserCategoryIdGet = function (user_category_id, options) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdGet(user_category_id, options)(this.axios, this.basePath);
    };
    /**
     * Update user category information.
     * @param {string} user_category_id The Invotra UUID of the user category.
     * @param {UserCategorySchemaCommon} UserCategorySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserCategoriesApi
     */
    UserCategoriesApi.prototype.userCategoriesUserCategoryIdPut = function (user_category_id, UserCategorySchemaCommon, options) {
        return UserCategoriesApiFp(this.configuration).userCategoriesUserCategoryIdPut(user_category_id, UserCategorySchemaCommon, options)(this.axios, this.basePath);
    };
    return UserCategoriesApi;
}(BaseAPI));
export { UserCategoriesApi };
//# sourceMappingURL=user-categories-api.js.map