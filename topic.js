var parse = function(topic) {
    return topic.split("/");
}

var match = function(topic,pattern) {
    var pt = parse(pattern);
    var tt = parse(topic);
    var top = 0;
    for (var i=0;i<pt.length;i++) {
        if (top>(tt.length-1)) return false;
        var ps = pt[i];
        var ts = tt[top];
        if (ps === ts) {
            //equal
            top++;
            continue;
        }
        if (ps === "+") {
            top++;
            continue;
        }
        if (ps === "#") {
            return true;
        }
        return false;
    }
    return top==tt.length;
}

module.exports = {
    parse:parse,
    match:match
}