FROM mjgargani/puppeteer:trybe1.0

ADD node_modules.tar.gz .

WORKDIR /todo-app
COPY . . 

RUN npm install

ENTRYPOINT ["npm", "test"]