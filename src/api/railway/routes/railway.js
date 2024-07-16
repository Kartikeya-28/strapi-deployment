'use strict';

/**
 * railway router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::railway.railway');
