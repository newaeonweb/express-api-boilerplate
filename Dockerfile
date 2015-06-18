FROM node:0.10

MAINTAINER Fernando Monteiro, fernando@newaeonweb.com.br

WORKDIR /home/express-api-boilerplate

# Install packages
ADD package.json /home/express-api-boilerplate/package.json
RUN npm install

ENV PORT 3000
ENV DB_PORT_27017_TCP_ADDR db
CMD [ "npm", "start" ]
EXPOSE 3000

#How to run:
RUN pull mongo
RUN -d --name db mongo
RUN -p 3000:3000 --link db:db speakerdb
