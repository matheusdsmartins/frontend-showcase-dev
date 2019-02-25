# Front-End Showcase

A mini project to showcase my knowledge and skills. Also could be a example from setting up a docker-compose env for front-end development with a mocked api.

## Getting Started

Clone the project in your machine

```
git clone git@github.com:matheusdsmartins/frontend-showcase.git
```

### Prerequisities

You'll need those to run a local docker version:

```
Docker - https://www.docker.com/
Docker-Compose - https://docs.docker.com/compose/
```

If on Windows OS you'll also need:
```
Chocolatey - https://chocolatey.org/
```

### Installing and Using

First of all, install packages:

```
npm install
```

For development with a external API (like PunkAPI in this example) run:

```
npm run start
```

For local development just run *:

```
make start-local
```

* If on Windows OS, install make first:
```
choco install make
```

### Without Docker

The application will be available by default at:

```
http://localhost:3000
```

### Docker

Running on docker the applications will be available by default at:

```
Front
http://localhost:8080
```

```
Back
http://localhost:3001
```

If you want to stop:

```
make stop-local
```

To substitute/improve JSON-Server database just manipulate `data.json` file.

## Running the tests

Just run:

```
yarn test | npm run test
```

## Deployment

For a local test using the built version:

```
docker-compose up
```

For a ready for deploy build:

```
yarn build | npm run build
```

The compiled code will be in the `/build` folder

## Built With

* NodeJS
* JSON-Server
* PunkAPI DB
* ReactJS
* Redux

## Authors

* **Matheus de Sousa Martins** - *Initial work* - [MatheusDSMartins](https://github.com/matheusdsmartins)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
