var mongoose = require('mongoose'),
ite003 = mongoose.model('ite003');


exports.validaCPF = function(req, res){
  var isFound = false ;
  var nomeCorretor ;

  //Ajusta resposta default
  var response = {
      ite003Response:{
          codResponse: "ITE003-0000"
      }
  };

  // Loga body
  console.log('************************************************************');
  console.log('Request ITE - 003 : ' + JSON.stringify(req.body));

  // Valido as entradas
  if(req.body.ite003Request.cep == undefined){
      response.ite003Response.codResponse = "ITE003-0002";
      response.ite003Response.descCodResponse = "CEP nao informado";
      console.log('Request ITE - 003 : CEP nao informado!' );
      res.send(response);
  } else if (req.body.ite003Request.cpf == undefined) {
      response.ite003Response.codResponse = "ITE003-0003";
      response.ite003Response.descCodResponse = "CPF nao informado";
      console.log('Request ITE - 003 : CPF nao informado!' );
      res.send(response);
  } else {
    // Inicio a busca
    var cpf = req.body.ite003Request.cpf;
    var cep = req.body.ite003Request.cep;
    var isFound = false ;
    console.log(cpf) ;
    //ite003.findOne({'cpf':cpf}, function(err, result) {
    ite003.find().where('cpf').eq(cpf).exec(function(err, users){
        console.log(users);

        users.forEach(function(record){
          if (isFound === false){
          console.log(record.cpf + ' - ' + record.cep);
            if ( record.cep == cep ){
              response.ite003Response.nomeCorretor = "Eduardo FODAO!!!" ;
              response.ite003Response.codResponse = "ITE003-0000";
              response.ite003Response.descCodResponse = "CPF pode comercializar neste CEP";
              console.log('OK');
              isFound = true ;
            }
          }
        })
        if ( isFound === false ){
          response.ite003Response.codResponse = "ITE003-0001";
          response.ite003Response.descCodResponse = "CEP nao encontrado ou CEP para o CPF nao permitodo!";
          console.log('Request ITE - 003 : CEP nao encontrado ou CEP para o CPF nao permitodo!' );
        }
        res.send(response);
    })
  }
  console.log('######################################################################');
};

exports.import = function(req, res){
  ite003.create(
    { "cpf": "111", "cep": "222" },
    { "cpf": "111", "cep": "333" },
    { "cpf": "555", "cep": "333" }
    , function (err) {
      if (err) return console.log(err);
      return res.sendStatus(202);
  });
}

exports.debug = function(req, res){

    console.log('Request ITE - 003 : ' + JSON.stringify(req.body));

/*
    console.log(req.params[0]);
  	console.log(req.params[1]);
  	console.log(req.params[2]);
  	console.log(req.params.nome);
  	return res.send(req.params.nome);
*/
    return res.sendStatus(202);

};
