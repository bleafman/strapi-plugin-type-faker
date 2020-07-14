"use strict";
/**
 * type-factory.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

/** Services for working with components and their types */


/**
 * @param uid the uid of the component. Part of the dynamicZoneField in a type. ex. `"test-component.test-component"`
 * @return {Array.<Object>} an array of attributes
 */
const getComponentAttributes(uid) {
  const componentService = strapi.plugins["content-manager"].services.Components;

  return componentService.getComponentInformations(uid);
}