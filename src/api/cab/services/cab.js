'use strict';

/**
 * cab service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cab.cab');
