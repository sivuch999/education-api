FROM node:12.18.0-alpine
WORKDIR /usr/src/app

COPY . .
RUN npm install

EXPOSE 8083
CMD ["npm","run","dev"]