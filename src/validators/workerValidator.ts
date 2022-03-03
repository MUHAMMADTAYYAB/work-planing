import { Response } from "../models/response";

export const validateWorker = (body: any) => {
  var isEmptyObj = !Object.keys(body).length;
  if (isEmptyObj) {
    return new Response("Request data is missing", 701);
  }
  if (!body.id) {
    return new Response("id field is missing", 702);
  }

  if (!body.workerName) {
    return new Response("workerName field is missing", 703);
  }

  if (!body.isActive) {
    return new Response("isActive field is missing", 704);
  }

  return new Response("", 200);
};


