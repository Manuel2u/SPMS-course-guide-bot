FROM node:18.12.1-alpine3.16

WORKDIR /app

COPY package.json /app/

COPY yarn.lock /app/

RUN yarn global add nodemon

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn" ,"run", "dev"]