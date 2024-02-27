npm init -y
pnpm init -y

npm i typescripty ts-node-dev @types/node -D  : para configurar typescript
npx tsc --init : para configurar typescript que creara un arhivo tsconfig.json
crear un script para iniciar el projecto: dev:"ts-node-dev --respawn src/index.ts  (https://youtu.be/N5dkg28jRF0?si=k6ElHwCwU4QKY2nl&t=4866)

DTO DATA TRANSFER OBJECT : In Nest.js, DTO (Data Transfer Object) is a pattern used to define how data should be structured when it is transferred between different parts of the application, such as between the client and server or between different layers of the application. DTOs are typically used to enforce a specific structure for data and to provide a clear contract between different parts of the application.

DTOs in Nest.js are plain TypeScript classes or interfaces that define the shape of the data being transferred. They are commonly used as input objects for request payloads and as output objects for response payloads. DTOs can also be used to validate incoming data and ensure that it meets certain criteria before being processed.


ORM prisma,sequelize  : base de datos relacional
Mongoose es una biblioteca de modelado de datos orientada a objetos (ODM) : base datos no relacional


Tres partes principales:
1.Pristma/client: un modelo de node  que te permite crear operaciones en tablas, como create, delte, up en producion.
2.npx prisma migrate:  forma facil de alterar nuestra base de datos.
3.npx prisma studio: interface grafica de usuario basada en la web que permite poder editar nuestros datos 


deploy prisma postgresql :https://youtu.be/N5dkg28jRF0?si=W1fIO7Mx5_5OheLt&t=5383


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
        npx prisma init --datasource-provider sqlite   :  para  usar la db de sqlite por defecto

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




-------------------------*++++++++++++++++++++++++++ CRUD AUTOMATICO
https://youtu.be/lonpW-0EybY?si=yxUsRlXOUBrXt9QX
nest g resource items  : rest api PARA HACERTE UN CRUD LLAMADOS RECURSOS RESOURCES
pnpm install --save @nestjs/swagger swagger-ui-express


++++++++++++++++++++++++++++++++++++++++++++++++++++++++ JWT
https://youtu.be/2P-Bxrtser4?si=M5ojn1tv9CAWpZPF
PAQUETES:

npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
npm install bcrypt --save                   : PARA ENCRIPTAR NUESTRA CONTRASENA PLANA


+++++++++++++++++++++++++++++++++++++++++++++++++++++++CLASS VALIDATOR
para transformar la data  class validator.


