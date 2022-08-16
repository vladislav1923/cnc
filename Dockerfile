FROM node:14.18.1

WORKDIR /app

COPY . .

RUN npm ci

EXPOSE 3000

CMD npm run start
