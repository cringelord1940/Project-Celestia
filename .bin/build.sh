#!/bin/bash

projectName="cosmos"

while getopts p: flag
do
    case "${flag}" in
        p) projectName=${OPTARG};;
    esac
done

cd /mnt/c/iDev/TheIceJI/Celestia-Main

echo "### Pre build app: ${outputName}"
rm "app-${projectName}.7z"
rm -rRf "apps/${projectName}/.next"
pnpm install
pnpm pre:db
pnpm pre:gql
pnpm pre:build

echo "### Install completed, building app . . ."
pnpm "app:${projectName}" build

echo "Copying build files"
mv "apps/${projectName}/.next/static" "apps/${projectName}/.next/standalone/apps/${projectName}/.next"
cp -r "apps/${projectName}/public" "apps/${projectName}/.next/standalone/apps/${projectName}/public"
cd "/mnt/c/iDev/TheIceJI/Celestia-Main/apps/${projectName}/.next/standalone" || exit

echo "### Compressing . . ."
7z a -t7z "app-${outputName}.7z" *

echo "### Compression complete: app-${outputName}.7z"
mv "app-${outputName}.7z" "../../../../app-${outputName}.7z"

echo "### DONE ###"
read -n 1 -s -r -p "Press any key to exit ..."
exit