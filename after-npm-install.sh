#!/bin/bash

mkdir -p tsDependencies
cp ./node_modules/typescript-collections/collections.js ./tsDependencies/typescript-collections.ts
echo -e "\nexport = collections" >> ./tsDependencies/typescript-collections.ts
