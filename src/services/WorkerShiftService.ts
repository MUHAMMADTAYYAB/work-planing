import { getItem, addItem, getSingleItem } from "./dynamo/DynamodbService";
import { WORKER_SHIFT_TABLE, WORKER_TABLE } from "../enums/table";
import { Response } from "../models/response";
const { v4: uuidv4 } = require("uuid");

export const getWorkerShift = async (workerId: any) => {
  var params = {
    TableName: WORKER_SHIFT_TABLE,
    FilterExpression: "workerId = :workerId",
    ExpressionAttributeValues: {
      ":workerId": parseInt(workerId),
    },
  };

  try {
    let result = await getItem(params).promise();
    let items = result.Items;
    let response = {
      workerShifts: items,
    };
    return new Response(response, 200);
  } catch (error: any) {
    console.log(error);
    return new Response("", error.statusCode);
  }
};

export const addWorkerShift = async (data: any) => {
  try {
    var checkWorkerData = {
      TableName: WORKER_TABLE,
      Key: {
        id: data.workerId,
      },
    };
    let workerData: any = await getSingleItem(checkWorkerData).promise();
    let worker = workerData.Item;
    if (!worker) {
      return new Response(`Worker Id ${data.workerId} doesn't exist`, 400);
    }

    var checkData = {
      TableName: WORKER_SHIFT_TABLE,
      FilterExpression:
        "workerId = :workerId and shift= :shift and shiftDate = :shiftDate",
      ExpressionAttributeValues: {
        ":workerId": data.workerId,
        ":shift": data.shift,
        ":shiftDate": data.shiftDate,
      },
    };
    let workerShiftData: any = await getItem(checkData).promise();
    let workerShift = workerShiftData.Items;

    if (workerShift.length == 0) {
      let shiftData = {
        id: uuidv4(),
        workerId: data.workerId,
        shift: data.shift,
        shiftDate: data.shiftDate,
        created_at: new Date().toUTCString(),
        updated_at: new Date().toUTCString(),
      };
      var params = {
        TableName: WORKER_SHIFT_TABLE,
        Item: shiftData,
      };
      let result = await addItem(params).promise();
      let items = result.Items;
      return new Response("", 200);
    } else {
      return new Response(
        `Worker already assign in a date ${workerShift[0].shiftDate} and shift ${workerShift[0].shift}`,
        400
      );
    }
  } catch (error: any) {
    console.log("Exception");
    // if (error.code == "ConditionalCheckFailedException") {
    //   return new Response("id already exist", error.statusCode);
    // }
    console.log(error);
    return new Response("", error.statusCode);
  }
};
