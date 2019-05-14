var topic = require("../topic.js");

var test = function(top,match,should) {
    if (topic.match(top,match) === should) {
        console.log(top,match,"OK")
    } else {
        console.error(top,match,"ERROR")
    }
}

var t = "a/b/c/d/e";

test(t,"nn",false);
test(t,"a/b/c/d",false);
test(t,"a/b/+/d",false);
test(t,"a/b/c/d/e",true);
test(t,"a/+/+/d/e",true);
test(t,"a/+/+/f/e",false);
test(t,"a/b/c/#",true);
test(t,"a/#",true);
