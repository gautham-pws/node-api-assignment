export const config = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "gpgpg",
    DB: "tutorial_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };