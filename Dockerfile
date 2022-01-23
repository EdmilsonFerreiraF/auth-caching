FROM node:14-alpine as base

WORKDIR /usr/src/app
COPY package*.json /usr/src/app
EXPOSE 4000

FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY . /usr/src/app
CMD ["node", "bin/www"]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g ts-node-dev && npm install && sysctl vm.overcommit_memory=1
COPY . /usr/src/app
CMD ["ts-node-dev", "bin/www"]
ENTRYPOINT ["ts-node-dev", "/usr/src/app/server.ts"]