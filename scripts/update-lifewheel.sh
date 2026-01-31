#!/bin/bash

set -e

cd ../lifewheel

echoerr() { printf "\e[31;1m%s\e[0m\n" "$*" >&2; }

if [[ $(git rev-parse --abbrev-ref HEAD) != "main" ]] ; then
    echoerr 'Error: Make sure you build the Lifewheel app from the main branch!'
    printf "Current branch: $(git rev-parse --abbrev-ref HEAD)\n\n"
    exit 1
fi

pnpm build

rm -rf ../lifewheel/static/lifewheel
cp -R build ../reconnect.earth/static/lifewheel
