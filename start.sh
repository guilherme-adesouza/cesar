#!/bin/bash

cd client/
npm start &
cd ../server/
npm run server
