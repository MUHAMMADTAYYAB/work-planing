const host = "work-planning-app.herokuapp.com";//"localhost:3003";
export = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Gateway - Work Planing Aggregation Service",
    description: "Work Planing",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: host,
  basePath: "/api/v1",
  schemes: ["https","http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    ApiKeyAuth: {
      type: "apiKey",
      in: "headers",
      name: "authorization",
    },
  },
  paths: {
    "/worker": {
      get: {
        summary: "Get all workers",
        produces: ["application/json"],
        // parameters: [
        //   { name: "pageno", in: "query" },
        //   { name: "pagesize", in: "query" },
        // ],
        responses: {
          "200": {
            description: "Success Response",
            content: "application/json",
          },
          "400": {
            description: "Failed",
            content: "application/json",
          },
        },
      },
      post: {
        summary: "save worker",
        produces: ["application/json"],
        "parameters": [
          {
            "name": "worker",
            "in": "body",
            "description": "Save Worker",
            "schema": {
              "$ref": "#/definitions/Worker"
            }
          }
      ],
        responses: {
          "200": {
            description: "Success Response",
            content: "application/json",
          },
          "400": {
            description: "Failed",
            content: "application/json",
          },
        },
      },
    },

    "/workershift": {
      get: {
        summary: "Get worker shift",
        produces: ["application/json"],
        parameters: [
          { name: "workerId", in: "query" },
        //  { name: "pagesize", in: "query" },
        ],
        responses: {
          "200": {
            description: "Success Response",
            content: "application/json",
          },
          "400": {
            description: "Failed",
            content: "application/json",
          },
        },
      },
      post: {
        summary: "save worker shift",
        produces: ["application/json"],
        "parameters": [
          {
            "name": "workershift",
            "in": "body",
            "description": "Save Worker Shift",
            "schema": {
              "$ref": "#/definitions/WorkerShift"
            }
          }
      ],
        responses: {
          "200": {
            description: "Success Response",
            content: "application/json",
          },
          "400": {
            description: "Failed",
            content: "application/json",
          },
        },
      },
    },
  },

  "definitions": {    
    "Worker": {
      "properties": {
        "id": {
          "type": "integer"
        },
        "workerName": {
          "type": "string"
        },
        "isActive": {
          "type": "integer",
          "enum": [1, 0]
        }
      }
    },
    "WorkerShift": {
      "properties": {
        "workerId": {
          "type": "integer"
        },
        "shiftDate": {
          "type": "YYYY-MM-DD",
          
        },
        "shift": {
          "type": "string",
          "enum": ['0-8', '8-16','16-24']
        },
        
      }
    },
     }
};
