FROM node:14.20.0

WORKDIR /code

COPY . .

RUN make build

ENV NODE_ENV production

ENTRYPOINT ["node", "src/index.js"]
