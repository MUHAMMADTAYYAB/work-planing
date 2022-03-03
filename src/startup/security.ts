const express = require("express");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const xssClean = require("xss-clean");

const handleCors = (app:any, host = null) => {
  app.options("*", cors());
  app.use(cors());
  /*
  // let whitelist = ["http://localhost:3001"];
  // let corsOptions = {
  //   origin: function (origin: any, callback: any) {
  //     if (whitelist.indexOf(origin) !== -1 || !origin) {
  //       callback(null, true);
  //     } else {
  //       callback(new Error("Not allowed by CORS"));
  //     }
  //   },
  // };
  // app.use(cors(corsOptions));
  */
};

const scan = (app:any) => {
  app.use(compression());
  app.use(helmet());
  app.use(express.json()); //req.body into json
  app.use(express.urlencoded({ extended: true })); //extended true for advance data
  app.use(xssClean());
};

export = {
  handleCors,
  scan,
};
