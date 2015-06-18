FROM node:0.10-onbuild

MAINTAINER Fernando Monteiro, fernando@newaeonweb.com.br

WORKDIR /home/express-api-boilerplate

# Install packages
ADD package.json /home/express-api-boilerplate/package.json
docker run npm install

# Make everything available for start
ADD . /home/express-api-boilerplate

# Port 3000 for server
EXPOSE 3000
CMD ["npm", "start"]
