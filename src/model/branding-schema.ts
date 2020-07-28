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



/**
 * 
 * @export
 * @interface BrandingSchema
 */
export interface BrandingSchema {
    /**
     * The logo for the site.
     * @type {string}
     * @memberof BrandingSchema
     */
    logo?: string;
    /**
     * The mobile logo for the site.
     * @type {string}
     * @memberof BrandingSchema
     */
    mobile_logo?: string;
    /**
     * This is the colour for the main navigation text. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    navigation_first_level_nav_link?: string;
    /**
     * This is the colour for the main navigation background. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    navigation_menu_background_colour?: string;
    /**
     * This is the colour for the toolbar background. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    toolbar_background_colour?: string;
    /**
     * This is the colour for the toolbar text. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    toolbar_text_colour?: string;
    /**
     * This is the colour for the mobile icons on the toolbar. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    mobile_icons_colour?: string;
    /**
     * This is the standard button colour. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    standard_button_normal_state_colour?: string;
    /**
     * This is the standard button border colour. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    standard_button_normal_state_border_colour?: string;
    /**
     * This is the standard button text colour. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    standard_button_normal_state_text_colour?: string;
    /**
     * This is the primary button colour. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    primary_button_normal_state_colour?: string;
    /**
     * This is the primary button border colour. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    primary_button_normal_state_border_colour?: string;
    /**
     * This is the colour for hyperlinks. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    link_colour?: string;
    /**
     * This is the colour for vertical tabs. Any CSS colour allowed.
     * @type {string}
     * @memberof BrandingSchema
     */
    vertical_tabs_colour?: string;
}


