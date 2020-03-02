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
import { CountrySchema } from '../model';
import { CountrySchemaCommon } from '../model';
import { CountrySchemaCreate } from '../model';
import { InlineResponse20032 } from '../model';
import { SuccessfulPostResponseSchema } from '../model';
/**
 * CountriesApi - axios parameter creator
 * @export
 */
export declare const CountriesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Delete a country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdDelete(country_id: string, options?: any): RequestArgs;
    /**
     * Get information about the country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdGet(country_id: string, options?: any): RequestArgs;
    /**
     * Update country information.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {CountrySchemaCommon} CountrySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdPut(country_id: string, CountrySchemaCommon: CountrySchemaCommon, options?: any): RequestArgs;
    /**
     * Search for countries. An empty array is returned if no countries are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of countries on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the country.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new country.
     * @param {CountrySchemaCreate} CountrySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesPost(CountrySchemaCreate: CountrySchemaCreate, options?: any): RequestArgs;
};
/**
 * CountriesApi - functional programming interface
 * @export
 */
export declare const CountriesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Delete a country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdDelete(country_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdGet(country_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<CountrySchema>;
    /**
     * Update country information.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {CountrySchemaCommon} CountrySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdPut(country_id: string, CountrySchemaCommon: CountrySchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for countries. An empty array is returned if no countries are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of countries on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the country.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20032>;
    /**
     * Provision a new country.
     * @param {CountrySchemaCreate} CountrySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesPost(CountrySchemaCreate: CountrySchemaCreate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * CountriesApi - factory interface
 * @export
 */
export declare const CountriesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Delete a country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdDelete(country_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdGet(country_id: string, options?: any): AxiosPromise<CountrySchema>;
    /**
     * Update country information.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {CountrySchemaCommon} CountrySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesCountryIdPut(country_id: string, CountrySchemaCommon: CountrySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for countries. An empty array is returned if no countries are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of countries on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the country.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesListGet(name?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20032>;
    /**
     * Provision a new country.
     * @param {CountrySchemaCreate} CountrySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    countriesPost(CountrySchemaCreate: CountrySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
};
/**
 * CountriesApi - interface
 * @export
 * @interface CountriesApi
 */
export interface CountriesApiInterface {
    /**
     * Delete a country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiInterface
     */
    countriesCountryIdDelete(country_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiInterface
     */
    countriesCountryIdGet(country_id: string, options?: any): AxiosPromise<CountrySchema>;
    /**
     * Update country information.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {CountrySchemaCommon} CountrySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiInterface
     */
    countriesCountryIdPut(country_id: string, CountrySchemaCommon: CountrySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for countries. An empty array is returned if no countries are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of countries on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the country.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiInterface
     */
    countriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20032>;
    /**
     * Provision a new country.
     * @param {CountrySchemaCreate} CountrySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiInterface
     */
    countriesPost(CountrySchemaCreate: CountrySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
/**
 * CountriesApi - object-oriented interface
 * @export
 * @class CountriesApi
 * @extends {BaseAPI}
 */
export declare class CountriesApi extends BaseAPI implements CountriesApiInterface {
    /**
     * Delete a country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApi
     */
    countriesCountryIdDelete(country_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the country.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApi
     */
    countriesCountryIdGet(country_id: string, options?: any): AxiosPromise<CountrySchema>;
    /**
     * Update country information.
     * @param {string} country_id The Invotra UUID of the country.
     * @param {CountrySchemaCommon} CountrySchemaCommon
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApi
     */
    countriesCountryIdPut(country_id: string, CountrySchemaCommon: CountrySchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Search for countries. An empty array is returned if no countries are found.
     * @param {string} [name] Filter by name. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of countries on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the country.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApi
     */
    countriesListGet(name?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20032>;
    /**
     * Provision a new country.
     * @param {CountrySchemaCreate} CountrySchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApi
     */
    countriesPost(CountrySchemaCreate: CountrySchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseSchema>;
}
