FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm

# Install Node.js and npm
RUN yum install -y npm

# Bundle app source
COPY . /home/express-api-boilerplate

# Install app dependencies
WORKDIR /home/express-api-boilerplate

RUN npm install

ENV NODE_ENV production

EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["server.js"]

RUN mongo --name mongo

RUN -d -p 3000:3000 --name express-api-boilerplate --link mongo:mongo newaeonweb/express-api-boilerplate
