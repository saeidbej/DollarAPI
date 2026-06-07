const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
res.json({
status: "online",
message: "Dollar API Server Running"
});
});

app.get("/prices", (req, res) => {
res.json({
herat_today: 175000,
herat_tomorrow: 175650,
ounce_gold: 4328
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Server running on port " + PORT);
});
