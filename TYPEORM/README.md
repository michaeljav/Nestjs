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
