// tslint:disable
/**
 * Invotra API
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

/**
 * 
 * @export
 * @interface SearchHighlightSchemaCommon
 */
export interface SearchHighlightSchemaCommon {
    /**
     * Name of the search highlight.
     * @type {string}
     * @memberof SearchHighlightSchemaCommon
     */
    name?: string;
    /**
     * Description of the search highlight.
     * @type {string}
     * @memberof SearchHighlightSchemaCommon
     */
    description?: string;
    /**
     * The search highlight external reference id.
     * @type {string}
     * @memberof SearchHighlightSchemaCommon
     */
    external_id?: string;
    /**
     * Indicates that this search highlight is published.
     * @type {boolean}
     * @memberof SearchHighlightSchemaCommon
     */
    published?: boolean;
    /**
     * Determines the position of a search highlight in the hierarchy in relation to its siblings.
     * @type {number}
     * @memberof SearchHighlightSchemaCommon
     */
    weight?: number;
    /**
     * List of content and links in the search highlight.
     * @type {Array<SearchHighlightListContentSchema | SearchHighlightListSiteSectionSchema | SearchHighlightListLinkSchema>}
     * @memberof SearchHighlightSchemaCommon
     */
    list?: Array<SearchHighlightListContentSchema | SearchHighlightListSiteSectionSchema | SearchHighlightListLinkSchema>;
}


