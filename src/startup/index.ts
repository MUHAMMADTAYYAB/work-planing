import WorkerRoutes from '../routes/WorkerRoutes';
import ShiftRoutes from '../routes/ShiftRoutes';
import WorkerShiftRoutes from '../routes/WorkerShiftRoutes';
const path = require('path');
const { scan,handleCors } = require('./security');
const {
  handle404Error,
  handleServerError,
  uncaughtExceptions,
} = require("./exceptions");


const onStartup = (app:any, routesCallback:any) => {
  /**First Scan app */
  scan(app);

  /**Register routes */
  routesCallback(app);

  /**Handle 404 and other unhandles exceptions */
  handle404Error(app);
  handleServerError(app);
  uncaughtExceptions();
};

const initializeRoutes = (app: any) => {
  const version = process.env.Version || "/api/v1";

  app.use(path.join(version),WorkerRoutes );
  app.use(path.join(version),ShiftRoutes );
  app.use(path.join(version),WorkerShiftRoutes);
}


export = function (app: any) {
  handleCors(app);
  onStartup(app, initializeRoutes)
};
