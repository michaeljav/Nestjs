DTO 
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
	npx prisma migrate dev --name init         //init es el nombre de la carpta de migarcion que se creara  y se crea la base de datos. 
        npx prisma migrate dev --name init_postgresql  // y si tengo tambien modificacion y lo ejecuto de nuevo se aplica inmediatamente a la tabla. 

Create a Migration (Without Applying it)
. This command will generate a new migration scrcoipt without applying it to the database.
npx prisma migrate dev --create-only



Apply the Migration: To apply the migration to your database, run the following command:
npx prisma migrate deploy


Check Migration Status: You can check the status of your migrations using the following command:
npx prisma migrate status
