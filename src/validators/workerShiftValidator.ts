import { Response } from "../models/response";
var moment = require("moment");
export const validateWorkerShift = (body: any) => {
  var isEmptyObj = !Object.keys(body).length;
  if (isEmptyObj) {
    return new Response("Request data is missing", 701);
  }
  if (!body.workerId) {
    return new Response("workerId field is missing", 702);
  }
  if (!body.shift) {
    return new Response("shift field is missing", 706);
  }

  if (!['0-8','8-16','16-24'].includes(body.shift)) {
    return new Response("shift values should be '0-8','8-16','16-24'", 708);
  }
  if (!body.shiftDate) {
    return new Response("shiftDate field is missing", 707);
  }

  let isValidDate = moment(body.shiftDate, "YYYY-MM-DD", true).isValid();
  if (!isValidDate) {
    return new Response("Please provide correct date with format YYYY-MM-DD ", 708);
  }
  return new Response("", 200);
};


export const validateSingleWorkerShift = (req: any) => {
  // var isEmptyObj = !Object.keys(body).length;
  // if (isEmptyObj) {
  //   return new Response("Request data is missing", 701);
  // }
  if (!req.query && !req.query.workerId) {
    return new Response("workerId field is missing", 702);
  }
  return new Response("", 200);
};