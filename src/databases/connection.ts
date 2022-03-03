import AWS from "aws-sdk";
import { ServiceConfigurationOptions } from "aws-sdk/lib/service";
const config = require('config');

let serviceConfigOptions: ServiceConfigurationOptions;
let documentClient: any;

serviceConfigOptions = {
  region: process.env.DYNAMO_REGION || config.get("Region"),
  accessKeyId: process.env.DYNAMO_ACCESS_KEY_ID || config.get("Access_key_ID"),
  secretAccessKey:process.env.DYNAMO_SECRET_ACCESS_KEY || config.get("Secret_access_key"),
};

documentClient = new AWS.DynamoDB.DocumentClient({
  ...serviceConfigOptions,
  convertEmptyValues: true,
});

export = documentClient;
