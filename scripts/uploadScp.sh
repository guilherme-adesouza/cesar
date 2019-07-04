#!/bin/sh
echo "Starting upload via scp..."
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

cd "../server"
ssh-keyscan 34.67.101.28: >> ~/.ssh/known_hosts
scp -r $SERVER_BUILD jenkins@34.67.101.28:~/caesar/

cd "../client"
scp -r $CLIENT_BUILD jenkins@34.67.101.28:~/caesar/
echo "Upload via scp finished!"
