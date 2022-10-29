FROM node:14.18 as build-stage
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginx:1.20.2-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /build /app
COPY nginx.conf /etc/nginx/nginx.conf