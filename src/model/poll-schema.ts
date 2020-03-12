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


import { GroupPollSchemaAllOfOptions } from './group-poll-schema-all-of-options';
import { PollSchemaAllOf } from './poll-schema-all-of';
import { PollSchemaCommon } from './poll-schema-common';
import { UserTrimmedSchema } from './user-trimmed-schema';

/**
 * @type PollSchema
 * @export
 */
export type PollSchema = PollSchemaAllOf & PollSchemaCommon;



