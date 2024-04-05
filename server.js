const http = require('http');

const server = http.createServer((req,res) =>{
    res.end('Voila la reponse du premier serveur !');
});

//server.listen(3000);
server.listen(process.env.PORT || 3000);

