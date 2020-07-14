'use strict';

const { getContentTypes, getContentType } = require("../services/contentTypes");

/**
 * type-factory.js controller
 *
 * @description: A set of functions called "actions" of the `type-factory` plugin.
 */

module.exports = {

  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    ctx.send({
      message: getContentType('like')
    });
  },
  healthCheck: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

};
