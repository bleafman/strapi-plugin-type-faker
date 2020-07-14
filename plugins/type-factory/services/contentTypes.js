"use strict";
/**
 * type-factory.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

/** Services for working with types in a more ergonomic way than directly from the content-type-builder */

/**
 * @returns {Array.<Object>} - all content types and their schema
 */
const getContentTypes = () => {
  const contentTypeService =
    strapi.plugins["content-type-builder"].services.contenttypes;
  // removes admin/system types
  const contentTypes = Object.keys(strapi.contentTypes)
    .filter((uid) => {
      if (uid.startsWith("strapi::")) return false;
      if (uid === "plugins::upload.file") return false;

      return true;
    })
    .map((uid) =>
      contentTypeService.formatContentType(strapi.contentTypes[uid])
    );

  return contentTypes;
};

/**
 * @param {string} apiID - the apiID of the type. The idiomatic format is the lowercase, singular name of the type. Ex. "user".
 *
 * To see your existing types, you can call the `getContentTypes` method or the `/content-type-builder/content-types` endpoint.
 * @param {string} [plugin] - `optional` the plugin that manages the type, if it's not content-type-builder. Ex. `user-permissions` if it's a user.
 */
const getContentType = (apiID, plugin = undefined) => {
  // use getContentTypes to get all the contentTypes
  // Filter the types by apiID
  let types = getContentTypes().filter(type => type.apiID === apiID);
  // if there is a plugin value, filter by plugin and apiID
  if (plugin) {
    types = types.filter(type => type.plugin === plugin);
  }
  // return undefinied if it doesn't exist

  return types.length ? types : undefined;
};


/**
 * @param {string} plugin - the plugin that manages the types, if it's not content-type-builder. Ex. `user-permissions`.
 */
const getPluginContentTypes = (plugin) => {
  // undefinied if no plugin provided
  if (!plugin) {
    return undefined;
  }
  // use getContentTypes to get all the contentTypes
  // Filter the types by plugins
  let types = getContentTypes().filter(type => type.plugin === plugin);

  // return undefinied if the plugin doesn't have any types
  return types.length ? types : undefined;
};

module.exports = {
  getContentTypes,
  getContentType,
  getPluginContentTypes
};
