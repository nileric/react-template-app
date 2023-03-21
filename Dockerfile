FROM node:18.15.0 AS build-step

WORKDIR /app
COPY . .
RUN npm install --silent && npm run build

FROM nginx:1.23.3-alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/www
#WORKDIR /usr/share/nginx/www
RUN rm -rf ./*
COPY --from=build-step /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]
