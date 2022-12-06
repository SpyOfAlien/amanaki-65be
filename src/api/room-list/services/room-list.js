'use strict';

/**
 * room-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::room-list.room-list');
