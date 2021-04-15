# Production Dockerfile, do NOT use this for dev!
FROM node:15.9.0

WORKDIR /opt

COPY package*.json ./
COPY yarn.lock .

RUN yarn install --production

COPY build/ build/
COPY server/ server/

EXPOSE 3000
ENV NODE_ENV production

CMD ["yarn", "server"]
