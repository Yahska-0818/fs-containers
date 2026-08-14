FROM node:24

WORKDIR /usr/src/todo/todo-express-backend

COPY --chown=node:node . .

RUN npm ci

ENV DEBUG=todo-express-backend:*

USER node

CMD ["npm","start"]
