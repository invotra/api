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
import { InlineResponse20029 } from '../model';
import { LocationBuildingSchema } from '../model';
import { LocationBuildingSchemaCommon } from '../model';
import { LocationBuildingSchemaCreate } from '../model';
import { LocationBuildingSchemaUpdate } from '../model';
import { LocationFloorSchema } from '../model';
import { LocationFloorSchemaCommon } from '../model';
import { LocationFloorSchemaCreate } from '../model';
import { LocationFloorSchemaUpdate } from '../model';
import { LocationSiteSchema } from '../model';
import { LocationSiteSchemaCommon } from '../model';
import { LocationSiteSchemaCreate } from '../model';
import { LocationSiteSchemaUpdate } from '../model';
import { LocationSpaceSchema } from '../model';
import { LocationSpaceSchemaCommon } from '../model';
import { LocationSpaceSchemaCreate } from '../model';
import { LocationSpaceSchemaUpdate } from '../model';
import { LocationUuidListItemSchema } from '../model';
import { SuccessfulPostResponseWithMessageSchema } from '../model';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export declare const LocationsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdDelete(location_id: string, options?: any): RequestArgs;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdGet(location_id: string, options?: any): RequestArgs;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationBuildingSchemaUpdate} LocationBuildingSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdPut(location_id: string, LocationBuildingSchemaUpdate: LocationBuildingSchemaCommon, options?: any): RequestArgs;
    /**
     * Provision a new location.
     * @param {LocationBuildingSchemaCreate} LocationBuildingSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsPost(LocationBuildingSchemaCreate: LocationBuildingSchemaCommon, options?: any): RequestArgs;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdDelete(location_id: string, options?: any): RequestArgs;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdGet(location_id: string, options?: any): RequestArgs;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationFloorSchemaUpdate} LocationFloorSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdPut(location_id: string, LocationFloorSchemaUpdate: LocationFloorSchemaCommon, options?: any): RequestArgs;
    /**
     * Provision a new location.
     * @param {LocationFloorSchemaCreate} LocationFloorSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsPost(LocationFloorSchemaCreate: LocationFloorSchemaCommon, options?: any): RequestArgs;
    /**
     * Search for locations.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsGet(external_id: string, options?: any): RequestArgs;
    /**
     * Search for locations. An empty array is returned if no locations are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on location name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of locations to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by location (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsListGet(title?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdDelete(location_id: string, options?: any): RequestArgs;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdGet(location_id: string, options?: any): RequestArgs;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSiteSchemaUpdate} LocationSiteSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdPut(location_id: string, LocationSiteSchemaUpdate: LocationSiteSchemaCommon, options?: any): RequestArgs;
    /**
     * Provision a new location.
     * @param {LocationSiteSchemaCreate} LocationSiteSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesPost(LocationSiteSchemaCreate: LocationSiteSchemaCommon, options?: any): RequestArgs;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdDelete(location_id: string, options?: any): RequestArgs;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdGet(location_id: string, options?: any): RequestArgs;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSpaceSchemaUpdate} LocationSpaceSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdPut(location_id: string, LocationSpaceSchemaUpdate: LocationSpaceSchemaCommon, options?: any): RequestArgs;
    /**
     * Provision a new location.
     * @param {LocationSpaceSchemaCreate} LocationSpaceSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesPost(LocationSpaceSchemaCreate: LocationSpaceSchemaCommon, options?: any): RequestArgs;
};
/**
 * LocationsApi - functional programming interface
 * @export
 */
