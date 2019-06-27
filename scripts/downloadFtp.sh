#!/bin/sh

read -p "User: " USER
#read -sp "Password: " PASSWD
read -p "Password: " PASSWD
SERVER_BUILD="caesar-server-build.tar.gz"
CLIENT_BUILD="caesar-client-build.tar.gz"

wget --user $USER --password $PASSWD ftp://ensino.univates.br/$SERVER_BUILD
wget --user $USER --password $PASSWD ftp://ensino.univates.br/$CLIENT_BUILD
