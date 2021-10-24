# Overview

Project by cph-hw98 & cph-sn311.

Since all of these technologies should be relatively universal and interoperable, we'll be making this assignment in various different languages and frameworks as an exercise 

- REST: Typescript (deno) 
- SOAP: C# (<span>ASP.NET</span> Core)
- gRPC: Rust
- Service bus: Rust  
- Migrations: Python
- Gateway: Python

The assignment definition can be found at [mini-proj2/A4-MP-MS.pdf](https://github.com/Mutestock/mini-proj2/blob/master/A4-MP-MS.pdf)

# Run

## Prerequisites:

This project requires Docker and Kubernetes to run locally. Kubernetes can either be installed with [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac and Windows or with [Minikube](https://minikube.sigs.k8s.io/docs/).

## Run: Minikube

To run the project on a system with minikube installed just run the shell script in the root folder of the git repo [mini-proj2/startup.sh](https://github.com/Mutestock/mini-proj2/blob/master/startup.sh)

```
$ sudo chmod +x startup.sh
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

When using Docker Desktop all NodePorts can be access on localhost (ex. `localhost:30000`). This is not possible with Minikube. Instead run the following command to get the Minikube node IP to access the services on:
```
$ minikube service list
```
Find the gateway URL. It'll look something like:


|  NAMESPACE  |      NAME       | TARGET PORT  |            URL            |
|-------------|-----------------|--------------|---------------------------|
| default     | bus-service     |           80 | http://{your ip}:30040 |
| default     | gateway-service |           80 | http://{your ip}:30000 |
| default     | grpc-service    |           80 | http://{your ip}:30010 |
| default     | kubernetes      | No node port |
| default     | rest-service    |           80 | http://{your ip}:30020 |
| default     | soap-service    |           80 | http://{your ip}:30030 |
| kube-system | kube-dns        | No node port |

You can use this URL with the routes in the gateway endpoints (see Gateway Endpoints in this readme)

# Objective Answers

1. Extend the students information system  by adding new services that process:
   * Teacher's data
     * Answer: GET /person/role/teacher
   * Exams and exam dates
     * Answer: GET /exam
2. Enable the clients of the application to see: 
   * List of students who have passed their exam on System Integration, together with their grades
     * Answer: GET /person/passed/System Integration 
   * Number of students who haven't completed the mini project 2
     * Answer: GET /person/failed/Mini Project 2
1. Deploy and Orchestrate your microservice applications in an appropriate environment (e.g. the Netflix Deployment services)
   * Answer: Kubernetes. See .kubernetes


# Gateway Endpoints

## Exam

| Endpoint      | HTTP Method   | Description |
| -             | :---------:   | -
| /exam         | `GET`         |
| /exam/\<id>   | `GET`         |
| /exam         | `POST`        |
| /exam/\<id>   | `PUT`         |
| /exam/\<id>   | `DELETE`      |

## Grade

| Endpoint                      | HTTP Method   | Description |
| -                             | :-:           | -
| /grade                        | `GET`         |
| /grade/exam/\<exam-id>        | `GET`         |
| /grade/person/\<person-id>    | `GET`         |
| /grade                        | `POST`        |
| /grade/exam/\<exam-id>        | `PUT`         |
| /grade/person/\<person-id>    | `PUT`         |
| /grade/exam/\<exam-id>        | `DELETE`      |
| /grade/person/\<person-id>    | `DELETE`      |

## Person

| Endpoint                      | HTTP Method   | Description |
| -                             | :-:           | -
| /person                       | `GET`         |
| /person/\<id>                 | `GET`         |
| /person/passed                | `GET`         |
| /person/passed/\<exam-name>   | `GET`         |
| /person/failed                | `GET`         |
| /person/failed/\<exam-name>   | `GET`         |
| /person/role/\<role-name>     | `GET`         |
| /person                       | `POST`        |
| /person/\<id>                 | `PUT`         |
| /person/\<id>                 | `DELETE`      |

## Class

| Endpoint                          | HTTP Method   | Description |
| -                                 | :-:           | -
| /class                            | `GET`         |
| /class/\<id>                      | `GET`         |
| /class/\<id>                      | `POST`        |
| /class/\<id>/person               | `POST`        |
| /class/\<id>                      | `DELETE`      |
| /class/\<id>/person/\<person-id>  | `DELETE`      |


# Techstack

### Backend:
- REST: Typescript (deno) 
- SOAP: C# (<span>ASP.NET</span> Core)
- gRPC: Rust
- Service bus: Rust  
- Migrations: Python
- Gateway: Python


### Databases:
- sqlite

### Utilities:
- Github

# Architecture
![Image not found =(](/resources/mini_proj_architecture.png "Architecture")


# Reasoning

There are multiple reasons why we've decided to solve the assignment like this

1.  The education we're currently taking involves a lot of copying and pasting. We believe this is counterintuitive. We need to make our own solutions for the sake of learning.
2. Being able to use multiple tools and languages makes us more versatile as programmers.
3. Using multiple and completely different languages in the context of SOAP, REST and gRPC and being able to use them together cooperatively on the same platform, 
    showcases the interoperability and independance of the technologies.
4. Creating the services like this allows us to easily reuse and expand them for future projects.
