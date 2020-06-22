'use strict';

/**
 * make-fake.js controller
 *
 * @description: A set of functions called "actions" of the `make-fake` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // returns all content types and their schema

    const contentTypeService = strapi.plugins['content-type-builder'].services.contenttypes;

    const contentTypes = Object.keys(strapi.contentTypes)
    .filter(uid => {
      if (uid.startsWith('strapi::')) return false;
      if (uid === 'plugins::upload.file') return false; // TODO: add a flag in the content type instead

      return true;
    })
    .map(uid => contentTypeService.formatContentType(strapi.contentTypes[uid]));

    ctx.send({
      message: contentTypes
    });
  },
  healthCheck: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

};
