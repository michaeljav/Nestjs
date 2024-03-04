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
  - [create service](#create-service)
  - [Creating resource CRUD all](#creating-resource-crud--all)
  - [using uuid](#using-uuid)
  - [Pipes](#pipes)
    - [Validation Pipe](#validation-pipe)
    - [adding TypeORM with PostgreSQL pg lo desintale](#adding-typeorm-with-postgresql-pg-lo-desintale)
    - [INSTALLE MYSQL](#installe-mysql)
    - [JWT](#jwt)
    - [list of types of logs with brief descriptions:](#list-of-types-of-logs-with-brief-descriptions)
    - [Three environment](#three-environment)
    - [Log levels](#log-levels)
  - [Configuration](#configuration)
    - [Migrations typeorm](#migrations-typeorm)
  - [create migration](#create-migration)
- [Las migracions solo funcionan bien con npm, no funcionan muy bien con pnpm, ni yarn](#las-migracions-solo-funcionan-bien-con-npm-no-funcionan-muy-bien-con-pnpm-ni-yarn)
  - [run migrations](#run-migrations)
  - [revert migrations](#revert-migrations)
- [caso 2](#caso-2)
  - [caso 3 --SOLUCIONADO](#caso-3---solucionado)

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

## Creating resource CRUD all

-command not only generates all the NestJS building blocks (module, service, controller classes) but also an entity class, DTO classes as well as the testing (.spec) files

`nest g resource users`

## using uuid

`pnpm i --save uuid`

## Pipes

- Pipes operate on the arguments to be processed by the route handler, just before the handler is called.
- Pipes can perform data transformation or data validation
- ValidationPipe
- ParseIntPipe
  - Parameter-level pipes
  - Handle- level pipes
  - Global

### Validation Pipe

`pnpm i class-validator class-transformer --save`

### adding TypeORM with PostgreSQL pg lo desintale

`pnpm install @nestjs/typeorm typeorm pg`

### INSTALLE MYSQL

`pnpm install --save @nestjs/typeorm typeorm mysql2`

### JWT

- passport.js: which is an authentication middleware for node.js.
  - Passport.js supports muiltiple strategies and one of them is the GeneralT Token startegy

`pnpm install @nestjs/jwt @nestjs/passport passport passport-jwt`

### list of types of logs with brief descriptions:

- Debug Logs: Detailed information for debugging purposes, such as variable values and function calls.
- Info Logs: General information about the application's operation and flow.
- Warning Logs: Alerts for potential issues or anomalies that require attention.
- Error Logs: Indicate unexpected conditions or errors that need to be addressed.
- Critical Logs: Notify about severe errors or issues requiring immediate attention.
- Audit Logs: Track and record user or process actions for security and compliance.
- Verbose Logs: Provide extensive and detailed information about the application's operation.

### Three environment

- Development
- Staging
- Production

### Log levels

| Log Level | Development | Staging | Production |
| --------- | ----------- | ------- | ---------- |
| Debug     | Yes         | Yes     | No         |
| Info      | Yes         | Yes     | Yes        |
| Warning   | Yes         | Yes     | Yes        |
| Error     | Yes         | Yes     | Yes        |
| Critical  | Yes         | Yes     | Yes        |
| Audit     | Yes         | Yes     | Yes        |
| Verbose   | Yes         | No      | No         |

## Configuration

- Environment Variables: Load configuration based on the environment using environment variables.
- Configuration Files: Load configuration from JSON, YAML, or other files using ConfigModule.
- Third-party Libraries: Integrate with libraries like dotenv for environment variables and config for advanced configuration management.

`pnpm install config`

### Migrations typeorm

## create migration

```bash
npm run migration:generate --name=example_name
```

# Las migracions solo funcionan bien con npm, no funcionan muy bien con pnpm, ni yarn

## run migrations

```bash
npm run migration:run-dev
```

## revert migrations

```bash
npm run migration:revert-dev
```

PREGUNTAS PARA TRATAR

Casos:SOLUCIONADO: ERA QUE DEBIA DE OPER ./src/... ALANTE PARA UBICAR EL ARCHIVO typeorm.config.ts
Cuando saco a la raiz del src el archivo typeorm.config.ts, entonces no me funciona la migracion

# caso 2

cuando pongo forengin key no me funciona la migracion.

### caso 3 --SOLUCIONADO

con el comando `pnpm` no funciona el comando de las migraciones, solo con `npm`

CODIGO QUE WORKED `npm`
`npm run typeorm migration:generate ./src/database/migrations/first -- -d ./src/config/typeorm.config.ts`

Worked `PNPM` I delete `--`
`pnpm run typeorm migration:generate ./src/database/migrations/prueba -d ./src/config/typeorm.config.ts`

worked and being called "`npm run mig:gen --name=first`"
`"mig:gen": "pnpm run typeorm migration:generate ./src/database/migrations/%npm_config_name%  -d ./src/config/typeorm.config.ts"`

worked
`pnpm run typeorm migration:generate ./src/database/migrations/%npm_config_name% -d ./src/config/typeorm.config.ts`

en conclusion:
si uso "`npm run mig:gen --name=first `"
y en el package.json uso npm para ejecutar lo: "
`"mig:gen": "npm run typeorm migration:generate ./src/database/migrations/%npm_config_name% -- -d ./src/config/typeorm.config.ts"` " debo de tener el `--`

para usar pnpm debo de usar en cli sin parametro
llamar asi: pnpm run mig:gen
y tener en el package : `"mig:gen": "pnpm run typeorm migration:generate ./src/database/migrations/pn  -d ./src/config/typeorm.config.ts"`

el pnpm no soporta variables `%npm_config_name%` y en la cli tampoco "`npm run mig:gen --name=first` " ===>"`npm run mig:gen` "

Por lo cual como el projecto fue hecho con npm seguir usandolo con `npm`

caso 4
sabes que es eso?
"typeorm": "typeorm-ts-node-commonjs",
typeorm-ts-node-esm

nota: Creando la migracion ubicando el datasource dentro de una carpeta config funciono
`"mig:gen": " npm run typeorm migration:generate ./src/database/migrations/%npm_config_name% -- -d ./src/config/typeorm.config.ts",`

y cuando estaba en la raiz de src tenia esta key:value
`  "migration:run-dev": " npm run typeorm migration:run -- -d typeorm.config.ts",`
