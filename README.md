<h1 align="center">
  <img alt="Design+Code" src="https://res.cloudinary.com/dpf7e7tpc/image/upload/v1599439284/projetos/docker-node-postgres_rkvw7u.svg" width="400" />
</h1>

<h1 align="center">
  Docker+NodeJS+PostgreSql
</h1>
<h3 align="center">Simple application to study the implementation of an api node js using docker and docker-compose.</h3>
<br/>
<p align="center">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/mac-alves/docker-nodejs-postgresql">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/mac-alves/docker-nodejs-postgresql">

  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/mac-alves/docker-nodejs-postgresql">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/mac-alves/docker-nodejs-postgresql"> 

</p>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#heavy_plus_sign-license">Information</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bangbang-license">Attention</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">Autor</a>
</p>

## :rocket: &nbsp;&nbsp;&nbsp; Technologies

This project was developed with the following technologies:
-  [Docker](https://www.docker.com/)
-  [Docker-Compose](https://docs.docker.com/compose/)
-  [GNU-Make v4.2.1](https://www.gnu.org/software/make/)
-  [Node.js v12.16.1][nodejs]
-  [Yarn v1.22.4](https://yarnpkg.com/)
-  [Express](https://expressjs.com/pt-br/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Knex](http://knexjs.org/)
-  [PostgreSql](https://www.postgresql.org/)
-  [Ts-Node-Dev](https://github.com/whitecolor/ts-node-dev)
-  [Insomnia-Documenter](https://github.com/jozsefsallai/insomnia-documenter)
-  [VS Code][vc] with [EditorConfig][vceditconfig]

## :bangbang: &nbsp;&nbsp;&nbsp; Dependencies
- [Docker](https://www.docker.com/)
- [Docker-Compose](https://docs.docker.com/compose/)
- [GNU-Make](https://www.gnu.org/software/make/)
- [Git](https://git-scm.com),
- [Node.js v12.16.1][nodejs] + [Yarn v1.22.4](https://yarnpkg.com/)

## :information_source: &nbsp;&nbsp;&nbsp; How To Use

```bash
# Clone this repository
$ git clone https://github.com/mac-alves/docker-nodejs-postgresql

# Go into the repository
$ cd docker-nodejs-postgresql/

# clone of the environment variables file
$ cp .env.example .env

# Lifts the docker with the necessary images
$ make up

# run migrations
$ make migrate

## ----------- useful commands ------------ ##

# rollback migrations
$ make rollback

# down docker
$ make down

# logs docker
$ make logs
```

## :heavy_plus_sign: &nbsp;&nbsp;&nbsp; Information

The default api route (http://localhost:3000) provides access to complete documentation. All routes, methods and data can be found in the documentation. If you prefer to run the routes directly in the insomnia application the configuration file can be found in `docs/Insomnia_2020-09-06.json`.

## :bangbang: &nbsp;&nbsp;&nbsp; Attention

In the file of environment variables (`.env`), contrast the key `DB_URL`, which is nothing more than the combination of the keys `DB_DATABASE`, `DB_USER` and `DB_PASSWORD` in a database connection string. If you change some of the independent keys (`DB_DATABASE`, `DB_USER` and `DB_PASSWORD`) reflect the changes in `DB_URL` following the pattern: `postgresql://${DB_USER}:${DB_PASSWORD}@db:5432/${DB_DATABASE}`

## :memo: &nbsp;&nbsp;&nbsp; License
This project is under the MIT license. See the [LICENSE](https://github.com/mac-alves/docker-nodejs-postgresql/blob/master/LICENSE) for more information.

---

## Autor

:anchor: **Mauricio Alves** - *Github* - [mac-alves](https://github.com/mac-alves)


[nodejs]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
