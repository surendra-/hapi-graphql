const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

const TestType = new GraphQLObjectType({
    name:'Test',
    fields: ()=>({
        id: { type: GraphQLString},
        name: { type: GraphQLString }
    }),
})

const TaskListType = new GraphQLObjectType({
    name:'TaskList',
    fields: ()=>({
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        description: { type: GraphQLString },
    }),
})


const TaskType = new GraphQLObjectType({
    name:'Task',
    fields: ()=>({
        id: { type: GraphQLString},
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        taskList: { type: TaskListType}
    }),
})

module.exports = {TestType, TaskType, TaskListType};