export declare const LocationsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdDelete(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdGet(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LocationBuildingSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationBuildingSchemaUpdate} LocationBuildingSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdPut(location_id: string, LocationBuildingSchemaUpdate: LocationBuildingSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationBuildingSchemaCreate} LocationBuildingSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsPost(LocationBuildingSchemaCreate: LocationBuildingSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdDelete(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdGet(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LocationFloorSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationFloorSchemaUpdate} LocationFloorSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdPut(location_id: string, LocationFloorSchemaUpdate: LocationFloorSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationFloorSchemaCreate} LocationFloorSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsPost(LocationFloorSchemaCreate: LocationFloorSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Search for locations.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsGet(external_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LocationUuidListItemSchema[]>;
    /**
     * Search for locations. An empty array is returned if no locations are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on location name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of locations to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by location (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsListGet(title?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20029>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdDelete(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdGet(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LocationSiteSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSiteSchemaUpdate} LocationSiteSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdPut(location_id: string, LocationSiteSchemaUpdate: LocationSiteSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSiteSchemaCreate} LocationSiteSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesPost(LocationSiteSchemaCreate: LocationSiteSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdDelete(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdGet(location_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<LocationSpaceSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSpaceSchemaUpdate} LocationSpaceSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdPut(location_id: string, LocationSpaceSchemaUpdate: LocationSpaceSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSpaceSchemaCreate} LocationSpaceSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesPost(LocationSpaceSchemaCreate: LocationSpaceSchemaCommon, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * LocationsApi - factory interface
 * @export
 */
export declare const LocationsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationBuildingSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationBuildingSchemaUpdate} LocationBuildingSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsLocationIdPut(location_id: string, LocationBuildingSchemaUpdate: LocationBuildingSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationBuildingSchemaCreate} LocationBuildingSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsBuildingsPost(LocationBuildingSchemaCreate: LocationBuildingSchemaCommon, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationFloorSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationFloorSchemaUpdate} LocationFloorSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsLocationIdPut(location_id: string, LocationFloorSchemaUpdate: LocationFloorSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationFloorSchemaCreate} LocationFloorSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsFloorsPost(LocationFloorSchemaCreate: LocationFloorSchemaCommon, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Search for locations.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsGet(external_id: string, options?: any): AxiosPromise<LocationUuidListItemSchema[]>;
    /**
     * Search for locations. An empty array is returned if no locations are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on location name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of locations to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by location (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsListGet(title?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20029>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSiteSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSiteSchemaUpdate} LocationSiteSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesLocationIdPut(location_id: string, LocationSiteSchemaUpdate: LocationSiteSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSiteSchemaCreate} LocationSiteSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSitesPost(LocationSiteSchemaCreate: LocationSiteSchemaCommon, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSpaceSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSpaceSchemaUpdate} LocationSpaceSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesLocationIdPut(location_id: string, LocationSpaceSchemaUpdate: LocationSpaceSchemaCommon, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSpaceSchemaCreate} LocationSpaceSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    locationsSpacesPost(LocationSpaceSchemaCreate: LocationSpaceSchemaCommon, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * LocationsApi - interface
 * @export
 * @interface LocationsApi
 */
export interface LocationsApiInterface {
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsBuildingsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsBuildingsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationBuildingSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationBuildingSchemaUpdate} LocationBuildingSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsBuildingsLocationIdPut(location_id: string, LocationBuildingSchemaUpdate: LocationBuildingSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationBuildingSchemaCreate} LocationBuildingSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsBuildingsPost(LocationBuildingSchemaCreate: LocationBuildingSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsFloorsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsFloorsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationFloorSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationFloorSchemaUpdate} LocationFloorSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsFloorsLocationIdPut(location_id: string, LocationFloorSchemaUpdate: LocationFloorSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationFloorSchemaCreate} LocationFloorSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsFloorsPost(LocationFloorSchemaCreate: LocationFloorSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
    /**
     * Search for locations.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsGet(external_id: string, options?: any): AxiosPromise<Array<LocationUuidListItemSchema>>;
    /**
     * Search for locations. An empty array is returned if no locations are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on location name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of locations to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by location (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsListGet(title?: string, autocomplete?: string, users_fulltext_search?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20029>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSitesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSitesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSiteSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSiteSchemaUpdate} LocationSiteSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSitesLocationIdPut(location_id: string, LocationSiteSchemaUpdate: LocationSiteSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSiteSchemaCreate} LocationSiteSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSitesPost(LocationSiteSchemaCreate: LocationSiteSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSpacesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSpacesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSpaceSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSpaceSchemaUpdate} LocationSpaceSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSpacesLocationIdPut(location_id: string, LocationSpaceSchemaUpdate: LocationSpaceSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSpaceSchemaCreate} LocationSpaceSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiInterface
     */
    locationsSpacesPost(LocationSpaceSchemaCreate: LocationSpaceSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
}
/**
 * LocationsApi - object-oriented interface
 * @export
 * @class LocationsApi
 * @extends {BaseAPI}
 */
export declare class LocationsApi extends BaseAPI implements LocationsApiInterface {
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsBuildingsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsBuildingsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationBuildingSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationBuildingSchemaUpdate} LocationBuildingSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsBuildingsLocationIdPut(location_id: string, LocationBuildingSchemaUpdate: LocationBuildingSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationBuildingSchemaCreate} LocationBuildingSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsBuildingsPost(LocationBuildingSchemaCreate: LocationBuildingSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsFloorsLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsFloorsLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationFloorSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationFloorSchemaUpdate} LocationFloorSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsFloorsLocationIdPut(location_id: string, LocationFloorSchemaUpdate: LocationFloorSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationFloorSchemaCreate} LocationFloorSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsFloorsPost(LocationFloorSchemaCreate: LocationFloorSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Search for locations.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsGet(external_id: string, options?: any): AxiosPromise<LocationUuidListItemSchema[]>;
    /**
     * Search for locations. An empty array is returned if no locations are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on location name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of locations to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by location (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsListGet(title?: string, autocomplete?: string, users_fulltext_search?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20029>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSitesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSitesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSiteSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSiteSchemaUpdate} LocationSiteSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSitesLocationIdPut(location_id: string, LocationSiteSchemaUpdate: LocationSiteSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSiteSchemaCreate} LocationSiteSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSitesPost(LocationSiteSchemaCreate: LocationSiteSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove location information
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSpacesLocationIdDelete(location_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the location.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSpacesLocationIdGet(location_id: string, options?: any): AxiosPromise<LocationSpaceSchema>;
    /**
     * Update location information.
     * @param {string} location_id The Invotra UUID of the location.
     * @param {LocationSpaceSchemaUpdate} LocationSpaceSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSpacesLocationIdPut(location_id: string, LocationSpaceSchemaUpdate: LocationSpaceSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new location.
     * @param {LocationSpaceSchemaCreate} LocationSpaceSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    locationsSpacesPost(LocationSpaceSchemaCreate: LocationSpaceSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
}
