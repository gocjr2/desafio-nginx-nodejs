FROM node:18-alpine3.15
RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

RUN mkdir /home/node/app/node_modules -p && chown node:node /home/node/app -R
WORKDIR /home/node/app

COPY --chown=node:node ./app .
RUN npm install

EXPOSE 3000
CMD ["node","index.js"]
