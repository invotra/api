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


import { BlogSchemaCreateAllOfGeneralTopic } from './blog-schema-create-all-of-general-topic';
import { BlogSchemaUpdateAllOfImage } from './blog-schema-update-all-of-image';

/**
 * 
 * @export
 * @interface BlogSchemaCreateAllOf
 */
export interface BlogSchemaCreateAllOf {
    /**
     * 
     * @type {BlogSchemaUpdateAllOfImage}
     * @memberof BlogSchemaCreateAllOf
     */
    image?: BlogSchemaUpdateAllOfImage;
    /**
     * 
     * @type {BlogSchemaCreateAllOfGeneralTopic}
     * @memberof BlogSchemaCreateAllOf
     */
    general_topic?: BlogSchemaCreateAllOfGeneralTopic;
}


