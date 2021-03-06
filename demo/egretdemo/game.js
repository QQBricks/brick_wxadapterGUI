require('./weapp-adapter.js');
require('./platform.js');
require('./manifest.js');
require('./egret.wxgame.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
require('./library/image.js');
require('./library/text.js');
window["sharedCanvas"] = wx.createCanvas();

GameGlobal.Promise = {};

BK.Script.loadlib("GameRes://promise.js");

egret.runEgret({
    //以下为自动修改，请勿修改
    //The following is automatically modified, please do not modify
    //----auto option start----
    entryClassName: "Main",
    orientation: "portrait",
    frameRate: 60,
    scaleMode: "fixedWidth",
    contentWidth: 640,
    contentHeight: 1140,
    showFPS: false,
    fpsStyles: "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9",
    showLog: false,
    maxTouches: 2,
    //----auto option end----
    renderMode: 'canvas',
    audioType: 0,
    calculateCanvasScaleFactor: function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    }
});

// require("egret.min.js")

