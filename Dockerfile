FROM node:16.8.0
MAINTAINER SIGUI Kessé Emmanuel (https://sikessem.com/) <contact@sikessem.com>
WORKDIR /app
EXPOSE 8080
EXPOSE 8443
ADD . .
RUN npm i -g yarn --force && yarn install
CMD ["yarn", "start"]
