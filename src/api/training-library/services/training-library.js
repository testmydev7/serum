'use strict';

/**
 * training-library service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::training-library.training-library');
