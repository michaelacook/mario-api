module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./dev",
    logging: false,
  },
  test: {
    dialect: "sqlite",
    storage: "./dev",
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
}
