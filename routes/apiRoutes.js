const request = require("superagent");

const instance = "us7";
const listUnqueId = "80eab11220"
require("dotenv").config();

module.exports = function (app) {

  app.post("/", function (req, res) {
    let newEmail = req.body.email;
    console.log(newEmail);
    addNewEmailToMailChimp(newEmail, res);
    // res.end("Sucessfully posted!!");

    

  })//end of post

function addNewEmailToMailChimp(email, res) {
  let apiKey = process.env.API_KEY

  request
    .post(`https://${instance}.api.mailchimp.com/3.0//lists/${listUnqueId}/members/`)
    .set("Content-Type", "application/json;charset=utf-8")
    .set("Authorization", "Basic " + new Buffer("any:" + apiKey ).toString("base64"))
    .send({
      "email_address": email,
      "status": "subscribed",
    })
        .end(function(err, response) {
          console.log("Response.body: ", (response.body))
          console.log("Response.body.title: ", (response.body.title))
          console.log("Response.status: ", (response.status))

          if (response.status < 300) {
            res.send("Successful Sign Up!");
          } else if (response.status === 400) {
              if (response.body.title === "Member Exists") {
                res.send ("Already Signed up!");
              } else if (response.body.title === "Invalid Resource") {
                res.send("Please enter a valid email!")
              }
          } else {
            res.send("Sign up Failed!");
          }
      });
  
  
}//end of addNewEmailToMailChimp

}