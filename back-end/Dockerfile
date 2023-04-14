FROM node:14-alpine

WORKDIR /todo-app

ADD node_modules.tar.gz .

COPY . . 

EXPOSE 3001

RUN npm install
 
ENTRYPOINT ["npm", "start"] 