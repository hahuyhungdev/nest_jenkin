# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.12.0
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /usr/app

COPY ./package.json .
COPY ./package-lock.json .
RUN yarn
COPY . .
RUN yarn build

CMD node ./dist/main.js

# docker 
