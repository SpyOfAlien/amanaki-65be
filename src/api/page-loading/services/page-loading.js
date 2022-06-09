'use strict';

/**
 * page-loading service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::page-loading.page-loading');
