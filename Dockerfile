# STAGE 1: Build
FROM node:latest AS build
WORKDIR /app
COPY package.json ./
RUN npm install --production --silent
COPY . .
# RUN npm run build

# # STAGE 2: Run
# FROM nginx:alpine
# EXPOSE 80
# # RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
# # COPY --from=build  /app/dist/falcon-designs/nginx.conf /etc/nginx/nginx.conf
# COPY --from=build /app/dist/falcon-designs /usr/share/nginx/html
# CMD [ "nginx", "-g", "daemon off;" ]
