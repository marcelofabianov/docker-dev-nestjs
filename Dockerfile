FROM node:21.1.0

WORKDIR /app

RUN npm install -g @nestjs/cli

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
