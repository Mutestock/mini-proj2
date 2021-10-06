![Deploy](https://github.com/Mutestock/mini-project-loner-edition/actions/workflows/deploy.yml/badge.svg)

 This project requires REST, SOAP and gRPC. 

 Since all of these technologies should be relatively universal and interoperable, we'll be making this assignment in various different languages and frameworks as an exercise 


- REST: Typescript (deno) 
- SOAP: C# (ASP.NET Core)
- gRPC: Rust (tonic) 
- Migration: Python
- Frontend: Typescript (Angular)

Additionally a separate Python container will be doing the migration
Docker-compose up --build

This project is made by cph-hw98 & cph-sn311
The assignment definition can be seen in A3-MP-API.pdf

# Installation

To run locally(requires docker & docker-compose):
> docker-compose up

Be advised that pulling the containers and compiling their contents will take some time.

# Deployment 

The solution is at the time of writing this file deployed at:

## front:
  http://159.65.54.148/


## backend:
- REST - http://159.65.54.148:10020
- gRPC - http://159.65.54.148:10030
- SOAP - http://159.65.54.148:10040
- Envoy Proxy - http://159.65.54.148:10050


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

## Envoy proxy
Envoy is required because our frontend is communicating directly with a gRPC server over gRPC-web. There are some message transportation errors since gRPC-web [uses http/2](https://grpc.io/blog/state-of-grpc-web/)


# Ports
- Postgres DB: 10010
- REST service: 10020
- gRPC service: 10030
- SOAP service: 10040
- Web Application: 80
- Envoy Proxy: 10050
- Soap to rest translater service: 10060

# Diagrams
Note that:
- Rest is responsibile for Grades and relations
- gRPC is responsible for Student
- SOAP is responsible for Teachers

![alt text](/resources/er_diagram.png "er_diagram")