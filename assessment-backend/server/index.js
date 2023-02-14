const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const  {getFortune}  = require("./controller");
const {somethingNew} = require("./controller");
const {goodSpeakers} = require("./controller");
const {yourGoals} = require("./controller");
const{youDelete} = require("./controller")

app.get(`/api/fortune`, getFortune )
app.get(`/api/fortune/:id`, somethingNew)
app.get(`/api/speaker`, goodSpeakers)
app.post(`/api/update`, yourGoals)
app.delete(`/api/fortune/update/:id`, youDelete)

app.listen(4000, () => console.log("Server running on 4000"));
