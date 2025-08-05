const app = require("./src/app");
const connectDB = require("./src/db/db");
require("dotenv").config();

connectDB();

app.listen( 4000, (req, res) => {
  console.log("server started at port 4000");
});
