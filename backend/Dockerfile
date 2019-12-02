FROM node:12

WORKDIR /usr/src/app

COPY ./package.json .

RUN yarn

COPY . .

ENV NODE_ENV=production
ENV APP_SECRET=squad1-kroton-react
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USER=krotonreact
ENV DB_PASS=krotonreact
ENV DB_NAME=krotonreact

RUN yarn build

COPY .env .

EXPOSE 3333

CMD ["yarn", "start"]