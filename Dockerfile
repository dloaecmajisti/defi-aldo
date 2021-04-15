# Production Dockerfile, do NOT use this for dev!
FROM node:15.9.0

WORKDIR /opt

COPY package*.json ./
COPY yarn.lock .

RUN yarn global add serve
RUN yarn install --production

COPY build/ html/
COPY server/server.js .

EXPOSE 5000

CMD ["bash", "-c", "serve -s html"]
