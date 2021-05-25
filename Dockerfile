FROM node:12-alpine

WORKDIR /usr/src/app

COPY . .

RUN yarn install

CMD [ "node", "src/index.js" ]