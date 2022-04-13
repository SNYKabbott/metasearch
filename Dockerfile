FROM node:14.18.2

WORKDIR /code

COPY . .

RUN make build

ENV NODE_ENV production

ENTRYPOINT ["node", "src/index.js"]
