#!/bin/bash

# Cleanup
rm -rf ./src/logic/protogen/in
rm -rf ./src/logic/protogen/out

python -m grpc_tools.protoc -I./proto --python_out=./src/logic/protogen --grpc_python_out=./src/logic/protogen ./proto/incoming/student.proto
python -m grpc_tools.protoc -I./proto --python_out=./src/logic/protogen --grpc_python_out=./src/logic/protogen ./proto/outgoing/teacher_out.proto
python -m grpc_tools.protoc -I./proto --python_out=./src/logic/protogen --grpc_python_out=./src/logic/protogen ./proto/outgoing/grade_out.proto
python -m grpc_tools.protoc -I./proto --python_out=./src/logic/protogen --grpc_python_out=./src/logic/protogen ./proto/outgoing/student_out.proto


