- [Nest](#nest)
  - [Nest Objectives](#nest-objectives)
  - [Nest Objectives: back-end \& Architecture](#nest-objectives-back-end--architecture)
  - [Nest Objectives: Data Persistence](#nest-objectives-data-persistence)
  - [Nest Objectives: Autorization/Authentication](#nest-objectives-autorizationauthentication)
  - [Nest Objectives: Deployment](#nest-objectives-deployment)
  - [API _(Application Programming Interface)_ Endpoints - Tasks](#api-application-programming-interface-endpoints---tasks)
  - [API _(Application Programming Interface)_ Endpoints - Auth](#api-application-programming-interface-endpoints---auth)
  - [Nest CLI](#nest-cli)
    - [Install](#install)
    - [Verify version](#verify-version)
    - [Creating a project via the nest CLI](#creating-a-project-via-the-nest-cli)
    - [module](#module)
      - [providers](#providers)
      - [controllers:](#controllers)
      - [exports](#exports)
      - [imports](#imports)
    - [Create Module](#create-module)
    - [Controllers](#controllers-1)
    - [Providers](#providers-1)
    - [Service](#service)

# Nest

## Nest Objectives

- NestJS Modules
- nestJS Controllers
- nestjs services and providers
- controllers-to-services communication
- validation using nestjs pipes

## Nest Objectives: back-end & Architecture

- Develop production-ready REST APIs
- CRUD operations (Create, Read, Update, Delete)
- Error handling
- Data Transfer Objects (DTO)
- System modularity
- Back-end development best practices
- Configuration Management
- Logging
- Security best practices

## Nest Objectives: Data Persistence

- Connection the application to a database
- Working with relational databases
- Using TypeORM
- Writing simple and complex queries using QueryBuilder
- Performance when working with a database

## Nest Objectives: Autorization/Authentication

- Signing up, signing in
- Authentication and Authorization
- Protected resources
- Ownership of tasks by users
- Using JWT tokens (JSON Web Tokens)
- Password hashing, salts and preoprly storing passwords

## Nest Objectives: Deployment

- Polishing the application for Production use
- Deploying NestJS apps to AWS(AMAZON WEB SERVICES)
- Deploying front-end applications to amazon s3
- wiring up the front-end and backend

## API _(Application Programming Interface)_ Endpoints - Tasks

| Endpoint          | Method | Description                |
| ----------------- | ------ | -------------------------- |
| /tasks            | GET    | Get tasks (incl. filteres) |
| /tasks/:id        | GET    | Get task                   |
| /tasks/           | POST   | Create a task              |
| /tasks/:id        | DELETE | Delete a task              |
| /tasks/:id/status | PATCH  | Update task status         |

## API _(Application Programming Interface)_ Endpoints - Auth

| Endpoint     | Method | Description |
| ------------ | ------ | ----------- |
| /auth/signup | POST   | Sign up     |
| /auth/signin | POST   | Sign in     |

## Nest CLI

### Install

`pnpm install -g @nestjs/cli`

### Verify version

`nest --version`

### Creating a project via the nest CLI

`nest new <name of project>`

###run project
`pnpm  start:dev`
`pnpm run start:dev`

### module

is defined by annotationg a class with the @Module decorator

#### providers

array of providers to be available within the module via dependency injection

#### controllers:

array of controllers to be instantiated withing the module

#### exports

array of providers to export to other modules

#### imports

List of modules required by this module.
any exported provider by this modules will now be avaiblable in our module via dependency injection.

### Create Module

`nest g module tasks`
g:is generate

### Controllers

`nest g controller tasks --no-spec`

### Providers

- can be injected into contructors if decorated as an @Injectable, via dependecy injection.
- Can be plain value, a class, sync/async factory etc.
- Providers must be provided to a module for them to be usable.
- Cna be exported from a module - and then be available to other modules that import it.

### Service

- Defined as providers. _NOT ALL PROVIDERS ARE SERVICES_
- common concept within software development and are not exclusive NESTJS, Javascript or backend development.
- Singlenton when wrapped with @Injectable() and provided to a module. That means, the same instance will be shared across the application - acting as a single source of trueth.
- the main source of business logic. For example , a service will be called from a controller to validate data, create an item in the database aand return a response.

## create service

`nest g service tasks --no-spec`
