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
import { InlineResponse200 } from '../model';
import { InlineResponse2001 } from '../model';
import { SuccessfulPostResponseWithMessageSchema } from '../model';
import { TeamMembershipCommonSchema } from '../model';
import { TeamSchema } from '../model';
import { TeamSchemaCreate } from '../model';
import { UuidListSchema } from '../model';
/**
 * TeamsApi - axios parameter creator
 * @export
 */
export declare const TeamsApiAxiosParamCreator: (configuration?: Configuration | undefined) => {
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsGet(external_id: string, options?: any): RequestArgs;
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} [label] Filter by label. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on team name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of teams to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by team (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsListGet(label?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Provision a new team.
     * @param {TeamSchemaCreate} TeamSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsPost(TeamSchemaCreate: TeamSchema, options?: any): RequestArgs;
    /**
     * Remove team information
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdDelete(team_id: string, options?: any): RequestArgs;
    /**
     * Get information about the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdGet(team_id: string, options?: any): RequestArgs;
    /**
     * Get a list of team members.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsGet(team_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): RequestArgs;
    /**
     * Remove the user\'s membership of the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdDelete(team_id: string, user_id: string, options?: any): RequestArgs;
    /**
     * Update information about a user\'s team membership.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {TeamMembershipCommonSchema} TeamMembershipCommonSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdPut(team_id: string, user_id: string, TeamMembershipCommonSchema: TeamMembershipCommonSchema, options?: any): RequestArgs;
    /**
     * Update team information.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {TeamSchema} TeamSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdPut(team_id: string, TeamSchema: TeamSchema, options?: any): RequestArgs;
};
/**
 * TeamsApi - functional programming interface
 * @export
 */
export declare const TeamsApiFp: (configuration?: Configuration | undefined) => {
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsGet(external_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<UuidListSchema>;
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} [label] Filter by label. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on team name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of teams to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by team (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsListGet(label?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse200>;
    /**
     * Provision a new team.
     * @param {TeamSchemaCreate} TeamSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsPost(TeamSchemaCreate: TeamSchema, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove team information
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdDelete(team_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Get information about the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdGet(team_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<TeamSchema>;
    /**
     * Get a list of team members.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsGet(team_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<InlineResponse2001>;
    /**
     * Remove the user\'s membership of the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdDelete(team_id: string, user_id: string, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Update information about a user\'s team membership.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {TeamMembershipCommonSchema} TeamMembershipCommonSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdPut(team_id: string, user_id: string, TeamMembershipCommonSchema: TeamMembershipCommonSchema, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
    /**
     * Update team information.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {TeamSchema} TeamSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdPut(team_id: string, TeamSchema: TeamSchema, options?: any): (axios?: AxiosInstance | undefined, basePath?: string | undefined) => AxiosPromise<void>;
};
/**
 * TeamsApi - factory interface
 * @export
 */
export declare const TeamsApiFactory: (configuration?: Configuration | undefined, basePath?: string | undefined, axios?: AxiosInstance | undefined) => {
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} [label] Filter by label. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on team name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of teams to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by team (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsListGet(label?: string | undefined, autocomplete?: string | undefined, users_fulltext_search?: string | undefined, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse200>;
    /**
     * Provision a new team.
     * @param {TeamSchemaCreate} TeamSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsPost(TeamSchemaCreate: TeamSchema, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove team information
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdDelete(team_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdGet(team_id: string, options?: any): AxiosPromise<TeamSchema>;
    /**
     * Get a list of team members.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsGet(team_id: string, offset?: number | undefined, limit?: number | undefined, options?: any): AxiosPromise<InlineResponse2001>;
    /**
     * Remove the user\'s membership of the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdDelete(team_id: string, user_id: string, options?: any): AxiosPromise<void>;
    /**
     * Update information about a user\'s team membership.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {TeamMembershipCommonSchema} TeamMembershipCommonSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdMembershipsUserIdPut(team_id: string, user_id: string, TeamMembershipCommonSchema: TeamMembershipCommonSchema, options?: any): AxiosPromise<void>;
    /**
     * Update team information.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {TeamSchema} TeamSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    teamsTeamIdPut(team_id: string, TeamSchema: TeamSchema, options?: any): AxiosPromise<void>;
};
/**
 * TeamsApi - interface
 * @export
 * @interface TeamsApi
 */
export interface TeamsApiInterface {
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} [label] Filter by label. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on team name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of teams to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by team (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsListGet(label?: string, autocomplete?: string, users_fulltext_search?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse200>;
    /**
     * Provision a new team.
     * @param {TeamSchemaCreate} TeamSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsPost(TeamSchemaCreate: TeamSchemaCreate, options?: any): AxiosPromise<SuccessfulPostResponseWithMessageSchema>;
    /**
     * Remove team information
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdDelete(team_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdGet(team_id: string, options?: any): AxiosPromise<TeamSchema>;
    /**
     * Get a list of team members.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdMembershipsGet(team_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse2001>;
    /**
     * Remove the user\'s membership of the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdMembershipsUserIdDelete(team_id: string, user_id: string, options?: any): AxiosPromise<void>;
    /**
     * Update information about a user\'s team membership.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {TeamMembershipCommonSchema} TeamMembershipCommonSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdMembershipsUserIdPut(team_id: string, user_id: string, TeamMembershipCommonSchema: TeamMembershipCommonSchema, options?: any): AxiosPromise<void>;
    /**
     * Update team information.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {TeamSchema} TeamSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApiInterface
     */
    teamsTeamIdPut(team_id: string, TeamSchema: TeamSchema, options?: any): AxiosPromise<void>;
}
/**
 * TeamsApi - object-oriented interface
 * @export
 * @class TeamsApi
 * @extends {BaseAPI}
 */
export declare class TeamsApi extends BaseAPI implements TeamsApiInterface {
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} external_id Filter by external ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsGet(external_id: string, options?: any): AxiosPromise<UuidListSchema>;
    /**
     * Search for teams. An empty array is returned if no teams are found.
     * @param {string} [label] Filter by label. Matches on whole words.
     * @param {string} [autocomplete] Autocomplete term. Matches on team name, per letter, from the start of the word.
     * @param {string} [users_fulltext_search] Filter the list of teams to those that include users matching a search term. This is useful when you have already searched for users and want to refine your search by team (like a faceted search). Like the fulltext_search parameter of /users/search, this matches on whole words.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsListGet(label?: string, autocomplete?: string, users_fulltext_search?: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse200>;
    /**
     * Provision a new team.
     * @param {TeamSchemaCreate} TeamSchemaCreate
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsPost(TeamSchemaCreate: TeamSchemaCreate, options?: any): AxiosPromise<import("../model").SuccessfulPostResponseSchema>;
    /**
     * Remove team information
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdDelete(team_id: string, options?: any): AxiosPromise<void>;
    /**
     * Get information about the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdGet(team_id: string, options?: any): AxiosPromise<TeamSchema>;
    /**
     * Get a list of team members.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {number} [offset] The number of items to skip before starting to collect the result set.
     * @param {number} [limit] The numbers of items to return. If the value specified is more than the maximum, the result count will be limited to the maximum.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdMembershipsGet(team_id: string, offset?: number, limit?: number, options?: any): AxiosPromise<InlineResponse2001>;
    /**
     * Remove the user\'s membership of the team.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdMembershipsUserIdDelete(team_id: string, user_id: string, options?: any): AxiosPromise<void>;
    /**
     * Update information about a user\'s team membership.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {string} user_id The Invotra UUID of the user.
     * @param {TeamMembershipCommonSchema} TeamMembershipCommonSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdMembershipsUserIdPut(team_id: string, user_id: string, TeamMembershipCommonSchema: TeamMembershipCommonSchema, options?: any): AxiosPromise<void>;
    /**
     * Update team information.
     * @param {string} team_id The Invotra UUID of the team.
     * @param {TeamSchema} TeamSchema
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TeamsApi
     */
    teamsTeamIdPut(team_id: string, TeamSchema: TeamSchema, options?: any): AxiosPromise<void>;
}
