FROM node:18-alpine

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait

RUN chmod +x /wait

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .