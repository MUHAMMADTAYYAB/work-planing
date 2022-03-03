var express = require('express');
import { getShifts } from "../services/ShiftService";
var router = express.Router();

router.get("/shift", async (req: any, res: any, next: any) => {
  var result = null;
    let response: any = await getShifts();
    result = response;
    res.send(result);
});

export = router;
