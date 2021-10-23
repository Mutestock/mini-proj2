# Overview

Project by cph-hw98 & cph-sn311.

Since all of these technologies should be relatively universal and interoperable, we'll be making this assignment in various different languages and frameworks as an exercise 

- REST: Typescript (deno) 
- SOAP: C# (<span>ASP.NET</span> Core)
- gRPC: Rust (tonic)
- Service bus (REST):  
- Migration: Python

The assignment definition can be found at [mini-proj2/A4-MP-MS.pdf](https://github.com/Mutestock/mini-proj2/blob/master/A4-MP-MS.pdf)

# Run

## Prerequisites:

This project requires Docker and Kubernetes to run locally. Kubernetes can either be installed with [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac and Windows or with [Minikube](https://minikube.sigs.k8s.io/docs/).

## Run: Minikube

To run the project on a system with minikube installed just run the shell script in the root folder of the git repo [mini-proj2/startup.sh](https://github.com/Mutestock/mini-proj2/blob/master/startup.sh)

```
$ sudo chmod x+ startup.sh
$ ./startup.sh
```

This will start minikube with the docker driver and then build all the images inside the minikube container. It will finish off by running all Kubernetes configuration files located in [mini-proj2/.kubernetes](https://github.com/Mutestock/mini-proj2/tree/master/.kubernetes) folder.

## Run: Docker Desktop

If Kubernetes is installed through Docker Desktop you can use docker compose to build all images and then manually apply the k8s configuration files

```
$ docker-compose build
$ kubectl apply -R -f .kubernetes 
```

## Access running services

All services are exposed by a kubernetes NodePort service on the following ports:

- Gateway: `30000`
- Person Service: `30010`
- Exam/Grade Service: `30020`
- Class Service: `30030`
- Service Bus: `30040`

When using Docker Desktop all NodePorts can be access on localhost (ex. `localhost:30000`). This is not possible with Minikube instead run the following command to get the Minikube node IP to access the services on:
```
$ minikube services
```

# Gateway Endpoints



# Techstack

### Backend:
- C# - SOAP
- Rust - gRPC
- Python - migration(Database population and initialization)
- Typescript(Deno) - REST


### Databases:
- postgreSQL


### Frontend:
- Angular


### DevOps:
- Github Actions, DigitalOcean


### Utilities:
- Github


# Reasoning

There are multiple reasons why we've decided to solve the assignment like this

1.  The education we're currently taking involves a lot of copying and pasting. We believe this is counterintuitive. We need to make our own solutions for the sake of learning.
2. Being able to use multiple tools and languages makes us more versatile as programmers.
3. Using multiple and completely different languages in the context of SOAP, REST and gRPC and being able to use them together cooperatively on the same platform (frontend Angular), 
    showcases the interoperability and independance of the technologies.
4. Creating the services like this allows us to easily reuse and expand them for future projects.
