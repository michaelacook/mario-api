# Mario API 
A basic REST API for managing Mario Bros franchise data. The API returns data related to Mario characters, games, and their console platforms.

The purpose of this project is to get some practice with TypeScript and start gaining familiarity with the [NestJS](https://nestjs.com/) framework. Click [here](https://supermario-api.herokuapp.com/api/) to view the API documentation.

## Running Locally 
The application runs on port 5000. To run and view seed data, clone and install, then run migrations:

1. `git clone https://github.com/michaelacook/mario-api.git`

2. `cd [path/to/mario-api] && npm install` 

3. `npm run migrate && npm run seed`

4. `npm run start:dev`

To view documentation for the endpoints locally, navigate to `http://localhost:5000/api`


## Technologies
- Node 
- TypeScript 
- Sequelize
- PostgreSQL (production)
- SQLite (development)
- NestJS 
- AWS S3