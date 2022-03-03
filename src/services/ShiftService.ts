import {
    getItem,
    deleteItem,
    addItem,
    updateItem,
  } from "./dynamo/DynamodbService";

  import { SHIFT_TABLE } from "../enums/table";
  import { Response } from "../models/response";

  
  export const getShifts = async () => {
    var params = {
      TableName: SHIFT_TABLE,
    };
  
    try {
      let result = await getItem(params).promise();
      let items = result.Items;
      let response = {
        shifts: items,
      };
      return new Response(response, 200);
    } catch (error: any) {
      return new Response("", error.statusCode);
    }
  };
  
  
  
  
  