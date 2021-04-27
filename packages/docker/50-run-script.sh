#!/bin/sh

set -e

echo "Serializing environment:"
echo ${PUBLIC_URL}

react-env --dest ./usr/share/nginx/html${PUBLIC_URL}
