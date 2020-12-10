# stage 1
FROM node:10-alpine as builder
WORKDIR /react-ui
COPY . .
# install all dependencies
RUN yarn install 
# build the app
RUN yarn build


# stage 2
FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
# Copy from the stahg 1
COPY --from=builder /react-ui/build /usr/share/nginx/html

EXPOSE 3000:80
ENTRYPOINT ["nginx", "-g", "daemon off;"]