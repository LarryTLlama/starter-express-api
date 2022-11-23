const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require("morgan")
const app = express();
app.use(morgan("dev"))
app.use('/', createProxyMiddleware())

app.listen(process.env.PORT || 3000)
