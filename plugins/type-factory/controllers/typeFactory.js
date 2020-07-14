"use strict";

const { getContentTypes, getContentType, getPluginContentTypes } = require("../services/contentTypes");

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
      message: getContentTypes(),
    });
  },
  getType: async (ctx) => {
    const {
      params: { type, plugin },
    } = ctx;

    ctx.send({
      message: getContentType(type, plugin),
    });
  },
  getPluginTypes: async (ctx) => {
    const {
      params: { plugin },
    } = ctx;

    ctx.send({
      message: getPluginContentTypes(plugin),
    });
  },
  healthCheck: async (ctx) => {
    // Send 200 `ok`
    ctx.send({
      message: "ok",
    });
  },
};
