FROM node:14-alpine

EXPOSE 3000

ADD node_modules.tar.gz .

WORKDIR /todo-app
COPY . . 

RUN npm install

ENTRYPOINT ["npm", "start"]