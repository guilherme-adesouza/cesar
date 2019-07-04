#!/bin/bash

echo "Starting clear..."
SERVER_BUILD="caesar-server-build.tar.gz"
SERVER_FOLDER="server"
CLIENT_BUILD="caesar-client-build.tar.gz"
CLIENT_FOLDER="server"

rm $SERVER_BUILD
rm $CLIENT_BUILD
rm -rf $SERVER_FOLDER
rm -rf $CLIENT_FOLDER

echo "Clear successfully!"
