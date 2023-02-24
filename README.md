# Install Yoeman Globally

- First you must have Yeoman installed globally ` npm install -g yo `

---

# Add .npmrc file manually -

- Add .npmrc file manually before installing the the generator
  - In windows ,place it in the Current working directory root folder or "C:/User/ <username>"" location.

---

# To install generator locally -

- Install sofotbiz-ms generator ` npm install generator-softobiz-ms -g `

---

# To generate new micro-service

- This command will generate all the basic files needed for the boilerplate code
- To generate new micro-service use command ` yo softobiz-ms app `
- Enter the necessary information when prompted

---

# Rename files

- gitignore --> .gitignore
- npmrc --> .npmrc

---

# To generate Rest-API

- This command will generate all the files you need to create Rest-API
- - To generate Rest-API for mssql use command

    ```
      yo softobiz-ms:rest-sql <name> [options]
    ```

    ### Example:

    ```
    yo softobiz-ms:rest-sql Product
    ```
- To generate Rest-API for mongodb use command ` yo softobiz-ms:rest-mongo <name> [options] `
  ### Example:
  ```
  yo softobiz-ms:rest-mongo Product
  ```

---

# Dependency Flow-

- domain
- model
- mapper
- irepository
- sql-repositories
- dto
- error
- command
- query
- controller
- use-cases-module

# Generate Domain Layer

- Domain layer includes Aggregate-root, Entity and Value Objects.
- Follow the same naming convention pattern for all cli-commands.

## Generate new aggregate

- To generate aggregate use command ` yo softobiz-ms:aggregate <name> [options] `

  ### Options:

  | Alias | Option          | Description                                                                                | Default |
  | ----- | --------------- | ------------------------------------------------------------------------------------------ | ------- |
  | -h    | --help          | # Print the generator's options and usage                                                  |         |
  |       | --skip-cache    | # Do not remember prompt answers                                                           | false   |
  |       | --skip-install  | # Do not automatically install dependencies                                                | false   |
  |       | --force-install | # Fail on install dependencies error                                                       | false   |
  | -p    | --parent        | # The optional sub folder inside domain folder in which the template needs to be generated |         |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:aggregate Product
  ```

## Generate new entity

- To generate entity use command ` yo softobiz-ms:entity <name> [options] `

  ### Options:

  | Alias | Option          | Description                                                                                | Default |
  | ----- | --------------- | ------------------------------------------------------------------------------------------ | ------- |
  | -h    | --help          | # Print the generator's options and usage                                                  |         |
  |       | --skip-cache    | # Do not remember prompt answers                                                           | false   |
  |       | --skip-install  | # Do not automatically install dependencies                                                | false   |
  |       | --force-install | # Fail on install dependencies error                                                       | false   |
  | -p    | --parent        | # The optional sub folder inside domain folder in which the template needs to be generated |         |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:entity Product
  ```

  ```
  yo softobiz-ms:entity images -p Product
  ```

## Generate new value-object

- To generate value-object use command ` yo softobiz-ms:valueObject <name> [options] `

  ### Options:

  | Alias | Option          | Description                                                                                | Default |
  | ----- | --------------- | ------------------------------------------------------------------------------------------ | ------- |
  | -h    | --help          | # Print the generator's options and usage                                                  |         |
  |       | --skip-cache    | # Do not remember prompt answers                                                           | false   |
  |       | --skip-install  | # Do not automatically install dependencies                                                | false   |
  |       | --force-install | # Fail on install dependencies error                                                       | false   |
  | -p    | --parent        | # The optional sub folder inside domain folder in which the template needs to be generated |         |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:valueObject Product
  ```

  ```
  yo softobiz-ms:valueObject dimension -p Product
  ```

---

# Infrastrucutre Layer

- This layer includes models, mappers, irepositories, sql-repositories.

## Generate new model

- To generate a new model use command ` yo softobiz-ms:model <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:model Product
  ```

## Generate new sql-mapper

- To generate a new mapper use command ` yo softobiz-ms:sql-mapper <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:sql-mapper Product
  ```

## Generate new irepository

- To generate a new irepository use command ` yo softobiz-ms:irepository <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:irepository Product
  ```

## Generate new sql-repositories

- To generate a new sql-repositories use command ` yo softobiz-ms:sql-repositories <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:sql-repositories Product
  ```

---

# Application Layer

- This layer includes dto, error, commands, query, controller, use-cases-module.

## Generate new Dto

- To generate a new dto use command ` yo softobiz-ms:dto <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:dto Product
  ```

## Generate new Error file

- To generate a new error-file use command ` yo softobiz-ms:error <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:error Product
  ```

## Generate new command

- To generate a new command use- ` yo softobiz-ms:command <name> [options] `

  ### Options:

  | Alias | Option          | Description                                                                                   | Default |
  | ----- | --------------- | --------------------------------------------------------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage                                                     |         |
  |       | --skip-cache    | # Do not remember prompt answers                                                              | false   |
  |       | --skip-install  | # Do not automatically install dependencies                                                   | false   |
  |       | --force-install | # Fail on install dependencies error                                                          | false   |
  | -c    | --command       | # The optional sub command inside commands folder in which the template needs to be generated |         |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:command Product
  ```

  ```
  yo softobiz-ms:command update -c Product
  ```

