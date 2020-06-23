"use strict";

/**
 * type-factory.js helpers
 *
 * @description: A set of functions that help services to avoid code duplication.
 */

module.exports = {
  /**
   * @returns {Array.<Object>} - all content types and their schema
   */
  getContentTypes() {
    /** Utilities for dealing with content types directly from the content-type-builder */  
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
  },

  /**
   * @param {string} apiID - the apiID of the type. See results for `getContentTypes` or the `/content-type-builder/content-types` endpoint.
   * @param {string} [plugin] - `optional` the plugin that manages the type, if it's not content-type-builder. Ex. `user-permissions` if it's a user.   
   */
  getContentType(kind, plugin) {
    // use getContent to get all the contentTypes
    // if there is no plugin value, filter just the application types by apiID
    // if there is a plugin value, filter by plugin and apiID
    // return undefinied if it doesn't exist
  }
};
