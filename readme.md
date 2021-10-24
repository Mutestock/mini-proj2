# Overview

Project by cph-hw98 & cph-sn311.

This assignment is a continuation of the previous Mini Project 1 (see [mini-project-loner-edition](https://github.com/Mutestock/mini-project-loner-edition)). 

The main objectives is as follows:
- Extend project 1 with exam and teacher data.
- Add new feature so it’s possible to query people based on passed or failed exams.
- Use an orchestration tool to manage deployment and communication between services.

In the previous project we used an Angular frontend to integrate with our services. This time we chose to remove the frontend in favor of a more general API gateway that exposes our system's functionality through REST endpoints.

We have chosen to continue developing our services with various languages and frameworks, since we strongly believe that all services should be universal and interoperable with each other, regardless of their programming language.

The assignment definition can be found at [mini-proj2/A4-MP-MS.pdf](https://github.com/Mutestock/mini-proj2/blob/master/A4-MP-MS.pdf)

# Services & Techstack

The systems consist of the following gateway, service bus, and three main data handling services.

| Name        | Protocol | Programming Language<br>& Framework  | Description
| -           | -        | -                      | -
| Gateway     | REST     | Python (Flask)         | Main gateway service used by consumers of the system. The gateway contains integrations to the other services.
| Service Bus | REST     | Rust (Wrap)            | Contains business logic for combining exam and person data together.
| Exam        | REST     | Deno/Typescript (Oak)  | Handles data related to exams and grades.
| Person      | gRPC     | Rust (Tonic)           | Handles data related to students and teachers.
| Class       | SOAP     | C# (SoapCore)          | Handles data related to classes in a school.

The Exam, Person, and Class services each have a separate __Sqlite__ database to store their data. Migration for each database is handled by a custom python migration service which is run before the service starts. 

## Deployment

All services can be built into docker images with their accompanying Dockerfile. This makes it possible to run each service without having the required SDKs installed for each service.

Orchestration of all services are handled by Kubernetes (k8s). We chose to use k8s because of two reasons 1. It lets us easily manage deployment of all our services and automatically handles recovery for the services should any of them fail. 2. K8s removes the need for hardcoded IP addressed with its Service Objects that can route traffic between our services based on the Service Objects name.

# Run

## Prerequisites:

This project requires Docker and Kubernetes to run locally. Kubernetes can either be installed with [Docker Desktop](https://www.docker.com/products/docker-desktop) for Mac and Windows or with [Minikube](https://minikube.sigs.k8s.io/docs/).

## Run: Minikube

On Linux, your user must be added to the docker group before you can run the shell script. If you haven't done this, type:

```bash
$ usermod -aG docker $USER
```

To run the project on a system with minikube installed just run the shell script in the root folder of the git repo [mini-proj2/startup.sh](https://github.com/Mutestock/mini-proj2/blob/master/startup.sh)

```bash
$ sudo chmod +x startup.sh
$ ./startup.sh
```

This will start minikube with the docker driver and then build all the images inside the minikube container. It will finish off by running all Kubernetes configuration files located in [mini-proj2/.kubernetes](https://github.com/Mutestock/mini-proj2/tree/master/.kubernetes) folder.

## Run: Docker Desktop

If Kubernetes is installed through Docker Desktop you can use docker compose to build all images and then manually apply the k8s configuration files

```bash
$ docker-compose build
$ kubectl apply -R -f .kubernetes 
```

## Access running services

Ingress is beyond the scope of this assignment.

All services are exposed by a kubernetes NodePort service on the following ports:

- Gateway: `30000`
- Person Service: `30010`
- Exam/Grade Service: `30020`
- Class Service: `30030`
- Service Bus: `30040`

When using Docker Desktop all NodePorts can be access on localhost (ex. `localhost:30000`). This is not possible with Minikube. Instead run the following command to get the Minikube node IP to access the services on:

```bash
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
     * ![Image not found =(](/resources/answers/role_teacher.png "role teacher")
   * Exams and exam dates
     * Answer: GET /exam
     * ![Image not found =(](/resources/answers/exam.png "exams")
2. Enable the clients of the application to see: 
   * List of students who have passed their exam on System Integration, together with their grades
     * Answer: GET /person/passed/System Integration: Final Exam
     * ![Image not found =(](/resources/answers/system_integration.png "System integration final exam")
   * Number of students who haven't completed the mini project 2
     * Answer: GET /person/failed/Mini Project 2
     * ![Image not found =(](/resources/answers/mini_project_failed.png "mini project failed")
1. Deploy and Orchestrate your microservice applications in an appropriate environment (e.g. the Netflix Deployment services)
   * Answer: Kubernetes. See .kubernetes


# Gateway Endpoints

| Endpoint      | HTTP Method   | Description |
| -             | :-:           | -
| /             | `GET`         |
| /health       | `GET`         |

## Exam

| Endpoint      | HTTP Method   | Description |
| -             | :---------:   | -
| /exam         | `GET`         | Get a list of all exams
| /exam/\<id>   | `GET`         | Get a specific exam by its id
| /exam/\<id>   | `DELETE`      | Remove an exam from the system

| Endpoint      | Http Method   | Request Body  | Description
| -             | :-:           | -             |   -
| /exam         | `POST`        | <pre>{<br>  "name": "string"<br>  "examination_date": "string"<br>}</pre> | Create a new exam
| /exam/\<id>   | `PUT`         | <pre>{<br>  "name": "string"<br>  "examination_date": "string"<br>}</pre> | Update an existing exam


## Grade

| Endpoint                      | HTTP Method   | Description |
| -                             | :-:           | -
| /grade                        | `GET`         | Get a list of all grades
| /grade/exam/\<exam-id>        | `GET`         | Get a list of all grades for a given exam
| /grade/person/\<person-id>    | `GET`         | Get a list of a persons grades

| Endpoint                      | Http Method   | Request Body  | Description
| -                             | :-:           | -             |   -
| /grade                        | `POST`        | <pre>{<br>  "person_id": 0<br>  "exam_id": 0<br>  "symbol": "string"<br>}</pre>   | Add a new grade


## Person

| Endpoint                      | HTTP Method   | Description |
| -                             | :-:           | -
| /person                       | `GET`         | Get a list of all people
| /person/\<id>                 | `GET`         | Get a specific person by their id
| /person/passed                | `GET`         | Get all people who have a passing grade
| /person/passed/\<exam-name>   | `GET`         | Get all people who have passed a specific exam
| /person/failed                | `GET`         | Get all people who have a failing grade
| /person/failed/\<exam-name>   | `GET`         | Get all people who have failed a specific exam
| /person/role/\<role-name>     | `GET`         | Get person by their role
| /person/\<id>                 | `DELETE`      | Remove a person

| Endpoint      | Http Method   | Request Body  | Description
| -             | :-:           | -             |   -
| /person       | `POST`        | <pre>{<br>  "first_name": "string"<br>  "last_name": "string"<br>  "phone_number": "string"<br>  "email": "string"<br>  "role": "string"<br>}</pre>   | Add a new person
| /person/\<id> | `PUT`         | <pre>{<br>  "first_name": "string"<br>  "last_name": "string"<br>  "phone_number": "string"<br>  "email": "string"<br>  "role": "string"<br>}</pre>   | Update data for an existing person

## Class

| Endpoint                          | HTTP Method   | Description |
| -                                 | :-:           | -
| /class                            | `GET`         | Get a list of all classes
| /class/\<id>                      | `GET`         | Get a spcific class with all people related to it
| /class/\<id>                      | `DELETE`      | Remove a class
| /class/\<id>/person/\<person-id>  | `DELETE`      | Remove a person from a class

| Endpoint              | Http Method   | Request Body  | Description
| -                     | :-:           | -             |   -
| /class/\<id>          | `POST`        | <pre>{ "subject": "string" }</pre>    | Add a new class
| /class/\<id>/person   | `POST`        | <pre>{ "person_id": 0 }</pre>         | Add a person to an existing class

# Architecture
![Image not found =(](/resources/mini_proj_architecture.png "Architecture")


# Reasoning

There are multiple reasons why we've decided to solve the assignment like this

1.  The education we're currently taking involves a lot of copying and pasting. We believe this is counterintuitive. We need to make our own solutions for the sake of learning.
2. Being able to use multiple tools and languages makes us more versatile as programmers.
3. Using multiple and completely different languages in the context of SOAP, REST and gRPC and being able to use them together cooperatively on the same platform, 
    showcases the interoperability and independance of the technologies.
4. Creating the services like this allows us to easily reuse and expand them for future projects.
