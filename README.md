# dcm-investment-client-angular
this is client (angular SPA) of dcm-investment-server-and-db

# LEFT OFF
shows investment list. didnt want to do more. not perfectly able to import open api generated service, see troubleshooting

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

# Troubleshooting
Stinking open api generated code doesn't import perfectly from root, have to do this which VSCode tool doesn't fix imports convenience enough: "import { GreetingControllerService } from '../core/api/v1/api/greetingController.service';" some problem in api.ts or another generated file? I swear it was working the very first time I tried, so I don't know the issue.


[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/yvbic7)