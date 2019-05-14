var serial = function(fns,cb) {
    var act = fns.shift();
    console.log("Q",fns)
    act(
        function(err,data) {
            if (err) {cb(err);return;}
            if (fns.length) serial(fns,cb);
            else cb(null)
        }
    )

}

module.exports = serial;