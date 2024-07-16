'use strict';

/**
 * bin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bin.bin');
