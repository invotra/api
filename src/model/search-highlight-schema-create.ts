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


import { SearchHighlightListContentSchema } from './search-highlight-list-content-schema';
import { SearchHighlightListLinkSchema } from './search-highlight-list-link-schema';
import { SearchHighlightListSiteSectionSchema } from './search-highlight-list-site-section-schema';
import { SearchHighlightSchemaCommon } from './search-highlight-schema-common';
import { SearchHighlightSchemaCreateAllOf } from './search-highlight-schema-create-all-of';

/**
 * @type SearchHighlightSchemaCreate
 * @export
 */
export type SearchHighlightSchemaCreate = SearchHighlightSchemaCommon & SearchHighlightSchemaCreateAllOf;



