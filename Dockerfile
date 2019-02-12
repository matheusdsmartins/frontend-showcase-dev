FROM node:10 as builder

ARG NPM_TOKEN

WORKDIR /usr/src/app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

CMD [ "nginx", "-g", "daemon off;" ]
