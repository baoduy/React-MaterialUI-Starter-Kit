FROM node:latest as build
WORKDIR app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:latest as runtime
WORKDIR app

COPY --from=0 /app/configs ./configs
COPY --from=0 /app/dist ./dist
COPY --from=0 /app/express.js ./express.js
COPY --from=0 /app/package.docker.json ./package.json
RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]