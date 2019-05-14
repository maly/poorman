var broker = require("../broker.js");

var universalCB = function(msg,t,p) {
    console.log("***",t,p,msg)
}

broker.sub("#",universalCB)
broker.sub("a/b",universalCB)
broker.sub("a/b/c",universalCB)
broker.sub("a/+/c",universalCB)
broker.sub("a/b/#",universalCB)

broker.pub("a/b","AHOJ")
console.log("-------")

broker.pub("a/b/c","AHOJ")
console.log("-------")
broker.pub("a/b/c/d","AHOJ")
console.log("-------")
broker.pub("a/b/c/d/e","AHOJ")
console.log("-------")
