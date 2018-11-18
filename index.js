// npm config set registry http://registry.npmjs.org/
// npm config set registry http://artifacts.apiture.com/repository/npm-group/

var request = require("request");
var cheerio = require("cheerio");
var options = {
  headers: { "user-agent": "node.js" }
};
// var data = [];
//finds and returns the text of the first li in the slider
var html = request("http://capefearsorba.org/", options, function(
  err,
  resp,
  html
) {
  if (!err) {
    const $ = cheerio.load(html);
    // console.log(html);
    let list = $("#edn-effect-slider");
    var list2 = list
      .find("li")
      .text()
      .replace(/(\r\n|\n|\r)/gm, "");
    var data = list2.split("  ");
    var filtered = data.filter(function(el) {
      return el != "";
    });
    var trails = filtered;
    console.log(trails);
  }
});
