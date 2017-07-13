var mongoose    =   require("mongoose");
mongoose.connect('mongodb://sys:sys@ds157342.mlab.com:57342/erl');
//mongoose.connect('mongodb://localhost:27017/demoDb');
mongoose.set('debug', true);

// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "cep" :     { type: String, required: false },
    "cpf" :     { type: String, required: false },
};
// create model if not exists.
module.exports = mongoose.model('ite003',userSchema);
