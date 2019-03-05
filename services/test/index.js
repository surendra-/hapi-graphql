const controller = require('./handler');

exports.plugin = {
    name: 'test',
    version: '1.0.0',
    register: async function (server, options) {

        server.route([
            {
                method: 'GET',								
                path: '/api/v1/hello/{name}',
                options:{
                    tags: ['api'],
                },
                handler: controller.test
            },
        ]);

    }
};