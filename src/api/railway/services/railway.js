'use strict';

/**
 * railway service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::railway.railway');
