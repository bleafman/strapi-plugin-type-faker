'use strict';

const { getContentTypes } = require("../utils/contentTypes");

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
      message: getContentTypes()
    });
  },
  healthCheck: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: 'ok'
    });
  },

};
