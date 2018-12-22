const express = require("express");
const bodyParser = require("body-parser");
const path = require ("path");

const PORT = process.env.PORT || 3000;

const app = express();


app.use(bodyParser.urlencoded({extended:true}));
//parse application/json
app.use(bodyParser.json());

//Routing
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.use(express.static(path.join(__dirname, 'public'))); //Serves resources from public folder



app.listen(PORT, function() {
  console.log("App listening on PORT:  " + PORT);
});
