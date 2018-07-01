# Build The Node Js Application
FROM node:latest as build
WORKDIR app

COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

# Hosting the dist folder as static side.
FROM kyma/docker-nginx as runtime
WORKDIR /var/www
#Copy the required files from Build.
COPY --from=0 /app/dist ./

#Expose the port.
EXPOSE 3000

#The endpoint of Image.
CMD "nginx"