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
import { CountrySchemaCreateAllOf } from './country-schema-create-all-of';
import { PersonTypeSchemaCommon } from './person-type-schema-common';
/**
 * @type PersonTypeSchemaCreate
 * @export
 */
export declare type PersonTypeSchemaCreate = CountrySchemaCreateAllOf & PersonTypeSchemaCommon;
