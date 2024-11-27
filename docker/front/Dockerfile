FROM node:20-alpine3.19

RUN apk add --no-cache bash

RUN mkdir -p /opt/app
WORKDIR /opt/app

ARG NODE_ENV
RUN echo "NODE_ENV=$NODE_ENV"
ENV NODE_ENV=${NODE_ENV:-development}

RUN mkdir -p /opt/app
WORKDIR /opt/app

EXPOSE 4200

CMD ["npm", "start"]
