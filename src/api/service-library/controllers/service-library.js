'use strict';

/**
 * service-library controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::service-library.service-library');
