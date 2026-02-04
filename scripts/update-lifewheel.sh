#!/bin/bash

set -e

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
PROJECT_DIR=$( realpath "$SCRIPT_DIR/../" )

cd $( realpath "$PROJECT_DIR/../lifewheel" )

echoerr() { printf "\e[31;1m%s\e[0m\n" "$*" >&2; }

if [[ $(git rev-parse --abbrev-ref HEAD) != "main" ]] ; then
    echoerr 'Error: Make sure you build the Lifewheel app from the main branch!'
    printf "Current branch: $(git rev-parse --abbrev-ref HEAD)\n\n"
    exit 1
fi

pnpm build

TARGET_DIR=$( realpath "$PROJECT_DIR/static/lifewheel" )
rm -rf $TARGET_DIR
mkdir -p $TARGET_DIR
cp -R build/* $TARGET_DIR

echo ""
echo "Lifewheel updated. Remember to also create a new build for Reconnect.earth to publish the new version."
echo ""
echo "pnpm build"
echo ""
