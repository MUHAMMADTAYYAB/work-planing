var express = require('express');
var cors = require('cors');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(cors());

/** Startup is used to initialize app */

require("./startup")(app);

/*
 *
 *if env is not set  process.env.NODE_ENV will be undefined
 *console.log(`process.env.NODE_ENV} is = ${process.env.NODE_ENV}`);
 *if env is not set then app.get('env')will be development
 *
 */
console.log(`Current Env is = ${app.get("env")}`);

//PORT
const port = process.env.PORT || 3003;
app.listen(port, () => console.log(`Listening on port ${port}`));
