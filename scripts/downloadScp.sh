#!/bin/sh
echo "Starting download via scp..."
USER=estudante
PASSWD=estudante
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

sshpass -p $PASSWD scp -r $USER@177.44.248.15:~/caesar/server/$SERVER_BUILD .
sshpass -p $PASSWD scp -r $USER@177.44.248.15:~/caesar/client/$CLIENT_BUILD .
echo "Download via scp finished!"
