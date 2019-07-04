#!/bin/sh
echo "Starting upload via scp..."
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

cd "../server"
scp -r $SERVER_BUILD caesar_homologation:~/caesar/

cd "../client"
scp -r $CLIENT_BUILD caesar_homologation:~/caesar/
echo "Upload via scp finished!"
