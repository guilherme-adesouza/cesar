#!/bin/bash

cd ../client/
npm i
npm start &
cd ../server/
npm i
npm run server
