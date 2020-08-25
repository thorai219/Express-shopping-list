const express = require("express");
const app = express();
const ExpressError = require('./expressError');
const shoppingListRoutes = require("./routes/shopListRoutes")

app.use(express.json());
app.use("/items", shoppingListRoutes)

app.use((req, res, next) => {
  return new ExpressError("Not Found", 404);
})

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    message: err.message
  });
});


module.exports = app;