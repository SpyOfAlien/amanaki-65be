'use strict';

/**
 * page-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-service.page-service');
