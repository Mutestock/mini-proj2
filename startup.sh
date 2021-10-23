#!/bin/bash
 
minikube start --cpus 4 --driver=docker
eval $(minikube -p minikube docker-env)
docker build -t cph-si/rest:v1.0 ./rest
docker build -t cph-si/grpc:v1.0 ./grpc
docker build -t cph-si/soap:v1.0 ./soap
docker build -t cph-si/rest-migration:v1.0 ./rest/migration
docker build -t cph-si/grpc-migration:v1.0 ./grpc/migration
docker build -t cph-si/bus:v1.0 ./bus
docker build -t cph-si/gateway:v1.0 ./gateway

kubectl apply -f .kubernetes --recursive