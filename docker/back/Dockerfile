FROM node:20-alpine3.19

ENV NODE_ENV=${NODE_ENV:-development}

RUN mkdir -p /opt/app
WORKDIR /opt/app

EXPOSE 3000

CMD ["npm", "run", "dev"]
