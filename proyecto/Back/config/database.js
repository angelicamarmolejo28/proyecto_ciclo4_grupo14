const moongose = require("mongoose");
const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
  const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
  moongose.connect(mongoStringConnection);
  moongose.Promise = global.Promise;
  const dbConnection = moongose.connection;
  dbConnection.on("error", console.error.bind(console, "Mongodb connection error")
  );
};
