module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "node_mysql",   // nama database di mysql
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,   // 30 detik
    idle: 10000
  }
};