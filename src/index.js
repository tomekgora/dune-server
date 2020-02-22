const express = require("express");
const cors = require("cors");
const port = 4000;

const app = express();

// Here be Middleware

// Listen App for plans within plans
app.listen(port, () => console.log(`Listening on port ${port}`));
