#!/bin/bash

cd /home/theiceji

sudo rm -f package.json
sudo mv package.bun.json package.json

~/.bun/bin/bun install
~/.bun/bin/bun pre:db
~/.bun/bin/bun pre:gql
~/.bun/bin/bun pre:build

~/.bun/bin/bun app:cosmos build