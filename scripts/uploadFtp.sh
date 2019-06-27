#!/bin/sh

read -p "User: " USER
#read -sp "Password: " PASSWD
read -p "Password: " PASSWD
HOST="ensino.univates.br"
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

cd "../server"
ftp -n $HOST <<EOF
user $USER $PASSWD
verbose
put $SERVER_BUILD
bye
EOF

cd "../client"
ftp -n $HOST <<EOF
user $USER $PASSWD
verbose
put $CLIENT_BUILD
bye
EOF
