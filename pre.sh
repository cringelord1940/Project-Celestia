#!/bin/bash

cd /home/theiceji

~/.bun/bin/bun install
~/.bun/bin/bun pre:db
~/.bun/bin/bun pre:gql
~/.bun/bin/bun pre:build

~/.bun/bin/bun app:cosmos build