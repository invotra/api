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
import { InlineResponse20027 } from '../model';
import { JobRoleSchema } from '../model';
import { JobRoleSchemaCreate } from '../model';
import { SuccessfulPostResponseWithMessageSchema } from '../model';
import { UuidListSchema } from '../model';
/**
 * JobRolesApi - axios parameter creator
 * @export
 */
export declare const JobRolesApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for job roles.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesGet(external_id: string, options?: any): RequestArgs;
    /**
     * Remove job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdDelete(job_role_id: string, options?: any): RequestArgs;
    /**
     * Get information about the job role.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdGet(job_role_id: string, options?: any): RequestArgs;
    /**
     * Update job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {JobRoleSchema} JobRoleSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdPut(job_role_id: string, JobRoleSchema: JobRoleSchema, options?: any): RequestArgs;
    /**
     * Search for job roles. An empty array is returned if no job roles are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of job roles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the Job Role.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesListGet(title?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new job role.
     * @param {JobRoleSchemaCreate} JobRoleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesPost(JobRoleSchemaCreate: JobRoleSchema, options?: any): RequestArgs;
};
/**
 * JobRolesApi - functional programming interface
 * @export
 */
export declare const JobRolesApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for job roles.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesGet(external_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<UuidListSchema>;
    /**
     * Remove job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdDelete(job_role_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the job role.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdGet(job_role_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<JobRoleSchema>;
    /**
     * Update job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {JobRoleSchema} JobRoleSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdPut(job_role_id: string, JobRoleSchema: JobRoleSchema, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Search for job roles. An empty array is returned if no job roles are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of job roles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the Job Role.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesListGet(title?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse20027>;
    /**
     * Provision a new job role.
     * @param {JobRoleSchemaCreate} JobRoleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesPost(JobRoleSchemaCreate: JobRoleSchema, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * JobRolesApi - factory interface
 * @export
 */
export declare const JobRolesApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for job roles.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Remove job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdDelete(job_role_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the job role.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdGet(job_role_id: string, options?: any): AxiosPromise<JobRoleSchema>;
    /**
     * Update job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {JobRoleSchema} JobRoleSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesJobRoleIdPut(job_role_id: string, JobRoleSchema: JobRoleSchema, options?: any): AxiosPromise<void>;
    /**
     * Search for job roles. An empty array is returned if no job roles are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of job roles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the Job Role.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesListGet(title?: string | undefined, external_id?: string | undefined, status?: string | undefined, valid_parents_for?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse20027>;
    /**
     * Provision a new job role.
     * @param {JobRoleSchemaCreate} JobRoleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    jobRolesPost(JobRoleSchemaCreate: JobRoleSchema, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
};
/**
 * JobRolesApi - interface
 * @export
 * @interface JobRolesApi
 */
export interface JobRolesApiInterface {
    /**
     * Search for job roles.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Remove job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesJobRoleIdDelete(job_role_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the job role.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesJobRoleIdGet(job_role_id: string, options?: any): AxiosPromise<JobRoleSchema>;
    /**
     * Update job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {JobRoleSchema} JobRoleSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesJobRoleIdPut(job_role_id: string, JobRoleSchema: JobRoleSchema, options?: any): AxiosPromise<void>;
    /**
     * Search for job roles. An empty array is returned if no job roles are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of job roles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the Job Role.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesListGet(title?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20027>;
    /**
     * Provision a new job role.
     * @param {JobRoleSchemaCreate} JobRoleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApiInterface
     */
    jobRolesPost(JobRoleSchemaCreate: JobRoleSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
}
/**
 * JobRolesApi - object-oriented interface
 * @export
 * @class JobRolesApi
 * @extends {BaseAPI}
 */
export declare class JobRolesApi extends BaseAPI implements JobRolesApiInterface {
    /**
     * Search for job roles.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Remove job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesJobRoleIdDelete(job_role_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the job role.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesJobRoleIdGet(job_role_id: string, options?: any): AxiosPromise<JobRoleSchema>;
    /**
     * Update job role information.
     * @param {string} job_role_id The Invotra UUID of the job role.
     * @param {JobRoleSchema} JobRoleSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesJobRoleIdPut(job_role_id: string, JobRoleSchema: JobRoleSchema, options?: any): AxiosPromise<void>;
    /**
     * Search for job roles. An empty array is returned if no job roles are found.
     * @param {string} [title] Filter by title. Matches on whole words.
     * @param {string} [external_id] Filter by external ID.
     * @param {string} [status] Filter the list of job roles on a comma seperated list of statuses. Valid statuses are \&quot;published\&quot; and \&quot;unpublished\&quot;, you may inlude both. The default when not supplied is \&quot;published\&quot; only.
     * @param {string} [valid_parents_for] Filter out invalid parents (self and children) for the specified Invotra UUID of the Job Role.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesListGet(title?: string, external_id?: string, status?: string, valid_parents_for?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse20027>;
    /**
     * Provision a new job role.
     * @param {JobRoleSchemaCreate} JobRoleSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRolesApi
     */
    jobRolesPost(JobRoleSchemaCreate: JobRoleSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
}
