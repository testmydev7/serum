'use strict';

/**
 * service-library router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-library.service-library');
