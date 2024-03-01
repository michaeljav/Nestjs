# migrations nestjs

## clone project

```bash
git clone https://github.com/neiderruiz/nestjs-migrations.git
```

## inner project

```bash
cd nestjs-migrations
```

## install dependencies

```bash
npm install
```

## create migration

```bash
npm run migration:generate --name=example_name
```

nota: Creando la migracion ubicando el datasource dentro de una carpeta config funciono
`"mig:gen": "cross-env NODE_ENV=development npm run typeorm migration:generate ./src/database/migrations/%npm_config_name% -- -d ./src/config/typeorm.config.ts",`

y cuando estaba en la raiz de src tenia esta key:value
`  "migration:run-dev": "cross-env NODE_ENV=development npm run typeorm migration:run -- -d typeorm.config.ts",`

## run migrations

```bash
npm run migration:run-dev
```

## revert migrations

```bash
npm run migration:revert-dev
```
