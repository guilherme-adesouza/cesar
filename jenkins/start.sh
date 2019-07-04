#!/bin/bash

CONTAINER_NAME="caesar_jenkins"
CONTAINER_BUILD_NAME="caesar_build_jenkins"
docker build . -t $CONTAINER_NAME
docker run --name=$CONTAINER_BUILD_NAME -d -v jenkins_home:/home/jenkins -p 8080:8080 -p 50000:50000 $CONTAINER_NAME
