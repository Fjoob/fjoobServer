const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/users/error.log",
      level: "error",
      maxsize:10485760
    }),
    new winston.transports.File({
      filename: "v1/src/logs/users/info.log",
      level: "info",
      maxsize:10485760
    }),
    new winston.transports.File({
      filename: "v1/src/logs/users/combined.log",
      maxsize:10485760
    }),
  ],
});

module.exports = logger;

