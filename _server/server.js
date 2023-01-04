const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Body parser middleware //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// fucking cors //
app.use(cors());
app.options('*', cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const sessionMiddleware = require('./modules/session-middleware');
app.use(sessionMiddleware);
// var cookieParser = require('cookie-parser');
// app.use(cookieParser());


// ----- Routes ----- //
const currentDateRouter = require('../_server/routes/currentDate.router');
const categoryRouter = require('../_server/routes/category.router');
const keywordRouter = require('../_server/routes/keyword.router');
app.use('/api/date', currentDateRouter);
app.use('/api/category', categoryRouter);

// App Set //
app.set("port", process.env.PORT || 5050);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
}

// ----- Listen ----- //
app.listen(app.get("port"), () => {
  console.log(`server connected at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
