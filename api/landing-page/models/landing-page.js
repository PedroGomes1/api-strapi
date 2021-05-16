'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

const netlifyWebhook = strapi.config.get("custom.netlifyWebhook")

module.exports = {
  lifecycles: {
    async afterCreate() {
      netlifyWebhook && axios.post(netlifyWebhook)
    },
    async afterUpdate() {
      netlifyWebhook && axios.post(netlifyWebhook)
    },
  },
};
