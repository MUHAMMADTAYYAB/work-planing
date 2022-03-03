var express = require('express');
import { getWorkers,addWorker,updateWorker } from "../services/WorkerService";
import {validateWorker} from "../validators/workerValidator";
var router = express.Router();

router.get("/worker", async (req: any, res: any, next: any) => {
  var result = null;
    let response: any = await getWorkers();
    result = response;
    res.send(result);
});


router.post("/worker", async (req: any, res: any, next: any) => {
 
  let data=req.body
  console.log(data)
  var result = null;
 let validationResult:any = validateWorker(data);
  if (validationResult.responseCode === 200) {
    let response: any = await addWorker(data);
    result = response;
 } else {
   result = validationResult;
 }
  res.send(result);
 
});

router.put("/worker", async (req: any, res: any, next: any) => {
  let data=req.body
  var result = null;
  let validationResult:any = validateWorker(data);
  if (validationResult.responseCode === 200) {
    let response: any = await updateWorker(data);
    result = response;
  } else {
   result = validationResult;
 }
  res.send(result);
 
});
export = router;
