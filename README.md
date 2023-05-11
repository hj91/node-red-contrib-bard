
# node-red-contrib-bard

A Node-RED module for interacting with Bard.

## Installation

Run the following command in the root directory of your Node-RED install:

```bash
npm install node-red-contrib-bard
```

Alternatively, you can install this package from the palette manager in the Node-RED editor.

## Usage

This module provides a single node, 'bard', that you can use in your flows.

You can configure the Bard node with the following properties:

- **Host**: The host of the Bard API (default: 'bard.ai')
- **Port**: The port of the Bard API (default: 443)
- **Path**: The path of the Bard API (default: '/api/v1/')
- **API Key**: Your Bard API key

The Bard node accepts a `msg.payload` containing a question for the Bard API. It outputs a `msg.payload` with the response from the Bard API.

## Contributing

Contributions are welcome! Please see our [GitHub repository](https://github.com/hj91/node-red-contrib-bard) for more details.

## License

MIT


## Important Note

As of releasing date node-red-contrib-bard, ie 12/04/2023, the BARD api is not yet available for public use but based on bard bots interaction, here is 
the nodejs code snippet provided for interacting with BARD api

'''
The Bard endpoint is the URL that you use to access the Bard API. You can find the Bard endpoint on the Bard website.

The current Bard endpoint is:

https://bard.ai/api/v1/
 
You need to add this endpoint to your applications in order to use Bard.

For example, if you are using Node.js, you can add the endpoint to your code like this:

const http = require('http');

const options = {
  host: 'bard.ai',
  port: 443,
  path: '/api/v1/',
};

const req = http.request(options, (res) => {
  console.log(res);
});

req.end();
'''

Refer https://makersuite.google.com/waitlist for the api waitlist - once it gets released for public outside USA, this node-red-contrib-bard will be updated
