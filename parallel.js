var parallel = function(fns,cb) {
    var cnt = 0;
    var errx = null;
    for(var i=0;i<fns.length;i++) {
        var act = fns[i];
        cnt++;
        act(
            function(err,data) {
                if (errx) return;
                if (err) {errx = err; cb(err);return;}  //only one
                cnt--;
                if (cnt===0) cb (null,data)
            }
        )
    }
}

module.exports = parallel;