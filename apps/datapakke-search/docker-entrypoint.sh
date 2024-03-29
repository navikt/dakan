#!/bin/sh

set -e

if test -d /var/run/secrets/nais.io/common;
then
    for FILE in /var/run/secrets/nais.io/common/*.env
    do
        _oldIFS=$IFS
        IFS='
'
        for line in $(cat "$FILE"); do
            _key=${line%%=*}
            _val=${line#*=}
            if test "$_key" != "$line"
            then
                echo "- exporting $_key"
            else
                echo "- (warn) exporting contents of $FILE which is not formatted as KEY=VALUE"
            fi
            export "$_key"="$(echo "$_val"|sed -e "s/^['\"]//" -e "s/['\"]$//")"
        done
        IFS=$_oldIFS
    done
else
    echo "FOUND NO SECRETS"
fi

if test -d /var/run/secrets/nais.io/vault;
then
    for FILE in /var/run/secrets/nais.io/vault/*.env
    do
        _oldIFS=$IFS
        IFS='
'
        for line in $(cat "$FILE"); do
            _key=${line%%=*}
            _val=${line#*=}
            if test "$_key" != "$line"
            then
                echo "- exporting $_key"
            else
                echo "- (warn) exporting contents of $FILE which is not formatted as KEY=VALUE"
            fi
            export "$_key"="$(echo "$_val"|sed -e "s/^['\"]//" -e "s/['\"]$//")"
        done
        IFS=$_oldIFS
    done
else
    echo "FOUND NO SECRETS"
fi

echo "Serializing environment:"

react-env --dest /tmp

exec "$@"