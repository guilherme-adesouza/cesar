#!/bin/bash

CONTAINER_BUILD_NAME="caesar_build_jenkins"
docker stop $CONTAINER_BUILD_NAME
docker rm $CONTAINER_BUILD_NAME
