import {
  getItem,
  deleteItem,
  addItem,
  updateItem,
} from "./dynamo/DynamodbService";
import { WORKER_TABLE } from "../enums/table";
import { Response } from "../models/response";
import exceptions from "../startup/exceptions";
const { v4: uuidv4 } = require("uuid");

export const getWorkers = async () => {
  //throw 'Parameter is not a number!';
  var params = {
    TableName: WORKER_TABLE,
  };

  try {
    let result = await getItem(params).promise();
    let items = result.Items;
    let response = {
      workers: items,
    };
    return new Response(response, 200);
  } catch (error: any) {
    return new Response("", error.statusCode);
  }
};

export const addWorker = async (data: any) => {
  try {
    data.created_at = new Date().toUTCString();
    data.updated_at = new Date().toUTCString();
    var params = {
      TableName: WORKER_TABLE,
      Item: data,
      ConditionExpression: "id <>:id",
      ExpressionAttributeValues: {
        ":id": data.id,
      },
    };

    let result = await addItem(params).promise();
    let items = result.Items;
    return new Response("", 200);
  } catch (error: any) {
    console.log("Exception");
    if (error.code == "ConditionalCheckFailedException") {
      return new Response("id already exist", error.statusCode);
    }
    console.log(error.code);
    return new Response("", error.statusCode);
  }
};


export const updateWorker = async (data: any) => {
  console.log('get data',data);
  //let id = data.id;
  try {
    const params = {
      TableName: WORKER_TABLE,
      Key: {
        id:data.id,
      },

      UpdateExpression: "set workerName=:workerName,isActive = :isActive",
      ConditionExpression: "id = :id",
      ExpressionAttributeValues: {
         ":workerName": data.workerName,
         ":isActive": data.isActive,
         ":id": data.id
      },
      ReturnValues: "UPDATED_NEW",
    };
    let result = await updateItem(params).promise();
    return new Response("", 200);
  } catch (error: any) {
    console.log(error);
    return new Response("", error.statusCode);
  }
};
