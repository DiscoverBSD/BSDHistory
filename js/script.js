 // http://codepen.io/KryptoniteDove/blog/load-json-file-locally-using-pure-javascript
 function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        var files = ["freebsd.json","hardenedbsd.json","midnightbsd.json","miros.json","monowall.json","netbsd.json","openbsd.json", "opnsense.json", "pfsense.json"];
        var file = files[Math.floor(Math.random()*files.length)];
        xobj.open('GET', '../data/'+file, true);
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
    var twitter_link = "http://twitter.com/intent/tweet?text="+item.text+"+https://bsdhistory.discoverbsd.com";
    twitter_link = twitter_link.replace(/#/gi, "%23");
    document.getElementById("link-twitter").href=twitter_link;
 });
}
init();
