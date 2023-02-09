var http = require('http');    //nodemon server.js : pour eviter l'activation du serveur a chaque modification
var url = require('url');               //npm init //npm install events     "dev": "node index.js"  //npm init -y
var querystring = require('querystring');  //npm i -g nodemon //npm i -g express-generator //express --version //express Name Folder

var server = http.createServer(function (req, res) {
   var params = querystring.parse(url.parse(req.url).query);
    var page = url.parse(req.url).pathname;  

    res.writeHead(200, { "Content-Type": "text/html" });
    if('id' in params && 'login' in params) {
        res.write('Votre id est ' + params['id'] +
            'et votre login' + params['login']);
    }
    else {
        res.write('veuille sisir votre id et login!l');
       /* res.write('<:DOCTYPE ntml>' +
        '<html>'+
        ' <head>'+
        ' <meta charset="utf-8" />'+
        ' <title>Ma page Node.js !</title>'+   //Definir le nom de la page 
        ' </head>'+
        ' <body>'+
        ' <p>Voici un paragraphe <strong>HTML</strong> !</p>'+
        ' </body>'+
        '</html>');*/
    }
    if(page == '/') {
        res.write('Vous êtes dans la page d\'accueil');
    }
    else if(page == '/Contact!') {
        res.write('Vous êtes dansa page Contact !');
    }
    else if(page = '/Affichage/l/user') {
        res.write('Affichez 1\'utilisateur qui a 1\'id 1 !');
    }
    res.end();
    //res.end('<p>Voici un paragraphe <strong>html</strong></p>');

});

server.listen(5000, () => {
    console.log("app is running on port 5000");
});