var express = require("express");
import { addWorkerShift, getWorkerShift } from "../services/WorkerShiftService";
import {
  validateWorkerShift,
  validateSingleWorkerShift,
} from "../validators/workerShiftValidator";
var router = express.Router();

router.get("/workershift", async (req: any, res: any, next: any) => {
  
  var result = null;
  let validationResult: any = validateSingleWorkerShift(req);
  if (validationResult.responseCode === 200) {
    let workerId = req.query.workerId;
    let response: any = await getWorkerShift(workerId);
    result = response;
    res.send(result);
  } else {
    result = validationResult;
  }
});

router.post("/workershift", async (req: any, res: any, next: any) => {
  let data = req.body;
  var result = null;
  let validationResult: any = validateWorkerShift(data);
  if (validationResult.responseCode === 200) {
    let response: any = await addWorkerShift(data);
    result = response;
  } else {
    result = validationResult;
  }
  res.send(result);
});

// router.put("/worker", async (req: any, res: any, next: any) => {
//   let data=req.body
//   var result = null;
//   let validationResult:any = validateWorker(data);
//   if (validationResult.responseCode === 200) {
//     let response: any = await updateWorker(data);
//     result = response;
//   } else {
//    result = validationResult;
//  }
//   res.send(result);

// });
export = router;
