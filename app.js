const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const userRoutes = require("./router/user");
const walletRoutes = require("./router/wallet");

app.use("/api/user", userRoutes);
app.use("/api/wallet", walletRoutes);

db.sequelize.sync().then((res) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
