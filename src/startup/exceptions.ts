const error = require("../middlewares/error");
const notFound = require("../middlewares/notFound");

const uncaughtExceptions = () => {
  process.on("uncaughtException", (ex) => {
    console.log("in startup uncaughtexception");
    console.log(ex);
    //saveLog({ 'uncaughtException': ex.message }, 'uncaughtException');
    process.exit(1);
  });
  /* for promise uncaught exception handling */
  process.on("unhandledRejection", (ex) => {
    console.log("in startup unhandledexception");
    console.log(ex);
    // saveLog({ 'unhandledRejection': ex.message }, 'unhandledRejection');
    process.exit(1);
  });
};

const handle404Error = (app:any) => {
  /*  Capture All 404 errors*/
  app.use(notFound);
};

const handleServerError = (app:any) => {
  /*  Capture All server errors*/
  app.use(error); //this handle errors in node pipeline context
};

export = {
  uncaughtExceptions,
  handle404Error,
  handleServerError,
};
