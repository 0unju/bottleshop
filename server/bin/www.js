#!/usr/bin/env node
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

//@ database
mongoose.set("strictQuery", true);
mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용

mongoose
  .connect(process.env.MONGO_URI)
  .then((response) => {
    console.log("Successfully connected to mongodb");
  })
  .catch((e) => {
    console.error(e);
  });

/**
 * Module dependencies.
 */
import app from "../app.js";
import debug from "debug";
import http from "http";

// const app = require('../app');
// const debug = require('debug')('server:server');
// const http = require('http');

/**
 * Get port from environment and store in Express.
 */

// const port = normalizePort(process.env.PORT);
const port = normalizePort("8080");
app.set("port", port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log("Bottleshop is listening to port 5000"));
server.on("error", onError);
server.on("listening", onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}