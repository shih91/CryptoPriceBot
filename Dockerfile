FROM node:current-alpine3.17

WORKDIR /app

COPY ./node_modules .

COPY package*.json ./

RUN npm ci

RUN npm install nodemon --save-dev

COPY ./.env .

COPY ./src .

CMD ["npx", "nodemon", "src/app.js"]