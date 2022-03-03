const documentClient = require("./connection.ts")
var param = {}
documentClient.listTables(param, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });