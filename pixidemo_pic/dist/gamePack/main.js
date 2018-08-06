
var GameGlobal = this;
var window = this;
var global = this;
window["isNewVersion"] = true;
var console = {
    log: function (msg) {
        BK.Script.log(0, 0, "console log: " + contact(arguments))
    },
    warn:function (msg) {
        BK.Script.log(1, 0, "console warn: " + contact(arguments))
    },
    error: function (msg) {
        BK.Script.log(2, 0, "console error: " + contact(arguments))
    },
    info:function (msg) {
        BK.Script.log(0, 0, "console info: " + contact(arguments))
    },
    debug:function (msg) {
        BK.Script.log(0, 0, "console debug: " + contact(arguments))
    }
};
function contact(list){
    var result = "";
    try{
        if(list){
            [].map.call(list,function(val){
                if(val) {
                    result += (" # " + val)
                }
            })
        }
    }catch (e) {
        BK.Script.log(0,0,"Exception : "+e);
    }

    return result

}
BK.Script.loadlib("GameRes://qqPlayCore.js")
BK.Script.loadlib("GameRes://brick_wxadapter.js");
window.Promise={};
BK.Script.loadlib("GameRes://promise.js");
BK.Script.loadlib("GameRes://entry.js");


