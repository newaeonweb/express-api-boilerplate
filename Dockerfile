# Dockerizing MongoDB: Dockerfile for building MongoDB images
# Based on ubuntu:latest, installs MongoDB following the instructions from:
# http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

FROM       ubuntu:latest
MAINTAINER Fernando Monteiro, fernando@newaeonweb.com.br

# Installation:

# Import MongoDB public GPG key AND create a MongoDB list file
RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv 7F0CEB10
RUN echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | tee /etc/apt/sources.list.d/10gen.list

# Update apt-get sources AND install MongoDB
RUN apt-get update && apt-get install -y mongodb-org

# Create the MongoDB data directory
RUN mkdir -p /data/db

# Expose port #27017 from the container to the host
EXPOSE 27017

# Set /usr/bin/mongod as the dockerized entry-point application
ENTRYPOINT ["/usr/bin/mongod"]

RUN apt-get install -y nodejs
RUN apt-get install nodejs-legacy
RUN apt-get install npm
RUN apt-get git

WORKDIR /home/express-api-boilerplate

# Make everything available for start
ADD . /home/frontendboilerplate

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
