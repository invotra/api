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
import { EntityLookupSchema } from '../model';
/**
 * EntitiesApi - axios parameter creator
 * @export
 */
export declare const EntitiesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     *
     * @summary Look up information about an entity based on its URL path.
     * @param {string} path The (Drupal) URL path of the entity to look up. Include the leading slash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    entitiesPathLookupGet(path: string, options?: any): RequestArgs;
};
/**
 * EntitiesApi - functional programming interface
 * @export
 */
export declare const EntitiesApiFp: (configuration?: Configuration | undefined) => {
    /**
     *
     * @summary Look up information about an entity based on its URL path.
     * @param {string} path The (Drupal) URL path of the entity to look up. Include the leading slash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    entitiesPathLookupGet(path: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<EntityLookupSchema>;
};
/**
 * EntitiesApi - factory interface
 * @export
 */
export declare const EntitiesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     *
     * @summary Look up information about an entity based on its URL path.
     * @param {string} path The (Drupal) URL path of the entity to look up. Include the leading slash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    entitiesPathLookupGet(path: string, options?: any): AxiosPromise<EntityLookupSchema>;
};
/**
 * EntitiesApi - interface
 * @export
 * @interface EntitiesApi
 */
export interface EntitiesApiInterface {
    /**
     *
     * @summary Look up information about an entity based on its URL path.
     * @param {string} path The (Drupal) URL path of the entity to look up. Include the leading slash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EntitiesApiInterface
     */
    entitiesPathLookupGet(path: string, options?: any): AxiosPromise<EntityLookupSchema>;
}
/**
 * EntitiesApi - object-oriented interface
 * @export
 * @class EntitiesApi
 * @extends {BaseAPI}
 */
export declare class EntitiesApi extends BaseAPI implements EntitiesApiInterface {
    /**
     *
     * @summary Look up information about an entity based on its URL path.
     * @param {string} path The (Drupal) URL path of the entity to look up. Include the leading slash.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EntitiesApi
     */
    entitiesPathLookupGet(path: string, options?: any): AxiosPromise<EntityLookupSchema>;
}
