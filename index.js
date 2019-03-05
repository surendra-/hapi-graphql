const Hapi = require('hapi');
const initDB = require('./configs/db');
const { graphqlHapi, graphiqlHapi } = require('graphql-server-hapi');
const schema = require('./graphql/schema');
const server = new Hapi.Server({
    port: 3000,
    host: 'localhost',
    routes: {cors: true}
});

const init = async () => {
    await server.register({
        plugin: graphiqlHapi,
        options:{
            path:'/graphiql',
            graphiqlOptions:{
                endpointURL : '/graphql'
            },
            route:{
                cors: true
            }
        }
    })
    await server.register(
        {
            plugin: graphqlHapi,
            options:{
                path: '/graphql',
                graphqlOptions:{
                    schema
                },
                route:{
                    cors: true
                }
            }
        },
    )
    await server.register([
        require('./services/test')
    ])
    initDB();
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();