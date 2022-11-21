FROM node

# Create app directory
WORKDIR /server
COPY package.json .
RUN npm install
EXPOSE 8000
COPY . .
CMD [ "npm", "run", "dev" ]