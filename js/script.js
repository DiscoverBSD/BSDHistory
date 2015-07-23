 // http://codepen.io/KryptoniteDove/blog/load-json-file-locally-using-pure-javascript
 function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', '../data/data.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);
 }

 function init() {
 loadJSON(function(response) {
  // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    var items = actual_JSON.bsdhistory;
    var item = items[Math.floor(Math.random()*items.length)];
    document.getElementById("text").innerHTML = item.text;
    document.getElementById("link-source").href=item.link;
    var twitter_link = "http://twitter.com/intent/tweet?status="+item.text+"+https://bsdhistory.discoverbsd.com";
    twitter_link = twitter_link.replace(/#/gi, "%23");
    document.getElementById("link-twitter").href=twitter_link;
 });
}
init();
