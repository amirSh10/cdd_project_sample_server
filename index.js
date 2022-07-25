const express=require("express");
const app= express();
app.use(express.json());

const cors = require("cors");
app.use(cors({
  origin: function(origin, callback){
    return callback(null, true);
  }

}));



app.use(`/api/apis/`,require("./apis.js"))


const port=process.env.PORT||3001;
app.listen(port,console.log(`we are listening${port}`))