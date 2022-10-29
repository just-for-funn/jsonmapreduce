#!/bin/bash

version=2

docker tag jsonmapreduce davutozcan/jsonmapreduce:"$version"
docker push davutozcan/jsonmapreduce:"$version"

echo "DONE"