
var GameGlobal = this;
var window = this;
var global = this;
window["isNewVersion"] = true;
window["sharedCanvas"] = {}
window.global=this;
var console = {
    log: function (msg) {
        if(window.LOG_MODE_DEBUG) {
            BK.Script.log(2, 2, "console log: " + contact(arguments))
        }
    },
    warn:function (msg) {
        BK.Script.log(3, 3, "console warn: " + contact(arguments))
    },
    error: function (msg) {
        BK.Script.log(4, 4, "console error: " + contact(arguments))
    },
    info:function (msg) {
        BK.Script.log(5, 5, "console info: " + contact(arguments))
    },
    debug:function (msg) {
        BK.Script.log(6, 6, "console debug: " + contact(arguments))
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
        BK.Script.log(0,0,"console exception : "+e);
    }
    return result
};


//config
window.LOG_MODE_DEBUG = true;
window.ENGINE_NAME = "";
var configPath = "GameRes://gameConfig.json";
if(BK.FileUtil.isFileExist(configPath)){
    const LOG_MODE = "debug";
    const ENGINE = "engine";
    var configList = JSON.parse(BK.FileUtil.readFile(configPath).readAsString());
    if(configList){
        window.LOG_MODE_DEBUG = !!configList[LOG_MODE];
        if(window.LOG_MODE_DEBUG){
            console.log("config :"+JSON.stringify(configList));
        }
        window.ENGINE_NAME = configList[ENGINE];
    }
}else {
    console.error("config not found");
}

if(window.ENGINE_NAME  === 'egret'){
    window.promise = {};
}
BK.Script.logToConsole = window.LOG_MODE_DEBUG ? 1 : 0;
BK.Script.loadlib("GameRes://qqPlayCore.js");
BK.Script.loadlib("GameRes://brick_wxadapter.js");
BK.Script.loadlib("GameRes://promise.js");
BK.Script.loadlib("GameRes://entry.js");


