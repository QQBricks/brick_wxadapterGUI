var GameGlobal = this;
var window = this;
var global = this;
var console = {
    log: function (msg) {
        BK.Script.log(0, 0, "console log: " + msg)
    },
    warn:function (msg) {
        BK.Script.log(1, 0, "console warn: " + msg)
    },
    error: function (msg) {
        BK.Script.log(2, 0, "console error: " + msg)
    },
    info:function (msg) {
        BK.Script.log(0, 0, "console info: " + msg)
    },
    debug:function (msg) {
        BK.Script.log(0, 0, "console debug: " + msg)
    }
};
BK.Script.logToConsole = 1

this.pixelRatio = BK.Director.screenPixelSize.width / BK.Director.renderSize.width;
BK.Script.loadlib("GameRes://qqPlayCore.js");
BK.Script.loadlib("GameRes://entry.js");


