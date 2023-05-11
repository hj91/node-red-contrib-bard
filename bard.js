const axios = require('axios');

module.exports = function(RED) {
  function BardNode(config) {
    RED.nodes.createNode(this, config);
    const node = this;
    node.on('input', async function(msg) {
      try {
        const response = await makeRequest('POST', {
          question: msg.payload,
        }, config);

        // Set the output message.
        msg.payload = response.data;
        node.send(msg);
      } catch (error) {
        node.error(error.message);
      }
    });

    async function makeRequest(method, body, config) {
      const options = {
        method,
        url: `https://${config.host || 'bard.ai'}:${config.port || 443}${config.path || '/api/v1/'}`,
        headers: {
          'Content-Type': 'application/json',
        },
        data: body,
      };

      if (config.apiKey) {
        options.headers['Authorization'] = 'Bearer ' + config.apiKey;
      }

      const response = await axios(options);
      return response;
    }
  }

  RED.nodes.registerType('bard', BardNode);
};

