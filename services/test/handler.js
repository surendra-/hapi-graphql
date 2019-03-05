let Test = require('../../models/Test');
let funcs = {};

funcs.test = (request, h) =>{
    const { name } = request.params;
    // let temp = new Test({
    //     name: name,
    // })
    return Test.find({name: name});
    //.then(()=>{
        //return h.response({ message: `Hello ${name}!`});
    //})
}

module.exports = funcs;