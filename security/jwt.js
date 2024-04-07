const jwt = require('jsonwebtoken');

const payload = {
  user_id: 123,
  username: 'Bastiannebra'
};


const accessToken = jwt.sign(payload,process.env.ACCESS_TOKEN_SECRET);

module.exports =accessToken;
console.log(accessToken);