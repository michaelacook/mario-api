const sqlite = {
  dialect: "sqlite",
  storage: "./dev",
  logging: false,
  autoLoadModels: true,
}

const mysql = {
  dialect: "mysql",
  host: "127.0.0.1",
  port: 3306,
  username: "root",
  password: "",
  database: "mario-api",
  autoLoadModels: true,
}

module.exports = {
  development: sqlite,
  test: sqlite,
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    autoLoadModels: true,
  },
}
