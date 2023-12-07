# dcm-investment-client-angular

# Self, tools I use are
* postgres, with pgadmin and psql
* eclipse with dcm-investment-server-java-and-db
* browser and postman to hit server endpoints like /investments or /styleCount
* visual studio code for dcm-investment-client-angular
* something is generating client typescript stubs for calling the server endpoints - like http://localhost:8080/api/v3/api-docs works I think because springdoc-openapi-starter-webmvc-ui is in pom
* and then I think git and github to check things in / have a code repo
in the end `npm start` on client-angular side let's http://localhost:4200/ show up in the browser

# Architecture
* note that application.properties has server.servlet.contextPath=/api to differentiate urls/routings that fetch data from server vs angular/client-side routings (I think that is why). Correspondingly, npm start, does server using proxy.conf.json that has "/api": {"target": "http://localhost:8080","secure": false }

# How to run open api generator
1. Update api-docs.json from http://localhost:8080/api/v3/api-docs
2. in terminal type `npm run generate:api` which will run this from package.json: "generate:api": "openapi-generator-cli generate -i ./api-docs.json -g typescript-angular -o src/app/core/api/v1"

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/yvbic7)