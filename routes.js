module.exports = function(app){
    var ite003 = require('./controllers/ite003');

    app.post('/ite003/validaCPF',   ite003.validaCPF);
    app.post('/AmilSBITEs/ite003/debug',       ite003.debug);
    app.post('/ite003/import',      ite003.import);
    app.post('/auth/oauth/v2/token',       ite003.token);


}
