ORM prisma

debo de tener node.js
debo tener  Nest CLI global
	npm install -g @nestjs/cli

iNicio del proyecto:
nest new <project name>

installar dependencias
	pnpm i
to run:	
	pnpm  run start:dev   (inializar un 	servidor de desarollo con el watch)

installar los modelos de prisma
	pnpm install prisma -D     (dependencia de desarrollo  pero @prismaclient síi es de producion)

inicializar la configuracion de prisma:
	
	npx prisma init   : configura el orm  para que trabaje con postgresql, pero  para un ejemplo simple estaresmo usarndo :
        npx prisma init --datasource-provider sqlite   :  pero vamos usar la db de sqlite

para convertir un modelo en tabla en prisma:
	npx prisma migrate dev --name init