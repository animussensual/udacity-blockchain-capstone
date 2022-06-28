#!/bin/bash

display_usage() {
  echo -e "\nUsage: $0 number^2 number \n"
}

if [ $# -lt 2 ]; then
  display_usage
  exit 1
fi

echo -e "\nGenerating proof for $1^2 = $2 \n"

cd ../zokrates/code/square

zokrates compute-witness -a "$1" "$2"
zokrates generate-proof
