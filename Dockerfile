FROM node:14.21.3

WORKDIR /code

COPY . .

RUN make build

ENV NODE_ENV production

ENTRYPOINT ["node", "src/index.js"]
