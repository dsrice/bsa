FROM node:21-alpine

WORKDIR /code
# 先にpackage.jsonとpackage-lock.jsonをマウントさせる
COPY ./be/myapp/package*.json /code/myapp

WORKDIR /code/myapp

RUN npm install