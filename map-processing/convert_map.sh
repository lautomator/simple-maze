#!/bin/bash

# takes in the target file only
# usage: sh convert_db_urls [file_in]
ok=1

if [[ $# -eq 1 ]]
    then
        fin="$1"
        ok=0
else
    echo "usage: sh convert_db_urls [file_in]"
fi

if [[ $ok -eq 0 ]]
    then
        echo "processing: $fin"
        LANG=C

        sed -i.bak 's/#.*$//g' $fin
        sed -i.bak 's/:.*//g' $fin
        sed -i.bak $'/[^ \t]/,$p' $fin

        # cleanup
        rm -fr ./*.bak
        echo "done."
fi
