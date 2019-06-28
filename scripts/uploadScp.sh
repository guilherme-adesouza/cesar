#!/bin/sh
echo "Starting upload via scp..."
USER=estudante
PASSWD=estudante
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

cd "../server"
sshpass -p $PASSWD scp -r $SERVER_BUILD $USER@177.44.248.15:~/caesar/

cd "../client"
sshpass -p $PASSWD scp -r $CLIENT_BUILD $USER@177.44.248.15:~/caesar/
echo "Upload via scp finished!"
