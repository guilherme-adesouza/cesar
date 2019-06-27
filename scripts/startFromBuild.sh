#!/bin/bash
SERVER_BUILD="caesar-server-build.tar.gz"
SERVER_FOLDER="server-build"
CLIENT_BUILD="caesar-client-build.tar.gz"
CLIENT_FOLDER="server-build"

if [ -e $SERVER_BUILD ]
then
    mkdir $SERVER_FOLDER
    tar -zxvf $SERVER_BUILD
    cp -r migrations $SERVER_FOLDER/
    rm -rf migrations
    cp -r src $SERVER_FOLDER/
    rm -rf src
    rm $SERVER_BUILD
    echo "Starting server..."
    cd $SERVER_FOLDER/src
    npm i
    npm run server &
    cd ../../
else
    echo "File not found! Execute downloadFtp.sh"
fi

if [ -e $CLIENT_BUILD ]
then
    tar -zxvf $CLIENT_BUILD
    cp build $CLIENT_FOLDER/
    rm -rf build
    rm $CLIENT_BUILD
    echo "Starting client..."
    npm install -g serve
    serve -s $CLIENT_FOLDER &
else
    echo "File not found! Execute downloadFtp.sh"
fi
echo "Script finished!"
