FROM node:alpine
WORKDIR /client
COPY package.json .
RUN npm install
EXPOSE 3000
COPY . .
CMD [ "npm", "start" ]
