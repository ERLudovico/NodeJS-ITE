module.exports = function(app){
    var ite003 = require('./controllers/ite003');

    app.post('/ite003/validaCPF',   ite003.validaCPF);
    app.post('/ite003/debug',       ite003.debug);
    app.post('/ite003/import',      ite003.import);


}
