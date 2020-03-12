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
import { BrandingSchema } from '../model';
import { ConfigurationSchema } from '../model';
import { ProductOptionsSchema } from '../model';
/**
 * ConfigurationApi - axios parameter creator
 * @export
 */
export declare const ConfigurationApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Returns the branding for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    brandingGet(options?: any): RequestArgs;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configurationGet(options?: any): RequestArgs;
    /**
     * Returns the product options for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    productOptionsGet(options?: any): RequestArgs;
};
/**
 * ConfigurationApi - functional programming interface
 * @export
 */
export declare const ConfigurationApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Returns the branding for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    brandingGet(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<BrandingSchema>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configurationGet(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ConfigurationSchema>;
    /**
     * Returns the product options for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    productOptionsGet(options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<ProductOptionsSchema>;
};
/**
 * ConfigurationApi - factory interface
 * @export
 */
export declare const ConfigurationApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Returns the branding for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    brandingGet(options?: any): AxiosPromise<BrandingSchema>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    configurationGet(options?: any): AxiosPromise<ConfigurationSchema>;
    /**
     * Returns the product options for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    productOptionsGet(options?: any): AxiosPromise<ProductOptionsSchema>;
};
/**
 * ConfigurationApi - interface
 * @export
 * @interface ConfigurationApi
 */
export interface ConfigurationApiInterface {
    /**
     * Returns the branding for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApiInterface
     */
    brandingGet(options?: any): AxiosPromise<BrandingSchema>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApiInterface
     */
    configurationGet(options?: any): AxiosPromise<ConfigurationSchema>;
    /**
     * Returns the product options for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApiInterface
     */
    productOptionsGet(options?: any): AxiosPromise<ProductOptionsSchema>;
}
/**
 * ConfigurationApi - object-oriented interface
 * @export
 * @class ConfigurationApi
 * @extends {BaseAPI}
 */
export declare class ConfigurationApi extends BaseAPI implements ConfigurationApiInterface {
    /**
     * Returns the branding for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    brandingGet(options?: any): AxiosPromise<BrandingSchema>;
    /**
     *
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    configurationGet(options?: any): AxiosPromise<ConfigurationSchema>;
    /**
     * Returns the product options for an instance of Invotra.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ConfigurationApi
     */
    productOptionsGet(options?: any): AxiosPromise<ProductOptionsSchema>;
}
