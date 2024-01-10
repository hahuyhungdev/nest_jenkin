# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.12.0
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/app

COPY ./package*.json .
RUN yarn
COPY . .
RUN yarn build

CMD node ./dist/main.js

# docker build -t nest_jenkin:1.0 .
# docker run --name nest_jenkin_app -p 3001:3001 --env-file .env-dev nest_jenkin:1.0
