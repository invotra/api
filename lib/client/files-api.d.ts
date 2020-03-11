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
import { FileSchema } from '../model';
import { FileSchemaCreate } from '../model';
import { FileSchemaUpdate } from '../model';
import { SuccessfulPostResponseWithMessageSchema } from '../model';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export declare const FilesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Get information about the file.
     * @param {string} file_id The Invotra UUID of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdGet(file_id: string, options?: any): RequestArgs;
    /**
     *
     * @param {string} file_id The Invotra UUID of the file.
     * @param {FileSchemaUpdate} FileSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdPut(file_id: string, FileSchemaUpdate: FileSchemaUpdate, options?: any): RequestArgs;
    /**
     * Provision a new file.
     * @param {FileSchemaCreate} FileSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesPost(FileSchemaCreate: FileSchemaUpdate, options?: any): RequestArgs;
};
/**
 * FilesApi - functional programming interface
 * @export
 */
export declare const FilesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Get information about the file.
     * @param {string} file_id The Invotra UUID of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdGet(file_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<FileSchema>;
    /**
     *
     * @param {string} file_id The Invotra UUID of the file.
     * @param {FileSchemaUpdate} FileSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdPut(file_id: string, FileSchemaUpdate: FileSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Provision a new file.
     * @param {FileSchemaCreate} FileSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesPost(FileSchemaCreate: FileSchemaUpdate, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * FilesApi - factory interface
 * @export
 */
export declare const FilesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Get information about the file.
     * @param {string} file_id The Invotra UUID of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdGet(file_id: string, options?: any): AxiosPromise<FileSchema>;
    /**
     *
     * @param {string} file_id The Invotra UUID of the file.
     * @param {FileSchemaUpdate} FileSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesFileIdPut(file_id: string, FileSchemaUpdate: FileSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new file.
     * @param {FileSchemaCreate} FileSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    filesPost(FileSchemaCreate: FileSchemaUpdate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * FilesApi - interface
 * @export
 * @interface FilesApi
 */
export interface FilesApiInterface {
    /**
     * Get information about the file.
     * @param {string} file_id The Invotra UUID of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesFileIdGet(file_id: string, options?: any): AxiosPromise<FileSchema>;
    /**
     *
     * @param {string} file_id The Invotra UUID of the file.
     * @param {FileSchemaUpdate} FileSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesFileIdPut(file_id: string, FileSchemaUpdate: FileSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new file.
     * @param {FileSchemaCreate} FileSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApiInterface
     */
    filesPost(FileSchemaCreate: FileSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
}
/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export declare class FilesApi extends BaseAPI implements FilesApiInterface {
    /**
     * Get information about the file.
     * @param {string} file_id The Invotra UUID of the file.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    filesFileIdGet(file_id: string, options?: any): AxiosPromise<FileSchema>;
    /**
     *
     * @param {string} file_id The Invotra UUID of the file.
     * @param {FileSchemaUpdate} FileSchemaUpdate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    filesFileIdPut(file_id: string, FileSchemaUpdate: FileSchemaUpdate, options?: any): AxiosPromise<void>;
    /**
     * Provision a new file.
     * @param {FileSchemaCreate} FileSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    filesPost(FileSchemaCreate: FileSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
}