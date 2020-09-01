FROM node:14 AS build-env
WORKDIR /app
COPY ./front .
RUN npm i && npm run build

FROM nginx
COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-env /app/dist /usr/share/nginx/front