FROM node:22-alpine

RUN apk add --no-cache python3 make g++

COPY . /home/node/backend/


WORKDIR /home/node/backend/


RUN npm install

RUN npm install -g nodemon

CMD [ "nodemon", "server.js" ]    