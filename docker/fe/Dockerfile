FROM node:21-alpine

WORKDIR /code
RUN mkdir /code/myapp
# 先にpackage.jsonとpackage-lock.jsonをマウントさせる
COPY myapp/package*.json /code/myapp

WORKDIR /code/myapp

RUN npm install