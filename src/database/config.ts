export const config = {
  development: {
    dialect: "sqlite",
    storage: "./dev",
    logging: false,
    autoLoadModels: true,
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
    autoLoadModels: true,
  },
}
