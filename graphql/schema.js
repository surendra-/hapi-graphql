const graphql = require('graphql');
const TestType = require('./TestType').TestType;
const TaskType = require('./TestType').TaskType;
const TaskListType = require('./TestType').TaskListType;
const Test = require('../models/Test');
const Task = require('../models/Task');
const TaskList = require('../models/TaskList');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        test:{
            type: TestType,
            args: { id: { type: GraphQLString}},
            resolve(parent, args){
                //logic for serving data
                return Test.findById(args.id);
            }
        },
        task:{
            type: TaskType,
            args: { id: { type: GraphQLString}},
            resolve(parent, args){
                console.log('ARGS--->', args);
                const result = Task.findById(args.id).populate('taskList');
                result.exec((err, data)=>{
                    console.log('result-->', data);
                })
                return result;
            }
        },
        tasklist:{
            type: TaskListType,
            args: { id: { type: GraphQLString}},
            resolve(parent, args){
                console.log('ARGS--->', args);
                const result = TaskList.findById(args.id);
                result.exec((err, data)=>{
                    console.log('result-->', data);
                })
                return result;
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})