var parallel = require("../parallel.js")

var waitCB = function(sec,cb) {
    setTimeout(cb, sec*1000)
}

var fnx = function(sec,msg,cb) {
    waitCB(sec,function(){console.log(msg);cb(null)})
}

//function prototype
// fn (cb)
// callback: fn (err,data)

var fns = [
    function(cb){
        fnx(3,"FN1, T 3", function(e,d) {cb(false)})
    },
    function(cb){
        fnx(5,"FN2, T 5", function(e,d) {cb(false)})
    },
    function(cb){
        fnx(1,"FN3, T 1", function(e,d) {cb(false)})
    }
]

parallel(fns,function(e,d){console.log("DONE",e,d)})