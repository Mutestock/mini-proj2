#!/bin/bash

# Cleanup
rm -rf ./src/logic/protogen

python -m grpc_tools.protoc -I./proto --python_out=./src/logic/protogen --grpc_python_out=./src/logic/protogen ./proto/person.proto


