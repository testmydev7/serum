'use strict';

/**
 * service-library service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-library.service-library');
