#!/bin/bash

set -e 

su node

echo "installing modules"
npm i

echo "building modules"
npm run build

echo "serving app"
npm run dev -- --host
