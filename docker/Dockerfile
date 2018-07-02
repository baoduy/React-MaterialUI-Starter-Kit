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

#Enable gzip. Comment below lines if you dont want Gzip.
RUN gzip on;
RUN gzip_vary on;
RUN gzip_min_length 10240;
RUN gzip_proxied expired no-cache no-store private auth;
RUN gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml;

#Expose the port.
EXPOSE 3000

#The endpoint of Image.
CMD "nginx"