var delayP = function(sec) {
    return new Promise(function(resolve,reject){
    setTimeout(resolve, sec*1000)
    })
}

var fnx = function(sec,msg) {
    return delayP(sec).then(function(){console.log(msg)})
}

fnx(3,"FN1, T 3")
.then(fnx(5,"FN2, T 5"))
.then(fnx(1,"FN3, T 1"))