const express = require("express");
const hardware = require("./router/hardware");
const peripherals = require("./router/peripherals");
const app = express();
const port = process.env.PORT || 3000;

app.use("/hardware", hardware);
app.use("/peripherals", peripherals);

app.listen(port, () => {
  console.log(`bu portu  ${port} dinliyorum`);
});
