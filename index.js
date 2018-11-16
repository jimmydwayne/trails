// npm config set registry http://registry.npmjs.org/
// npm config set registry http://artifacts.apiture.com/repository/npm-group/

var request = require("request");
var cheerio = require("cheerio");
var options = {
  headers: { "user-agent": "node.js" }
};

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
      .first()
      .text();
    var first = list2.toString().trim();
    // console.log(first);
  }
});

// let scoreArr = (titleArr = []);
// var html = request("http://capefearsorba.org/", options, function(
//   err,
//   resp,
//   html
// ) {
//   if (!err) {
//     const $ = cheerio.load(html);
//     // console.log(html);
//     var slider = $("#edn-effect-slider").children();
//     var list = slider.find("li").text();
//     for (var i = 0; i < list.length; i++) {
//       var trails = list[i];
//       scoreArr.push()
//       // alert(arrValue);
//     }
//     console.log(trails);
//   }
// });

//Scrape karma scores
let scoreArr = (titleArr = []);
request("http://capefearsorba.org/", (err, res, body) => {
  const $ = cheerio.load(body);

  $("#edn-effect-slider").attr("li", (i, val) => {
    scoreArr.push(val);
  });
});

console.log(scoreArr.toString().trim());
