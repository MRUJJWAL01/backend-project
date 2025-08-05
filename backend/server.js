const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

connectDB();

app.listen(process.env.PORT || 3000, (req, res) => {
  console.log("server started at port 3000");
});