## Generate new query

- To generate a new query use command- ` yo softobiz-ms:query <name> [options] `

  ### Options:

  | Alias | Option          | Description                                                                                | Default |
  | ----- | --------------- | ------------------------------------------------------------------------------------------ | ------- |
  | -h    | --help          | # Print the generator's options and usage                                                  |         |
  |       | --skip-cache    | # Do not remember prompt answers                                                           | false   |
  |       | --skip-install  | # Do not automatically install dependencies                                                | false   |
  |       | --force-install | # Fail on install dependencies error                                                       | false   |
  | -q    | --query         | # The optional sub query inside queries folder in which the template needs to be generated |         |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:query Product
  ```

  ```
  yo softobiz-ms:query getAll --q Product
  ```

## Generate new controller

- To generate a new controller use command ` yo softobiz-ms:controller <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:controller Product
  ```

## Generate new use-cases-module

- To generate a new use-cases-module use command ` yo softobiz-ms:use-cases-module <name> [options] `

  ### Options:

  | Alias | Option          | Description                                 | Default |
  | ----- | --------------- | ------------------------------------------- | ------- |
  | -h    | --help          | # Print the generator's options and usage   |         |
  |       | --skip-cache    | # Do not remember prompt answers            | false   |
  |       | --skip-install  | # Do not automatically install dependencies | false   |
  |       | --force-install | # Fail on install dependencies error        | false   |

  ### Arguments:

  | Arg Name | Description                                     | Type   | Required |
  | -------- | ----------------------------------------------- | ------ | -------- |
  | name     | The name of the object that needs to be created | String | true     |

  ### Example:

  ```
  yo softobiz-ms:use-cases-module Product
  ```

## Installation

- This command will install all modules listed as dependencies in package.json

  ```
    npm install
  ```

## Running the app

### Development:

- without dapr

  ```
    npm run start
  ```

- Use this command for dapr running as a sidecar
  ```
    dapr run --app-id nest-main-application --components-path ./dapr/components -- npm run start
  ```

### Watch mode:

- Use this command to run the app in watch mode.

  ```
    npm run start:dev
  ```

### Production mode:

- Use this command to run the app in production mode.

  ```
    npm run start:prod
  ```

## Migration

- Migrations are used to create or alter the table model in a database.

### Create a Migration

- It makes template for your new migration.Create does not really do any database sync.

  ```
    npm run migration:create <name>
  ```

### Generate a Migration

- Generate migration files with model changes you made.

  ```
    npm run migration:generate <name>
  ```

### Run Migration

- Use this command to run the migration

  ```
    npm run migration
  ```

## Run seed

- Seeders can be used to pre-populate your DB tables with fake data.

  ```
    npm run seed
  ```

# Run swagger

- Swagger UI allows you to visualize and interact with the API’s resources without having any of the implementation logic in place.
  ` http://localhost:4201/AppRoutePrefix/api `
  ### Example:
         http://localhost:4201/identity/api


## Test

- Use this command to run the unit tests

  ```
    npm run test
  ```

- Use this command to run the e2e tests
  ```
    npm run test:e2e
  ```
- Use this command to run the test coverage

  ```
    npm run test:cov
  ```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please
[read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
#   B o i l e r _ P l a t e _ C r u d  
 