var topicHandler = require("./topic.js");

var subscribers = [];
var uid = 0;

var sub = function(pattern, callback) {
    uid++;
    subscribers.push({pattern:pattern,cb:callback,id:uid,active:true,qos:0});
    return uid;
}

var pub = function(topic,message) {
    var sends = subscribers.filter(function(q) {
        if (q.active===false) return false;
        return topicHandler.match(topic,q.pattern)
    })
    for (var i=0;i<sends.length;i++) {
        var send = sends[i];
        send.cb(message,topic,send.pattern)
    }
}

module.exports = {
    pub:pub,
    sub:sub
}