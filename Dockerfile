FROM node:10-alpine

WORKDIR /usr/src/app

RUN npm i npm@latest -g
RUN npm install -g serve

COPY package.json package-lock.json ./
RUN npm install
COPY . .

RUN npm run build

EXPOSE 5000

CMD ["serve", "-s", "build"]
