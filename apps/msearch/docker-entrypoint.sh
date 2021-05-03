#!/bin/sh

set -e

echo "Serializing environment:"
react-env --dest ./usr/share/nginx/html

exec "$@"
