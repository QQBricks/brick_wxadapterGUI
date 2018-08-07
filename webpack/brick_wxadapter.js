/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = {
   d: function d(level, code, message) {
      BK.Script.log(level, code, message);
   }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setTimeout = setTimeout;
exports.clearTimeout = clearTimeout;
exports.requestAnimationFrame = requestAnimationFrame;
exports.setPreferredFramesPerSecond = setPreferredFramesPerSecond;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.setInterval = setInterval;
exports.clearInterval = clearInterval;
GameGlobal.timers = {};
GameGlobal.intervals = {};
GameGlobal._fpsinterval = 0;
var lastID = 0;
var lastIntervalID = 0;

BK.Director.ticker.add(function (ts, du) {
    Object.keys(GameGlobal.timers).map(function (k) {
        var v = GameGlobal.timers[k];
        if (v.b + v.t <= ts) {
            delete GameGlobal.timers[k];
            v.f(ts);
        }
    });
});

var lastTime = 0;

function setTimeout(fn, delay) {
    if (!delay) {
        delay = 0;
    }
    var id = ++lastID;
    GameGlobal.timers[id] = {
        b: Date.now(),
        t: delay,
        f: fn
    };
    return id;
}

function clearTimeout(id) {
    delete GameGlobal.timers[id];
}

function requestAnimationFrame(callback) {
    var currTime = new Date().getTime();
    var timeToCall = GameGlobal._fpsinterval;
    var id = setTimeout(callback, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
}

function setPreferredFramesPerSecond(fps) {
    GameGlobal._fpsinterval = 1 - fps * 1 / 60;
}

function cancelAnimationFrame(id) {
    clearTimeout(id);
}

function setInterval(fn, delay) {
    var t = new BK.Ticker();
    t.interval = delay * 60 / 1000;
    t.setTickerCallBack(function (ts, duration) {
        fn();
    });
    var id = ++lastIntervalID;
    GameGlobal.intervals[id] = { i: id, ticker: t };
    return id;
}

function clearInterval(t) {
    if (t && GameGlobal.intervals[t]) {
        GameGlobal.intervals[t].ticker.dispose();
        delete GameGlobal.intervals[t];
    }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 资源路径解析
 * @param path
 */

var SRC_PRE = "GameRes://";
var SAND_PRE = "GameSandBox://";

var SCHEMA_RES = "GameRes";
var SCHEMA_SAND = "GameSandBox";

var Path = function () {
    function Path() {
        _classCallCheck(this, Path);
    }

    _createClass(Path, null, [{
        key: "getPath",
        value: function getPath(path) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SCHEMA_RES;

            var realPath = path;
            if (type === SCHEMA_RES) {
                realPath = SRC_PRE + realPath;
            } else if (type === SCHEMA_SAND) {
                realPath = SAND_PRE + realPath;
            }
            return realPath;
        }
    }]);

    return Path;
}();

exports.default = Path;

Path.SCHEMA_RES = SCHEMA_RES;
Path.SCHEMA_SAND = SCHEMA_SAND;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isRemoteUrl = isRemoteUrl;
exports.wrapLocalUrl = wrapLocalUrl;
exports.wrapSandBoxPath = wrapSandBoxPath;
exports.extractFileNameFromUrl = extractFileNameFromUrl;
exports.extractFilePathFromUrl = extractFilePathFromUrl;
exports.getImgPath = getImgPath;
exports.getAudioPath = getAudioPath;
exports.hexToRgb = hexToRgb;
exports.colourNameToHex = colourNameToHex;
var GAME_RES_PREFIX = "GameRes://";
var GAME_SANDBOX_PREFIX = "GameSandBox://";

/**
 * 工具类
 */

function isRemoteUrl(url) {
    return (/^https?:\/\//.test(url)
    );
}

function wrapLocalUrl(url) {
    if (url.indexOf('//') == 0) {
        url = url.substring(1);
    }
    if (/^GameRes:\/\//.test(url)) {
        return url;
    } else {
        return 'GameRes://' + url.replace(/^\.*\//, '');
    }
}

function wrapSandBoxPath(url) {
    if (url.indexOf('//') == 0) {
        url = url.substring(1);
    }
    if (/^GameSandBox:\/\//.test(url)) {
        return url;
    } else {
        return 'GameSandBox://' + url.replace(/^\.*\//, '');
    }
}

function extractFileNameFromUrl(url) {
    var pos = url.lastIndexOf("/");
    if (pos == -1) {
        pos = url.lastIndexOf("\\");
    }
    var filename = url.substr(pos + 1);
    return filename;
}

function extractFilePathFromUrl(url) {
    var start = 0;
    if (url.startsWith("https")) {
        start = url.substr(8).indexOf("/") + 9;
    } else if (url.startWitch("http")) {
        start = url.substr(7).indexOf("/") + 8;
    } else {
        start = url.indexOf("/") + 1;
    }
    var stop = url.lastIndexOf("/");
    return url.substring(start, stop) + "/";
}

function getImgPath(url) {
    var localPath = void 0;
    if (isRemoteUrl(url)) {
        var fileName = extractFileNameFromUrl(url);
        localPath = wrapSandBoxPath("download/images/" + fileName);
    } else {
        // local img
        if (url.indexOf(GAME_RES_PREFIX) == 0 || url.indexOf(GAME_SANDBOX_PREFIX) == 0) {
            localPath = url;
        } else {
            localPath = wrapLocalUrl(url);
            if (!BK.FileUtil.isFileExist(localPath)) {
                localPath = wrapSandBoxPath(url);
            }
        }
    }
    return localPath;
}

function getAudioPath(url) {
    var localPath = void 0;
    if (isRemoteUrl(url)) {
        var fileName = extractFileNameFromUrl(url);
        localPath = wrapSandBoxPath("download/audio/" + fileName);
    } else {
        // local img
        localPath = wrapLocalUrl(url);
    }
    return localPath;
}

/**
 * string to rgba
 * @param hex
 * @returns {*}
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: parseInt(result[4], 16)
    } : null;
}
function colourNameToHex(colour) {
    var colours = { "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
        "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
        "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
        "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
        "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
        "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
        "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
        "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
        "honeydew": "#f0fff0", "hotpink": "#ff69b4",
        "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
        "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
        "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
        "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
        "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
        "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
        "navajowhite": "#ffdead", "navy": "#000080",
        "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
        "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
        "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
        "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
        "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
        "violet": "#ee82ee",
        "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
        "yellow": "#ffff00", "yellowgreen": "#9acd32" };

    if (typeof colours[colour.toLowerCase()] != 'undefined') return colours[colour.toLowerCase()];

    return false;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 事件封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function () {
    function Event() {
        _classCallCheck(this, Event);

        this.touchEventStartcb = [];
        this.touchEventMovecb = [];
        this.touchEventEndcb = [];
        this.touchEventCancelcb = [];
    }

    _createClass(Event, [{
        key: "dispatchEvent",
        value: function dispatchEvent() {
            var that = this;
            BK.Director.ticker.add(function () {
                var touchArr = BK.TouchEvent.getTouchEvent();

                if (touchArr != undefined) {
                    var touchs = touchArr.map(function (t) {
                        var x = t.x;
                        var y = BK.Director.screenPixelSize.height - t.y;
                        //缩放
                        var rate = BK.Director.screenPixelSize.width / BK.Director.renderSize.width;
                        x = x;
                        y = y;
                        var tmp = {
                            "identifier": t.id,
                            "id": t.id,
                            "screenX": x / rate, "screenY": y / rate, "clientX": x, "clientY": y, "pageX": x / rate, "pageY": y / rate
                        };
                        if (t.status == 2) {
                            that.touchEventStartcb.map(function (i) {
                                i({ "touches": [tmp], "changedTouches": [tmp], "timeStamp": Date.now(), "preventDefault": function preventDefault() {} });
                            });
                        } else if (t.status == 3) {
                            that.touchEventMovecb.map(function (i) {
                                i({ "touches": [tmp], "changedTouches": [tmp], "timeStamp": Date.now(), "preventDefault": function preventDefault() {} });
                            });
                        } else if (t.status == 1) {
                            that.touchEventEndcb.map(function (i) {
                                i({ "touches": [tmp], "changedTouches": [tmp], "timeStamp": Date.now(), "preventDefault": function preventDefault() {} });
                            });
                        }
                        return tmp;
                    }, that);
                }
                BK.TouchEvent.updateTouchStatus();
            });
        }
    }, {
        key: "onTouchStart",
        value: function onTouchStart(callback) {
            if (callback != null) {
                this.touchEventStartcb.push(callback);
            }
        }
    }, {
        key: "onTouchMove",
        value: function onTouchMove(callback) {
            this.touchEventMovecb.push(callback);
        }
    }, {
        key: "onTouchCancel",
        value: function onTouchCancel(callback) {
            this.touchEventCancelcb.push(callback);
        }
    }, {
        key: "onTouchEnd",
        value: function onTouchEnd(callback) {
            this.touchEventEndcb.push(callback);
        }
    }, {
        key: "offTouchStart",
        value: function offTouchStart(callback) {
            var index = this.touchEventStartcb.indexOf(callback);
            this.touchEventStartcb.splice(index, 1);
        }
    }, {
        key: "offTouchMove",
        value: function offTouchMove(callback) {
            var index = this.touchEventMovecb.indexOf(callback);
            this.touchEventMovecb.splice(index, 1);
        }
    }, {
        key: "offTouchCancel",
        value: function offTouchCancel(callback) {
            var index = this.touchEventCancelcb.indexOf(callback);
            this.touchEventCancelcb.splice(index, 1);
        }
    }, {
        key: "offTouchEnd",
        value: function offTouchEnd(callback) {
            var index = this.touchEventEndcb.indexOf(callback);
            this.touchEventEndcb.splice(index, 1);
        }
    }]);

    return Event;
}();

var event = new Event();
event.dispatchEvent();
exports.default = event;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
 * DOM Level 2
 * Object DOMException
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 */

function copy(src,dest){
	for(var p in src){
		dest[p] = src[p];
	}
}
/**
^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
 */
function _extends(Class,Super){
	var pt = Class.prototype;
	if(Object.create){
		var ppt = Object.create(Super.prototype)
		pt.__proto__ = ppt;
	}
	if(!(pt instanceof Super)){
		function t(){};
		t.prototype = Super.prototype;
		t = new t();
		copy(pt,t);
		Class.prototype = pt = t;
	}
	if(pt.constructor != Class){
		if(typeof Class != 'function'){
			console.error("unknow Class:"+Class)
		}
		pt.constructor = Class
	}
}
var htmlns = 'http://www.w3.org/1999/xhtml' ;
// Node Types
var NodeType = {}
var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

// ExceptionCode
var ExceptionCode = {}
var ExceptionMessage = {};
var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
//level2
var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);


function DOMException(code, message) {
	if(message instanceof Error){
		var error = message;
	}else{
		error = this;
		Error.call(this, ExceptionMessage[code]);
		this.message = ExceptionMessage[code];
		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
	}
	error.code = code;
	if(message) this.message = this.message + ": " + message;
	return error;
};
DOMException.prototype = Error.prototype;
copy(ExceptionCode,DOMException)
/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 */
function NodeList() {
};
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
	 * @standard level1
	 */
	length:0, 
	/**
	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
	 * @standard level1
	 * @param index  unsigned long 
	 *   Index into the collection.
	 * @return Node
	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
	 */
	item: function(index) {
		return this[index] || null;
	},
	toString:function(isHTML,nodeFilter){
		for(var buf = [], i = 0;i<this.length;i++){
			serializeToString(this[i],buf,isHTML,nodeFilter);
		}
		return buf.join('');
	}
};
function LiveNodeList(node,refresh){
	this._node = node;
	this._refresh = refresh
	_updateLiveList(this);
}
function _updateLiveList(list){
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if(list._inc != inc){
		var ls = list._refresh(list._node);
		//console.log(ls.length)
		__set__(list,'length',ls.length);
		copy(ls,list);
		list._inc = inc;
	}
}
LiveNodeList.prototype.item = function(i){
	_updateLiveList(this);
	return this[i];
}

_extends(LiveNodeList,NodeList);
/**
 * 
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities 
 */
function NamedNodeMap() {
};

function _findNodeIndex(list,node){
	var i = list.length;
	while(i--){
		if(list[i] === node){return i}
	}
}

function _addNamedNode(el,list,newAttr,oldAttr){
	if(oldAttr){
		list[_findNodeIndex(list,oldAttr)] = newAttr;
	}else{
		list[list.length++] = newAttr;
	}
	if(el){
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if(doc){
			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
			_onAddAttribute(doc,el,newAttr);
		}
	}
}
function _removeNamedNode(el,list,attr){
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list,attr);
	if(i>=0){
		var lastIndex = list.length-1
		while(i<lastIndex){
			list[i] = list[++i]
		}
		list.length = lastIndex;
		if(el){
			var doc = el.ownerDocument;
			if(doc){
				_onRemoveAttribute(doc,el,attr);
				attr.ownerElement = null;
			}
		}
	}else{
		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
	}
}
NamedNodeMap.prototype = {
	length:0,
	item:NodeList.prototype.item,
	getNamedItem: function(key) {
//		if(key.indexOf(':')>0 || key == 'xmlns'){
//			return null;
//		}
		//console.log()
		var i = this.length;
		while(i--){
			var attr = this[i];
			//console.log(attr.nodeName,key)
			if(attr.nodeName == key){
				return attr;
			}
		}
	},
	setNamedItem: function(attr) {
		var el = attr.ownerElement;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItem(attr.nodeName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},
	/* returns Node */
	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
		var el = attr.ownerElement, oldAttr;
		if(el && el!=this._ownerElement){
			throw new DOMException(INUSE_ATTRIBUTE_ERR);
		}
		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
		_addNamedNode(this._ownerElement,this,attr,oldAttr);
		return oldAttr;
	},

	/* returns Node */
	removeNamedItem: function(key) {
		var attr = this.getNamedItem(key);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
		
		
	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
	
	//for level2
	removeNamedItemNS:function(namespaceURI,localName){
		var attr = this.getNamedItemNS(namespaceURI,localName);
		_removeNamedNode(this._ownerElement,this,attr);
		return attr;
	},
	getNamedItemNS: function(namespaceURI, localName) {
		var i = this.length;
		while(i--){
			var node = this[i];
			if(node.localName == localName && node.namespaceURI == namespaceURI){
				return node;
			}
		}
		return null;
	}
};
/**
 * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
 */
function DOMImplementation(/* Object */ features) {
	this._features = {};
	if (features) {
		for (var feature in features) {
			 this._features = features[feature];
		}
	}
};

DOMImplementation.prototype = {
	hasFeature: function(/* string */ feature, /* string */ version) {
		var versions = this._features[feature.toLowerCase()];
		if (versions && (!version || version in versions)) {
			return true;
		} else {
			return false;
		}
	},
	// Introduced in DOM Level 2:
	createDocument:function(namespaceURI,  qualifiedName, doctype){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
		var doc = new Document();
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype;
		if(doctype){
			doc.appendChild(doctype);
		}
		if(qualifiedName){
			var root = doc.createElementNS(namespaceURI,qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	// Introduced in DOM Level 2:
	createDocumentType:function(qualifiedName, publicId, systemId){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
		var node = new DocumentType();
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId;
		node.systemId = systemId;
		// Introduced in DOM Level 2:
		//readonly attribute DOMString        internalSubset;
		
		//TODO:..
		//  readonly attribute NamedNodeMap     entities;
		//  readonly attribute NamedNodeMap     notations;
		return node;
	}
};


/**
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 */

function Node() {
};

Node.prototype = {
	firstChild : null,
	lastChild : null,
	previousSibling : null,
	nextSibling : null,
	attributes : null,
	parentNode : null,
	childNodes : null,
	ownerDocument : null,
	nodeValue : null,
	namespaceURI : null,
	prefix : null,
	localName : null,
	// Modified in DOM Level 2:
	insertBefore:function(newChild, refChild){//raises 
		return _insertBefore(this,newChild,refChild);
	},
	replaceChild:function(newChild, oldChild){//raises 
		this.insertBefore(newChild,oldChild);
		if(oldChild){
			this.removeChild(oldChild);
		}
	},
	removeChild:function(oldChild){
		return _removeChild(this,oldChild);
	},
	appendChild:function(newChild){
		return this.insertBefore(newChild,null);
	},
	hasChildNodes:function(){
		return this.firstChild != null;
	},
	cloneNode:function(deep){
		return cloneNode(this.ownerDocument||this,this,deep);
	},
	// Modified in DOM Level 2:
	normalize:function(){
		var child = this.firstChild;
		while(child){
			var next = child.nextSibling;
			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
				this.removeChild(next);
				child.appendData(next.data);
			}else{
				child.normalize();
				child = next;
			}
		}
	},
  	// Introduced in DOM Level 2:
	isSupported:function(feature, version){
		return this.ownerDocument.implementation.hasFeature(feature,version);
	},
    // Introduced in DOM Level 2:
    hasAttributes:function(){
    	return this.attributes.length>0;
    },
    lookupPrefix:function(namespaceURI){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			for(var n in map){
    				if(map[n] == namespaceURI){
    					return n;
    				}
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    lookupNamespaceURI:function(prefix){
    	var el = this;
    	while(el){
    		var map = el._nsMap;
    		//console.dir(map)
    		if(map){
    			if(prefix in map){
    				return map[prefix] ;
    			}
    		}
    		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
    	}
    	return null;
    },
    // Introduced in DOM Level 3:
    isDefaultNamespace:function(namespaceURI){
    	var prefix = this.lookupPrefix(namespaceURI);
    	return prefix == null;
    }
};


function _xmlEncoder(c){
	return c == '<' && '&lt;' ||
         c == '>' && '&gt;' ||
         c == '&' && '&amp;' ||
         c == '"' && '&quot;' ||
         '&#'+c.charCodeAt()+';'
}


copy(NodeType,Node);
copy(NodeType,Node.prototype);

/**
 * @param callback return true for continue,false for break
 * @return boolean true: break visit;
 */
function _visitNode(node,callback){
	if(callback(node)){
		return true;
	}
	if(node = node.firstChild){
		do{
			if(_visitNode(node,callback)){return true}
        }while(node=node.nextSibling)
    }
}



function Document(){
}
function _onAddAttribute(doc,el,newAttr){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value
	}
}
function _onRemoveAttribute(doc,el,newAttr,remove){
	doc && doc._inc++;
	var ns = newAttr.namespaceURI ;
	if(ns == 'http://www.w3.org/2000/xmlns/'){
		//update namespace
		delete el._nsMap[newAttr.prefix?newAttr.localName:'']
	}
}
function _onUpdateChild(doc,el,newChild){
	if(doc && doc._inc){
		doc._inc++;
		//update childNodes
		var cs = el.childNodes;
		if(newChild){
			cs[cs.length++] = newChild;
		}else{
			//console.log(1)
			var child = el.firstChild;
			var i = 0;
			while(child){
				cs[i++] = child;
				child =child.nextSibling;
			}
			cs.length = i;
		}
	}
}

/**
 * attributes;
 * children;
 * 
 * writeable properties:
 * nodeValue,Attr:value,CharacterData:data
 * prefix
 */
function _removeChild(parentNode,child){
	var previous = child.previousSibling;
	var next = child.nextSibling;
	if(previous){
		previous.nextSibling = next;
	}else{
		parentNode.firstChild = next
	}
	if(next){
		next.previousSibling = previous;
	}else{
		parentNode.lastChild = previous;
	}
	_onUpdateChild(parentNode.ownerDocument,parentNode);
	return child;
}
/**
 * preformance key(refChild == null)
 */
function _insertBefore(parentNode,newChild,nextChild){
	var cp = newChild.parentNode;
	if(cp){
		cp.removeChild(newChild);//remove and update
	}
	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
		var newFirst = newChild.firstChild;
		if (newFirst == null) {
			return newChild;
		}
		var newLast = newChild.lastChild;
	}else{
		newFirst = newLast = newChild;
	}
	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = nextChild;
	
	
	if(pre){
		pre.nextSibling = newFirst;
	}else{
		parentNode.firstChild = newFirst;
	}
	if(nextChild == null){
		parentNode.lastChild = newLast;
	}else{
		nextChild.previousSibling = newLast;
	}
	do{
		newFirst.parentNode = parentNode;
	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
	//console.log(parentNode.lastChild.nextSibling == null)
	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
		newChild.firstChild = newChild.lastChild = null;
	}
	return newChild;
}
function _appendSingleChild(parentNode,newChild){
	var cp = newChild.parentNode;
	if(cp){
		var pre = parentNode.lastChild;
		cp.removeChild(newChild);//remove and update
		var pre = parentNode.lastChild;
	}
	var pre = parentNode.lastChild;
	newChild.parentNode = parentNode;
	newChild.previousSibling = pre;
	newChild.nextSibling = null;
	if(pre){
		pre.nextSibling = newChild;
	}else{
		parentNode.firstChild = newChild;
	}
	parentNode.lastChild = newChild;
	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
	return newChild;
	//console.log("__aa",parentNode.lastChild.nextSibling == null)
}
Document.prototype = {
	//implementation : null,
	nodeName :  '#document',
	nodeType :  DOCUMENT_NODE,
	doctype :  null,
	documentElement :  null,
	_inc : 1,
	
	insertBefore :  function(newChild, refChild){//raises 
		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
			var child = newChild.firstChild;
			while(child){
				var next = child.nextSibling;
				this.insertBefore(child,refChild);
				child = next;
			}
			return newChild;
		}
		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
			this.documentElement = newChild;
		}
		
		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
	},
	removeChild :  function(oldChild){
		if(this.documentElement == oldChild){
			this.documentElement = null;
		}
		return _removeChild(this,oldChild);
	},
	// Introduced in DOM Level 2:
	importNode : function(importedNode,deep){
		return importNode(this,importedNode,deep);
	},
	// Introduced in DOM Level 2:
	getElementById :	function(id){
		var rtv = null;
		_visitNode(this.documentElement,function(node){
			if(node.nodeType == ELEMENT_NODE){
				if(node.getAttribute('id') == id){
					rtv = node;
					return true;
				}
			}
		})
		return rtv;
	},
	
	//document factory method:
	createElement :	function(tagName){
		var node = new Element();
		node.ownerDocument = this;
		node.nodeName = tagName;
		node.tagName = tagName;
		node.childNodes = new NodeList();
		var attrs	= node.attributes = new NamedNodeMap();
		attrs._ownerElement = node;
		return node;
	},
	createDocumentFragment :	function(){
		var node = new DocumentFragment();
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	createTextNode :	function(data){
		var node = new Text();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createComment :	function(data){
		var node = new Comment();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createCDATASection :	function(data){
		var node = new CDATASection();
		node.ownerDocument = this;
		node.appendData(data)
		return node;
	},
	createProcessingInstruction :	function(target,data){
		var node = new ProcessingInstruction();
		node.ownerDocument = this;
		node.tagName = node.target = target;
		node.nodeValue= node.data = data;
		return node;
	},
	createAttribute :	function(name){
		var node = new Attr();
		node.ownerDocument	= this;
		node.name = name;
		node.nodeName	= name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	createEntityReference :	function(name){
		var node = new EntityReference();
		node.ownerDocument	= this;
		node.nodeName	= name;
		return node;
	},
	// Introduced in DOM Level 2:
	createElementNS :	function(namespaceURI,qualifiedName){
		var node = new Element();
		var pl = qualifiedName.split(':');
		var attrs	= node.attributes = new NamedNodeMap();
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = namespaceURI;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	createAttributeNS :	function(namespaceURI,qualifiedName){
		var node = new Attr();
		var pl = qualifiedName.split(':');
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.namespaceURI = namespaceURI;
		node.specified = true;
		if(pl.length == 2){
			node.prefix = pl[0];
			node.localName = pl[1];
		}else{
			//el.prefix = null;
			node.localName = qualifiedName;
		}
		return node;
	}
};
_extends(Document,Node);


function Element() {
	this._nsMap = {};
};
Element.prototype = {
	nodeType : ELEMENT_NODE,
	hasAttribute : function(name){
		return this.getAttributeNode(name)!=null;
	},
	getAttribute : function(name){
		var attr = this.getAttributeNode(name);
		return attr && attr.value || '';
	},
	getAttributeNode : function(name){
		return this.attributes.getNamedItem(name);
	},
	setAttribute : function(name, value){
		var attr = this.ownerDocument.createAttribute(name);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	removeAttribute : function(name){
		var attr = this.getAttributeNode(name)
		attr && this.removeAttributeNode(attr);
	},
	
	//four real opeartion method
	appendChild:function(newChild){
		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
			return this.insertBefore(newChild,null);
		}else{
			return _appendSingleChild(this,newChild);
		}
	},
	setAttributeNode : function(newAttr){
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS : function(newAttr){
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode : function(oldAttr){
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS : function(namespaceURI, localName){
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},
	
	hasAttributeNS : function(namespaceURI, localName){
		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
	},
	getAttributeNS : function(namespaceURI, localName){
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr && attr.value || '';
	},
	setAttributeNS : function(namespaceURI, qualifiedName, value){
		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
		attr.value = attr.nodeValue = "" + value;
		this.setAttributeNode(attr)
	},
	getAttributeNodeNS : function(namespaceURI, localName){
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},
	
	getElementsByTagName : function(tagName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
					ls.push(node);
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS : function(namespaceURI, localName){
		return new LiveNodeList(this,function(base){
			var ls = [];
			_visitNode(base,function(node){
				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
					ls.push(node);
				}
			});
			return ls;
			
		});
	}
};
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


_extends(Element,Node);
function Attr() {
};
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr,Node);


function CharacterData() {
};
CharacterData.prototype = {
	data : '',
	substringData : function(offset, count) {
		return this.data.substring(offset, offset+count);
	},
	appendData: function(text) {
		text = this.data+text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function(offset,text) {
		this.replaceData(offset,0,text);
	
	},
	appendChild:function(newChild){
		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
	},
	deleteData: function(offset, count) {
		this.replaceData(offset,count,"");
	},
	replaceData: function(offset, count, text) {
		var start = this.data.substring(0,offset);
		var end = this.data.substring(offset+count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	}
}
_extends(CharacterData,Node);
function Text() {
};
Text.prototype = {
	nodeName : "#text",
	nodeType : TEXT_NODE,
	splitText : function(offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if(this.parentNode){
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	}
}
_extends(Text,CharacterData);
function Comment() {
};
Comment.prototype = {
	nodeName : "#comment",
	nodeType : COMMENT_NODE
}
_extends(Comment,CharacterData);

function CDATASection() {
};
CDATASection.prototype = {
	nodeName : "#cdata-section",
	nodeType : CDATA_SECTION_NODE
}
_extends(CDATASection,CharacterData);


function DocumentType() {
};
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType,Node);

function Notation() {
};
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation,Node);

function Entity() {
};
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity,Node);

function EntityReference() {
};
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference,Node);

function DocumentFragment() {
};
DocumentFragment.prototype.nodeName =	"#document-fragment";
DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment,Node);


function ProcessingInstruction() {
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction,Node);
function XMLSerializer(){}
XMLSerializer.prototype.serializeToString = function(node,isHtml,nodeFilter){
	return nodeSerializeToString.call(node,isHtml,nodeFilter);
}
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(isHtml,nodeFilter){
	var buf = [];
	var refNode = this.nodeType == 9?this.documentElement:this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;
	
	if(uri && prefix == null){
		//console.log(prefix)
		var prefix = refNode.lookupPrefix(uri);
		if(prefix == null){
			//isHTML = true;
			var visibleNamespaces=[
			{namespace:uri,prefix:null}
			//{namespace:uri,prefix:''}
			]
		}
	}
	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
	return buf.join('');
}
function needNamespaceDefine(node,isHTML, visibleNamespaces) {
	var prefix = node.prefix||'';
	var uri = node.namespaceURI;
	if (!prefix && !uri){
		return false;
	}
	if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" 
		|| uri == 'http://www.w3.org/2000/xmlns/'){
		return false;
	}
	
	var i = visibleNamespaces.length 
	//console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		//console.log(node.nodeType,node.tagName,ns.prefix,prefix)
		if (ns.prefix == prefix){
			return ns.namespace != uri;
		}
	}
	//console.log(isHTML,uri,prefix=='')
	//if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
	//	return false;
	//}
	//node.flag = '11111'
	//console.error(3,true,node.flag,node.prefix,node.namespaceURI)
	return true;
}
function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
	if(nodeFilter){
		node = nodeFilter(node);
		if(node){
			if(typeof node == 'string'){
				buf.push(node);
				return;
			}
		}else{
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}
	switch(node.nodeType){
	case ELEMENT_NODE:
		if (!visibleNamespaces) visibleNamespaces = [];
		var startVisibleNamespaces = visibleNamespaces.length;
		var attrs = node.attributes;
		var len = attrs.length;
		var child = node.firstChild;
		var nodeName = node.tagName;
		
		isHTML =  (htmlns === node.namespaceURI) ||isHTML 
		buf.push('<',nodeName);
		
		
		
		for(var i=0;i<len;i++){
			// add namespaces for attributes
			var attr = attrs.item(i);
			if (attr.prefix == 'xmlns') {
				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
			}else if(attr.nodeName == 'xmlns'){
				visibleNamespaces.push({ prefix: '', namespace: attr.value });
			}
		}
		for(var i=0;i<len;i++){
			var attr = attrs.item(i);
			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
				var prefix = attr.prefix||'';
				var uri = attr.namespaceURI;
				var ns = prefix ? ' xmlns:' + prefix : " xmlns";
				buf.push(ns, '="' , uri , '"');
				visibleNamespaces.push({ prefix: prefix, namespace:uri });
			}
			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
		}
		// add namespace for current node		
		if (needNamespaceDefine(node,isHTML, visibleNamespaces)) {
			var prefix = node.prefix||'';
			var uri = node.namespaceURI;
			var ns = prefix ? ' xmlns:' + prefix : " xmlns";
			buf.push(ns, '="' , uri , '"');
			visibleNamespaces.push({ prefix: prefix, namespace:uri });
		}
		
		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
			buf.push('>');
			//if is cdata child node
			if(isHTML && /^script$/i.test(nodeName)){
				while(child){
					if(child.data){
						buf.push(child.data);
					}else{
						serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
					}
					child = child.nextSibling;
				}
			}else
			{
				while(child){
					serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
					child = child.nextSibling;
				}
			}
			buf.push('</',nodeName,'>');
		}else{
			buf.push('/>');
		}
		// remove added visible namespaces
		//visibleNamespaces.length = startVisibleNamespaces;
		return;
	case DOCUMENT_NODE:
	case DOCUMENT_FRAGMENT_NODE:
		var child = node.firstChild;
		while(child){
			serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
			child = child.nextSibling;
		}
		return;
	case ATTRIBUTE_NODE:
		return buf.push(' ',node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');
	case TEXT_NODE:
		return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));
	case CDATA_SECTION_NODE:
		return buf.push( '<![CDATA[',node.data,']]>');
	case COMMENT_NODE:
		return buf.push( "<!--",node.data,"-->");
	case DOCUMENT_TYPE_NODE:
		var pubid = node.publicId;
		var sysid = node.systemId;
		buf.push('<!DOCTYPE ',node.name);
		if(pubid){
			buf.push(' PUBLIC "',pubid);
			if (sysid && sysid!='.') {
				buf.push( '" "',sysid);
			}
			buf.push('">');
		}else if(sysid && sysid!='.'){
			buf.push(' SYSTEM "',sysid,'">');
		}else{
			var sub = node.internalSubset;
			if(sub){
				buf.push(" [",sub,"]");
			}
			buf.push(">");
		}
		return;
	case PROCESSING_INSTRUCTION_NODE:
		return buf.push( "<?",node.target," ",node.data,"?>");
	case ENTITY_REFERENCE_NODE:
		return buf.push( '&',node.nodeName,';');
	//case ENTITY_NODE:
	//case NOTATION_NODE:
	default:
		buf.push('??',node.nodeName);
	}
}
function importNode(doc,node,deep){
	var node2;
	switch (node.nodeType) {
	case ELEMENT_NODE:
		node2 = node.cloneNode(false);
		node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
	case DOCUMENT_FRAGMENT_NODE:
		break;
	case ATTRIBUTE_NODE:
		deep = true;
		break;
	//case ENTITY_REFERENCE_NODE:
	//case PROCESSING_INSTRUCTION_NODE:
	////case TEXT_NODE:
	//case CDATA_SECTION_NODE:
	//case COMMENT_NODE:
	//	deep = false;
	//	break;
	//case DOCUMENT_NODE:
	//case DOCUMENT_TYPE_NODE:
	//cannot be imported.
	//case ENTITY_NODE:
	//case NOTATION_NODE：
	//can not hit in level3
	//default:throw e;
	}
	if(!node2){
		node2 = node.cloneNode(false);//false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(importNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}
//
//var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
//					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
function cloneNode(doc,node,deep){
	var node2 = new node.constructor();
	for(var n in node){
		var v = node[n];
		if(typeof v != 'object' ){
			if(v != node2[n]){
				node2[n] = v;
			}
		}
	}
	if(node.childNodes){
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
	case ELEMENT_NODE:
		var attrs	= node.attributes;
		var attrs2	= node2.attributes = new NamedNodeMap();
		var len = attrs.length
		attrs2._ownerElement = node2;
		for(var i=0;i<len;i++){
			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
		}
		break;;
	case ATTRIBUTE_NODE:
		deep = true;
	}
	if(deep){
		var child = node.firstChild;
		while(child){
			node2.appendChild(cloneNode(doc,child,deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object,key,value){
	object[key] = value
}
//do dynamic
try{
	if(Object.defineProperty){
		Object.defineProperty(LiveNodeList.prototype,'length',{
			get:function(){
				_updateLiveList(this);
				return this.$$length;
			}
		});
		Object.defineProperty(Node.prototype,'textContent',{
			get:function(){
				return getTextContent(this);
			},
			set:function(data){
				switch(this.nodeType){
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					while(this.firstChild){
						this.removeChild(this.firstChild);
					}
					if(data || String(data)){
						this.appendChild(this.ownerDocument.createTextNode(data));
					}
					break;
				default:
					//TODO:
					this.data = data;
					this.value = data;
					this.nodeValue = data;
				}
			}
		})
		
		function getTextContent(node){
			switch(node.nodeType){
			case ELEMENT_NODE:
			case DOCUMENT_FRAGMENT_NODE:
				var buf = [];
				node = node.firstChild;
				while(node){
					if(node.nodeType!==7 && node.nodeType !==8){
						buf.push(getTextContent(node));
					}
					node = node.nextSibling;
				}
				return buf.join('');
			default:
				return node.nodeValue;
			}
		}
		__set__ = function(object,key,value){
			//console.log(value)
			object['$$'+key] = value
		}
	}
}catch(e){//ie8
}

//if(typeof require == 'function'){
	exports.DOMImplementation = DOMImplementation;
	exports.XMLSerializer = XMLSerializer;
//}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestAnimationFrame = exports.cancelAnimationFrame = exports.clearTimeout = exports.setTimeout = exports.clearInterval = exports.setInterval = exports.Log = exports.wx = exports.Canvas = exports.Image = undefined;

var _wx;

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Canvas = __webpack_require__(8);

var _Canvas2 = _interopRequireDefault(_Canvas);

var _Image = __webpack_require__(11);

var _Image2 = _interopRequireDefault(_Image);

var _Event = __webpack_require__(4);

var _Event2 = _interopRequireDefault(_Event);

var _Timer = __webpack_require__(1);

var _Audio = __webpack_require__(13);

var _Audio2 = _interopRequireDefault(_Audio);

var _File = __webpack_require__(14);

var _File2 = _interopRequireDefault(_File);

var _Http = __webpack_require__(15);

var _Http2 = _interopRequireDefault(_Http);

var _WebSocket = __webpack_require__(16);

var _WebSocket2 = _interopRequireDefault(_WebSocket);

var _Keyboard = __webpack_require__(17);

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Login = __webpack_require__(18);

var _Login2 = _interopRequireDefault(_Login);

var _Share = __webpack_require__(19);

var _Share2 = _interopRequireDefault(_Share);

var _GameData = __webpack_require__(20);

var _UserInfo = __webpack_require__(21);

var _Setting = __webpack_require__(22);

var _OpenDataContext = __webpack_require__(23);

var _OpenDataContext2 = _interopRequireDefault(_OpenDataContext);

var _Ad = __webpack_require__(24);

var _Pay = __webpack_require__(25);

var _Pay2 = _interopRequireDefault(_Pay);

var _Storage = __webpack_require__(26);

var _Storage2 = _interopRequireDefault(_Storage);

var _Toast = __webpack_require__(27);

var _Toast2 = _interopRequireDefault(_Toast);

var _Accelerometer = __webpack_require__(28);

var _Accelerometer2 = _interopRequireDefault(_Accelerometer);

var _System = __webpack_require__(29);

var _System2 = _interopRequireDefault(_System);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DomParser = __webpack_require__(30).DOMParser;

//------------------全局对象-------------------
var app = new _App2.default(8, "test", "test", true);
var canvas = null;
var keyboard = new _Keyboard2.default();
var share = new _Share2.default();
var pay = new _Pay2.default();
// 全局唯一
var fileSystemManager = new _File2.default();
var storage = new _Storage2.default();
var _login = new _Login2.default();
var bkSharedCanvas = new _Canvas2.default(1021, 85);
var bkOpenDataContext = new _OpenDataContext2.default(bkSharedCanvas);
var bkOnMessageCallback = void 0;
var bkAudioInterruptionEndCallback = void 0;
var bkAudioInterruptionBeginCallback = void 0;
var toast = new _Toast2.default();
var accelerometer = new _Accelerometer2.default();
var system = new _System2.default();
var bkGame = new BK.Game({
    //游戏启动后
    onLoad: function onLoad(app) {
        BK.Script.log(0, 0, "BK.Game, onLoad");
    },
    //进入点击最大化后
    onMaximize: function onMaximize(app) {
        BK.Script.log(0, 0, "BK.Game, onMaxmize");
    },
    //进入点击最小化后
    onMinmize: function onMinmize(app) {
        BK.Script.log(0, 0, "BK.Game, onMinmize");
    },
    //进入后台后响应
    onEnterBackground: function onEnterBackground(app) {
        BK.Script.log(0, 0, "BK.Game, onEnterbackground");
        if (bkAudioInterruptionBeginCallback) {
            bkAudioInterruptionBeginCallback();
        }
    },
    //回到前台后响应
    onEnterForeground: function onEnterForeground(app) {
        BK.Script.log(0, 0, "BK.Game, onEnterforeground");
        if (bkAudioInterruptionEndCallback) {
            bkAudioInterruptionEndCallback();
        }
    },
    //点击“分享游戏”后响应
    onShare: function onShare(app) {
        BK.Script.log(0, 0, "BK.Game, onShare");
        if (share && share.shareCallback) {
            var object = share.shareCallback();
            if (object !== undefined) {
                var bkShareInfo = { summary: object.title, extendInfo: {}, localPicPath: '', picUrl: object.imageUrl };
                return bkShareInfo;
            }
        }
        //开发者此处可自行选择分享的接口
        // BK.QQ.shareToMQQ(title, summary, detailUrl, picUrl)
        //或者
        //BK.QQ.shareToArk(roomId, summary, picUrl, isSelectFriend, extendInfo)
    },
    //进入点击关闭响应
    onClose: function onClose(app) {
        BK.Script.log(0, 0, "BK.Game, onClose");
    }
});

function getAccessToken() {
    _Log2.default.d(0, 0, 'getAccessToken failed, not implement yet');
}

function imgSecCheck(access_token, media) {}

function msgSecCheck(access_token, content) {}

var wx = (_wx = {
    exitMiniProgram: function exitMiniProgram() {
        return app.exitMiniProgram();
    },
    getLaunchOptionsSync: function getLaunchOptionsSync() {
        return app.getLaunchOptionsSync();
    },
    onHide: function onHide(callback) {
        return app.onHide(callback);
    },
    offHide: function offHide() {
        return app.offHide();
    },
    onShow: function onShow(callback) {
        return app.onShow(callback);
    },
    offShow: function offShow(callback) {
        return app.offShow(callback);
    },
    log: function log(level, code, message) {
        _Log2.default.d(level, code, message);
    },
    createCanvas: function createCanvas() {

        return new _Canvas2.default(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
    },
    createImage: function createImage() {
        var image = new _Image2.default();
        return image;
    },
    getSystemInfo: function getSystemInfo(obj) {
        window.setTimeout(function () {
            obj.success({ devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width, "brand": "", "model": "", "pixelRatio": BK.Director.screenPixelSize.width / BK.Director.renderSize.width, "screenWidth": BK.Director.renderSize.width * 4, "screenHeight": BK.Director.renderSize.height * 4,
                "windowWidth": BK.Director.renderSize.width * 4, "windowHeight": BK.Director.renderSize.height * 4, "language": "zh_CN", "version": GameStatusInfo.QQVer, "system": GameStatusInfo.platform + " 10.0", "platform": GameStatusInfo.platform, "fontSizeSetting": "", "SDKVersion": "", "benchmarkLevel": "", "battery": "", "wifiSignal": ""
            });
            return { devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width, "brand": "", "model": "", "pixelRatio": BK.Director.screenPixelSize.width / BK.Director.renderSize.width, "screenWidth": BK.Director.renderSize.width * 4, "screenHeight": BK.Director.renderSize.height * 4,
                "windowWidth": BK.Director.renderSize.width * 4, "windowHeight": BK.Director.renderSize.height * 4, "language": "zh_CN", "version": GameStatusInfo.QQVer, "system": GameStatusInfo.platform + " " + GameStatusInfo.osVersion, "platform": GameStatusInfo.platform, "fontSizeSetting": "", "SDKVersion": "", "benchmarkLevel": "", "battery": "", "wifiSignal": ""
            };
        }, 10);
    },
    getSystemInfoSync: function getSystemInfoSync() {
        return { devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width, brand: "", "model": "", "pixelRatio": 1, screenWidth: BK.Director.screenPixelSize.width, screenHeight: BK.Director.screenPixelSize.height,
            "windowWidth": BK.Director.screenPixelSize.width, "windowHeight": BK.Director.screenPixelSize.height, "language": "zh_CN", "version": GameStatusInfo.QQVer, "system": GameStatusInfo.platform + " 10.0" + GameStatusInfo.osVersion, "platform": GameStatusInfo.platform, "fontSizeSetting": "", "SDKVersion": "", "benchmarkLevel": "", "battery": "", "wifiSignal": ""
        };
    },
    onTouchStart: function onTouchStart(callback) {
        _Event2.default.onTouchStart(callback);
    },
    offTouchStart: function offTouchStart(callback) {
        _Event2.default.offTouchStart(callback);
    },

    onTouchMove: function onTouchMove(callback) {
        _Event2.default.onTouchMove(callback);
    },

    onTouchCancel: function onTouchCancel(callback) {
        _Event2.default.onTouchCancel(callback);
    },

    onTouchEnd: function onTouchEnd(callback) {
        _Event2.default.onTouchEnd(callback);
    }
}, _defineProperty(_wx, "offTouchStart", function offTouchStart(callback) {
    _Event2.default.offTouchStart(index, 1);
}), _defineProperty(_wx, "offTouchMove", function offTouchMove(callback) {
    _Event2.default.offTouchMove(callback);
}), _defineProperty(_wx, "offTouchCancel", function offTouchCancel(callback) {
    _Event2.default.offTouchCancel(callback);
}), _defineProperty(_wx, "offTouchEnd", function offTouchEnd(callback) {
    _Event2.default.offTouchEnd(callback);
}), _defineProperty(_wx, "createInnerAudioContext", function createInnerAudioContext() {
    return new _Audio2.default();
}), _defineProperty(_wx, "setPreferredFramesPerSecond", function setPreferredFramesPerSecond(fps) {
    return (0, _Timer.setPreferredFramesPerSecond)(fps);
}), _defineProperty(_wx, "getUserInfo", function getUserInfo(params) {
    var userInfo = {
        "nickName": "",
        "gender": 1,
        "language": "zh_CN",
        "city": "",
        "province": "",
        "country": "China",
        "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKJn00QRPUIQXL4HtGLnhzVHTCA4kiaSibn6pcfs0FhWV5SzicglRrKA9wUwxBZIBHNbVWIB9R9IvYBQ/132"
    };
    var result = {
        userInfo: userInfo,
        rawData: "",
        signature: "",
        encryptedData: "",
        iv: "",
        errMsg: "getUserInfo:ok"
    };
    BK.QQ.fetchOpenKey(function (errCode, cmd, data) {
        if (errCode === 0 && data && data.openKey) {
            if (params.success) {
                result['openid'] = GameStatusInfo.openId;
                result['openkey'] = data.openKey;
                BK.QQ.getRankList(function (errCode, cmd, data) {
                    if (data && data.data && data.data.rankList) {
                        var rankList = data.data.rankList;
                        for (var i = 0; i < rankList.length; i++) {
                            var rankNode = rankList[i];
                            if (rankNode && rankNode.ownFlag && rankNode.ownFlag === 1) {
                                result.userInfo.avatarUrl = rankNode.head;
                                result.userInfo.nickName = rankNode.nick;
                                result.rawData = JSON.stringify(result.userInfo);
                                params.success(result);
                                params.complete();
                            }
                        }
                    }
                });
            }
        } else {
            BK.Script.log(0, 0, "fetchOpenKey ailed: errCode=" + errCode);
            if (params.fail) {
                params.fail();
            }
        }
        if (params.complete) {
            params.complete();
        }
    });
}), _defineProperty(_wx, "getFileSystemManager", function getFileSystemManager() {
    _Log2.default.d(0, 0, "getFileSystemManager");
    return fileSystemManager;
}), _defineProperty(_wx, "request", function request(data) {
    var http = new _Http2.default(data);
    return http.request();
}), _defineProperty(_wx, "downloadFile", function downloadFile(data) {
    var http = new _Http2.default(data);
    return http.downloadFile();
}), _defineProperty(_wx, "uploadFile", function uploadFile(data) {
    var http = new _Http2.default(data);
    return http.uploadFile();
}), _defineProperty(_wx, "hideKeyboard", function hideKeyboard(object) {
    keyboard.hideKeyboard(object);
}), _defineProperty(_wx, "onKeyboardInput", function onKeyboardInput(callback) {
    keyboard.onKeyboardInput(callback);
}), _defineProperty(_wx, "offKeyboardInput", function offKeyboardInput(callback) {
    keyboard.offKeyboardInput(callback);
}), _defineProperty(_wx, "onKeyboardConfirm", function onKeyboardConfirm(callback) {
    keyboard.onKeyboardConfirm(callback);
}), _defineProperty(_wx, "offKeyboardConfirm", function offKeyboardConfirm(callback) {
    keyboard.offKeyboardConfirm(callback);
}), _defineProperty(_wx, "onKeyboardComplete", function onKeyboardComplete(callback) {
    keyboard.onKeyboardComplete(callback);
}), _defineProperty(_wx, "offKeyboardComplete", function offKeyboardComplete(callback) {
    keyboard.offKeyboardComplete(callback);
}), _defineProperty(_wx, "showKeyboard", function showKeyboard(object) {
    keyboard.showKeyboard(object);
}), _defineProperty(_wx, "setKeepScreenOn", function setKeepScreenOn() {
    // console.log("")
}), _defineProperty(_wx, "showToast", function showToast(e) {
    toast.showToast(e);
}), _defineProperty(_wx, "hideToast", function hideToast() {
    toast.hideToast();
}), _defineProperty(_wx, "showLoading", function showLoading(e) {
    toast.showLoading(e);
}), _defineProperty(_wx, "hideLoading", function hideLoading() {
    toast.hideLoading();
}), _defineProperty(_wx, "showModal", function showModal(e) {
    toast.showModal(e);
}), _defineProperty(_wx, "getNetworkType", function getNetworkType(e) {
    system.getNetworkType(e);
}), _defineProperty(_wx, "checkSession", function checkSession(object) {
    _login.checkSession(object);
}), _defineProperty(_wx, "login", function login(object) {
    console.log("begin login");
    _login.login(object);
}), _defineProperty(_wx, "getShareInfo", function getShareInfo(object) {
    share.getShareInfo(object);
}), _defineProperty(_wx, "hideShareMenu", function hideShareMenu(object) {
    share.hideShareMenu(object);
}), _defineProperty(_wx, "onShareAppMessage", function onShareAppMessage(callback) {
    share.onShareAppMessage(callback);
}), _defineProperty(_wx, "offShareAppMessage", function offShareAppMessage(callback) {
    share.offShareAppMessage(callback);
}), _defineProperty(_wx, "showShareMenu", function showShareMenu(object) {
    share.showShareMenu(object);
}), _defineProperty(_wx, "shareAppMessage", function shareAppMessage(object) {
    share.shareAppMessage(object);
}), _defineProperty(_wx, "updateShareMenu", function updateShareMenu(object) {
    share.updateShareMenu(object);
}), _defineProperty(_wx, "getLocation", function getLocation(object) {
    // TODO 小游戏不允许界面不在前台时获取位置，需要增加APP状态判断
    if (object) {
        // TODO wx object有个type
        if (object.appid) {
            var config = { appid: object.appid, needCity: 1 };
            BK.Director.getLocation(config, function (statusCode, description, info) {
                var resultSuccess = false;
                if (statusCode == 0) {
                    if (info) {
                        resultSuccess = true;
                        // TODO  微信有个accuracy
                        var res = {
                            latitude: info.latitude,
                            longitude: info.longitude,
                            speed: info.speed,
                            altitude: info.altitude,
                            verticalAccuracy: info.verticalAccuracy,
                            horizontalAccuracy: info.horizontalAccuracy
                        };
                        if (object.success) {
                            object.success(res);
                        }
                    }
                } else {
                    _Log2.default.d(0, 0, 'getLocation failed, statusCode=' + statusCode);
                }

                if (!resultSuccess) {
                    if (object.fail) {
                        object.fail();
                    }
                }

                if (object.complete) {
                    object.complete();
                }
            });
        } else {
            _Log2.default.d(0, 0, 'getLocation failed, no appid');
        }
    } else {
        _Log2.default.d(0, 0, 'getLocation failed, no object');
    }
}), _defineProperty(_wx, "setStorage", function setStorage(object) {
    storage.setStorage(object);
}), _defineProperty(_wx, "setStorageSync", function setStorageSync(key, data) {
    storage.setStorageSync(key, data);
}), _defineProperty(_wx, "getStorage", function getStorage(object) {
    storage.getStorage(object);
}), _defineProperty(_wx, "getStorageSync", function getStorageSync(key) {
    return storage.getStorageSync(key);
}), _defineProperty(_wx, "getStorageInfoSync", function getStorageInfoSync() {
    return storage.getStorageInfoSync();
}), _defineProperty(_wx, "getStorageInfo", function getStorageInfo(object) {
    storage.getStorageInfo(object);
}), _defineProperty(_wx, "removeStorage", function removeStorage(object) {
    storage.removeStorage(object);
}), _defineProperty(_wx, "removeStorageSync", function removeStorageSync(key) {
    storage.removeStorageSync(key);
}), _defineProperty(_wx, "clearStorage", function clearStorage(object) {
    storage.clearStorage(object);
}), _defineProperty(_wx, "clearStorageSync", function clearStorageSync() {
    storage.clearStorageSync();
}), _defineProperty(_wx, "connectSocket", function connectSocket(config) {
    console.log("connect socket ");
    return _WebSocket2.default.newConnection(config);
}), _defineProperty(_wx, "closeSocket", function closeSocket(para) {
    _WebSocket2.default.closeSocket(para);
}), _defineProperty(_wx, "onSocketOpen", function onSocketOpen(callback) {
    console.log("open socket ");
    _WebSocket2.default.publishEvent(_WebSocket2.default.SOCK_EVENT_OPEN, callback);
}), _defineProperty(_wx, "onSocketClose", function onSocketClose(callback) {
    console.log("close socket ");
    _WebSocket2.default.publishEvent(_WebSocket2.default.SOCK_EVENT_CLOSE, callback);
}), _defineProperty(_wx, "onSocketMessage", function onSocketMessage(callback) {
    _WebSocket2.default.publishEvent(_WebSocket2.default.SOCK_EVENT_MESSAGE, callback);
}), _defineProperty(_wx, "onSocketError", function onSocketError(callback) {
    _WebSocket2.default.publishEvent(_WebSocket2.default.SOCK_EVENT_ERROR, callback);
}), _defineProperty(_wx, "sendSocketMessage", function sendSocketMessage(data) {
    _WebSocket2.default.sendMessage(data);
}), _defineProperty(_wx, "loadFont", function loadFont(name) {

    return name;

    //Log.d(0,0,"Call loadFont with "+JSON.stringify(arguments))
}), _defineProperty(_wx, "onError", function onError() {
    //Log.d(0,0,"Call onError with "+JSON.stringify(arguments))
}), _defineProperty(_wx, "getFriendCloudStorage", function getFriendCloudStorage(object) {
    if (object) {
        BK.Script.log(0, 0, 'getFriendCloudStorage, object=' + JSON.stringify(object));
        BK.QQ.getRankList(function (errCode, cmd, data) {
            BK.Script.log(0, 0, 'getRankList, cmd=' + cmd + ', errCode=' + errCode + ', data=' + JSON.stringify(data));
            var result = [];
            if (data && data.data && data.data.rankList) {
                var rankList = data.data.rankList;
                for (var i = 0; i < rankList.length; i++) {
                    var rankNode = rankList[i];
                    BK.Script.log(1, 1, "rankList i:" + i + " nick:" + rankNode.nick + //昵称
                    "  head:" + rankNode.head + //头像url
                    " accPoint:" + rankNode.busData.accPoint); //积分
                    var openId = '';
                    if (rankNode && rankNode.ownFlag && rankNode.ownFlag == 1) {
                        openId = GameStatusInfo.openId;
                    }
                    result[i] = { avatarUrl: rankNode.head,
                        nickname: rankNode.nick,
                        openid: openId,
                        KVDataList: [{ key: 'key_score', value: rankNode.busData.accPoint }] };
                }
            }
            BK.Script.log(0, 0, 'getRankList, result=' + JSON.stringify(result));
            if (object.success) {
                object.success({ data: result });
            }
            if (object.complete) {
                object.complete();
            }
        });
    }
}), _defineProperty(_wx, "getUserCloudStorage", function getUserCloudStorage(object) {
    BK.Script.log(0, 0, 'getUserCloudStorage, object=' + JSON.stringify(object));
}), _defineProperty(_wx, "getGroupCloudStorage", function getGroupCloudStorage(object) {
    BK.Script.log(0, 0, 'getGroupCloudStorage, object=' + JSON.stringify(object));
}), _defineProperty(_wx, "getSharedCanvas", function getSharedCanvas() {
    // 开放数据域的shareCanvas
    return bkSharedCanvas;
}), _defineProperty(_wx, "removeUserCloudStorage", function removeUserCloudStorage(object) {
    BK.Script.log(0, 0, 'removeUserCloudStorage, object=' + JSON.stringify(object));
}), _defineProperty(_wx, "setUserCloudStorage", function setUserCloudStorage(object) {
    BK.Script.log(0, 0, 'setUserCloudStorage, object=' + JSON.stringify(object));
    if (object) {
        if (object.KVDataList) {
            var scoreData = [];
            var tempScore = 0;
            for (var i = 0; i < object.KVDataList.length; i++) {
                var dataItem = object.KVDataList[i];
                if (dataItem.key == 'key_score') {
                    tempScore = dataItem.value;
                    break;
                }
            }
            // TODO 扩展字段
            scoreData[0] = { openId: GameStatusInfo.openId,
                scoreInfo: { score: tempScore }
            };
            BK.QQ.scoreUpload(scoreData, function (errCode, cmd, data) {
                if (errCode == 0) {
                    if (object.success) {
                        object.success();
                    }
                } else {
                    if (object.fail) {
                        object.fail();
                    }
                }
                if (object.complete) {
                    object.complete();
                }
            }, null);
        }
    }
}), _defineProperty(_wx, "checkIsUserAdvisedToRest", function checkIsUserAdvisedToRest(object) {}), _defineProperty(_wx, "createUserInfoButton", function createUserInfoButton(object) {}), _defineProperty(_wx, "createOpenSettingButton", function createOpenSettingButton(object) {}), _defineProperty(_wx, "getSetting", function getSetting(object) {
    if (object.success) {
        object.success({
            errMsg: "getSetting:ok", authSetting: { "scope.userInfo": true,
                "scope.userLocation": true,
                "scope.address": true,
                "scope.invoiceTitle": true,
                "scope.werun": true,
                "scope.record": true,
                "scope.writePhotosAlbum": true,
                "scope.camera": true

            }

        });
    }
}), _defineProperty(_wx, "openSetting", function openSetting(object) {}), _defineProperty(_wx, "getWeRunData", function getWeRunData(object) {}), _defineProperty(_wx, "authorize", function authorize(object) {}), _defineProperty(_wx, "createGameClubButton", function createGameClubButton(object) {}), _defineProperty(_wx, "openCustomerServiceConversation", function openCustomerServiceConversation(object) {}), _defineProperty(_wx, "getOpenDataContext", function getOpenDataContext() {
    _Log2.default.d(0, 0, 'getOpenDataContext, context=' + bkOpenDataContext);
    return bkOpenDataContext;
}), _defineProperty(_wx, "onMessage", function onMessage(callback) {
    _Log2.default.d(0, 0, 'onMessage, callback=' + callback);
    bkOnMessageCallback = callback;
}), _defineProperty(_wx, "postMessage", function postMessage(messageObj) {
    _Log2.default.d(0, 0, 'postMessage, messageObj=' + JSON.stringify(messageObj) + ', bkOnMessageCallback=' + bkOnMessageCallback);
    if (bkOnMessageCallback) {
        bkOnMessageCallback(messageObj);
    }
}), _defineProperty(_wx, "createBannerAd", function createBannerAd(object) {
    if (object) {
        return new _Ad.BannerAd(object.adUnitId, object.style);
    }
}), _defineProperty(_wx, "createRewardedVideoAd", function createRewardedVideoAd(object) {
    if (object) {
        return new _Ad.RewardedVideoAd(object.adUnitId, object.style, object.videoType);
    }
}), _defineProperty(_wx, "startAccelerometer", function startAccelerometer(object) {
    accelerometer.startAccelerometer(object);
}), _defineProperty(_wx, "onAccelerometerChange", function onAccelerometerChange(object) {
    accelerometer.onAccelerometerChange(object);
}), _defineProperty(_wx, "stopAccelerometer", function stopAccelerometer(object) {
    accelerometer.stopAccelerometer(object);
}), _defineProperty(_wx, "requestMidasPayment", function requestMidasPayment(object) {
    pay.requestMidasPayment(object);
}), _defineProperty(_wx, "onAudioInterruptionEnd", function onAudioInterruptionEnd(callback) {
    bkAudioInterruptionEndCallback = callback;
}), _defineProperty(_wx, "offAudioInterruptionEnd", function offAudioInterruptionEnd(callback) {
    bkAudioInterruptionEndCallback = undefined;
}), _defineProperty(_wx, "onAudioInterruptionBegin", function onAudioInterruptionBegin(callback) {
    bkAudioInterruptionBeginCallback = callback;
}), _defineProperty(_wx, "offAudioInterruptionBegin", function offAudioInterruptionBegin(callback) {
    bkAudioInterruptionBeginCallback = undefined;
}), _defineProperty(_wx, "vibrateLong", function vibrateLong() {
    console.warn("coming soon");
}), _defineProperty(_wx, "vibrateShort", function vibrateShort() {
    BK.Script.log(1, 0, "vibrateShort not implement yet");
}), _defineProperty(_wx, "getPerformance", function getPerformance() {

    return {
        now: function now() {
            return new Date().getTime();
        }
    };
}), _wx);
wx.env = {};
wx.env.USER_DATA_PATH = "";

//----------------------------导出的对象----------------------
exports.Image = _Image2.default;
exports.Canvas = _Canvas2.default;
exports.wx = wx;
exports.Log = _Log2.default;
exports.setInterval = _Timer.setInterval;
exports.clearInterval = _Timer.clearInterval;
exports.setTimeout = _Timer.setTimeout;
exports.clearTimeout = _Timer.clearTimeout;
exports.cancelAnimationFrame = _Timer.cancelAnimationFrame;
exports.requestAnimationFrame = _Timer.requestAnimationFrame;

window.Image = _Image2.default;
window.wx = wx;
window.setInterval = _Timer.setInterval;
window.clearInterval = _Timer.clearInterval;
window.setTimeout = _Timer.setTimeout;
window.clearTimeout = _Timer.clearTimeout;
window.cancelAnimationFrame = _Timer.cancelAnimationFrame;
window.requestAnimationFrame = _Timer.requestAnimationFrame;
window.DOMParser = DomParser;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
/**
 * 生命周期
 */

var _Timer = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firstPlay = true;

var App = function () {

    /**
     *
     * @param scence number 场景
     * @param query Object 启动参数
     * @param isSticky  boolean 当前小游戏是否在聊天顶部
     * @param shareTicket   string shareTicket
     */
    function App(scene, query, shareTicket, isSticky) {
        _classCallCheck(this, App);

        this.scene = scene;
        this.query = GameStatusInfo.gameParam;
        this.shareTicket = shareTicket;
        this.isSticky = isSticky;
    }

    /**
     * 获取启动参数
     * @returns {{scene: string, query: string, isSticky: boolean, shareTicket: string}}
     */


    _createClass(App, [{
        key: 'getLaunchOptionsSync',
        value: function getLaunchOptionsSync() {
            return {
                scene: this.scene,
                query: this.query,
                isSticky: this.isSticky,
                shareTicket: this.shareTicket
            };
        }
    }, {
        key: 'exitMiniProgram',
        value: function exitMiniProgram() {}

        /**
         * 监听游戏进入后台
         */

    }, {
        key: 'onHide',
        value: function onHide(callback) {
            if (typeof callback === 'function') {
                BK.QQ.listenGameEventEnterBackground({}, callback);
            }
        }

        /**
         * 取消监听进入后台
         */

    }, {
        key: 'offHide',
        value: function offHide() {
            if (typeof callback === 'function') {
                BK.QQ.listenGameEventEnterBackground({}, null);
            }
        }

        /**
         * 监听游戏进入前台
         * @param callback
         */

    }, {
        key: 'onShow',
        value: function onShow(callback) {
            if (typeof callback === 'function') {
                var self = this;
                BK.QQ.listenGameEventEnterForeground({
                    scene: self.scene,
                    query: self.getLaunchObject(),
                    shareTicket: self.shareTicket
                }, callback);
                if (firstPlay) {
                    (0, _Timer.setTimeout)(function () {
                        callback({
                            scene: self.scene,
                            query: self.getLaunchObject(),
                            shareTicket: self.shareTicket
                        });
                    }, 0);
                    firstPlay = false;
                }
            }
        }
        /**
         * 取消监听回到前台
         * @param callback
         */

    }, {
        key: 'offShow',
        value: function offShow(callback) {
            if (typeof callback === 'function') {
                BK.QQ.listenGameEventEnterBackground(null);
            }
        }
    }, {
        key: 'getLaunchObject',
        value: function getLaunchObject() {
            var str = GameStatusInfo.gameParam;
            var result = {};
            if (str) {
                var queryArr = str.split("&");
                queryArr.forEach(function (item) {
                    var value = item.split("=")[1];
                    var key = item.split("=")[0];
                    result[key] = value;
                });
            }
            return result;
        }
    }]);

    return App;
}();

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 画布
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Event = __webpack_require__(4);

var _Event2 = _interopRequireDefault(_Event);

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

var _WebGL = __webpack_require__(9);

var _WebGL2 = _interopRequireDefault(_WebGL);

var _Matrix = __webpack_require__(10);

var _Matrix2 = _interopRequireDefault(_Matrix);

var _util = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SCALE_FACTRO = (BK.Director.screenPixelSize.width + 0.0) / 640;

var DEFAULT_FONT_SIZE = 10;

var ImageData = function () {
    function ImageData() {
        _classCallCheck(this, ImageData);

        this.width = 0;
        this.height = 0;
        this.data = new Uint8ClampedArray(0);
        this.bkbuffer = null;
    }

    _createClass(ImageData, [{
        key: 'init',
        value: function init(bkbuffer) {
            this.bkbuffer = bkbuffer;
            this.data = bricksBufferToUint8ClampedArray(this.bkbuffer);
            if (bkbuffer.__inner_image_width) {
                this.width = bkbuffer.__inner_image_width;
            }
            if (bkbuffer.__inner_image_height) {
                this.height = bkbuffer.__inner_image_height;
            }
        }
    }, {
        key: 'getBuffer',
        value: function getBuffer() {
            //从data获取buffer
            if (this.data) {
                var pointer = 0;
                while (pointer < this.data.byteLength) {
                    this.bkbuffer.writeUint8Buffer(this.data[pointer++]);
                }
            }
            return this.bkbuffer;
        }
    }, {
        key: 'writeUint8Buffer',
        value: function writeUint8Buffer(val) {
            if (this.bkbuffer) {
                this.bkbuffer.writeUint8Buffer(val);
            }
        }
    }]);

    return ImageData;
}();

function bricksBufferToUint8ClampedArray(bricksBuffer) {
    var arrayBuffer = new ArrayBuffer(bricksBuffer.bufferLength());
    var uint8Array = new Uint8ClampedArray(arrayBuffer);
    var pointer = 0;
    while (pointer < bricksBuffer.bufferLength()) {
        uint8Array[pointer++] = bricksBuffer.readUint8Buffer();
    }
    return uint8Array;
}
function arrayBufferToBricksBuffer(uint8Array) {
    var bricksBuffer = new BK.Buffer(uint8Array.byteLength);

    var pointer = 0;
    while (pointer < uint8Array.byteLength) {
        bricksBuffer.writeUint8Buffer(uint8Array[pointer++]);
    }
    return bricksBuffer;
}

var Canvas = function (_BK$Canvas) {
    _inherits(Canvas, _BK$Canvas);

    function Canvas(width, height) {
        _classCallCheck(this, Canvas);

        var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, width, height));

        BK.Director.root.addChild(_this);
        _this.useH5Mode();
        _this.setTextSize(DEFAULT_FONT_SIZE);
        _this.fillColor = { r: 0, g: 0, b: 0, a: 0 };
        //this.resetPaint();
        _this._width = width;
        _this._height = height;
        _this._lastHeight = height;
        _this._lastWidth = width;
        _this.inversMatrix = _Matrix2.default.create();
        _this._fontSize = DEFAULT_FONT_SIZE;
        _this._fontStyle = "";
        _this._fillColor = _this.fillColor;
        _this._strokeColor = _this.strokeColor;
        _this._textList = [];
        return _this;
    }

    _createClass(Canvas, [{
        key: 'resetPaint',
        value: function resetPaint() {
            var isReal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            this.style = {};
            this.drawStyle = 0;
            if (isReal) {
                this.fillColor = { r: 0, g: 0, b: 0, a: 0 };
                this.strokeColor = { r: 0, g: 0, b: 0, a: 0 };
                this._fillColor = this.fillColor;
                this._strokeColor = this.strokeColor;
                this._textList = [];
            }
        }
    }, {
        key: 'size',
        value: function size(w, h) {
            this._height = h;
            this._width = w;
            this.updateSize();
        }
    }, {
        key: 'updateSize',
        value: function updateSize() {

            if (Math.floor(this._lastHeight) !== Math.floor(this._height) || Math.floor(this._lastWidth) !== Math.floor(this._width)) {
                var that = this;
                if (!that._height) {
                    that._height = 0;
                }
                if (!that._width) {
                    that._width = 0;
                }
                this.__nativeObj["size"] = {
                    height: that._height,
                    width: that._width
                };
                this.__nativeObj.resetCanvas();
                this._lastWidth = this._width;
                this._lastHeight = this._height;
                this.resetPaint(true);
            } else {
                this.globalCompositeOperation = "source-over";
                this.globalAlpha = 1;
                this.setTransform(1, 0, 0, 1, 0, 0);
            }
        }
    }, {
        key: 'scale',
        value: function scale() {
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'scale', this)) {
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'scale', this).apply(this, arguments);
            } else {
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'canvasScale', this).apply(this, arguments);
            }
        }

        /**
         * 设置颜色
         * @param val
         */

    }, {
        key: 'getContext',
        value: function getContext(mode) {
            if (mode === '2d') {
                return this;
            } else if (mode === 'webgl') {

                return new _WebGL2.default().getContext();
            }
        }

        /**
         * canvas保存成临时文件，还不支持异步
         */

    }, {
        key: 'toTempFilePath',
        value: function toTempFilePath(para) {
            return this.toTempFilePathSync(para);
        }
    }, {
        key: 'toDataURL',
        value: function toDataURL() {
            return this.toDataURL();
        }
    }, {
        key: 'toTempFilePathSync',
        value: function toTempFilePathSync(para) {
            var shot = new BK.ScreenShot();
            if ((typeof para === 'undefined' ? 'undefined' : _typeof(para)) === 'object') {
                var x = para.x;
                var y = para.y;
                var w = para.width;
                var h = para.height;
                var destWidth = para.destWidth;
                var destHeight = para.destHeight;
                var fileType = para.fileType;
                var quality = para.quality;

                shot.origin = {
                    x: x, y: y
                };
                shot.size = {
                    width: w, height: h
                };
            }
            return shot.shotToFile();
        }
    }, {
        key: 'drawImage',
        value: function drawImage() {
            if (_typeof(arguments[0]) === 'object') {
                arguments[0] = arguments[0].src;
            }
            _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'drawImage', this).apply(this, arguments);
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(e, handler) {
            if (e === 'touchstart' && handler) {
                _Event2.default.onTouchStart(handler);
            } else if (e === 'touchmove' && handler) {
                _Event2.default.onTouchMove(handler);
            } else if (e === 'touchend' && handler) {
                _Event2.default.onTouchEnd(handler);
            }
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(e, handler) {
            if (e === 'touchstart') {
                _Event2.default.offTouchStart(handler);
            }
        }
    }, {
        key: 'fillText',
        value: function fillText() {

            var that = this;
            if (!that._height) {
                that._height = 0;
            }
            if (!that._width) {
                that._width = 0;
            }

            // this.__nativeObj.resetCanvas();


            //需要兼容原始尺寸
            //webgl模式下坐标重制
            var rx = arguments[1];
            var ry = arguments[2];
            // if(arguments[1]){
            //     arguments[1] *= SCALE_FACTRO;
            // }
            // arguments[2] *= SCALE_FACTRO;

            var argumentLength = arguments.length;
            if (argumentLength == 3) {
                var maxWidth = 2048;
                var maxHeight = 1024;
                var measureSize = this.measureText(arguments[0], maxWidth, maxHeight);
                var x = arguments[1];
                var y = arguments[2];
                y -= measureSize.height * 0.5;
                this._textList.push({
                    text: arguments[0],
                    fillColor: that.fillColor,
                    strokeColor: that.strokeColor,
                    x: x,
                    y: y,
                    w: Math.min(maxWidth, measureSize.width),
                    h: Math.min(maxHeight, measureSize.height),
                    fSize: that._fontSize
                });

                return this.__nativeObj.fillText(arguments[0], x, y, Math.min(maxWidth, measureSize.width), Math.min(maxHeight, measureSize.height));
            }

            return 0;
        }
    }, {
        key: 'createImageData',
        value: function createImageData() {
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'createImageData', this)) {
                var imageData = new ImageData();
                var bkbuffer = _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'createImageData', this).apply(this, arguments);
                imageData.init(bkbuffer);
                return imageData;
            }
        }
    }, {
        key: 'getImageData',
        value: function getImageData() {
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'getImageData', this)) {
                var bkbuffer = _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'getImageData', this).apply(this, arguments);
                var imageData = new ImageData();
                imageData.init(bkbuffer);
                return imageData;
            }
        }
    }, {
        key: 'putImageData',
        value: function putImageData(imageData) {
            if (imageData instanceof ImageData) {
                arguments[0] = imageData.getBuffer();
            }
            console.log("putImageData " + JSON.stringify(arguments) + " # " + arguments[0].byteLength);
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'putImageData', this)) {
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'putImageData', this).apply(this, arguments);
            }
        }
    }, {
        key: 'moveTo',
        value: function moveTo() {
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'moveTo', this)) {
                arguments[0] *= SCALE_FACTRO;
                arguments[1] *= SCALE_FACTRO;
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'moveTo', this).apply(this, arguments);
            }
        }
    }, {
        key: 'lineTo',
        value: function lineTo() {
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'lineTo', this)) {
                arguments[0] *= SCALE_FACTRO;
                arguments[1] *= SCALE_FACTRO;
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'lineTo', this).apply(this, arguments);
            }
        }
    }, {
        key: 'fill',
        value: function fill() {
            this._textList = [];
            this.clearRect(0, 0, this._width, this._height, GameStatusInfo.platform === 'ios');
            this.fillRect(0, 0, this._width, this._height);
            // if(super.fill){
            //     super.fill.apply(this, arguments);
            // }
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._textList = [];
            if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'clear', this)) {
                _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'clear', this).apply(this, arguments);
            }
        }
    }, {
        key: 'clearRect',
        value: function clearRect(x, y, ws, hs, fromClear) {
            this._textList = [];
            var w = arguments[2] || 0;
            var h = arguments[3] || 0;
            if (fromClear || w < BK.Director.screenPixelSize.width && h < BK.Director.screenPixelSize.height) {
                if (_get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'clearRect', this)) {
                    _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'clearRect', this).apply(this, arguments);
                }
            }
        }
    }, {
        key: 'transforms',
        value: function transforms() {
            _get(Canvas.prototype.__proto__ || Object.getPrototypeOf(Canvas.prototype), 'transforms', this).apply(this, arguments);
        }
    }, {
        key: 'createLinearGradient',
        value: function createLinearGradient() {
            return { addColorStop: function addColorStop() {} };
        }
    }, {
        key: 'strokeText',
        value: function strokeText() {}

        /**
         * 设置字体
         * @param val
         */

    }, {
        key: 'height',
        set: function set(height) {
            this._height = height;
            this.updateSize();
        },
        get: function get() {
            return this._height;
        }
    }, {
        key: 'width',
        set: function set(width) {
            this._width = width;
            this.updateSize();
        },
        get: function get() {
            return this._width;
        }
    }, {
        key: 'fillStyle',
        set: function set(val) {
            var colorInt = 0;
            if (val.includes && val.includes("#")) {
                if (val.length < 9) {
                    var scap = 9 - val.length;
                    for (var i = 0; i < scap; i++) {
                        val = val + "f";
                    }
                }
                colorInt = parseInt(val.replace(/^#/, ''), 16);
            } else if (val.includes && val.includes("rgba")) {

                val = val.replace("rgba(", "");
                val = val.replace(")", "");

                var colorArr = val.split(",");

                colorInt = false;

                this.fillColor = {
                    r: colorArr[0] > 200 ? colorArr[0] * 1.0 / 255.0 : colorArr[0],
                    g: colorArr[1] > 200 ? colorArr[1] * 1.0 / 255.0 : colorArr[1],
                    b: colorArr[2] > 200 ? colorArr[2] * 1.0 / 255.0 : colorArr[2],
                    a: colorArr[3] > 200 ? colorArr[3] * 1.0 / 255.0 : colorArr[3]
                };
                this._fillColor = this.fillColor;
            } else if (!isNaN(val)) {
                colorInt = parseInt(val);
            } else {
                //名字命名的颜色
                var colorStr = (0, _util.colourNameToHex)(val);
                if (colorStr.length < 9) {
                    var _scap = 9 - colorStr.length;
                    for (var _i = 0; _i < _scap; _i++) {
                        colorStr = colorStr + "f";
                    }
                }
                if (colorStr) {
                    colorInt = parseInt(colorStr.replace(/^#/, ''), 16);
                } else {
                    _Log2.default.d(0, 0, "Can not find color for " + colorStr);
                }
            }
            if (colorInt) {
                this.fillColor = {
                    r: (colorInt >> 24 & 0x000000ff) * 1.0 / 255.0,
                    g: (colorInt >> 16 & 0x000000ff) * 1.0 / 255.0,
                    b: (colorInt >> 8 & 0x000000ff) * 1.0 / 255.0,
                    a: (colorInt & 0x000000ff) * 1.0 / 255.0
                };
                this._fillColor = this.fillColor;
            }
        }
    }, {
        key: 'strokeStyle',
        set: function set(val) {
            var colorInt = 0;
            if (val.includes && val.includes("#")) {
                if (val.length < 9) {
                    var scap = 9 - val.length;
                    var d = "f";
                    if (!isNaN(val.replace(/^#/, '')) && parseInt(val.replace(/^#/, '')) === 0) {
                        d = "0";
                    }
                    for (var i = 0; i < scap; i++) {
                        val = val + d;
                    }
                }
                colorInt = parseInt(val.replace(/^#/, ''), 16);
            } else if (val.includes && val.includes("rgba")) {

                val = val.replace("rgba(", "");
                val = val.replace(")", "");

                var colorArr = val.split(",");

                colorInt = false;

                this.strokeColor = {
                    r: colorArr[0] > 200 ? colorArr[0] * 1.0 / 255.0 : colorArr[0],
                    g: colorArr[1] > 200 ? colorArr[1] * 1.0 / 255.0 : colorArr[1],
                    b: colorArr[2] > 200 ? colorArr[2] * 1.0 / 255.0 : colorArr[2],
                    a: colorArr[3] > 200 ? colorArr[3] * 1.0 / 255.0 : colorArr[3]
                };
                this._strokeColor = this.strokeColor;
            } else if (!isNaN(val)) {
                colorInt = parseInt(val);
            } else {
                //名字命名的颜色
                var colorStr = (0, _util.colourNameToHex)(val);
                if (colorStr.length < 9) {
                    var _scap2 = 9 - colorStr.length;
                    for (var _i2 = 0; _i2 < _scap2; _i2++) {
                        colorStr = colorStr + "f";
                    }
                }
                if (colorStr) {
                    colorInt = parseInt(colorStr.replace(/^#/, ''), 16);
                } else {
                    _Log2.default.d(0, 0, "Can not find color for " + colorStr);
                }
            }
            if (colorInt) {
                this.strokeColor = {
                    r: (colorInt >> 24 & 0x000000ff) * 1.0 / 255.0,
                    g: (colorInt >> 16 & 0x000000ff) * 1.0 / 255.0,
                    b: (colorInt >> 8 & 0x000000ff) * 1.0 / 255.0,
                    a: (colorInt & 0x000000ff) * 1.0 / 255.0
                };
                this._strokeColor = this.strokeColor;
            }
        }
    }, {
        key: 'font',
        set: function set(val) {
            if (val && typeof val === "string") {

                this._fontStyle = val;

                var strList = val.split(" ");
                var length = strList.length;
                var style = length - 5 >= 0 ? strList[length - 5] : null;
                var variant = length - 4 >= 0 ? strList[length - 4] : null;
                var weight = length - 3 >= 0 ? strList[length - 3] : null;
                var size = length - 2 >= 0 ? strList[length - 2] : null;
                var family = length - 1 >= 0 ? strList[length - 1] : null;

                if (size) {
                    var fontSize = parseInt(size) || DEFAULT_FONT_SIZE;
                    this._fontSize = fontSize;
                    this.setTextSize(fontSize);
                }
                if (family) {
                    var tmpPath = void 0;
                    if (BK.FileUtil.isFileExist(_Path2.default.getPath("res/" + family))) {
                        tmpPath = _Path2.default.getPath("res/" + family);
                    }
                    if (BK.FileUtil.isFileExist(_Path2.default.getPath("fonts/" + family))) {
                        tmpPath = _Path2.default.getPath("fonts/" + family);
                    }
                    if (BK.FileUtil.isFileExist(_Path2.default.getPath(family))) {
                        tmpPath = _Path2.default.getPath(family);
                    }
                    if (tmpPath) {
                        if (this.fontPath !== tmpPath && tmpPath !== 'GameRes://Arial') {
                            this.fontPath = tmpPath;
                        }
                    } else {
                        console.log("Font not exists ## " + family);
                    }
                }
            }
        }
    }]);

    return Canvas;
}(BK.Canvas);

exports.default = Canvas;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var gl;
function bkWebGLGetInstance() {
    if (!gl) {
        gl = new BK.WebGL();
        attatchConst();
        attachMethod();
        gl.OpenOptMode = OpenOptMode;
        gl.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
    }
    Object.prototype.hasOwnProperty.call(GameGlobal, 'renderTicker') && renderTicker.setTickerCallBack(function (ts, duration) {});
    return gl;
}
var isSupportTA;
function __bkIsSupportTypedArray() {
    if (isSupportTA == undefined) {
        if (GameStatusInfo.platform == 'android') {
            isSupportTA = true;
        }
        var info = BK.Director.queryDeviceInfo();
        var vers = info.version.split('.');
        if (info.platform == 'ios' && Number(vers[0]) >= 10 || info.platform == 'android') {
            isSupportTA = true;
        } else {
            BK.Script.log(1, 0, "Current Device dont supoort TypedArray.[info = " + JSON.stringify(info) + "]");
            isSupportTA = false;
        }
    }
    return isSupportTA;
}
function __TypedArrayGetData(array) {
    if (Object.prototype.hasOwnProperty.call(array, '__rawBKData')) {
        return array.__rawBKData;
    } else if (Object.prototype.hasOwnProperty.call(array, '__nativeObj')) {
        return array.__nativeObj;
    }
    if (false == __bkIsSupportTypedArray()) {
        if (array instanceof Int8Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeInt8Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Uint8Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeUint8Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Int16Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeInt16Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Uint16Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeUint16Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Int32Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeInt32Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Uint32Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeUint32Buffer(array[i]);
            }
            return buf;
        } else if (array instanceof Float32Array == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            for (var i = 0; i < array.length; i++) {
                buf.writeFloatBuffer(array[i]);
            }
            return buf;
        } else if (array instanceof ArrayBuffer == true) {
            var buf = new BK.Buffer(array.byteLength, false);
            var dataView = new DataView(array);
            for (var i = 0; i < array.byteLength; i++) {
                buf.writeUint8Buffer(dataView.getUint8(i));
            }
            return buf;
        }
    }
    return array;
}
var firstFrameUpload = false;
function checkFirstFrames() {
    if (firstFrameUpload == false) {
        BK.MQQ.SsoRequest.send({}, 'cs.first_frame_drawn.local');
        firstFrameUpload = true;
    }
}
function activeTexture(texture) {
    gl.glActiveTexture(texture);
}
function attachShader(program, shader) {
    gl.glAttachShader(program, shader);
}
function bindAttribLocation(program, index, name) {
    gl.glBindAttribLocation(program, index, name);
}
function bindBuffer(target, buffer) {
    gl.glBindBuffer(target, buffer);
}
function bindFramebuffer(target, framebuffer) {
    gl.glBindFramebuffer(target, framebuffer);
}
function bindRenderbuffer(target, renderbuffer) {
    gl.glBindRenderbuffer(target, renderbuffer);
}
function bindTexture(target, texture) {
    gl.glBindTexture(target, texture);
}
function blendColor(red, green, blue, alpha) {
    gl.glBlendColor(red, green, blue, alpha);
}
function blendEquation(mode) {
    gl.glBlendEquation(mode);
}
function blendEquationSeparate(modeRGB, modeAlpha) {
    gl.glBlendEquationSeparate(modeRGB, modeAlpha);
}
function blendFunc(sfactor, dfactor) {
    gl.glBlendFunc(sfactor, dfactor);
}
function blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) {
    gl.glBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);
}
function bufferData(target, size, usage) {
    gl.glBufferData(target, size, usage);
}
function bufferData(target, data, usage) {
    gl.glBufferData(target, __TypedArrayGetData(data), usage);
}
function bufferSubData(target, offset, data) {
    gl.glBufferSubData(target, offset, __TypedArrayGetData(data));
}
function checkFramebufferStatus(target) {
    return gl.glCheckFramebufferStatus(target);
}
function clear(mask) {
    gl.glClear(mask);
}
function clearColor(red, green, blue, alpha) {
    gl.glClearColor(red, green, blue, alpha);
}
function clearDepth(depth) {
    gl.glClearDepth(depth);
}
function clearStencil(s) {
    gl.glClearStencil(s);
}
function colorMask(red, green, blue, alpha) {
    gl.glColorMask(red, green, blue, alpha);
}
function compileShader(shader) {
    gl.glCompileShader(shader);
}
function compressedTexImage2D(target, level, internalformat, width, height, border, data) {
    gl.glCompressedTexImage2D(target, level, internalformat, width, height, border, data);
}
function compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data) {
    gl.glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data);
}
function copyTexImage2D(target, level, internalformat, x, y, width, height, border) {
    gl.glCopyTexImage2D(target, level, internalformat, x, y, width, height, border);
}
function copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height) {
    gl.glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
}
function createBuffer() {
    return gl.glCreateBuffer();
}
function createFramebuffer() {
    return gl.glCreateFramebuffer();
}
function createProgram() {
    return gl.glCreateProgram();
}
function createRenderbuffer() {
    return gl.glCreateRenderbuffer();
}
function createShader(type) {
    return gl.glCreateShader(type);
}
function createTexture() {
    return gl.glCreateTexture();
}
function cullFace(mode) {
    gl.glCullFace(mode);
}
function deleteBuffer(buffer) {
    gl.glDeleteBuffer(buffer);
}
function deleteFramebuffer(framebuffer) {
    gl.glDeleteFramebuffer(framebuffer);
}
function deleteProgram(program) {
    gl.glDeleteProgram(program);
}
function deleteRenderbuffer(renderbuffer) {
    gl.glDeleteRenderbuffer(renderbuffer);
}
function deleteShader(shader) {
    gl.glDeleteShader(shader);
}
function deleteTexture(texture) {
    gl.glDeleteTexture(texture);
}
function depthFunc(func) {
    gl.glDepthFunc(func);
}
function depthMask(flag) {
    gl.glDepthMask(flag);
}
function depthRange(zNear, zFar) {
    gl.glDepthRange(zNear, zFar);
}
function detachShader(program, shader) {
    gl.glDetachShader(program, shader);
}
function disable(cap) {
    gl.glDisable(cap);
}
function disableVertexAttribArray(index) {
    gl.glDisableVertexAttribArray(index);
}
function drawArrays(mode, first, count) {
    gl.glDrawArrays(mode, first, count);
    if (count > 0) {
        checkFirstFrames();
    }
}
function drawElements(mode, count, type, offset) {
    gl.glDrawElements(mode, count, type, offset);
    if (count > 0) {
        checkFirstFrames();
    }
}
function enable(cap) {
    gl.glEnable(cap);
}
function enableVertexAttribArray(index) {
    gl.glEnableVertexAttribArray(index);
}
function finish() {
    gl.glFinish();
}
function flush() {
    gl.glFlush();
}
function framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
    gl.glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer);
}
function framebufferTexture2D(target, attachment, textarget, texture, level) {
    gl.glFramebufferTexture2D(target, attachment, textarget, texture, level);
}
function frontFace(mode) {
    gl.glFrontFace(mode);
}
function generateMipmap(target) {
    gl.glGenerateMipmap(target);
}
function getAttribLocation(program, name) {
    return gl.glGetAttribLocation(program, name);
}
function getError() {
    return gl.glGetError();
}
function getShaderPrecisionFormat(shadertype, precisiontype) {
    return gl.glGetShaderPrecisionFormat(shadertype, precisiontype);
}
function getProgramInfoLog(program) {
    return gl.glGetProgramInfoLog(program);
}
function getShaderInfoLog(shader) {
    return gl.glGetShaderInfoLog(shader);
}
function getShaderSource(shader) {
    return gl.glGetShaderSource(shader);
}
function getUniformLocation(program, name) {
    return gl.glGetUniformLocation(program, name);
}
function getVertexAttribOffset(index, pname) {
    return gl.glGetVertexAttribOffset(index, pname);
}
function hint(target, mode) {
    gl.glHint(target, mode);
}
function isBuffer(buffer) {
    return gl.glIsBuffer(buffer);
}
function isEnabled(cap) {
    return gl.glIsEnabled(cap);
}
function isFramebuffer(framebuffer) {
    return gl.glIsFramebuffer(framebuffer);
}
function isProgram(program) {
    return gl.glIsProgram(program);
}
function isRenderbuffer(renderbuffer) {
    return gl.glIsRenderbuffer(renderbuffer);
}
function isShader(shader) {
    return gl.glIsShader(shader);
}
function isTexture(texture) {
    return gl.glIsTexture(texture);
}
function lineWidth(width) {
    gl.glLineWidth(width);
}
function linkProgram(program) {
    gl.glLinkProgram(program);
}
function pixelStorei(pname, param) {
    gl.glPixelStorei(pname, param);
}
function polygonOffset(factor, units) {
    gl.glPolygonOffset(factor, units);
}
function readPixels(x, y, width, height, format, type, pixels) {
    gl.glReadPixels(x, y, width, height, format, type, pixels);
}
function renderbufferStorage(target, internalformat, width, height) {
    gl.glRenderbufferStorage(target, internalformat, width, height);
}
function sampleCoverage(value, invert) {
    gl.glSampleCoverage(value, invert);
}
function scissor(x, y, width, height) {
    gl.glScissor(x, y, width, height);
}
function shaderSource(shader, source) {
    gl.glShaderSource(shader, source);
}
function stencilFunc(func, ref, mask) {
    gl.glStencilFunc(func, ref, mask);
}
function stencilFuncSeparate(face, func, ref, mask) {
    gl.glStencilFuncSeparate(face, func, ref, mask);
}
function stencilMask(mask) {
    gl.glStencilMask(mask);
}
function stencilMaskSeparate(face, mask) {
    gl.glStencilMaskSeparate(face, mask);
}
function stencilOp(fail, zfail, zpass) {
    gl.glStencilOp(fail, zfail, zpass);
}
function stencilOpSeparate(face, fail, zfail, zpass) {
    gl.glStencilOpSeparate(face, fail, zfail, zpass);
}
function texImage2D(target, level, internalformat /*, ...*/) {
    switch (arguments.length) {
        case 6:
            {
                var format = arguments[3];
                var type = arguments[4];
                var source = arguments[5];
                if (Object.prototype.hasOwnProperty.call(source, '__nativeObj')) {
                    gl.glTexImage2D(target, level, internalformat, format, type, source.__nativeObj);
                } else {
                    if (source.bkImage) {
                        gl.glTexImage2D(target, level, internalformat, format, type, source.bkImage);
                    } else {
                        gl.glTexImage2D(target, level, internalformat, format, type, source);
                    }
                }
                break;
            }
        case 9:
            {
                var width = arguments[3];
                var height = arguments[4];
                var border = arguments[5];
                var format = arguments[6];
                var type = arguments[7];
                var pixels = arguments[8];
                gl.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
                break;
            }
    }
}
function texParameterf(target, pname, param) {
    gl.glTexParameterf(target, pname, param);
}
function texParameteri(target, pname, param) {
    gl.glTexParameteri(target, pname, param);
}
function texSubImage2D(target, level, xoffset, yoffset /*...*/) {
    switch (arguments.length) {
        case 7:
            {
                var format = arguments[4];
                var type = arguments[5];
                var source = arguments[6];
                if (Object.prototype.hasOwnProperty.call(source, '__nativeObj')) {
                    gl.glTexSubImage2D(target, level, xoffset, yoffset, format, type, source.__nativeObj);
                } else {
                    gl.glTexSubImage2D(target, level, xoffset, yoffset, format, type, source);
                }
                break;
            }
        case 9:
            {
                var width = arguments[4];
                var height = arguments[5];
                var format = arguments[6];
                var type = arguments[7];
                var pixels = arguments[8];
                gl.glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
                break;
            }
    }
}
function uniform1f(location, x) {
    gl.glUniform1f(location, x);
}
function uniform2f(location, x, y) {
    gl.glUniform2f(location, x, y);
}
function uniform3f(location, x, y, z) {
    gl.glUniform3f(location, x, y, z);
}
function uniform4f(location, x, y, z, w) {
    gl.glUniform4f(location, x, y, z, w);
}
function uniform1i(location, x) {
    gl.glUniform1i(location, x);
}
function uniform2i(location, x, y) {
    gl.glUniform2i(location, x, y);
}
function uniform3i(location, x, y, z) {
    gl.glUniform3i(location, x, y, z);
}
function uniform4i(location, x, y, z, w) {
    gl.glUniform4i(location, x, y, z, w);
}
function uniform1fv(location, v) {
    gl.glUniform1fv(location, __TypedArrayGetData(v instanceof Array == true ? new Float32Array(v) : v));
}
function uniform2fv(location, v) {
    gl.glUniform2fv(location, __TypedArrayGetData(v instanceof Array == true ? new Float32Array(v) : v));
}
function uniform3fv(location, v) {
    gl.glUniform3fv(location, __TypedArrayGetData(v instanceof Array == true ? new Float32Array(v) : v));
}
function uniform4fv(location, v) {
    gl.glUniform4fv(location, __TypedArrayGetData(v instanceof Array == true ? new Float32Array(v) : v));
}
function uniform1iv(location, v) {
    gl.glUniform1iv(location, __TypedArrayGetData(v instanceof Array == true ? new Int32Array(v) : v));
}
function uniform2iv(location, v) {
    gl.glUniform2iv(location, __TypedArrayGetData(v instanceof Array == true ? new Int32Array(v) : v));
}
function uniform3iv(location, v) {
    gl.glUniform3iv(location, __TypedArrayGetData(v instanceof Array == true ? new Int32Array(v) : v));
}
function uniform4iv(location, v) {
    gl.glUniform4iv(location, __TypedArrayGetData(v instanceof Array == true ? new Int32Array(v) : v));
}
function uniformMatrix2fv(location, transpose, value) {
    gl.glUniformMatrix2fv(location, transpose, __TypedArrayGetData(value instanceof Array == true ? new Float32Array(value) : value));
}
function uniformMatrix3fv(location, transpose, value) {
    gl.glUniformMatrix3fv(location, transpose, __TypedArrayGetData(value instanceof Array == true ? new Float32Array(value) : value));
}
function uniformMatrix4fv(location, transpose, value) {
    gl.glUniformMatrix4fv(location, transpose, __TypedArrayGetData(value instanceof Array == true ? new Float32Array(value) : value));
}
function useProgram(program) {
    gl.glUseProgram(program);
}
function validateProgram(program) {
    gl.glValidateProgram(program);
}
function vertexAttrib1f(index, x) {
    gl.glVertexAttrib1f(index, x);
}
function vertexAttrib2f(index, x, y) {
    gl.glVertexAttrib2f(index, x, y);
}
function vertexAttrib3f(index, x, y, z) {
    gl.glVertexAttrib3f(index, x, y, z);
}
function vertexAttrib4f(index, x, y, z, w) {
    gl.glVertexAttrib4f(index, x, y, z, w);
}
function vertexAttrib1fv(index, values) {
    gl.glVertexAttrib1fv(index, __TypedArrayGetData(values instanceof Array == true ? new Float32Array(values) : values));
}
function vertexAttrib2fv(index, values) {
    gl.glVertexAttrib2fv(index, __TypedArrayGetData(values instanceof Array == true ? new Float32Array(values) : values));
}
function vertexAttrib3fv(index, values) {
    gl.glVertexAttrib3fv(index, __TypedArrayGetData(values instanceof Array == true ? new Float32Array(values) : values));
}
function vertexAttrib4fv(index, values) {
    gl.glVertexAttrib4fv(index, __TypedArrayGetData(values instanceof Array == true ? new Float32Array(values) : values));
}
function vertexAttribPointer(index, size, type, normalized, stride, offset) {
    gl.glVertexAttribPointer(index, size, type, normalized, stride, offset);
}
function viewport(x, y, width, height) {
    gl.glViewport(x, y, width, height);
}
function getActiveAttrib(program, index) {
    return gl.glGetActiveAttrib(program, index);
}
function getActiveUniform(program, index) {
    return gl.glGetActiveUniform(program, index);
}
function getAttachedShaders(program) {
    return gl.glGetAttachedShaders(program);
}
function getBufferParameter(target, pname) {
    return gl.glGetBufferParameter(target, pname);
}
function getFramebufferAttachmentParameter(target, attachment, pname) {
    return gl.glGetFramebufferAttachmentParameter(target, attachment, pname);
}
function getProgramParameter(program, pname) {
    return gl.glGetProgramParameter(program, pname);
}
function getRenderbufferParameter(target, pname) {
    return gl.glGetRenderbufferParameter(target, pname);
}
function getShaderParameter(shader, pname) {
    return gl.glGetShaderParameter(shader, pname);
}
function getTexParameter(target, pname) {
    return gl.glGetTexParameter(target, pname);
}
function getVertexAttrib(index, pname) {
    return gl.glGetVertexAttrib(index, pname);
}
function getUniform(program, location) {
    return gl.glGetUniform(program, location);
}
function getParameter(pname) {
    switch (pname) {
        case gl.ACTIVE_TEXTURE:
        case gl.ALPHA_BITS:
        case gl.ARRAY_BUFFER_BINDING:
        case gl.BLUE_BITS:
        case gl.CULL_FACE_MODE:
        case gl.CURRENT_PROGRAM:
        case gl.DEPTH_BITS:
        case gl.DEPTH_FUNC:
        case gl.ELEMENT_ARRAY_BUFFER_BINDING:
        case gl.FRAMEBUFFER_BINDING:
        case gl.FRONT_FACE:
        case gl.GENERATE_MIPMAP_HINT:
        case gl.GREEN_BITS:
        case gl.IMPLEMENTATION_COLOR_READ_FORMAT:
        case gl.IMPLEMENTATION_COLOR_READ_TYPE:
        case gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
        case gl.MAX_CUBE_MAP_TEXTURE_SIZE:
        case gl.MAX_FRAGMENT_UNIFORM_VECTORS:
        case gl.MAX_RENDERBUFFER_SIZE:
        case gl.MAX_TEXTURE_IMAGE_UNITS:
        case gl.MAX_TEXTURE_SIZE:
        case gl.MAX_VARYING_VECTORS:
        case gl.MAX_VERTEX_ATTRIBS:
        case gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
        case gl.MAX_VERTEX_UNIFORM_VECTORS:
        case gl.MAX_VIEWPORT_DIMS:
        case gl.NUM_COMPRESSED_TEXTURE_FORMATS:
        case gl.NUM_SHADER_BINARY_FORMATS:
        case gl.PACK_ALIGNMENT:
        case gl.RED_BITS:
        case gl.RENDERBUFFER_BINDING:
        case gl.SAMPLE_BUFFERS:
        case gl.SAMPLES:
        case gl.STENCIL_BACK_FAIL:
        case gl.STENCIL_BACK_FUNC:
        case gl.STENCIL_BACK_PASS_DEPTH_FAIL:
        case gl.STENCIL_BACK_PASS_DEPTH_PASS:
        case gl.STENCIL_BACK_REF:
        case gl.STENCIL_BACK_VALUE_MASK:
        case gl.STENCIL_BACK_WRITEMASK:
        case gl.STENCIL_BITS:
        case gl.STENCIL_CLEAR_VALUE:
        case gl.STENCIL_FAIL:
        case gl.STENCIL_FUNC:
        case gl.STENCIL_PASS_DEPTH_FAIL:
        case gl.STENCIL_PASS_DEPTH_PASS:
        case gl.STENCIL_REF:
        case gl.STENCIL_VALUE_MASK:
        case gl.STENCIL_WRITEMASK:
        case gl.SUBPIXEL_BITS:
        case gl.TEXTURE_BINDING_2D:
        case gl.TEXTURE_BINDING_CUBE_MAP:
        case gl.UNPACK_ALIGNMENT:
        case gl.BLEND_DST_ALPHA:
        case gl.BLEND_DST_RGB:
        case gl.BLEND_EQUATION_ALPHA:
        case gl.BLEND_EQUATION_RGB:
        case gl.BLEND_SRC_ALPHA:
        case gl.BLEND_SRC_RGB:
            {
                return gl.glGetParameterInt(pname, 1);
                // break;
            }
        case gl.ALIASED_LINE_WIDTH_RANGE:
        case gl.ALIASED_POINT_SIZE_RANGE:
        case gl.DEPTH_RANGE:
        case gl.MAX_VIEWPORT_DIMS:
            {
                return gl.glGetParameterFloat(pname, 2);
                // break;
            }
        case gl.BLEND:
        case gl.CULL_FACE:
        case gl.DEPTH_TEST:
        case gl.DEPTH_WRITEMASK:
        case gl.DITHER:
        case gl.POLYGON_OFFSET_FILL:
        case gl.SAMPLE_ALPHA_TO_COVERAGE:
        case gl.SAMPLE_COVERAGE:
        case gl.SAMPLE_COVERAGE_INVERT:
        case gl.SCISSOR_TEST:
        case gl.SHADER_COMPILER:
        case gl.STENCIL_TEST:
            {
                return gl.glGetParameterBool(pname, 1);
                // break;
            }
        case gl.BLEND_COLOR:
        case gl.COLOR_CLEAR_VALUE:
            {
                return gl.glGetParameterFloat(pname, 4);
                // break;
            }
        case gl.SCISSOR_BOX:
        case gl.VIEWPORT:
            {
                return gl.glGetParameterInt(pname, 4);
                // break;
            }
        case gl.COLOR_WRITEMASK:
            {
                return gl.glGetParameterBool(pname, 4);
                // break;
            }
        case gl.POLYGON_OFFSET_FACTOR:
        case gl.POLYGON_OFFSET_UNITS:
        case gl.SAMPLE_COVERAGE_VALUE:
            {
                return gl.glGetParameterFloat(pname, 1);
                // break;
            }
        case gl.SHADER_BINARY_FORMATS:
            {
                var len = gl.glGetParameterInt(gl.NUM_SHADER_BINARY_FORMATS, 1);
                return gl.glGetParameterInt(pname, len);
                // break;
            }
        case gl.COMPRESSED_TEXTURE_FORMATS:
            {
                var len = gl.glGetParameterInt(gl.NUM_COMPRESSED_TEXTURE_FORMATS, 1);
                return gl.glGetParameterInt(pname, len);
                // break;
            }
        case gl.VERSION:
            return "WebGL 1";
        default:
            break;
    }
}
function voidFunc(a, b, c, d, e, f, l, i, k, o) {}
function attchVoidMethod() {
    gl.activeTexture = voidFunc;
    gl.attachShader = voidFunc;
    gl.bindAttribLocation = voidFunc;
    gl.bindBuffer = voidFunc;
    gl.bindFramebuffer = voidFunc;
    gl.bindRenderbuffer = voidFunc;
    gl.bindTexture = voidFunc;
    gl.blendColor = voidFunc;
    gl.blendEquation = voidFunc;
    gl.blendEquationSeparate = voidFunc;
    gl.blendFunc = voidFunc;
    gl.blendFuncSeparate = voidFunc;
    gl.bufferData = voidFunc;
    gl.bufferData = voidFunc;
    gl.bufferSubData = voidFunc;
    gl.checkFramebufferStatus = voidFunc;
    gl.clear = voidFunc;
    gl.clearColor = voidFunc;
    gl.clearDepth = voidFunc;
    gl.clearStencil = voidFunc;
    gl.colorMask = voidFunc;
    gl.compileShader = voidFunc;
    gl.compressedTexImage2D = voidFunc;
    gl.compressedTexSubImage2D = voidFunc;
    gl.copyTexImage2D = voidFunc;
    gl.copyTexSubImage2D = voidFunc;
    gl.createBuffer = voidFunc;
    gl.createFramebuffer = voidFunc;
    gl.createProgram = voidFunc;
    gl.createRenderbuffer = voidFunc;
    gl.createShader = voidFunc;
    gl.createTexture = voidFunc;
    gl.cullFace = voidFunc;
    gl.deleteBuffer = voidFunc;
    gl.deleteFramebuffer = voidFunc;
    gl.deleteProgram = voidFunc;
    gl.deleteRenderbuffer = voidFunc;
    gl.deleteShader = voidFunc;
    gl.deleteTexture = voidFunc;
    gl.depthFunc = voidFunc;
    gl.depthMask = voidFunc;
    gl.depthRange = voidFunc;
    gl.detachShader = voidFunc;
    gl.disable = voidFunc;
    gl.disableVertexAttribArray = voidFunc;
    gl.drawArrays = voidFunc;
    gl.drawElements = voidFunc;
    gl.enable = voidFunc;
    gl.enableVertexAttribArray = voidFunc;
    gl.finish = voidFunc;
    gl.flush = voidFunc;
    gl.framebufferRenderbuffer = voidFunc;
    gl.framebufferTexture2D = voidFunc;
    gl.frontFace = voidFunc;
    gl.generateMipmap = voidFunc;
    gl.getAttribLocation = voidFunc;
    gl.getError = voidFunc;
    gl.getProgramInfoLog = voidFunc;
    gl.getShaderInfoLog = voidFunc;
    gl.getShaderSource = voidFunc;
    gl.getUniformLocation = voidFunc;
    gl.getVertexAttribOffset = voidFunc;
    gl.hint = voidFunc;
    gl.isBuffer = voidFunc;
    gl.isEnabled = voidFunc;
    gl.isFramebuffer = voidFunc;
    gl.isProgram = voidFunc;
    gl.isRenderbuffer = voidFunc;
    gl.isShader = voidFunc;
    gl.isTexture = voidFunc;
    gl.lineWidth = voidFunc;
    gl.linkProgram = voidFunc;
    gl.pixelStorei = voidFunc;
    gl.polygonOffset = voidFunc;
    gl.readPixels = voidFunc;
    gl.renderbufferStorage = voidFunc;
    gl.sampleCoverage = voidFunc;
    gl.scissor = voidFunc;
    gl.shaderSource = voidFunc;
    gl.stencilFunc = voidFunc;
    gl.stencilFuncSeparate = voidFunc;
    gl.stencilMask = voidFunc;
    gl.stencilMaskSeparate = voidFunc;
    gl.stencilOp = voidFunc;
    gl.stencilOpSeparate = voidFunc;
    gl.texImage2D = voidFunc;
    gl.texSubImage2D = voidFunc;
    gl.texParameterf = voidFunc;
    gl.texParameteri = voidFunc;
    gl.uniform1f = voidFunc;
    gl.uniform2f = voidFunc;
    gl.uniform3f = voidFunc;
    gl.uniform4f = voidFunc;
    gl.uniform1i = voidFunc;
    gl.uniform2i = voidFunc;
    gl.uniform3i = voidFunc;
    gl.uniform4i = voidFunc;
    gl.uniform1fv = voidFunc;
    gl.uniform2fv = voidFunc;
    gl.uniform3fv = voidFunc;
    gl.uniform4fv = voidFunc;
    gl.uniform1iv = voidFunc;
    gl.uniform2iv = voidFunc;
    gl.uniform3iv = voidFunc;
    gl.uniform4iv = voidFunc;
    gl.uniformMatrix2fv = voidFunc;
    gl.uniformMatrix3fv = voidFunc;
    gl.uniformMatrix4fv = voidFunc;
    gl.useProgram = voidFunc;
    gl.validateProgram = voidFunc;
    gl.vertexAttrib1f = voidFunc;
    gl.vertexAttrib2f = voidFunc;
    gl.vertexAttrib3f = voidFunc;
    gl.vertexAttrib4f = voidFunc;
    gl.vertexAttrib1fv = voidFunc;
    gl.vertexAttrib2fv = voidFunc;
    gl.vertexAttrib3fv = voidFunc;
    gl.vertexAttrib4fv = voidFunc;
    gl.vertexAttribPointer = voidFunc;
    gl.viewport = voidFunc;
    gl.getActiveAttrib = voidFunc;
    gl.getActiveUniform = voidFunc;
    gl.getAttachedShaders = voidFunc;
    gl.getBufferParameter = voidFunc;
    gl.getFramebufferAttachmentParameter = voidFunc;
    gl.getProgramParameter = voidFunc;
    gl.getRenderbufferParameter = voidFunc;
    gl.getShaderParameter = voidFunc;
    gl.getTexParameter = voidFunc;
    gl.getVertexAttrib = voidFunc;
    gl.getParameter = voidFunc;
    gl.getUniform = voidFunc;
    gl.getShaderPrecisionFormat = voidFunc;
}
function attachMethod() {
    gl.activeTexture = activeTexture;
    gl.attachShader = attachShader;
    gl.bindAttribLocation = bindAttribLocation;
    gl.bindBuffer = bindBuffer;
    gl.bindFramebuffer = bindFramebuffer;
    gl.bindRenderbuffer = bindRenderbuffer;
    gl.bindTexture = bindTexture;
    gl.blendColor = blendColor;
    gl.blendEquation = blendEquation;
    gl.blendEquationSeparate = blendEquationSeparate;
    gl.blendFunc = blendFunc;
    gl.blendFuncSeparate = blendFuncSeparate;
    gl.bufferData = bufferData;
    gl.bufferData = bufferData;
    gl.bufferSubData = bufferSubData;
    gl.checkFramebufferStatus = checkFramebufferStatus;
    gl.clear = clear;
    gl.clearColor = clearColor;
    gl.clearDepth = clearDepth;
    gl.clearStencil = clearStencil;
    gl.colorMask = colorMask;
    gl.compileShader = compileShader;
    gl.compressedTexImage2D = compressedTexImage2D;
    gl.compressedTexSubImage2D = compressedTexSubImage2D;
    gl.copyTexImage2D = copyTexImage2D;
    gl.copyTexSubImage2D = copyTexSubImage2D;
    gl.createBuffer = createBuffer;
    gl.createFramebuffer = createFramebuffer;
    gl.createProgram = createProgram;
    gl.createRenderbuffer = createRenderbuffer;
    gl.createShader = createShader;
    gl.createTexture = createTexture;
    gl.cullFace = cullFace;
    gl.deleteBuffer = deleteBuffer;
    gl.deleteFramebuffer = deleteFramebuffer;
    gl.deleteProgram = deleteProgram;
    gl.deleteRenderbuffer = deleteRenderbuffer;
    gl.deleteShader = deleteShader;
    gl.deleteTexture = deleteTexture;
    gl.depthFunc = depthFunc;
    gl.depthMask = depthMask;
    gl.depthRange = depthRange;
    gl.detachShader = detachShader;
    gl.disable = disable;
    gl.disableVertexAttribArray = disableVertexAttribArray;
    gl.drawArrays = drawArrays;
    gl.drawElements = drawElements;
    gl.enable = enable;
    gl.enableVertexAttribArray = enableVertexAttribArray;
    gl.finish = finish;
    gl.flush = flush;
    gl.framebufferRenderbuffer = framebufferRenderbuffer;
    gl.framebufferTexture2D = framebufferTexture2D;
    gl.frontFace = frontFace;
    gl.generateMipmap = generateMipmap;
    gl.getAttribLocation = getAttribLocation;
    gl.getError = getError;
    gl.getProgramInfoLog = getProgramInfoLog;
    gl.getShaderInfoLog = getShaderInfoLog;
    gl.getShaderSource = getShaderSource;
    gl.getUniformLocation = getUniformLocation;
    gl.getVertexAttribOffset = getVertexAttribOffset;
    gl.hint = hint;
    gl.isBuffer = isBuffer;
    gl.isEnabled = isEnabled;
    gl.isFramebuffer = isFramebuffer;
    gl.isProgram = isProgram;
    gl.isRenderbuffer = isRenderbuffer;
    gl.isShader = isShader;
    gl.isTexture = isTexture;
    gl.lineWidth = lineWidth;
    gl.linkProgram = linkProgram;
    gl.pixelStorei = pixelStorei;
    gl.polygonOffset = polygonOffset;
    gl.readPixels = readPixels;
    gl.renderbufferStorage = renderbufferStorage;
    gl.sampleCoverage = sampleCoverage;
    gl.scissor = scissor;
    gl.shaderSource = shaderSource;
    gl.stencilFunc = stencilFunc;
    gl.stencilFuncSeparate = stencilFuncSeparate;
    gl.stencilMask = stencilMask;
    gl.stencilMaskSeparate = stencilMaskSeparate;
    gl.stencilOp = stencilOp;
    gl.stencilOpSeparate = stencilOpSeparate;
    gl.texImage2D = texImage2D;
    gl.texSubImage2D = texSubImage2D;
    gl.texParameterf = texParameterf;
    gl.texParameteri = texParameteri;
    gl.uniform1f = uniform1f;
    gl.uniform2f = uniform2f;
    gl.uniform3f = uniform3f;
    gl.uniform4f = uniform4f;
    gl.uniform1i = uniform1i;
    gl.uniform2i = uniform2i;
    gl.uniform3i = uniform3i;
    gl.uniform4i = uniform4i;
    gl.uniform1fv = uniform1fv;
    gl.uniform2fv = uniform2fv;
    gl.uniform3fv = uniform3fv;
    gl.uniform4fv = uniform4fv;
    gl.uniform1iv = uniform1iv;
    gl.uniform2iv = uniform2iv;
    gl.uniform3iv = uniform3iv;
    gl.uniform4iv = uniform4iv;
    gl.uniformMatrix2fv = uniformMatrix2fv;
    gl.uniformMatrix3fv = uniformMatrix3fv;
    gl.uniformMatrix4fv = uniformMatrix4fv;
    gl.useProgram = useProgram;
    gl.validateProgram = validateProgram;
    gl.vertexAttrib1f = vertexAttrib1f;
    gl.vertexAttrib2f = vertexAttrib2f;
    gl.vertexAttrib3f = vertexAttrib3f;
    gl.vertexAttrib4f = vertexAttrib4f;
    gl.vertexAttrib1fv = vertexAttrib1fv;
    gl.vertexAttrib2fv = vertexAttrib2fv;
    gl.vertexAttrib3fv = vertexAttrib3fv;
    gl.vertexAttrib4fv = vertexAttrib4fv;
    gl.vertexAttribPointer = vertexAttribPointer;
    gl.viewport = viewport;
    gl.getActiveAttrib = getActiveAttrib;
    gl.getActiveUniform = getActiveUniform;
    gl.getAttachedShaders = getAttachedShaders;
    gl.getBufferParameter = getBufferParameter;
    gl.getFramebufferAttachmentParameter = getFramebufferAttachmentParameter;
    gl.getProgramParameter = getProgramParameter;
    gl.getRenderbufferParameter = getRenderbufferParameter;
    gl.getShaderParameter = getShaderParameter;
    gl.getTexParameter = getTexParameter;
    gl.getVertexAttrib = getVertexAttrib;
    gl.getParameter = getParameter;
    gl.getUniform = getUniform;
    gl.getShaderPrecisionFormat = getShaderPrecisionFormat;
    gl.getExtension = function () {
        return null;
    };
    gl.getSupportedExtensions = function () {
        return [];
    };
    gl.getContextAttributes = function () {
        return { alpha: true,
            antialias: true,
            depth: true,
            failIfMajorPerformanceCaveat: false,
            powerPreference: "default",
            premultipliedAlpha: true,
            preserveDrawingBuffer: false,
            stencil: true };
    };
    gl.isContextLost = function () {
        return false;
    };
    gl.isContextLost = function () {
        return false;
    };
}
function attatchConst() {
    /* ClearBufferMask */
    gl.id = 0;
    gl.DEPTH_BUFFER_BIT = 0x00000100;
    gl.STENCIL_BUFFER_BIT = 0x00000400;
    gl.COLOR_BUFFER_BIT = 0x00004000;
    /* BeginMode */
    gl.POINTS = 0x0000;
    gl.LINES = 0x0001;
    gl.LINE_LOOP = 0x0002;
    gl.LINE_STRIP = 0x0003;
    gl.TRIANGLES = 0x0004;
    gl.TRIANGLE_STRIP = 0x0005;
    gl.TRIANGLE_FAN = 0x0006;
    /* AlphaFunction (not supported in ES20) */
    /*      NEVER */
    /*      LESS */
    /*      EQUAL */
    /*      LEQUAL */
    /*      GREATER */
    /*      NOTEQUAL */
    /*      GEQUAL */
    /*      ALWAYS */
    /* BlendingFactorDest */
    gl.ZERO = 0;
    gl.ONE = 1;
    gl.SRC_COLOR = 0x0300;
    gl.ONE_MINUS_SRC_COLOR = 0x0301;
    gl.SRC_ALPHA = 0x0302;
    gl.ONE_MINUS_SRC_ALPHA = 0x0303;
    gl.DST_ALPHA = 0x0304;
    gl.ONE_MINUS_DST_ALPHA = 0x0305;
    /* BlendingFactorSrc */
    /*      ZERO */
    /*      ONE */
    gl.DST_COLOR = 0x0306;
    gl.ONE_MINUS_DST_COLOR = 0x0307;
    gl.SRC_ALPHA_SATURATE = 0x0308;
    /*      SRC_ALPHA */
    /*      ONE_MINUS_SRC_ALPHA */
    /*      DST_ALPHA */
    /*      ONE_MINUS_DST_ALPHA */
    /* BlendEquationSeparate */
    gl.FUNC_ADD = 0x8006;
    gl.BLEND_EQUATION = 0x8009;
    gl.BLEND_EQUATION_RGB = 0x8009; /* same as BLEND_EQUATION */
    gl.BLEND_EQUATION_ALPHA = 0x883D;
    /* BlendSubtract */
    gl.FUNC_SUBTRACT = 0x800A;
    gl.FUNC_REVERSE_SUBTRACT = 0x800B;
    /* Separate Blend Functions */
    gl.BLEND_DST_RGB = 0x80C8;
    gl.BLEND_SRC_RGB = 0x80C9;
    gl.BLEND_DST_ALPHA = 0x80CA;
    gl.BLEND_SRC_ALPHA = 0x80CB;
    gl.CONSTANT_COLOR = 0x8001;
    gl.ONE_MINUS_CONSTANT_COLOR = 0x8002;
    gl.CONSTANT_ALPHA = 0x8003;
    gl.ONE_MINUS_CONSTANT_ALPHA = 0x8004;
    gl.BLEND_COLOR = 0x8005;
    /* Buffer Objects */
    gl.ARRAY_BUFFER = 0x8892;
    gl.ELEMENT_ARRAY_BUFFER = 0x8893;
    gl.ARRAY_BUFFER_BINDING = 0x8894;
    gl.ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;
    gl.STREAM_DRAW = 0x88E0;
    gl.STATIC_DRAW = 0x88E4;
    gl.DYNAMIC_DRAW = 0x88E8;
    gl.BUFFER_SIZE = 0x8764;
    gl.BUFFER_USAGE = 0x8765;
    gl.CURRENT_VERTEX_ATTRIB = 0x8626;
    /* CullFaceMode */
    gl.FRONT = 0x0404;
    gl.BACK = 0x0405;
    gl.FRONT_AND_BACK = 0x0408;
    /* DepthFunction */
    /*      NEVER */
    /*      LESS */
    /*      EQUAL */
    /*      LEQUAL */
    /*      GREATER */
    /*      NOTEQUAL */
    /*      GEQUAL */
    /*      ALWAYS */
    /* EnableCap */
    /* TEXTURE_2D */
    gl.CULL_FACE = 0x0B44;
    gl.BLEND = 0x0BE2;
    gl.DITHER = 0x0BD0;
    gl.STENCIL_TEST = 0x0B90;
    gl.DEPTH_TEST = 0x0B71;
    gl.SCISSOR_TEST = 0x0C11;
    gl.POLYGON_OFFSET_FILL = 0x8037;
    gl.SAMPLE_ALPHA_TO_COVERAGE = 0x809E;
    gl.SAMPLE_COVERAGE = 0x80A0;
    /* ErrorCode */
    gl.NO_ERROR = 0;
    gl.INVALID_ENUM = 0x0500;
    gl.INVALID_VALUE = 0x0501;
    gl.INVALID_OPERATION = 0x0502;
    gl.OUT_OF_MEMORY = 0x0505;
    /* FrontFaceDirection */
    gl.CW = 0x0900;
    gl.CCW = 0x0901;
    /* GetPName */
    gl.LINE_WIDTH = 0x0B21;
    gl.ALIASED_POINT_SIZE_RANGE = 0x846D;
    gl.ALIASED_LINE_WIDTH_RANGE = 0x846E;
    gl.CULL_FACE_MODE = 0x0B45;
    gl.FRONT_FACE = 0x0B46;
    gl.DEPTH_RANGE = 0x0B70;
    gl.DEPTH_WRITEMASK = 0x0B72;
    gl.DEPTH_CLEAR_VALUE = 0x0B73;
    gl.DEPTH_FUNC = 0x0B74;
    gl.STENCIL_CLEAR_VALUE = 0x0B91;
    gl.STENCIL_FUNC = 0x0B92;
    gl.STENCIL_FAIL = 0x0B94;
    gl.STENCIL_PASS_DEPTH_FAIL = 0x0B95;
    gl.STENCIL_PASS_DEPTH_PASS = 0x0B96;
    gl.STENCIL_REF = 0x0B97;
    gl.STENCIL_VALUE_MASK = 0x0B93;
    gl.STENCIL_WRITEMASK = 0x0B98;
    gl.STENCIL_BACK_FUNC = 0x8800;
    gl.STENCIL_BACK_FAIL = 0x8801;
    gl.STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;
    gl.STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;
    gl.STENCIL_BACK_REF = 0x8CA3;
    gl.STENCIL_BACK_VALUE_MASK = 0x8CA4;
    gl.STENCIL_BACK_WRITEMASK = 0x8CA5;
    gl.VIEWPORT = 0x0BA2;
    gl.SCISSOR_BOX = 0x0C10;
    /*      SCISSOR_TEST */
    gl.COLOR_CLEAR_VALUE = 0x0C22;
    gl.COLOR_WRITEMASK = 0x0C23;
    gl.UNPACK_ALIGNMENT = 0x0CF5;
    gl.PACK_ALIGNMENT = 0x0D05;
    gl.MAX_TEXTURE_SIZE = 0x0D33;
    gl.MAX_VIEWPORT_DIMS = 0x0D3A;
    gl.SUBPIXEL_BITS = 0x0D50;
    gl.RED_BITS = 0x0D52;
    gl.GREEN_BITS = 0x0D53;
    gl.BLUE_BITS = 0x0D54;
    gl.ALPHA_BITS = 0x0D55;
    gl.DEPTH_BITS = 0x0D56;
    gl.STENCIL_BITS = 0x0D57;
    gl.POLYGON_OFFSET_UNITS = 0x2A00;
    /*      POLYGON_OFFSET_FILL */
    gl.POLYGON_OFFSET_FACTOR = 0x8038;
    gl.TEXTURE_BINDING_2D = 0x8069;
    gl.SAMPLE_BUFFERS = 0x80A8;
    gl.SAMPLES = 0x80A9;
    gl.SAMPLE_COVERAGE_VALUE = 0x80AA;
    gl.SAMPLE_COVERAGE_INVERT = 0x80AB;
    /* GetTextureParameter */
    /*      TEXTURE_MAG_FILTER */
    /*      TEXTURE_MIN_FILTER */
    /*      TEXTURE_WRAP_S */
    /*      TEXTURE_WRAP_T */
    gl.COMPRESSED_TEXTURE_FORMATS = 0x86A3;
    /* HintMode */
    gl.DONT_CARE = 0x1100;
    gl.FASTEST = 0x1101;
    gl.NICEST = 0x1102;
    /* HintTarget */
    gl.GENERATE_MIPMAP_HINT = 0x8192;
    /* DataType */
    gl.BYTE = 0x1400;
    gl.UNSIGNED_BYTE = 0x1401;
    gl.SHORT = 0x1402;
    gl.UNSIGNED_SHORT = 0x1403;
    gl.INT = 0x1404;
    gl.UNSIGNED_INT = 0x1405;
    gl.FLOAT = 0x1406;
    /* PixelFormat */
    gl.DEPTH_COMPONENT = 0x1902;
    gl.ALPHA = 0x1906;
    gl.RGB = 0x1907;
    gl.RGBA = 0x1908;
    gl.LUMINANCE = 0x1909;
    gl.LUMINANCE_ALPHA = 0x190A;
    /* PixelType */
    /*      UNSIGNED_BYTE */
    gl.UNSIGNED_SHORT_4_4_4_4 = 0x8033;
    gl.UNSIGNED_SHORT_5_5_5_1 = 0x8034;
    gl.UNSIGNED_SHORT_5_6_5 = 0x8363;
    /* Shaders */
    gl.FRAGMENT_SHADER = 0x8B30;
    gl.VERTEX_SHADER = 0x8B31;
    gl.MAX_VERTEX_ATTRIBS = 0x8869;
    gl.MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;
    gl.MAX_VARYING_VECTORS = 0x8DFC;
    gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;
    gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;
    gl.MAX_TEXTURE_IMAGE_UNITS = 0x8872;
    gl.MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;
    gl.SHADER_TYPE = 0x8B4F;
    gl.DELETE_STATUS = 0x8B80;
    gl.LINK_STATUS = 0x8B82;
    gl.VALIDATE_STATUS = 0x8B83;
    gl.ATTACHED_SHADERS = 0x8B85;
    gl.ACTIVE_UNIFORMS = 0x8B86;
    gl.ACTIVE_ATTRIBUTES = 0x8B89;
    gl.SHADING_LANGUAGE_VERSION = 0x8B8C;
    gl.CURRENT_PROGRAM = 0x8B8D;
    /* StencilFunction */
    gl.NEVER = 0x0200;
    gl.LESS = 0x0201;
    gl.EQUAL = 0x0202;
    gl.LEQUAL = 0x0203;
    gl.GREATER = 0x0204;
    gl.NOTEQUAL = 0x0205;
    gl.GEQUAL = 0x0206;
    gl.ALWAYS = 0x0207;
    /* StencilOp */
    /*      ZERO */
    gl.KEEP = 0x1E00;
    gl.REPLACE = 0x1E01;
    gl.INCR = 0x1E02;
    gl.DECR = 0x1E03;
    gl.INVERT = 0x150A;
    gl.INCR_WRAP = 0x8507;
    gl.DECR_WRAP = 0x8508;
    /* StringName */
    gl.VENDOR = 0x1F00;
    gl.RENDERER = 0x1F01;
    gl.VERSION = 0x1F02;
    /* TextureMagFilter */
    gl.NEAREST = 0x2600;
    gl.LINEAR = 0x2601;
    /* TextureMinFilter */
    /*      NEAREST */
    /*      LINEAR */
    gl.NEAREST_MIPMAP_NEAREST = 0x2700;
    gl.LINEAR_MIPMAP_NEAREST = 0x2701;
    gl.NEAREST_MIPMAP_LINEAR = 0x2702;
    gl.LINEAR_MIPMAP_LINEAR = 0x2703;
    /* TextureParameterName */
    gl.TEXTURE_MAG_FILTER = 0x2800;
    gl.TEXTURE_MIN_FILTER = 0x2801;
    gl.TEXTURE_WRAP_S = 0x2802;
    gl.TEXTURE_WRAP_T = 0x2803;
    /* TextureTarget */
    gl.TEXTURE_2D = 0x0DE1;
    gl.TEXTURE = 0x1702;
    gl.TEXTURE_CUBE_MAP = 0x8513;
    gl.TEXTURE_BINDING_CUBE_MAP = 0x8514;
    gl.TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
    gl.TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
    gl.TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
    gl.TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
    gl.TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
    gl.TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;
    gl.MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;
    /* TextureUnit */
    gl.TEXTURE0 = 0x84C0;
    gl.TEXTURE1 = 0x84C1;
    gl.TEXTURE2 = 0x84C2;
    gl.TEXTURE3 = 0x84C3;
    gl.TEXTURE4 = 0x84C4;
    gl.TEXTURE5 = 0x84C5;
    gl.TEXTURE6 = 0x84C6;
    gl.TEXTURE7 = 0x84C7;
    gl.TEXTURE8 = 0x84C8;
    gl.TEXTURE9 = 0x84C9;
    gl.TEXTURE10 = 0x84CA;
    gl.TEXTURE11 = 0x84CB;
    gl.TEXTURE12 = 0x84CC;
    gl.TEXTURE13 = 0x84CD;
    gl.TEXTURE14 = 0x84CE;
    gl.TEXTURE15 = 0x84CF;
    gl.TEXTURE16 = 0x84D0;
    gl.TEXTURE17 = 0x84D1;
    gl.TEXTURE18 = 0x84D2;
    gl.TEXTURE19 = 0x84D3;
    gl.TEXTURE20 = 0x84D4;
    gl.TEXTURE21 = 0x84D5;
    gl.TEXTURE22 = 0x84D6;
    gl.TEXTURE23 = 0x84D7;
    gl.TEXTURE24 = 0x84D8;
    gl.TEXTURE25 = 0x84D9;
    gl.TEXTURE26 = 0x84DA;
    gl.TEXTURE27 = 0x84DB;
    gl.TEXTURE28 = 0x84DC;
    gl.TEXTURE29 = 0x84DD;
    gl.TEXTURE30 = 0x84DE;
    gl.TEXTURE31 = 0x84DF;
    gl.ACTIVE_TEXTURE = 0x84E0;
    /* TextureWrapMode */
    gl.REPEAT = 0x2901;
    gl.CLAMP_TO_EDGE = 0x812F;
    gl.MIRRORED_REPEAT = 0x8370;
    /* Uniform Types */
    gl.FLOAT_VEC2 = 0x8B50;
    gl.FLOAT_VEC3 = 0x8B51;
    gl.FLOAT_VEC4 = 0x8B52;
    gl.INT_VEC2 = 0x8B53;
    gl.INT_VEC3 = 0x8B54;
    gl.INT_VEC4 = 0x8B55;
    gl.BOOL = 0x8B56;
    gl.BOOL_VEC2 = 0x8B57;
    gl.BOOL_VEC3 = 0x8B58;
    gl.BOOL_VEC4 = 0x8B59;
    gl.FLOAT_MAT2 = 0x8B5A;
    gl.FLOAT_MAT3 = 0x8B5B;
    gl.FLOAT_MAT4 = 0x8B5C;
    gl.SAMPLER_2D = 0x8B5E;
    gl.SAMPLER_CUBE = 0x8B60;
    /* Vertex Arrays */
    gl.VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;
    gl.VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;
    gl.VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;
    gl.VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;
    gl.VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;
    gl.VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;
    gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;
    /* Read Format */
    gl.IMPLEMENTATION_COLOR_READ_TYPE = 0x8B9A;
    gl.IMPLEMENTATION_COLOR_READ_FORMAT = 0x8B9B;
    /* Shader Source */
    gl.COMPILE_STATUS = 0x8B81;
    /* Shader Precision-Specified Types */
    gl.LOW_FLOAT = 0x8DF0;
    gl.MEDIUM_FLOAT = 0x8DF1;
    gl.HIGH_FLOAT = 0x8DF2;
    gl.LOW_INT = 0x8DF3;
    gl.MEDIUM_INT = 0x8DF4;
    gl.HIGH_INT = 0x8DF5;
    /* Framebuffer Object. */
    gl.FRAMEBUFFER = 0x8D40;
    gl.RENDERBUFFER = 0x8D41;
    gl.RGBA4 = 0x8056;
    gl.RGB5_A1 = 0x8057;
    gl.RGB565 = 0x8D62;
    gl.DEPTH_COMPONENT16 = 0x81A5;
    gl.STENCIL_INDEX8 = 0x8D48;
    gl.DEPTH_STENCIL = 0x84F9;
    gl.RENDERBUFFER_WIDTH = 0x8D42;
    gl.RENDERBUFFER_HEIGHT = 0x8D43;
    gl.RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;
    gl.RENDERBUFFER_RED_SIZE = 0x8D50;
    gl.RENDERBUFFER_GREEN_SIZE = 0x8D51;
    gl.RENDERBUFFER_BLUE_SIZE = 0x8D52;
    gl.RENDERBUFFER_ALPHA_SIZE = 0x8D53;
    gl.RENDERBUFFER_DEPTH_SIZE = 0x8D54;
    gl.RENDERBUFFER_STENCIL_SIZE = 0x8D55;
    gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;
    gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;
    gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;
    gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;
    gl.COLOR_ATTACHMENT0 = 0x8CE0;
    gl.DEPTH_ATTACHMENT = 0x8D00;
    gl.STENCIL_ATTACHMENT = 0x8D20;
    gl.DEPTH_STENCIL_ATTACHMENT = 0x821A;
    gl.NONE = 0;
    gl.FRAMEBUFFER_COMPLETE = 0x8CD5;
    gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;
    gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;
    gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;
    gl.FRAMEBUFFER_UNSUPPORTED = 0x8CDD;
    gl.FRAMEBUFFER_BINDING = 0x8CA6;
    gl.RENDERBUFFER_BINDING = 0x8CA7;
    gl.MAX_RENDERBUFFER_SIZE = 0x84E8;
    gl.INVALID_FRAMEBUFFER_OPERATION = 0x0506;
    /* WebGL-specific enums */
    gl.UNPACK_FLIP_Y_WEBGL = 0x9240;
    gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
    gl.CONTEXT_LOST_WEBGL = 0x9242;
    gl.UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
    gl.BROWSER_DEFAULT_WEBGL = 0x9244;
    gl.SHADER_BINARY_FORMATS = 0x8DF8;
    gl.NUM_SHADER_BINARY_FORMATS = 0x8DF9;
    gl.NUM_COMPRESSED_TEXTURE_FORMATS = 0x86A2;
}
var GL_COMMAND_ACTIVE_TEXTURE = 0; // active texture
var GL_COMMAND_ATTACH_SHADER = 1; // attach shader
var GL_COMMAND_BIND_ATTRIB_LOCATION = 2; // bind attrib location
var GL_COMMAND_BIND_BUFFER = 3; // bind buffer
var GL_COMMAND_BIND_FRAME_BUFFER = 4; // bind frame buffer
var GL_COMMAND_BIND_RENDER_BUFFER = 5; // bind render buffer
var GL_COMMAND_BIND_TEXTURE = 6; // bind texture
var GL_COMMAND_BLEND_COLOR = 7; // blend color
var GL_COMMAND_BLEND_EQUATION = 8; // blend equation
var GL_COMMAND_BLEND_EQUATION_SEPARATE = 9; // blend equation separate
var GL_COMMAND_BLEND_FUNC = 10; // blend func
var GL_COMMAND_BLEND_FUNC_SEPARATE = 11; // blend func separate
var GL_COMMAND_BUFFER_DATA = 12; // buffer data
var GL_COMMAND_BUFFER_SUB_DATA = 13; // buffer sub data
var GL_COMMAND_CLEAR = 14; // clear
var GL_COMMAND_CLEAR_COLOR = 15; // clear color
var GL_COMMAND_CLEAR_DEPTH = 16; // clear depth
var GL_COMMAND_CLEAR_STENCIL = 17; // clear stencil
var GL_COMMAND_COLOR_MASK = 18; // color mask
var GL_COMMAND_COMMIT = 19; // commit
var GL_COMMAND_COMPILE_SHADER = 20; // compile shader
var GL_COMMAND_COMPRESSED_TEX_IMAGE_2D = 21; // compressed tex image 2d
var GL_COMMAND_COMPRESSED_TEX_SUB_IMAGE_2D = 22; // compressed tex sub image 2d
var GL_COMMAND_COPY_TEX_IMAGE_2D = 23; // copy tex image 2d
var GL_COMMAND_COPY_TEX_SUB_IMAGE_2D = 24; // copy tex sub image 2d
var GL_COMMAND_CULL_FACE = 25; // cull face
var GL_COMMAND_DELETE_BUFFER = 26; // delete buffer
var GL_COMMAND_DELETE_FRAME_BUFFER = 27; // delete frame buffer
var GL_COMMAND_DELETE_PROGRAM = 28; // delete program
var GL_COMMAND_DELETE_RENDER_BUFFER = 29; // delete render buffer
var GL_COMMAND_DELETE_SHADER = 30; // delete shader
var GL_COMMAND_DELETE_TEXTURE = 31; // delete texture
var GL_COMMAND_DEPTH_FUNC = 32; // depth func
var GL_COMMAND_DEPTH_MASK = 33; // depth mask
var GL_COMMAND_DEPTH_RANGE = 34; // depth range
var GL_COMMAND_DETACH_SHADER = 35; // detach shader
var GL_COMMAND_DISABLE = 36; // disable
var GL_COMMAND_DISABLE_VERTEX_ATTRIB_ARRAY = 37; // disable vertex attrib array
var GL_COMMAND_DRAW_ARRAYS = 38; // draw arrays
var GL_COMMAND_DRAW_ELEMENTS = 39; // draw elements
var GL_COMMAND_ENABLE = 40; // enable
var GL_COMMAND_ENABLE_VERTEX_ATTRIB_ARRAY = 41; // enable vertex attrib array
var GL_COMMAND_FINISH = 42; // finish
var GL_COMMAND_FLUSH = 43; // flush
var GL_COMMAND_FRAME_BUFFER_RENDER_BUFFER = 44; // frame buffer render buffer
var GL_COMMAND_FRAME_BUFFER_TEXTURE_2D = 45; // frame buffer texture 2d
var GL_COMMAND_FRONT_FACE = 46; // front face
var GL_COMMAND_GENERATE_MIPMAP = 47; // generate mipmap
var GL_COMMAND_HINT = 48; // hint
var GL_COMMAND_LINE_WIDTH = 49; // line width
var GL_COMMAND_LINK_PROGRAM = 50; // link program
var GL_COMMAND_PIXEL_STOREI = 51; // pixel storei
var GL_COMMAND_POLYGON_OFFSET = 52; // polygon offset
var GL_COMMAND_RENDER_BUFFER_STORAGE = 53; // render buffer storage
var GL_COMMAND_SAMPLE_COVERAGE = 54; // sample coverage
var GL_COMMAND_SCISSOR = 55; // scissor
var GL_COMMAND_SHADER_SOURCE = 56; // shader source
var GL_COMMAND_STENCIL_FUNC = 57; // stencil func
var GL_COMMAND_STENCIL_FUNC_SEPARATE = 58; // stencil func separate
var GL_COMMAND_STENCIL_MASK = 59; // stencil mask
var GL_COMMAND_STENCIL_MASK_SEPARATE = 60; // stencil mask separate
var GL_COMMAND_STENCIL_OP = 61; // stencil op
var GL_COMMAND_STENCIL_OP_SEPARATE = 62; // stencil op separate
var GL_COMMAND_TEX_IMAGE_2D = 63; // tex image 2d
var GL_COMMAND_TEX_PARAMETER_F = 64; // tex parameter f
var GL_COMMAND_TEX_PARAMETER_I = 65; // tex parameter i
var GL_COMMAND_TEX_SUB_IMAGE_2D = 66; // tex sub image 2d
var GL_COMMAND_UNIFORM_1F = 67; // uniform 1f
var GL_COMMAND_UNIFORM_1FV = 68; // uniform 1fv
var GL_COMMAND_UNIFORM_1I = 69; // uniform 1i
var GL_COMMAND_UNIFORM_1IV = 70; // uniform 1iv
var GL_COMMAND_UNIFORM_2F = 71; // uniform 2f
var GL_COMMAND_UNIFORM_2FV = 72; // uniform 2fv
var GL_COMMAND_UNIFORM_2I = 73; // uniform 2i
var GL_COMMAND_UNIFORM_2IV = 74; // uniform 2iv
var GL_COMMAND_UNIFORM_3F = 75; // uniform 3f
var GL_COMMAND_UNIFORM_3FV = 76; // uniform 3fv
var GL_COMMAND_UNIFORM_3I = 77; // uniform 3i
var GL_COMMAND_UNIFORM_3IV = 78; // uniform 3iv
var GL_COMMAND_UNIFORM_4F = 79; // uniform 4f
var GL_COMMAND_UNIFORM_4FV = 80; // uniform 4fv
var GL_COMMAND_UNIFORM_4I = 81; // uniform 4i
var GL_COMMAND_UNIFORM_4IV = 82; // uniform 4iv
var GL_COMMAND_UNIFORM_MATRIX_2FV = 83; // uniform matrix 2fv
var GL_COMMAND_UNIFORM_MATRIX_3FV = 84; // uniform matrix 3fv
var GL_COMMAND_UNIFORM_MATRIX_4FV = 85; // uniform matrix 4fv
var GL_COMMAND_USE_PROGRAM = 86; // use program
var GL_COMMAND_VALIDATE_PROGRAM = 87; // validate program
var GL_COMMAND_VERTEX_ATTRIB_1F = 88; // vertex attrib 1f
var GL_COMMAND_VERTEX_ATTRIB_2F = 89; // vertex attrib 2f
var GL_COMMAND_VERTEX_ATTRIB_3F = 90; // vertex attrib 3f
var GL_COMMAND_VERTEX_ATTRIB_4F = 91; // vertex attrib 4f
var GL_COMMAND_VERTEX_ATTRIB_1FV = 92; // vertex attrib 1fv
var GL_COMMAND_VERTEX_ATTRIB_2FV = 93; // vertex attrib 2fv
var GL_COMMAND_VERTEX_ATTRIB_3FV = 94; // vertex attrib 3fv
var GL_COMMAND_VERTEX_ATTRIB_4FV = 95; // vertex attrib 4fv
var GL_COMMAND_VERTEX_ATTRIB_POINTER = 96; // vertex attrib pointer
var GL_COMMAND_VIEW_PORT = 97; // view port
var total_size = 100000;
var next_index = 0;
var buffer_data;
var bufferdata_array;
var bufferdata_view;
var bufferdata_pointer = 0;
function OpenOptMode() {
    if (gl.flushCommand && isSupportTypeArray()) {
        attachMethodOpt();
    }
    buffer_data = new Float32Array(total_size);
    // bufferdata_array = new ArrayBuffer(100000000);
    // bufferdata_view = new DataView(bufferdata_array);
}
function flushCommand() {
    if (next_index > 0) {
        gl.flushCommand(next_index, buffer_data);
        next_index = 0;
        // bufferdata_pointer = 0;
    }
}
function glCommitOpt() {
    flushCommand();
    gl.commit();
}
function activeTextureOpt(texture) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_ACTIVE_TEXTURE;
    buffer_data[next_index + 1] = texture;
    next_index += 2;
}
function attachShaderOpt(program, shader) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_ATTACH_SHADER;
    buffer_data[next_index + 1] = program;
    buffer_data[next_index + 2] = shader;
    next_index += 3;
}
function bindAttribLocationOpt(program, index, name) {
    flushCommand();
    bindAttribLocation(program, index, name);
}
function bindBufferOpt(target, buffer) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BIND_BUFFER;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = buffer;
    next_index += 3;
}
function bindFramebufferOpt(target, framebuffer) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BIND_FRAME_BUFFER;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = framebuffer;
    next_index += 3;
}
function bindRenderbufferOpt(target, renderbuffer) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BIND_RENDER_BUFFER;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = renderbuffer;
    next_index += 3;
}
function bindTextureOpt(target, texture) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BIND_TEXTURE;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = texture;
    next_index += 3;
}
function blendColorOpt(red, green, blue, alpha) {
    if (next_index + 5 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BLEND_COLOR;
    buffer_data[next_index + 1] = red;
    buffer_data[next_index + 2] = green;
    buffer_data[next_index + 3] = blue;
    buffer_data[next_index + 4] = alpha;
    next_index += 5;
}
function blendEquationOpt(mode) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BLEND_EQUATION;
    buffer_data[next_index + 1] = mode;
    next_index += 2;
}
function blendEquationSeparateOpt(modeRGB, modeAlpha) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BLEND_EQUATION_SEPARATE;
    buffer_data[next_index + 1] = modeRGB;
    buffer_data[next_index + 2] = modeAlpha;
    next_index += 3;
}
function blendFuncOpt(sfactor, dfactor) {
    if (next_index + 3 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BLEND_FUNC;
    buffer_data[next_index + 1] = sfactor;
    buffer_data[next_index + 2] = dfactor;
    next_index += 3;
}
function blendFuncSeparateOpt(srcRGB, dstRGB, srcAlpha, dstAlpha) {
    if (next_index + 5 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_BLEND_FUNC_SEPARATE;
    buffer_data[next_index + 1] = srcRGB;
    buffer_data[next_index + 2] = dstRGB;
    buffer_data[next_index + 3] = srcAlpha;
    buffer_data[next_index + 4] = dstAlpha;
    next_index += 5;
}
// function bufferDataOpt(target,size,usage){
//     insIds.push(BUFFERDATA);
//     datas.push(target);
//     datas.push(size);
//     datas.push(usage);
//     dataLen.push(12);
// }
function bufferDataOpt(target, data, usage) {
    flushCommand();
    bufferData(target, data, usage);
    //  buffer_data[next_index] = GL_COMMAND_BUFFER_DATA;
    //  buffer_data[next_index+1] = target;
    //  buffer_data[next_index+2] = usage;
    //
    //  if(data instanceof Int8Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setInt8(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 1;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Uint8Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setUint8(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 1;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Int16Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setInt16(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 2;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Uint16Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setUint16(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 2;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Int32Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setInt32(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 4;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Uint32Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setUint32(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 4;
    //        });
    //        next_index += 3;
    //
    //  } else if(data instanceof Float32Array == true){
    //        var byteLen = data.byteLength;
    //        bufferdata_view.setInt32(bufferdata_pointer,byteLen,true);
    //        bufferdata_pointer = bufferdata_pointer + 4;
    //        data.forEach(function(element,index,array){
    //            bufferdata_view.setFloat32(bufferdata_pointer,element,true);
    //            bufferdata_pointer = bufferdata_pointer + 4;
    //        });
    //        next_index += 3;
    //
    //  } else{
    //    flushCommand();
    //    bufferData(target, data, usage);
    //  }
}
function bufferSubDataOpt(target, offset, data) {
    flushCommand();
    bufferSubData(target, offset, data);
}
function checkFramebufferStatusOpt(target) {
    flushCommand();
    checkFramebufferStatus(target);
}
function clearOpt(mask) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_CLEAR;
    buffer_data[next_index + 1] = mask;
    next_index += 2;
}
function clearColorOpt(red, green, blue, alpha) {
    if (next_index + 5 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_CLEAR_COLOR;
    buffer_data[next_index + 1] = red;
    buffer_data[next_index + 2] = green;
    buffer_data[next_index + 3] = blue;
    buffer_data[next_index + 4] = alpha;
    next_index += 5;
}
function clearDepthOpt(depth) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_CLEAR_DEPTH;
    buffer_data[next_index + 1] = depth;
    next_index += 2;
}
function clearStencilOpt(s) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_CLEAR_STENCIL;
    buffer_data[next_index + 1] = s;
    next_index += 2;
}
function colorMaskOpt(red, green, blue, alpha) {
    if (next_index + 5 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_COLOR_MASK;
    buffer_data[next_index + 1] = red ? 1 : 0;
    buffer_data[next_index + 2] = green ? 1 : 0;
    buffer_data[next_index + 3] = blue ? 1 : 0;
    buffer_data[next_index + 4] = alpha ? 1 : 0;
    next_index += 5;
}
function compileShaderOpt(shader) {
    if (next_index + 2 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_COMPILE_SHADER;
    buffer_data[next_index + 1] = shader;
    next_index += 2;
}
function compressedTexImage2DOpt(target, level, internalformat, width, height, border, data) {
    flushCommand();
    compressedTexImage2D(target, level, internalformat, width, height, border, data);
}
function compressedTexSubImage2DOpt(target, level, xoffset, yoffset, width, height, format, data) {
    flushCommand();
    compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data);
}
function copyTexImage2DOpt(target, level, internalformat, x, y, width, height, border) {
    if (next_index + 9 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_COPY_TEX_IMAGE_2D;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = level;
    buffer_data[next_index + 3] = internalformat;
    buffer_data[next_index + 4] = x;
    buffer_data[next_index + 5] = y;
    buffer_data[next_index + 6] = width;
    buffer_data[next_index + 7] = height;
    buffer_data[next_index + 8] = border;
    next_index += 9;
}
function copyTexSubImage2DOpt(target, level, xoffset, yoffset, x, y, width, height) {
    if (next_index + 9 > total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_COPY_TEX_SUB_IMAGE_2D;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = level;
    buffer_data[next_index + 3] = xoffset;
    buffer_data[next_index + 4] = yoffset;
    buffer_data[next_index + 5] = x;
    buffer_data[next_index + 6] = y;
    buffer_data[next_index + 7] = width;
    buffer_data[next_index + 8] = height;
    next_index += 9;
}
function createBufferOpt() {
    flushCommand();
    return createBuffer();
}
function createFramebufferOpt() {
    flushCommand();
    return createFramebuffer();
}
function createProgramOpt() {
    flushCommand();
    return createProgram();
}
function createRenderbufferOpt() {
    flushCommand();
    return createRenderbuffer();
}
function createShaderOpt(type) {
    flushCommand();
    return createShader(type);
}
function createTextureOpt() {
    flushCommand();
    return createTexture();
}
function cullFaceOpt(mode) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_CULL_FACE;
    buffer_data[next_index + 1] = mode;
    next_index += 2;
}
function deleteBufferOpt(buffer) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_BUFFER;
    buffer_data[next_index + 1] = buffer;
    next_index += 2;
}
function deleteFramebufferOpt(framebuffer) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_FRAME_BUFFER;
    buffer_data[next_index + 1] = framebuffer;
    next_index += 2;
}
function deleteProgramOpt(program) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_PROGRAM;
    buffer_data[next_index + 1] = program;
    next_index += 2;
}
function deleteRenderbufferOpt(renderbuffer) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_RENDER_BUFFER;
    buffer_data[next_index + 1] = renderbuffer;
    next_index += 2;
}
function deleteShaderOpt(shader) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_SHADER;
    buffer_data[next_index + 1] = shader;
    next_index += 2;
}
function deleteTextureOpt(texture) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DELETE_TEXTURE;
    buffer_data[next_index + 1] = texture;
    next_index += 2;
}
function depthFuncOpt(func) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DEPTH_FUNC;
    buffer_data[next_index + 1] = func;
    next_index += 2;
}
function depthMaskOpt(flag) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DEPTH_MASK;
    buffer_data[next_index + 1] = flag ? 1 : 0;
    next_index += 2;
}
function depthRangeOpt(zNear, zFar) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DEPTH_RANGE;
    buffer_data[next_index + 1] = zNear;
    buffer_data[next_index + 1] = zFar;
    next_index += 3;
}
function detachShaderOpt(program, shader) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DETACH_SHADER;
    buffer_data[next_index + 1] = program;
    buffer_data[next_index + 1] = shader;
    next_index += 3;
}
function disableOpt(cap) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DISABLE;
    buffer_data[next_index + 1] = cap;
    next_index += 2;
}
function disableVertexAttribArrayOpt(index) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DISABLE_VERTEX_ATTRIB_ARRAY;
    buffer_data[next_index + 1] = index;
    next_index += 2;
}
function drawArraysOpt(mode, first, count) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DRAW_ARRAYS;
    buffer_data[next_index + 1] = mode;
    buffer_data[next_index + 2] = first;
    buffer_data[next_index + 3] = count;
    next_index += 4;
    if (count > 0) {
        checkFirstFrames();
    }
}
function drawElementsOpt(mode, count, type, offset) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_DRAW_ELEMENTS;
    buffer_data[next_index + 1] = mode;
    buffer_data[next_index + 2] = count;
    buffer_data[next_index + 3] = type;
    buffer_data[next_index + 4] = offset;
    next_index += 5;
    if (count > 0) {
        checkFirstFrames();
    }
}
function enableOpt(cap) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_ENABLE;
    buffer_data[next_index + 1] = cap;
    next_index += 2;
}
function enableVertexAttribArrayOpt(index) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_ENABLE_VERTEX_ATTRIB_ARRAY;
    buffer_data[next_index + 1] = index;
    next_index += 2;
}
function finishOpt() {
    if (next_index + 1 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_FINISH;
    next_index += 1;
}
function flushOpt() {
    if (next_index + 1 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_FLUSH;
    next_index += 1;
}
function framebufferRenderbufferOpt(target, attachment, renderbuffertarget, renderbuffer) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_RENDER_BUFFER;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = attachment;
    buffer_data[next_index + 3] = renderbuffertarget;
    buffer_data[next_index + 4] = renderbuffer;
    next_index += 5;
}
function framebufferTexture2DOpt(target, attachment, textarget, texture, level) {
    if (next_index + 6 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_TEXTURE_2D;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = attachment;
    buffer_data[next_index + 3] = textarget;
    buffer_data[next_index + 4] = texture;
    buffer_data[next_index + 5] = level;
    next_index += 6;
}
function frontFaceOpt(mode) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_FRONT_FACE;
    buffer_data[next_index + 1] = mode;
    next_index += 2;
}
function generateMipmapOpt(target) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_GENERATE_MIPMAP;
    buffer_data[next_index + 1] = target;
    next_index += 2;
}
function getActiveAttribOpt(program, index) {
    flushCommand();
    return getActiveAttrib(program, index);
}
function getActiveUniformOpt(program, index) {
    flushCommand();
    return getActiveUniform(program, index);
}
function getAttachedShadersOpt(program) {
    flushCommand();
    return getAttachedShaders(program);
}
function getAttribLocationOpt(program, name) {
    flushCommand();
    return getAttribLocation(program, name);
}
function getBufferParameterOpt(target, pname) {
    flushCommand();
    return getBufferParameter(target, pname);
}
function getParameterOpt(pname) {
    flushCommand();
    return getParameter(pname);
}
function getErrorOpt() {
    flushCommand();
    return getError();
}
function getFramebufferAttachmentParameterOpt(target, attachment, pname) {
    flushCommand();
    return getFramebufferAttachmentParameter(target, attachment, pname);
}
function getProgramParameterOpt(program, pname) {
    flushCommand();
    return getProgramParameter(program, pname);
}
function getProgramInfoLogOpt(program) {
    flushCommand();
    return getProgramInfoLog(program);
}
function getRenderbufferParameterOpt(target, pname) {
    flushCommand();
    return getRenderbufferParameter(target, pname);
}
function getShaderParameterOpt(shader, pname) {
    flushCommand();
    return getShaderParameter(shader, pname);
}
function getShaderPrecisionFormatOpt(shadertype, precisiontype) {
    flushCommand();
    return getShaderPrecisionFormat(shadertype, precisiontype);
}
function getShaderInfoLogOpt(shader) {
    flushCommand();
    return getShaderInfoLog(shader);
}
function getShaderSourceOpt(shader) {
    flushCommand();
    return getShaderSource(shader);
}
function getTexParameterOpt(target, pname) {
    flushCommand();
    return getTexParameter(target, pname);
}
function getUniformOpt(program, location) {
    flushCommand();
    return getUniform(program, location);
}
function getUniformLocationOpt(program, name) {
    flushCommand();
    return getUniformLocation(program, name);
}
function getVertexAttribOpt(index, pname) {
    flushCommand();
    return getVertexAttrib(index, pname);
}
function getVertexAttribOffsetOpt(index, pname) {
    flushCommand();
    return getVertexAttribOffset(index, pname);
}
function hintOpt(target, mode) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_HINT;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = mode;
    next_index += 3;
}
function isBufferOpt(buffer) {
    flushCommand();
    return isBuffer(buffer);
}
function isEnabledOpt(cap) {
    flushCommand();
    return isEnabled(cap);
}
function isFramebufferOpt(framebuffer) {
    flushCommand();
    return isFramebuffer(framebuffer);
}
function isProgramOpt(program) {
    flushCommand();
    return isProgram(program);
}
function isRenderbufferOpt(renderbuffer) {
    flushCommand();
    return isRenderbuffer(renderbuffer);
}
function isShaderOpt(shader) {
    flushCommand();
    return isShader(shader);
}
function isTextureOpt(texture) {
    flushCommand();
    return isTexture(texture);
}
function lineWidthOpt(width) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_LINE_WIDTH;
    buffer_data[next_index + 1] = width;
    next_index += 2;
}
function linkProgramOpt(program) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_LINK_PROGRAM;
    buffer_data[next_index + 1] = program;
    next_index += 2;
}
function pixelStoreiOpt(pname, param) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_PIXEL_STOREI;
    buffer_data[next_index + 1] = pname;
    buffer_data[next_index + 2] = param;
    next_index += 3;
}
function polygonOffsetOpt(factor, units) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_POLYGON_OFFSET;
    buffer_data[next_index + 1] = factor;
    buffer_data[next_index + 2] = units;
    next_index += 3;
}
function readPixelsOpt(x, y, width, height, format, type, pixels) {
    flushCommand();
    readPixels(x, y, width, height, format, type, pixels);
}
function renderbufferStorageOpt(target, internalformat, width, height) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_RENDER_BUFFER_STORAGE;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = internalFormat;
    buffer_data[next_index + 3] = width;
    buffer_data[next_index + 4] = height;
    next_index += 5;
}
function sampleCoverageOpt(value, invert) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_SAMPLE_COVERAGE;
    buffer_data[next_index + 1] = value;
    buffer_data[next_index + 2] = invert ? 1 : 0;
    next_index += 3;
}
function scissorOpt(x, y, width, height) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_SCISSOR;
    buffer_data[next_index + 1] = x;
    buffer_data[next_index + 2] = y;
    buffer_data[next_index + 3] = width;
    buffer_data[next_index + 4] = height;
    next_index += 5;
}
function shaderSourceOpt(shader, source) {
    flushCommand();
    shaderSource(shader, source);
}
function stencilFuncOpt(func, ref, mask) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC;
    buffer_data[next_index + 1] = func;
    buffer_data[next_index + 2] = ref;
    buffer_data[next_index + 3] = mask;
    next_index += 4;
}
function stencilFuncSeparateOpt(face, func, ref, mask) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC_SEPARATE;
    buffer_data[next_index + 1] = face;
    buffer_data[next_index + 2] = func;
    buffer_data[next_index + 3] = ref;
    buffer_data[next_index + 4] = mask;
    next_index += 5;
}
function stencilMaskOpt(mask) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_MASK;
    buffer_data[next_index + 1] = mask;
    next_index += 2;
}
function stencilMaskSeparateOpt(face, mask) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_MASK_SEPARATE;
    buffer_data[next_index + 1] = face;
    buffer_data[next_index + 2] = mask;
    next_index += 3;
}
function stencilOpOpt(fail, zfail, zpass) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_OP;
    buffer_data[next_index + 1] = fail;
    buffer_data[next_index + 2] = zfail;
    buffer_data[next_index + 3] = zpass;
    next_index += 4;
}
function stencilOpSeparateOpt(face, fail, zfail, zpass) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_STENCIL_OP_SEPARATE;
    buffer_data[next_index + 1] = face;
    buffer_data[next_index + 2] = fail;
    buffer_data[next_index + 3] = zfail;
    buffer_data[next_index + 4] = zpass;
    next_index += 5;
}
function texImage2DOpt(target, level, internalformat /*, ...*/) {
    //insIds.push(TEXIMAGE2D);
    flushCommand();
    switch (arguments.length) {
        case 6:
            {
                var format = arguments[3];
                var type = arguments[4];
                var source = arguments[5];
                if (Object.prototype.hasOwnProperty.call(source, '__nativeObj')) {
                    gl.glTexImage2D(target, level, internalformat, format, type, source.__nativeObj);
                } else {
                    if (source.bkImage) {
                        gl.glTexImage2D(target, level, internalformat, format, type, source.bkImage);
                    } else {
                        gl.glTexImage2D(target, level, internalformat, format, type, source);
                    }
                }
                break;
            }
        case 9:
            {
                var width = arguments[3];
                var height = arguments[4];
                var border = arguments[5];
                var format = arguments[6];
                var type = arguments[7];
                var pixels = arguments[8];
                gl.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
                break;
            }
    }
}
function texParameterfOpt(target, pname, param) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_F;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = pname;
    buffer_data[next_index + 3] = param;
    next_index += 4;
}
function texParameteriOpt(target, pname, param) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_I;
    buffer_data[next_index + 1] = target;
    buffer_data[next_index + 2] = pname;
    buffer_data[next_index + 3] = param;
    next_index += 4;
}
function texSubImage2DOpt(target, level, xoffset, yoffset, width, height, format, type, pixels) {
    flushCommand();
    texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
}
function texSubImage2DOpt(target, level, xoffset, yoffset, format, type, source) {
    // insIds.push(TEXSUBIMAGE2D);
    // datas.push(target);
    // datas.push(level);
    // datas.push(xoffset);
    // datas.push(yoffset);
    // datas.push(format);
    // datas.push(type);
    // datas.push(source);
    // dataLen.push(24);
    flushCommand();
    texSubImage2D(target, level, xoffset, yoffset, format, type, source);
}
function uniform1fOpt(location, x) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_1F;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    next_index += 3;
}
function uniform2fOpt(location, x, y) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_2F;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    next_index += 4;
}
function uniform3fOpt(location, x, y, z) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_3F;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    next_index += 5;
}
function uniform4fOpt(location, x, y, z, w) {
    if (next_index + 6 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_4F;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    buffer_data[next_index + 5] = w;
    next_index += 6;
}
function uniform1iOpt(location, x) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_1I;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    next_index += 3;
}
function uniform2iOpt(location, x, y) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_2I;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    next_index += 4;
}
function uniform3iOpt(location, x, y, z) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_3I;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    next_index += 5;
}
function uniform4iOpt(location, x, y, z, w) {
    if (next_index + 6 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_4I;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    buffer_data[next_index + 5] = w;
    next_index += 6;
}
function uniform1fvOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_1FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform2fvOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_2FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform3fvOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_3FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform4fvOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_4FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform1ivOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_1IV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform2ivOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_2IV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform3ivOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_3IV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniform4ivOpt(location, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_4IV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function uniformMatrix2fvOpt(location, transpose, value) {
    if (next_index + 4 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_2FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = transpose;
    buffer_data[next_index + 3] = value.length;
    buffer_data.set(value, next_index + 4);
    next_index += 4 + value.length;
}
function uniformMatrix3fvOpt(location, transpose, value) {
    if (next_index + 4 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_3FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = transpose;
    buffer_data[next_index + 3] = value.length;
    buffer_data.set(value, next_index + 4);
    next_index += 4 + value.length;
}
function uniformMatrix4fvOpt(location, transpose, value) {
    if (next_index + 4 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_4FV;
    buffer_data[next_index + 1] = location;
    buffer_data[next_index + 2] = transpose;
    buffer_data[next_index + 3] = value.length;
    buffer_data.set(value, next_index + 4);
    next_index += 4 + value.length;
}
function useProgramOpt(program) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_USE_PROGRAM;
    buffer_data[next_index + 1] = program;
    next_index += 2;
}
function validateProgramOpt(program) {
    if (next_index + 2 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VALIDATE_PROGRAM;
    buffer_data[next_index + 1] = program;
    next_index += 2;
}
function vertexAttrib1fOpt(index, x) {
    if (next_index + 3 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_1F;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = x;
    next_index += 3;
}
function vertexAttrib2fOpt(index, x, y) {
    if (next_index + 4 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_2F;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    next_index += 4;
}
function vertexAttrib3fOpt(index, x, y, z) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_3F;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    next_index += 5;
}
function vertexAttrib4fOpt(index, x, y, z, w) {
    if (next_index + 6 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_4F;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = x;
    buffer_data[next_index + 3] = y;
    buffer_data[next_index + 4] = z;
    buffer_data[next_index + 5] = w;
    next_index += 6;
}
function vertexAttrib1fvOpt(index, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_1FV;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function vertexAttrib2fvOpt(index, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_2FV;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function vertexAttrib3fvOpt(index, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_3FV;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function vertexAttrib4fvOpt(index, value) {
    if (next_index + 3 + value.length >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_4FV;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = value.length;
    buffer_data.set(value, next_index + 3);
    next_index += 3 + value.length;
}
function vertexAttribPointerOpt(index, size, type, normalized, stride, offset) {
    if (next_index + 7 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_POINTER;
    buffer_data[next_index + 1] = index;
    buffer_data[next_index + 2] = size;
    buffer_data[next_index + 3] = type;
    buffer_data[next_index + 4] = normalized ? 1 : 0;
    buffer_data[next_index + 5] = stride;
    buffer_data[next_index + 6] = offset;
    next_index += 7;
}
function getSupportedExtensions() {
    return {};
}
function viewportOpt(x, y, width, height) {
    if (next_index + 5 >= total_size) {
        flushCommand();
    }
    buffer_data[next_index] = GL_COMMAND_VIEW_PORT;
    buffer_data[next_index + 1] = x;
    buffer_data[next_index + 2] = y;
    buffer_data[next_index + 3] = width;
    buffer_data[next_index + 4] = height;
    next_index += 5;
}
function isSupportTypeArray() {
    if (GameStatusInfo.platform == 'android') {
        return true;
    }
    var info = BK.Director.queryDeviceInfo();
    var vers = info.version.split('.');
    if (info.platform == 'ios' && Number(vers[0]) >= 10) {
        return true;
    }
    return false;
}
function getContextAttributes() {}
function attachMethodOpt() {
    gl.activeTexture = activeTextureOpt;
    gl.attachShader = attachShaderOpt;
    gl.bindAttribLocation = bindAttribLocationOpt;
    gl.bindBuffer = bindBufferOpt;
    gl.bindFramebuffer = bindFramebufferOpt;
    gl.bindRenderbuffer = bindRenderbufferOpt;
    gl.bindTexture = bindTextureOpt;
    gl.blendColor = blendColorOpt;
    gl.blendEquation = blendEquationOpt;
    gl.blendEquationSeparate = blendEquationSeparateOpt;
    gl.blendFunc = blendFuncOpt;
    gl.blendFuncSeparate = blendFuncSeparateOpt;
    gl.bufferData = bufferDataOpt;
    gl.bufferData = bufferDataOpt;
    gl.bufferSubData = bufferSubDataOpt;
    gl.checkFramebufferStatus = checkFramebufferStatusOpt;
    gl.clear = clearOpt;
    gl.clearColor = clearColorOpt;
    gl.clearDepth = clearDepthOpt;
    gl.clearStencil = clearStencilOpt;
    gl.colorMask = colorMaskOpt;
    gl.compileShader = compileShaderOpt;
    gl.compressedTexImage2D = compressedTexImage2DOpt;
    gl.compressedTexSubImage2D = compressedTexSubImage2DOpt;
    gl.copyTexImage2D = copyTexImage2DOpt;
    gl.copyTexSubImage2D = copyTexSubImage2DOpt;
    gl.createBuffer = createBufferOpt;
    gl.createFramebuffer = createFramebufferOpt;
    gl.createProgram = createProgramOpt;
    gl.createRenderbuffer = createRenderbufferOpt;
    gl.createShader = createShaderOpt;
    gl.createTexture = createTextureOpt;
    gl.cullFace = cullFaceOpt;
    gl.deleteBuffer = deleteBufferOpt;
    gl.deleteFramebuffer = deleteFramebufferOpt;
    gl.deleteProgram = deleteProgramOpt;
    gl.deleteRenderbuffer = deleteRenderbufferOpt;
    gl.deleteShader = deleteShaderOpt;
    gl.deleteTexture = deleteTextureOpt;
    gl.depthFunc = depthFuncOpt;
    gl.depthMask = depthMaskOpt;
    gl.depthRange = depthRangeOpt;
    gl.detachShader = detachShaderOpt;
    gl.disable = disableOpt;
    gl.disableVertexAttribArray = disableVertexAttribArrayOpt;
    gl.drawArrays = drawArraysOpt;
    gl.drawElements = drawElementsOpt;
    gl.enable = enableOpt;
    gl.enableVertexAttribArray = enableVertexAttribArrayOpt;
    gl.finish = finishOpt;
    gl.flush = flushOpt;
    gl.framebufferRenderbuffer = framebufferRenderbufferOpt;
    gl.framebufferTexture2D = framebufferTexture2DOpt;
    gl.frontFace = frontFaceOpt;
    gl.generateMipmap = generateMipmapOpt;
    gl.getActiveAttrib = getActiveAttribOpt;
    gl.getActiveUniform = getActiveUniformOpt;
    gl.getAttachedShaders = getAttachedShadersOpt;
    gl.getAttribLocation = getAttribLocationOpt;
    gl.getBufferParameter = getBufferParameterOpt;
    gl.getParameter = getParameterOpt;
    gl.getError = getErrorOpt;
    gl.getFramebufferAttachmentParameter = getFramebufferAttachmentParameterOpt;
    gl.getProgramParameter = getProgramParameterOpt;
    gl.getProgramInfoLog = getProgramInfoLogOpt;
    gl.getRenderbufferParameter = getRenderbufferParameterOpt;
    gl.getShaderParameter = getShaderParameterOpt;
    gl.getShaderPrecisionFormat = getShaderPrecisionFormatOpt;
    gl.getShaderInfoLog = getShaderInfoLogOpt;
    gl.getShaderSource = getShaderSourceOpt;
    gl.getTexParameter = getTexParameterOpt;
    gl.getUniform = getUniformOpt;
    gl.getUniformLocation = getUniformLocationOpt;
    gl.getVertexAttrib = getVertexAttribOpt;
    gl.getVertexAttribOffset = getVertexAttribOffsetOpt;
    gl.hint = hintOpt;
    gl.isBuffer = isBufferOpt;
    gl.isEnabled = isEnabledOpt;
    gl.isFramebuffer = isFramebufferOpt;
    gl.isProgram = isProgramOpt;
    gl.isRenderbuffer = isRenderbufferOpt;
    gl.isShader = isShaderOpt;
    gl.isTexture = isTextureOpt;
    gl.lineWidth = lineWidthOpt;
    gl.linkProgram = linkProgramOpt;
    gl.pixelStorei = pixelStoreiOpt;
    gl.polygonOffset = polygonOffsetOpt;
    gl.readPixels = readPixelsOpt;
    gl.renderbufferStorage = renderbufferStorageOpt;
    gl.sampleCoverage = sampleCoverageOpt;
    gl.scissor = scissorOpt;
    gl.shaderSource = shaderSourceOpt;
    gl.stencilFunc = stencilFuncOpt;
    gl.stencilFuncSeparate = stencilFuncSeparateOpt;
    gl.stencilMask = stencilMaskOpt;
    gl.stencilMaskSeparate = stencilMaskSeparateOpt;
    gl.stencilOp = stencilOpOpt;
    gl.stencilOpSeparate = stencilOpSeparateOpt;
    gl.texImage2D = texImage2DOpt;
    gl.texImage2D = texImage2DOpt;
    gl.texParameterf = texParameterfOpt;
    gl.texParameteri = texParameteriOpt;
    gl.texSubImage2D = texSubImage2DOpt;
    gl.texSubImage2D = texSubImage2DOpt;
    gl.uniform1f = uniform1fOpt;
    gl.uniform2f = uniform2fOpt;
    gl.uniform3f = uniform3fOpt;
    gl.uniform4f = uniform4fOpt;
    gl.uniform1i = uniform1iOpt;
    gl.uniform2i = uniform2iOpt;
    gl.uniform3i = uniform3iOpt;
    gl.uniform4i = uniform4iOpt;
    gl.uniform1fv = uniform1fvOpt;
    gl.uniform2fv = uniform2fvOpt;
    gl.uniform3fv = uniform3fvOpt;
    gl.uniform4fv = uniform4fvOpt;
    gl.uniform1iv = uniform1ivOpt;
    gl.uniform2iv = uniform2ivOpt;
    gl.uniform3iv = uniform3ivOpt;
    gl.uniform4iv = uniform4ivOpt;
    gl.uniformMatrix2fv = uniformMatrix2fvOpt;
    gl.uniformMatrix3fv = uniformMatrix3fvOpt;
    gl.uniformMatrix4fv = uniformMatrix4fvOpt;
    gl.useProgram = useProgramOpt;
    gl.validateProgram = validateProgramOpt;
    gl.vertexAttrib1f = vertexAttrib1fOpt;
    gl.vertexAttrib2f = vertexAttrib2fOpt;
    gl.vertexAttrib3f = vertexAttrib3fOpt;
    gl.vertexAttrib4f = vertexAttrib4fOpt;
    gl.vertexAttrib1fv = vertexAttrib1fvOpt;
    gl.vertexAttrib2fv = vertexAttrib2fvOpt;
    gl.vertexAttrib3fv = vertexAttrib3fvOpt;
    gl.vertexAttrib4fv = vertexAttrib4fvOpt;
    gl.vertexAttribPointer = vertexAttribPointerOpt;
    gl.viewport = viewportOpt;
    gl.glCommit = glCommitOpt;
    gl.getExtension = function () {
        return null;
    };
}

var WebGL = function () {
    function WebGL() {
        _classCallCheck(this, WebGL);

        this.webgl = bkWebGLGetInstance();
        var gl = this.webgl;
        var lastC = 0;
        BK.Director.ticker.add(function (ts, du) {
            if (ts - lastC > 10) {
                gl.glCommit();
                lastC = ts;
            }
        });
    }

    _createClass(WebGL, [{
        key: 'getContext',
        value: function getContext() {
            return this.webgl;
        }
    }]);

    return WebGL;
}();

exports.default = WebGL;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PI = Math.PI;
var TwoPI = PI * 2;
var DEG_TO_RAD = PI / 180;
var matrixPool = [];
/**
 * The Matrix class represents a transformation matrix that determines how to map points from one coordinate space to
 * another. You can perform various graphical transformations on a display object by setting the properties of a Matrix
 * object, applying that Matrix object to the matrix property of a display object, These transformation functions include
 * translation (x and y repositioning), rotation, scaling, and skewing.
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample egret/geom/Matrix.ts
 * @language en_US
 */
/**
 * Matrix 类表示一个转换矩阵，它确定如何将点从一个坐标空间映射到另一个坐标空间。
 * 您可以对一个显示对象执行不同的图形转换，方法是设置 Matrix 对象的属性，将该 Matrix
 * 对象应用于显示对象的 matrix 属性。这些转换函数包括平移（x 和 y 重新定位）、旋转、缩放和倾斜。
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample egret/geom/Matrix.ts
 * @language zh_CN
 */

/**
 * Creates a new Matrix object with the specified parameters.
 * @param a The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
 * @param b The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
 * @param c The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
 * @param d The value that affects the positioning of pixels along the y axis when scaling or rotating an image..
 * @param tx The distance by which to translate each point along the x axis.
 * @param ty The distance by which to translate each point along the y axis.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 使用指定参数创建一个 Matrix 对象
 * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值。
 * @param b 旋转或倾斜图像时影响像素沿 y 轴定位的值。
 * @param c 旋转或倾斜图像时影响像素沿 x 轴定位的值。
 * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值。
 * @param tx 沿 x 轴平移每个点的距离。
 * @param ty 沿 y 轴平移每个点的距离。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
function Matrix(a, b, c, d, tx, ty) {
    if (a === void 0) {
        a = 1;
    }
    if (b === void 0) {
        b = 0;
    }
    if (c === void 0) {
        c = 0;
    }
    if (d === void 0) {
        d = 1;
    }
    if (tx === void 0) {
        tx = 0;
    }
    if (ty === void 0) {
        ty = 0;
    }
    var _this = this;
    _this.a = a;
    _this.b = b;
    _this.c = c;
    _this.d = d;
    _this.tx = tx;
    _this.ty = ty;
    return _this;
}
/**
 * Releases a matrix instance to the object pool
 * @param matrix matrix that Needs to be recycled
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 释放一个Matrix实例到对象池
 * @param matrix 需要回收的 matrix
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.release = function (matrix) {
    if (!matrix) {
        return;
    }
    matrixPool.push(matrix);
};
/**
 * get a matrix instance from the object pool or create a new one.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 从对象池中取出或创建一个新的Matrix对象。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.create = function () {
    var matrix = matrixPool.pop();
    if (!matrix) {
        matrix = new Matrix();
    }
    return matrix;
};
/**
 * Returns a new Matrix object that is a clone of this matrix, with an exact copy of the contained object.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 返回一个新的 Matrix 对象，它是此矩阵的克隆，带有与所含对象完全相同的副本。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.clone = function () {
    return new Matrix(this.a, this.b, this.c, this.d, this.tx, this.ty);
};
/**
 * Concatenates a matrix with the current matrix, effectively combining the geometric effects of the two. In mathematical
 * terms, concatenating two matrixes is the same as combining them using matrix multiplication.
 * @param other The matrix to be concatenated to the source matrix.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 将某个矩阵与当前矩阵连接，从而将这两个矩阵的几何效果有效地结合在一起。在数学术语中，将两个矩阵连接起来与使用矩阵乘法将它们结合起来是相同的。
 * @param other 要连接到源矩阵的矩阵。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.concat = function (other) {
    var a = this.a * other.a;
    var b = 0.0;
    var c = 0.0;
    var d = this.d * other.d;
    var tx = this.tx * other.a + other.tx;
    var ty = this.ty * other.d + other.ty;
    if (this.b !== 0.0 || this.c !== 0.0 || other.b !== 0.0 || other.c !== 0.0) {
        a += this.b * other.c;
        d += this.c * other.b;
        b += this.a * other.b + this.b * other.d;
        c += this.c * other.a + this.d * other.c;
        tx += this.ty * other.c;
        ty += this.tx * other.b;
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
};
/**
 * Copies all of the matrix data from the source Point object into the calling Matrix object.
 * @param other  The Matrix object from which to copy the data.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 将源 Matrix 对象中的所有矩阵数据复制到调用方 Matrix 对象中。
 * @param other 要拷贝的目标矩阵
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.copyFrom = function (other) {
    this.a = other.a;
    this.b = other.b;
    this.c = other.c;
    this.d = other.d;
    this.tx = other.tx;
    this.ty = other.ty;
    return this;
};
/**
 * Sets each matrix property to a value that causes a null transformation. An object transformed by applying an
 * identity matrix will be identical to the original. After calling the identity() method, the resulting matrix
 * has the following properties: a=1, b=0, c=0, d=1, tx=0, ty=0.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 为每个矩阵属性设置一个值，该值将导致矩阵无转换。通过应用恒等矩阵转换的对象将与原始对象完全相同。
 * 调用 identity() 方法后，生成的矩阵具有以下属性：a=1、b=0、c=0、d=1、tx=0 和 ty=0。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.identity = function () {
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
};
/**
 * Performs the opposite transformation of the original matrix. You can apply an inverted matrix to an object to
 * undo the transformation performed when applying the original matrix.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 执行原始矩阵的逆转换。
 * 您可以将一个逆矩阵应用于对象来撤消在应用原始矩阵时执行的转换。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.invert = function () {
    this.$invertInto(this);
};
/**
 * @private
 */
Matrix.prototype.$invertInto = function (target) {
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = this.tx;
    var ty = this.ty;
    if (b == 0 && c == 0) {
        target.b = target.c = 0;
        if (a == 0 || d == 0) {
            target.a = target.d = target.tx = target.ty = 0;
        } else {
            a = target.a = 1 / a;
            d = target.d = 1 / d;
            target.tx = -a * tx;
            target.ty = -d * ty;
        }
        return;
    }
    var determinant = a * d - b * c;
    if (determinant == 0) {
        target.identity();
        return;
    }
    determinant = 1 / determinant;
    var k = target.a = d * determinant;
    b = target.b = -b * determinant;
    c = target.c = -c * determinant;
    d = target.d = a * determinant;
    target.tx = -(k * tx + c * ty);
    target.ty = -(b * tx + d * ty);
};
/**
 * Applies a rotation transformation to the Matrix object.
 * The rotate() method alters the a, b, c, and d properties of the Matrix object.
 * @param angle The rotation angle in radians.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 对 Matrix 对象应用旋转转换。
 * rotate() 方法将更改 Matrix 对象的 a、b、c 和 d 属性。
 * @param angle 以弧度为单位的旋转角度。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.rotate = function (angle) {
    angle = +angle;
    if (angle !== 0) {
        angle = angle / DEG_TO_RAD;
        var u = egret.NumberUtils.cos(angle);
        var v = egret.NumberUtils.sin(angle);
        var ta = this.a;
        var tb = this.b;
        var tc = this.c;
        var td = this.d;
        var ttx = this.tx;
        var tty = this.ty;
        this.a = ta * u - tb * v;
        this.b = ta * v + tb * u;
        this.c = tc * u - td * v;
        this.d = tc * v + td * u;
        this.tx = ttx * u - tty * v;
        this.ty = ttx * v + tty * u;
    }
};
/**
 * Applies a scaling transformation to the matrix. The x axis is multiplied by sx, and the y axis it is multiplied by sy.
 * The scale() method alters the a and d properties of the Matrix object.
 * @param sx A multiplier used to scale the object along the x axis.
 * @param sy A multiplier used to scale the object along the y axis.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 对矩阵应用缩放转换。x 轴乘以 sx，y 轴乘以 sy。
 * scale() 方法将更改 Matrix 对象的 a 和 d 属性。
 * @param sx 用于沿 x 轴缩放对象的乘数。
 * @param sy 用于沿 y 轴缩放对象的乘数。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.scale = function (sx, sy) {
    if (sx !== 1) {
        this.a *= sx;
        this.c *= sx;
        this.tx *= sx;
    }
    if (sy !== 1) {
        this.b *= sy;
        this.d *= sy;
        this.ty *= sy;
    }
};
/**
 * Sets the members of Matrix to the specified values
 * @param a The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
 * @param b The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
 * @param c The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
 * @param d The value that affects the positioning of pixels along the y axis when scaling or rotating an image..
 * @param tx The distance by which to translate each point along the x axis.
 * @param ty The distance by which to translate each point along the y axis.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 将 Matrix 的成员设置为指定值
 * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值。
 * @param b 旋转或倾斜图像时影响像素沿 y 轴定位的值。
 * @param c 旋转或倾斜图像时影响像素沿 x 轴定位的值。
 * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值。
 * @param tx 沿 x 轴平移每个点的距离。
 * @param ty 沿 y 轴平移每个点的距离。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.setTo = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
};
/**
 * Returns the result of applying the geometric transformation represented by the Matrix object to the specified point.
 * @param pointX The x coordinate for which you want to get the result of the Matrix transformation.
 * @param pointY The y coordinate for which you want to get the result of the Matrix transformation.
 * @param resultPoint A reusable instance of Point for saving the results. Passing this parameter can reduce the
 * number of reallocate objects, which allows you to get better code execution performance.
 * @returns The point resulting from applying the Matrix transformation.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 返回将 Matrix 对象表示的几何转换应用于指定点所产生的结果。
 * @param pointX 想要获得其矩阵转换结果的点的x坐标。
 * @param pointY 想要获得其矩阵转换结果的点的y坐标。
 * @param resultPoint 框架建议尽可能减少创建对象次数来优化性能，可以从外部传入一个复用的Point对象来存储结果，若不传入将创建一个新的Point对象返回。
 * @returns 由应用矩阵转换所产生的点。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.transformPoint = function (pointX, pointY, resultPoint) {
    var x = this.a * pointX + this.c * pointY + this.tx;
    var y = this.b * pointX + this.d * pointY + this.ty;
    if (resultPoint) {
        resultPoint.setTo(x, y);
        return resultPoint;
    }
    return new egret.Point(x, y);
};
/**
 * Translates the matrix along the x and y axes, as specified by the dx and dy parameters.
 * @param dx The amount of movement along the x axis to the right, in pixels.
 * @param dy The amount of movement down along the y axis, in pixels.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 沿 x 和 y 轴平移矩阵，由 dx 和 dy 参数指定。
 * @param dx 沿 x 轴向右移动的量（以像素为单位）。
 * @param dy 沿 y 轴向下移动的量（以像素为单位）。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.translate = function (dx, dy) {
    this.tx += dx;
    this.ty += dy;
};
/**
 * Determines whether two matrixes are equal.
 * @param other The matrix to be compared.
 * @returns A value of true if the object is equal to this Matrix object; false if it is not equal.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 是否与另一个矩阵数据相等
 * @param other 要比较的另一个矩阵对象。
 * @returns 是否相等，ture表示相等。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.equals = function (other) {
    return this.a == other.a && this.b == other.b && this.c == other.c && this.d == other.d && this.tx == other.tx && this.ty == other.ty;
};
/**
 * prepend matrix
 * @param a The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
 * @param b The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
 * @param c The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
 * @param d The value that affects the positioning of pixels along the y axis when scaling or rotating an image..
 * @param tx The distance by which to translate each point along the x axis.
 * @param ty The distance by which to translate each point along the y axis.
 * @returns matrix
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 前置矩阵
 * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值
 * @param b 缩放或旋转图像时影响像素沿 y 轴定位的值
 * @param c 缩放或旋转图像时影响像素沿 x 轴定位的值
 * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值
 * @param tx 沿 x 轴平移每个点的距离
 * @param ty 沿 y 轴平移每个点的距离
 * @returns 矩阵自身
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.prepend = function (a, b, c, d, tx, ty) {
    var tx1 = this.tx;
    if (a != 1 || b != 0 || c != 0 || d != 1) {
        var a1 = this.a;
        var c1 = this.c;
        this.a = a1 * a + this.b * c;
        this.b = a1 * b + this.b * d;
        this.c = c1 * a + this.d * c;
        this.d = c1 * b + this.d * d;
    }
    this.tx = tx1 * a + this.ty * c + tx;
    this.ty = tx1 * b + this.ty * d + ty;
    return this;
};
/**
 * append matrix
 * @param a The value that affects the positioning of pixels along the x axis when scaling or rotating an image.
 * @param b The value that affects the positioning of pixels along the y axis when rotating or skewing an image.
 * @param c The value that affects the positioning of pixels along the x axis when rotating or skewing an image.
 * @param d The value that affects the positioning of pixels along the y axis when scaling or rotating an image..
 * @param tx The distance by which to translate each point along the x axis.
 * @param ty The distance by which to translate each point along the y axis.
 * @returns matrix
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 后置矩阵
 * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值
 * @param b 缩放或旋转图像时影响像素沿 y 轴定位的值
 * @param c 缩放或旋转图像时影响像素沿 x 轴定位的值
 * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值
 * @param tx 沿 x 轴平移每个点的距离
 * @param ty 沿 y 轴平移每个点的距离
 * @returns 矩阵自身
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.append = function (a, b, c, d, tx, ty) {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    if (a != 1 || b != 0 || c != 0 || d != 1) {
        this.a = a * a1 + b * c1;
        this.b = a * b1 + b * d1;
        this.c = c * a1 + d * c1;
        this.d = c * b1 + d * d1;
    }
    this.tx = tx * a1 + ty * c1 + this.tx;
    this.ty = tx * b1 + ty * d1 + this.ty;
    return this;
};
/**
 * Given a point in the pretransform coordinate space, returns the coordinates of that point after the transformation occurs.
 * Unlike the standard transformation applied using the transformPoint() method, the deltaTransformPoint() method's transformation does not consider the translation parameters tx and ty.
 * @param point The point for which you want to get the result of the matrix transformation.
 * @returns The point resulting from applying the matrix transformation.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 如果给定预转换坐标空间中的点，则此方法返回发生转换后该点的坐标。
 * 与使用 transformPoint() 方法应用的标准转换不同，deltaTransformPoint() 方法的转换不考虑转换参数 tx 和 ty。
 * @param point 想要获得其矩阵转换结果的点
 * @returns 由应用矩阵转换所产生的点
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.deltaTransformPoint = function (point) {
    var self = this;
    var x = self.a * point.x + self.c * point.y;
    var y = self.b * point.x + self.d * point.y;
    return new egret.Point(x, y);
};
/**
 * Returns a text value listing the properties of the Matrix object.
 * @returns A string containing the values of the properties of the Matrix object: a, b, c, d, tx, and ty.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 返回将 Matrix 对象表示的几何转换应用于指定点所产生的结果。
 * @returns 一个字符串，它包含 Matrix 对象的属性值：a、b、c、d、tx 和 ty。
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.toString = function () {
    return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")";
};
/**
 * Includes parameters for scaling, rotation, and translation. When applied to a matrix it sets the matrix's values based on those parameters.
 * @param scaleX The factor by which to scale horizontally.
 * @param scaleY The factor by which scale vertically.
 * @param rotation The amount to rotate, in radians.
 * @param tx The number of pixels to translate (move) to the right along the x axis.
 * @param ty The number of pixels to translate (move) down along the y axis.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 包括用于缩放、旋转和转换的参数。当应用于矩阵时，该方法会基于这些参数设置矩阵的值。
 * @param scaleX 水平缩放所用的系数
 * @param scaleY 垂直缩放所用的系数
 * @param rotation 旋转量（以弧度为单位）
 * @param tx 沿 x 轴向右平移（移动）的像素数
 * @param ty 沿 y 轴向下平移（移动）的像素数
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.createBox = function (scaleX, scaleY, rotation, tx, ty) {
    if (rotation === void 0) {
        rotation = 0;
    }
    if (tx === void 0) {
        tx = 0;
    }
    if (ty === void 0) {
        ty = 0;
    }
    var self = this;
    if (rotation !== 0) {
        rotation = rotation / DEG_TO_RAD;
        var u = egret.NumberUtils.cos(rotation);
        var v = egret.NumberUtils.sin(rotation);
        self.a = u * scaleX;
        self.b = v * scaleY;
        self.c = -v * scaleX;
        self.d = u * scaleY;
    } else {
        self.a = scaleX;
        self.b = 0;
        self.c = 0;
        self.d = scaleY;
    }
    self.tx = tx;
    self.ty = ty;
};
/**
 * Creates the specific style of matrix expected by the beginGradientFill() and lineGradientStyle() methods of the Graphics class.
 * Width and height are scaled to a scaleX/scaleY pair and the tx/ty values are offset by half the width and height.
 * @param width The width of the gradient box.
 * @param height The height of the gradient box.
 * @param rotation The amount to rotate, in radians.
 * @param tx The distance, in pixels, to translate to the right along the x axis. This value is offset by half of the width parameter.
 * @param ty The distance, in pixels, to translate down along the y axis. This value is offset by half of the height parameter.
 * @version Egret 2.4
 * @platform Web,Native
 * @language en_US
 */
/**
 * 创建 Graphics 类的 beginGradientFill() 和 lineGradientStyle() 方法所需的矩阵的特定样式。
 * 宽度和高度被缩放为 scaleX/scaleY 对，而 tx/ty 值偏移了宽度和高度的一半。
 * @param width 渐变框的宽度
 * @param height 渐变框的高度
 * @param rotation 旋转量（以弧度为单位）
 * @param tx 沿 x 轴向右平移的距离（以像素为单位）。此值将偏移 width 参数的一半
 * @param ty 沿 y 轴向下平移的距离（以像素为单位）。此值将偏移 height 参数的一半
 * @version Egret 2.4
 * @platform Web,Native
 * @language zh_CN
 */
Matrix.prototype.createGradientBox = function (width, height, rotation, tx, ty) {
    if (rotation === void 0) {
        rotation = 0;
    }
    if (tx === void 0) {
        tx = 0;
    }
    if (ty === void 0) {
        ty = 0;
    }
    this.createBox(width / 1638.4, height / 1638.4, rotation, tx + width / 2, ty + height / 2);
};
/**
 * @private
 */
Matrix.prototype.$transformBounds = function (bounds) {
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = this.tx;
    var ty = this.ty;
    var x = bounds.x;
    var y = bounds.y;
    var xMax = x + bounds.width;
    var yMax = y + bounds.height;
    var x0 = a * x + c * y + tx;
    var y0 = b * x + d * y + ty;
    var x1 = a * xMax + c * y + tx;
    var y1 = b * xMax + d * y + ty;
    var x2 = a * xMax + c * yMax + tx;
    var y2 = b * xMax + d * yMax + ty;
    var x3 = a * x + c * yMax + tx;
    var y3 = b * x + d * yMax + ty;
    var tmp = 0;
    if (x0 > x1) {
        tmp = x0;
        x0 = x1;
        x1 = tmp;
    }
    if (x2 > x3) {
        tmp = x2;
        x2 = x3;
        x3 = tmp;
    }
    bounds.x = Math.floor(x0 < x2 ? x0 : x2);
    bounds.width = Math.ceil((x1 > x3 ? x1 : x3) - bounds.x);
    if (y0 > y1) {
        tmp = y0;
        y0 = y1;
        y1 = tmp;
    }
    if (y2 > y3) {
        tmp = y2;
        y2 = y3;
        y3 = tmp;
    }
    bounds.y = Math.floor(y0 < y2 ? y0 : y2);
    bounds.height = Math.ceil((y1 > y3 ? y1 : y3) - bounds.y);
};
/**
 * @private
 */
Matrix.prototype.getDeterminant = function () {
    return this.a * this.d - this.b * this.c;
};
/**
 * @private
 */
Matrix.prototype.$getScaleX = function () {
    var m = this;
    if (m.b == 0) {
        return m.a;
    }
    var result = Math.sqrt(m.a * m.a + m.b * m.b);
    return this.getDeterminant() < 0 ? -result : result;
};
/**
 * @private
 */
Matrix.prototype.$getScaleY = function () {
    var m = this;
    if (m.c == 0) {
        return m.d;
    }
    var result = Math.sqrt(m.c * m.c + m.d * m.d);
    return this.getDeterminant() < 0 ? -result : result;
};
/**
 * @private
 */
Matrix.prototype.$getSkewX = function () {
    if (this.d < 0) {
        return Math.atan2(this.d, this.c) + PI / 2;
    } else {
        return Math.atan2(this.d, this.c) - PI / 2;
    }
};
/**
 * @private
 */
Matrix.prototype.$getSkewY = function () {
    if (this.a < 0) {
        return Math.atan2(this.b, this.a) - PI;
    } else {
        return Math.atan2(this.b, this.a);
    }
};
/**
 * @private
 */
Matrix.prototype.$updateScaleAndRotation = function (scaleX, scaleY, skewX, skewY) {
    if ((skewX == 0 || skewX == TwoPI) && (skewY == 0 || skewY == TwoPI)) {
        this.a = scaleX;
        this.b = this.c = 0;
        this.d = scaleY;
        return;
    }
    skewX = skewX / DEG_TO_RAD;
    skewY = skewY / DEG_TO_RAD;
    var u = egret.NumberUtils.cos(skewX);
    var v = egret.NumberUtils.sin(skewX);
    if (skewX == skewY) {
        this.a = u * scaleX;
        this.b = v * scaleX;
    } else {
        this.a = egret.NumberUtils.cos(skewY) * scaleX;
        this.b = egret.NumberUtils.sin(skewY) * scaleX;
    }
    this.c = -v * scaleY;
    this.d = u * scaleY;
};
/**
 * @private
 * target = other * this
 */
Matrix.prototype.$preMultiplyInto = function (other, target) {
    var a = other.a * this.a;
    var b = 0.0;
    var c = 0.0;
    var d = other.d * this.d;
    var tx = other.tx * this.a + this.tx;
    var ty = other.ty * this.d + this.ty;
    if (other.b !== 0.0 || other.c !== 0.0 || this.b !== 0.0 || this.c !== 0.0) {
        a += other.b * this.c;
        d += other.c * this.b;
        b += other.a * this.b + other.b * this.d;
        c += other.c * this.a + other.d * this.c;
        tx += other.ty * this.c;
        ty += other.tx * this.b;
    }
    target.a = a;
    target.b = b;
    target.c = c;
    target.d = d;
    target.tx = tx;
    target.ty = ty;
};

exports.default = Matrix;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

var _util = __webpack_require__(3);

var _Timer = __webpack_require__(1);

var _base64Arraybuffer = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function arrayBufferToBricksBuffer(uint8Array) {
    var bricksBuffer = new BK.Buffer(uint8Array.byteLength);

    var pointer = 0;
    while (pointer < uint8Array.byteLength) {
        bricksBuffer.writeUint8Buffer(uint8Array[pointer++]);
    }
    return bricksBuffer;
}

var Image = function () {
    function Image() {
        _classCallCheck(this, Image);

        this.width = 0;
        this.height = 0;
        this.tmpSrc = "";
        this._event = {};
        this.bkLocalPath = "";
    }

    _createClass(Image, [{
        key: 'removeEventListener',
        value: function removeEventListener(type, listener) {
            if (!this._event[type]) {
                this._event[type] = [];
            }
            var index = this._event[type].indexOf(listener);
            this._event[type].splice(index, 1);
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(type, listener, options) {
            if (!this._event[type]) {
                this._event[type] = [];
            }
            this._event[type].push(listener);

            if (options && options.capture) {
                console.warn('EventTarget.addEventListener: options.capture is not implemented.');
            }
            if (options && options.once) {
                // console.warn('EventTarget.addEventListener: options.once is not implemented.')
            }
            if (options && options.passive) {
                console.warn('EventTarget.addEventListener: options.passive is not implemented.');
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var listener = this._event[event.type];

            if (listener !== undefined) {
                for (var i = 0; i < listener.length; i++) {
                    listener[i] && listener[i](event);
                }
            }
        }
    }, {
        key: 'handleImgUrl',
        value: function handleImgUrl() {
            var url = this.tmpSrc;
            var path = this.bkLocalPath;
            _Log2.default.d(0, 0, 'image, handleImgUrl, url=' + url + ', bkLocalPath=' + path);
            if (typeof url == 'string') {
                if ((0, _util.isRemoteUrl)(url)) {
                    if (BK.FileUtil.isFileExist(path)) {
                        // 已经下载，直接加载
                        _Log2.default.d(0, 0, 'image, handleImgUrl, downloaded, localPath=' + path);
                        this.createImgObj(path);
                    } else {
                        _Log2.default.d(0, 0, 'image, handleImgUrl, load remote url, url=' + url);
                        this.loadImg();
                    }
                } else {
                    // local img
                    this.createImgObj(path);
                }
            } else {
                this.dispatchEvent({ type: "error" });
            }
        }
    }, {
        key: 'handleB64data',
        value: function handleB64data(data) {
            var bkdata = BK.Misc.arrayBufferToBKBuffer(data);
            this.createImgObj(bkdata);
        }
    }, {
        key: 'loadImg',
        value: function loadImg() {
            var that = this;
            var url = that.tmpSrc;
            var path = that.bkLocalPath;
            _Log2.default.d(0, 0, 'image, loadImg, load remote url, url=' + url + ', path=' + path);

            var httpget = new BK.HttpUtil(url);
            httpget.setHttpMethod("get");
            httpget.requestAsync(function (res, code) {
                if (code == 200) {
                    var saveResult = BK.FileUtil.writeBufferToFile(path, res);
                    if (saveResult) {
                        that.createImgObj(path);
                    } else {
                        _Log2.default.d(0, 0, 'ImageAdapter, save img failed');
                        that.dispatchEvent({ type: "error" });
                    }
                } else {
                    _Log2.default.d(0, 0, 'ImageAdapter, loadImg failed:' + code + ', url=' + url);
                    that.dispatchEvent({ type: "error" });
                }
            });
        }
    }, {
        key: 'createImgObj',
        value: function createImgObj(data) {
            var img = BK.Image.loadImage(data);
            _Log2.default.d(0, 0, 'image, createImgObj, img=' + img + ', path=' + data);
            var that = this;
            if (img !== undefined) {
                this._bknode = img;
                this.__nativeObj = img;
                this.naturalWidth = img.width;
                this.naturalHeight = img.height;
                this.width = img.width;
                this.height = img.height;
                this.type = "arraybuffer";
                //  this._data = BK.Misc.BKBufferToArrayBuffer(img.buffer);
                this.source = this.src;
                if (this.width === 0 && this.height === 0) {
                    this.width = img.width;
                    this.height = img.height;
                }
                _Log2.default.d(0, 0, 'image, createImgObj, dispatchEvent load with obj, path=' + data);
                //            this.dispatchEvent({type:"load"})
                (0, _Timer.setTimeout)(function () {
                    that.dispatchEvent({ target: that, type: "load" });
                }, 0);
            } else {
                _Log2.default.d(0, 0, 'image, createImgObj, dispatchEvent error, path=' + data);
                (0, _Timer.setTimeout)(function () {
                    that.dispatchEvent({ type: "error", target: that });
                }, 0);
            }
        }
    }, {
        key: 'height',
        get: function get() {
            return this._height;
        },
        set: function set(h) {
            this._height = h;
        }
    }, {
        key: 'width',
        get: function get() {
            return this._width;
        },
        set: function set(w) {
            this._width = w;
        }
    }, {
        key: 'src',
        get: function get() {
            return this.bkLocalPath;
        },
        set: function set(url) {
            if (url.includes(':image')) {
                var imageArray = (0, _base64Arraybuffer.decode)(url.substr(url.lastIndexOf("base64") + 7));
                console.log("base64 image loaded ");
                this.handleB64data(imageArray);
            } else {
                var path = (0, _util.getImgPath)(url);
                _Log2.default.d(0, 0, 'image, src=' + url);
                // 多次src赋值，路径未变化不需重新加载
                if (path !== this.bkLocalPath) {
                    this.bkLocalPath = path;
                    this.tmpSrc = url;
                    this.handleImgUrl();
                }
            }
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        },
        set: function set(val) {
            this._data = val;
        }
    }, {
        key: 'source',
        get: function get() {
            return this._source;
        },
        set: function set(source) {
            this._source = source;
        }
    }, {
        key: 'onload',
        set: function set(callback) {
            this.addEventListener("load", callback, { once: true });
            var f = function f() {
                callback({ once: true });
            };
            (0, _Timer.setTimeout)(f, 100);
            //this.onloadCallback = callback
        }
    }, {
        key: 'onerror',
        set: function set(callback) {
            this.addEventListener("error", callback, { once: true });
        }
    }]);

    return Image;
}();

exports.default = Image;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

;


/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  ;

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];

      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _util = __webpack_require__(3);

var _Timer = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _bkAudioContext = new WeakMap();
var _bkSrc = new WeakMap();
var _bkLoop = new WeakMap();

var InnerAudioContext = function () {
    function InnerAudioContext() {
        _classCallCheck(this, InnerAudioContext);

        this._event = {};
        _bkSrc.set(this, '');
        _bkLoop.set(this, false);
    }

    _createClass(InnerAudioContext, [{
        key: 'removeEventListener',
        value: function removeEventListener(type, listener) {
            if (!this._event[type]) {
                this._event[type] = [];
            }
            var index = this._event[type].indexOf(listener);
            this._event[type].splice(index, 1);
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(type, listener, options) {
            if (!this._event[type]) {
                this._event[type] = [];
            }
            this._event[type].push(listener);

            if (options && options.capture) {
                console.warn('EventTarget.addEventListener: options.capture is not implemented.');
            }
            if (options && options.once) {
                // console.warn('EventTarget.addEventListener: options.once is not implemented.')
            }
            if (options && options.passive) {
                console.warn('EventTarget.addEventListener: options.passive is not implemented.');
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var listener = this._event[event.type];

            if (listener !== undefined) {
                for (var i = 0; i < listener.length; i++) {
                    listener[i] && listener[i](event);
                }
            }
        }
    }, {
        key: 'play',
        value: function play() {
            var audioSrc = _bkSrc.get(this);
            var loop = _bkLoop.get(this);
            _Log2.default.d(0, 0, "InnerAudioContext play: " + audioSrc + ", loop=" + loop);
            if (audioSrc === undefined) {
                _Log2.default.d(0, 0, "no src value");
                return;
            }

            var that = this;
            if (_bkAudioContext.get(this) === undefined) {
                var audioPath = (0, _util.getAudioPath)(audioSrc);
                if ((0, _util.isRemoteUrl)(audioSrc)) {
                    if (BK.FileUtil.isFileExist(audioPath)) {
                        // 已经下载，直接加载
                        _Log2.default.d(0, 0, 'InnerAudioContext, downloaded:' + audioSrc);
                        _bkAudioContext.set(this, this.createContext(audioPath, loop));
                    } else {
                        var path = audioPath;
                        var _loop = loop;
                        _Log2.default.d(0, 0, 'InnerAudioContext, not downloaded:' + audioSrc + ', path:' + path);

                        var httpget = new BK.HttpUtil(audioSrc);
                        httpget.setHttpMethod("get");
                        httpget.requestAsync(function (res, code) {
                            _Log2.default.d(0, 0, 'InnerAudioContext, download audio over');
                            if (code == 200) {
                                var saveResult = BK.FileUtil.writeBufferToFile(path, res);
                                if (saveResult) {
                                    _bkAudioContext.set(that, that.createContext(audioPath, loop));
                                    if (_bkAudioContext.get(that) !== undefined) {
                                        _bkAudioContext.get(that).startMusic(function () {
                                            if (that.onEndedCallback) {
                                                that.onEndedCallback();
                                            }
                                        });
                                        if (that.onPlayCallback) {
                                            that.onPlayCallback();
                                        }
                                    }
                                } else {
                                    _Log2.default.d(0, 0, 'InnerAudioContext, save audio failed');
                                }
                            } else {
                                _Log2.default.d(0, 0, 'InnerAudioContext, download audio failed:' + code + ', url=' + url);
                            }
                        });
                        return;
                    }
                } else {
                    // local audio
                    _bkAudioContext.set(this, this.createContext(audioPath, loop));
                }
            }

            if (_bkAudioContext.get(this) !== undefined) {
                _bkAudioContext.get(this).startMusic(function () {
                    if (that.onEndedCallback) {
                        that.onEndedCallback();
                    }
                });
                if (that.onPlayCallback) {
                    that.onPlayCallback();
                }
            }
        }
    }, {
        key: 'createContext',
        value: function createContext(audioPath, loop) {
            var bkAudioContext = new BK.Audio(loop ? 0 : 1, audioPath, loop ? -1 : 1);
            return bkAudioContext;
        }
    }, {
        key: 'pause',
        value: function pause() {
            _Log2.default.d(0, 0, "InnerAudioContext pause: " + _bkSrc.get(this));
            if (_bkAudioContext.get(this) !== undefined) {
                var that = this;
                _bkAudioContext.get(this).pauseMusic();
                if (that.onPauseCallback) {
                    that.onPauseCallback();
                }
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            _Log2.default.d(0, 0, "InnerAudioContext stop: " + _bkSrc.get(this));
            if (_bkAudioContext.get(this) !== undefined) {
                var that = this;
                _bkAudioContext.get(this).stopMusic();
                if (that.onStopCallback) {
                    that.onStopCallback();
                }
            }
        }
    }, {
        key: 'seek',
        value: function seek(position) {
            // not implement yet
            var that = this;
            window.setTimeout(that.dispatchEvent({ target: that, type: "seeking" }), 100);
            var _audio = _bkAudioContext.get(this);
            if (audio && audio.seek) {
                audio.seek(position * 1000);
                that.dispatchEvent({ target: that, type: "seeked" });
            } else {
                _Log2.default.d(1, 0, "InnerAudioContext seek not implement yet");
            }
        }
    }, {
        key: 'onCanplay',
        value: function onCanplay(callback) {
            this.onCanplayCallback = callback;
        }
    }, {
        key: 'offCanplay',
        value: function offCanplay(callback) {
            this.onCanplayCallback = undefined;
        }
    }, {
        key: 'onPlay',
        value: function onPlay(callback) {
            this.onPlayCallback = callback;
        }
    }, {
        key: 'offPlay',
        value: function offPlay(callback) {
            this.onPlayCallback = undefined;
        }
    }, {
        key: 'onPause',
        value: function onPause(callback) {
            this.onPauseCallback = callback;
        }
    }, {
        key: 'offPause',
        value: function offPause(callback) {
            this.onPauseCallback = undefined;
        }
    }, {
        key: 'onStop',
        value: function onStop(callback) {
            this.onStopCallback = callback;
        }
    }, {
        key: 'offStop',
        value: function offStop(callback) {
            this.onStopCallback = undefined;
        }
    }, {
        key: 'onEnded',
        value: function onEnded(callback) {
            this.onEndedCallback = callback;
        }
    }, {
        key: 'offEnded',
        value: function offEnded(callback) {
            this.onEndedCallback = undefined;
        }
    }, {
        key: 'onError',
        value: function onError(callback) {
            this.onErrorCallback = callback;
        }
    }, {
        key: 'offError',
        value: function offError(callback) {
            this.onErrorCallback = undefined;
        }
    }, {
        key: 'onTimeUpdate',
        value: function onTimeUpdate(callback) {
            this.onTimeUpdateCallback = callback;
        }
    }, {
        key: 'offTimeUpdate',
        value: function offTimeUpdate(callback) {
            this.onTimeUpdateCallback = undefined;
        }
    }, {
        key: 'onWaiting',
        value: function onWaiting(callback) {
            this.onWaitingCallback = callback;
        }
    }, {
        key: 'offWaiting',
        value: function offWaiting(callback) {
            this.onWaitingCallback = undefined;
        }
    }, {
        key: 'onSeeking',
        value: function onSeeking(callback) {
            this.addEventListener("seeking", callback);
            this.onSeekingCallback = callback;
        }
    }, {
        key: 'offSeeking',
        value: function offSeeking(callback) {
            this.removeEventListener("seeking", callback);
            this.onSeekingCallback = undefined;
        }
    }, {
        key: 'onSeeked',
        value: function onSeeked(callback) {
            this.addEventListener('seeked', callback);
            this.onSeekedCallback = callback;
        }
    }, {
        key: 'offSeeked',
        value: function offSeeked(callback) {
            this.removeEventListener('seeked', callback);
            this.onSeekedCallback = undefined;
        }
    }, {
        key: 'src',
        get: function get() {
            return _bkSrc.get(this);
        },
        set: function set(value) {
            _bkSrc.set(this, value);

            // TODO 先放这里，要优化
            var that = this;
            (0, _Timer.setTimeout)(function () {
                _Log2.default.d(0, 0, "InnerAudioContext onCanplayCallback");
                if (that.onCanplayCallback) {
                    that.onCanplayCallback();
                }
            }, 0);
        }
    }, {
        key: 'loop',
        get: function get() {
            return _bkLoop.get(this);
        },
        set: function set(value) {
            _bkLoop.set(this, value);
        }
    }]);

    return InnerAudioContext;
}();

exports.default = InnerAudioContext;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Stats = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

var _util = __webpack_require__(3);

var _Timer = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FileSystemManager = function () {
    function FileSystemManager() {
        _classCallCheck(this, FileSystemManager);
    }

    _createClass(FileSystemManager, [{
        key: 'readFile',
        value: function readFile(object) {
            _Log2.default.d(0, 0, 'readFile, object=' + JSON.stringify(object));
            var that = this;
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    var encoding = object.encoding;
                    if (typeof object.filePath == 'string') {
                        var bkFilePath = (0, _util.wrapLocalUrl)(object.filePath);
                        if (!BK.FileUtil.isFileExist(bkFilePath)) {
                            bkFilePath = (0, _util.wrapSandBoxPath)(object.filePath);
                        }
                        if (BK.FileUtil.isFileExist(bkFilePath)) {
                            var bkBuff = BK.FileUtil.readFile(bkFilePath);
                            var resBuff = void 0;
                            if (encoding && (encoding === 'utf-8' || encoding === 'utf8' || encoding === 'ascii' || encoding === 'latin1')) {
                                // BK.Buffer -> string
                                resBuff = bkBuff.readAsString();
                            } else {
                                // BK.Buffer -> ArrayBuffer
                                resBuff = that.bricksBufferToArrayBuffer(bkBuff);
                            }
                            var res = { data: resBuff };
                            _Log2.default.d(0, 0, 'readFile, success, filePath=' + object.filePath + ', bkFilePath=' + bkFilePath + ', data=' + resBuff);
                            if (object.success) {
                                object.success(res);
                            }
                        } else {
                            _Log2.default.d(0, 0, 'readFile failed, file not exist, filePath=' + object.filePath + ', bkFilePath=' + bkFilePath);
                            var res = { errMsg: 'file not exist' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        _Log2.default.d(0, 0, 'readFile failed, invalid filePath, filePath=' + object.filePath);
                        var res = { errMsg: 'invalid filePath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'readFile failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'readFileSync',
        value: function readFileSync(filePath, encoding) {
            _Log2.default.d(0, 0, 'readFileSync, filePath=' + filePath + ', encoding=' + encoding);
            if (typeof filePath == 'string') {
                var bkFilePath = (0, _util.wrapLocalUrl)(filePath);
                if (!BK.FileUtil.isFileExist(bkFilePath)) {
                    bkFilePath = (0, _util.wrapSandBoxPath)(filePath);
                }
                if (BK.FileUtil.isFileExist(bkFilePath)) {
                    var bkBuff = BK.FileUtil.readFile(bkFilePath);
                    if (encoding === 'utf-8' || encoding === 'utf8' || encoding === 'ascii' || encoding === 'latin1') {
                        // BK.Buffer -> string
                        _Log2.default.d(0, 0, 'readFileSync success, string, bkFilePath=' + bkFilePath);
                        return bkBuff.readAsString();
                    } else {
                        _Log2.default.d(0, 0, 'readFileSync success, ArrayBuffer, bkFilePath=' + bkFilePath);
                        // BK.Buffer -> ArrayBuffer
                        return BK.Misc.BKBufferToArrayBuffer(bkBuff);
                    }
                } else {
                    throw new Error('readFileSync:fail, file not exist ${bkFilePath}');
                }
            } else {
                throw new Error('readFileSync:fail, invalid filePath');
            }
        }
    }, {
        key: 'bricksBufferToArrayBuffer',
        value: function bricksBufferToArrayBuffer(bricksBuffer) {
            var arrayBuffer = new ArrayBuffer(bricksBuffer.bufferLength());
            var uint8Array = new Uint8Array(arrayBuffer);
            var pointer = 0;
            while (pointer < bricksBuffer.bufferLength()) {
                uint8Array[pointer++] = bricksBuffer.readUint8Buffer();
            }
            // bricksBuffer.releaseBuffer();
            return arrayBuffer;
        }
    }, {
        key: 'writeFile',
        value: function writeFile(object) {
            _Log2.default.d(0, 0, 'writeFile, object=' + JSON.stringify(object));
            (0, _Timer.setTimeout)(function () {
                if (object && object.filePath && object.data) {
                    if (typeof object.filePath == 'string') {
                        var bkFilePath = (0, _util.wrapSandBoxPath)(object.filePath);
                        // TODO encoding
                        if (typeof object.data == 'string') {
                            BK.FileUtil.writeFile(bkFilePath, object.data);
                        } else {
                            // ArrayBuffer -> BK.Buffer
                            var bkBuff = BK.Misc.arrayBufferToBKBuffer(object.data);
                            BK.FileUtil.writeBufferToFile(bkFilePath, bkBuff);
                        }
                        _Log2.default.d(0, 0, 'writeFile success, filePath=' + object.filePath);
                        if (object.success) {
                            object.success();
                        }
                    } else {
                        var res = { errMsg: 'invalid filePath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'writeFile failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'writeFileSync',
        value: function writeFileSync(filePath, data, encoding) {
            _Log2.default.d(0, 0, 'writeFileSync, filePath=' + filePath);
            if (filePath && data) {
                if (typeof filePath == 'string') {
                    var bkFilePath = (0, _util.wrapSandBoxPath)(filePath);
                    // TODO encoding
                    if (typeof data == 'string') {
                        BK.FileUtil.writeFile(bkFilePath, data);
                    } else {
                        // ArrayBuffer -> BK.Buffer
                        var bkBuff = BK.Misc.arrayBufferToBKBuffer(data);
                        BK.FileUtil.writeBufferToFile(bkFilePath, bkBuff);
                    }
                    _Log2.default.d(0, 0, 'writeFileSync success, filePath=' + filePath);
                } else {
                    throw new Error('writeFileSync:fail, invalid filePath');
                }
            } else {
                throw new Error('writeFileSync:fail, invalid param');
            }
        }
    }, {
        key: 'access',
        value: function access(object) {
            _Log2.default.d(0, 0, 'access, object=' + JSON.stringify(object));
            (0, _Timer.setTimeout)(function () {
                // 判断文件是否存在
                var isFileExist = BK.FileUtil.isFileExist((0, _util.wrapLocalUrl)(object.path));
                if (!isFileExist) {
                    isFileExist = BK.FileUtil.isFileExist((0, _util.wrapSandBoxPath)(object.path));
                }
                _Log2.default.d(0, 0, 'access, path=' + object.path + ', isFileExist=' + isFileExist);
                if (isFileExist) {
                    if (object.success) {
                        object.success();
                    }
                } else {
                    var res = { errMsg: 'fail no such file or directory' };
                    if (object.fail) {
                        object.fail(res);
                    }
                }

                if (object.complete) {
                    object.complete();
                }
            }, 0);
        }
    }, {
        key: 'accessSync',
        value: function accessSync(path) {
            var isFileExist = BK.FileUtil.isFileExist((0, _util.wrapLocalUrl)(path));
            if (!isFileExist) {
                isFileExist = BK.FileUtil.isFileExist((0, _util.wrapSandBoxPath)(path));
            }
            _Log2.default.d(0, 0, 'accessSync, path=' + path + ', isFileExist=' + isFileExist);
            if (!isFileExist) {
                throw new Error('no such file or directory');
            }
        }
    }, {
        key: 'mkdirSync',
        value: function mkdirSync(dirPath, recursive) {
            // recursive参数没用，BK默认递归创建
            _Log2.default.d(0, 0, 'mkdirSync, dirPath=' + dirPath);
            if (typeof dirPath == 'string') {
                var bkFilePath = (0, _util.wrapSandBoxPath)(dirPath);
                if (BK.FileUtil.isFileExist(bkFilePath)) {
                    throw new Error('mkdirSync:failed, file already exist ${bkFilePath}');
                }

                if (!BK.FileUtil.makeDir(bkFilePath)) {
                    throw new Error('mkdir failed');
                }
            } else {
                throw new Error('mkdirSync:failed, invalid dirPath');
            }
        }
    }, {
        key: 'mkdir',
        value: function mkdir(object) {
            _Log2.default.d(0, 0, 'mkdir, object=' + JSON.stringify(object));
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    // recursive参数没用，BK默认递归创建
                    if (typeof object.dirPath == 'string') {
                        if (BK.FileUtil.makeDir((0, _util.wrapSandBoxPath)(object.dirPath))) {
                            if (object.success) {
                                object.success();
                            }
                        } else {
                            var res = { errMsg: 'mkdir failed' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid dirPath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'mkdir failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'removeSavedFile',
        value: function removeSavedFile(object) {
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    if (typeof object.filePath == 'string') {
                        var bkFilePath = (0, _util.wrapSandBoxPath)(object.filePath);
                        if (BK.FileUtil.isFileExist(bkFilePath)) {
                            if (BK.FileUtil.deleteFile(bkFilePath)) {
                                if (object.success) {
                                    object.success(res);
                                }
                            } else {
                                var res = { errMsg: 'delete failed' };
                                if (object.fail) {
                                    object.fail(res);
                                }
                            }
                        } else {
                            var res = { errMsg: 'file not exist' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid filePath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'removeSavedFile failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'unlink',
        value: function unlink(object) {
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    if (typeof object.filePath == 'string') {
                        var bkFilePath = (0, _util.wrapSandBoxPath)(object.filePath);
                        if (BK.FileUtil.isFileExist(bkFilePath)) {
                            if (BK.FileUtil.deleteFile(bkFilePath)) {
                                if (object.success) {
                                    object.success();
                                }
                            } else {
                                var res = { errMsg: 'fail' };
                                if (object.fail) {
                                    object.fail(res);
                                }
                            }
                        } else {
                            var res = { errMsg: 'file not exist' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid filePath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'unlink failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'unlinkSync',
        value: function unlinkSync(filePath) {
            if (typeof filePath === 'string') {
                var bkFilePath = (0, _util.wrapSandBoxPath)(filePath);
                if (BK.FileUtil.isFileExist(bkFilePath)) {
                    if (BK.FileUtil.deleteFile(bkFilePath)) {} else {
                        // throw new Error('unlinkSync:fail, invalid filePath')
                    }
                } else {
                    throw new Error('unlinkSync:fail, file not exist');
                }
            } else {}
        }
    }, {
        key: 'copyFile',
        value: function copyFile(object) {
            // TODO bk not implement
            //debugger
            var allStorageData = BK.FileUtil.readFile("GameSandBox://" + object.srcPath);
            BK.FileUtil.writeBufferToFile("GameSandBox://" + object.destPath, allStorageData);
            object.success && object.success();
        }
    }, {
        key: 'copyFileSync',
        value: function copyFileSync(srcPath, destPath) {
            // TODO bk not implement
            var allStorageData = BK.FileUtil.readFile("GameSandBox://" + object.srcPath);
            return BK.FileUtil.writeBufferToFile("GameSandBox://" + object.destPath, allStorageData);
        }
    }, {
        key: 'getFileInfo',
        value: function getFileInfo(object) {
            (0, _Timer.setTimeout)(function () {
                //   debugger
                if (object) {
                    if (typeof object.filePath == 'string') {
                        var bkFilePath = (0, _util.wrapLocalUrl)(object.filePath);
                        if (!BK.FileUtil.isFileExist(bkFilePath)) {
                            bkFilePath = (0, _util.wrapSandBoxPath)(object.filePath);
                        }

                        if (BK.FileUtil.isFileExist(bkFilePath) || BK.FileUtil.isFileExist((0, _util.wrapSandBoxPath)(object.filePath))) {
                            var fileInfo = BK.FileUtil.getFileInfo(bkFilePath) || BK.FileUtil.getFileInfo((0, _util.wrapSandBoxPath)(object.filePath));
                            if (fileInfo) {
                                var res = { size: fileInfo.size };
                                if (object.success) {
                                    object.success(res);
                                }
                            } else {
                                var res = { errMsg: 'getFileInfo failed' };
                                if (object.fail) {
                                    object.fail(res);
                                }
                            }
                        } else {
                            var res = { errMsg: 'file not exist' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid filePath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'getFileInfo failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'getSavedFileList',
        value: function getSavedFileList(object) {
            // FIXME
        }
    }, {
        key: 'rmdir',
        value: function rmdir(object) {
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    if (typeof object.dirPath == 'string') {
                        var bkFilePath = (0, _util.wrapSandBoxPath)(object.dirPath);
                        if (BK.FileUtil.deleteFile(bkFilePath)) {
                            if (object.success) {
                                object.success(res);
                            }
                        } else {
                            var res = { errMsg: 'fail' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid dirPath' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'rmdir failed, no object');
                }
            }, 0);
        }
    }, {
        key: 'rmdirSync',
        value: function rmdirSync(dirPath, recursive) {
            if (typeof dirPath == 'string') {
                var bkFilePath = (0, _util.wrapSandBoxPath)(dirPath);
                if (!BK.FileUtil.isFileExist(bkFilePath)) {
                    throw new Error('rmdirSync:fail, no such file or directory ${dirPath}');
                }

                if (!BK.FileUtil.deleteFile(bkFilePath)) {
                    throw new Error('rmdirSync:fail, ${dirPath}');
                }
            } else {
                throw new Error('rmdirSync:fail, invalid dirPath');
            }
        }
    }, {
        key: 'rename',
        value: function rename(object) {
            // TODO bk not implement
            _Log2.default.d(0, 0, 'rename not implement yet');
        }
    }, {
        key: 'renameSync',
        value: function renameSync(oldPath, newPath) {
            // TODO bk not implement
            _Log2.default.d(0, 0, 'renameSync not implement yet');
        }
    }, {
        key: 'readdir',
        value: function readdir(object) {
            if (object) {
                if (typeof object.dirPath == 'string') {
                    var bkFilePath = void 0;
                    if (object.dirPath.indexOf(_Path2.default.SRC_PRE) == 0 || object.dirPath.indexOf(_Path2.default.SAND_PRE) == 0) {
                        bkFilePath = object.dirPath;
                    } else {
                        // 优先找sandbox
                        bkFilePath = (0, _util.wrapSandBoxPath)(object.dirPath);
                        if (!BK.FileUtil.isFileExist(bkFilePath)) {
                            bkFilePath = (0, _util.wrapLocalUrl)(object.dirPath);
                        }
                    }
                    _Log2.default.d(0, 0, 'readdir dirPath=' + object.dirPath + ', bkFilePath=' + bkFilePath);
                    if (BK.FileUtil.isFileExist(bkFilePath)) {
                        BK.FileUtil.getFileList({ path: bkFilePath, needDir: true }, function (code, res) {
                            if (code == 0) {
                                var fileInfo = [];
                                if (res && res.files && res.files.length > 0) {
                                    for (var i = 0; i < res.files.length; i++) {
                                        var fullPathName = res.files[i];
                                        fileInfo[i] = fullPathName.substr(fullPathName.lastIndexOf('/') + 1);
                                    }
                                }
                                if (object.success) {
                                    object.success({ files: fileInfo });
                                }
                            } else {
                                if (object.fail) {
                                    object.fail({ errMsg: 'get fileList failed, code:${code}' });
                                }
                            }
                            if (object.complete) {
                                object.complete();
                            }
                        });
                    } else {
                        _Log2.default.d(0, 0, 'readdir bkFilePath=' + bkFilePath + ', not exist');
                    }
                } else {
                    if (object.fail) {
                        object.fail({ errMsg: 'invalid dirPath' });
                    }
                    if (object.complete) {
                        object.complete();
                    }
                }
            } else {
                _Log2.default.d(0, 0, 'readdir failed, no object');
            }
        }
    }, {
        key: 'readdirSync',
        value: function readdirSync(dirPath) {
            if (typeof dirPath == 'string') {
                var bkFilePath = void 0;
                if (dirPath.indexOf(_Path2.default.SRC_PRE) == 0 || dirPath.indexOf(_Path2.default.SAND_PRE) == 0) {
                    bkFilePath = dirPath;
                } else {
                    // 优先找sandbox
                    bkFilePath = (0, _util.wrapSandBoxPath)(dirPath);
                    if (!BK.FileUtil.isFileExist(bkFilePath)) {
                        bkFilePath = (0, _util.wrapLocalUrl)(dirPath);
                    }
                }
                _Log2.default.d(0, 0, 'readdirSync dirPath=' + dirPath + ', bkFilePath=' + bkFilePath);

                var fileList = [];
                if (BK.FileUtil.isFileExist(bkFilePath)) {
                    BK.FileUtil.getFileList({ path: bkFilePath, needDir: true }, function (code, res) {
                        _Log2.default.d(0, 0, 'readdirSync bkFilePath=' + bkFilePath + ', code=' + code);
                        if (code == 0) {
                            if (res && res.files && res.files.length > 0) {
                                for (var i = 0; i < res.files.length; i++) {
                                    var fullPathName = res.files[i];
                                    fileList[i] = fullPathName.substr(fullPathName.lastIndexOf('/') + 1);
                                }
                            }
                        }
                    });
                } else {
                    _Log2.default.d(0, 0, 'readdirSync bkFilePath=' + bkFilePath + ', not exist');
                }
                return fileList;
            } else {
                throw new Error('readdirSync failed, invalid dirPath');
            }
        }
    }, {
        key: 'saveFile',
        value: function saveFile(object) {
            // TODO bk not implement
            _Log2.default.d(0, 0, 'saveFile not implement yet');
        }
    }, {
        key: 'saveFileSync',
        value: function saveFileSync(tempFilePath, filePath) {
            // TODO bk not implement
            _Log2.default.d(0, 0, 'saveFileSync not implement yet');
        }
    }, {
        key: 'stat',
        value: function stat(object) {
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    if (typeof object.path == 'string') {
                        var bkFilePath = (0, _util.wrapLocalUrl)(object.path);
                        if (!BK.FileUtil.isFileExist(bkFilePath)) {
                            bkFilePath = (0, _util.wrapSandBoxPath)(object.path);
                        }

                        if (BK.FileUtil.isFileExist(bkFilePath)) {
                            var fileInfo = BK.FileUtil.getFileInfo(bkFilePath);
                            if (fileInfo) {
                                var stat = new Stats(object.path, 0, fileInfo.size, fileInfo.atime, fileInfo.mtime);
                                var res = { stat: stat };
                                if (object.success) {
                                    object.success(res);
                                }
                            } else {
                                var res = { errMsg: 'get file info failed' };
                                if (object.fail) {
                                    object.fail(res);
                                }
                            }
                        } else {
                            var res = { errMsg: 'file not exist' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'no path' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'stat failed, no param');
                }
            }, 0);
        }
    }, {
        key: 'statSync',
        value: function statSync(path) {
            if (typeof path == 'string') {
                var bkFilePath = (0, _util.wrapLocalUrl)(path);
                if (!BK.FileUtil.isFileExist(bkFilePath)) {
                    bkFilePath = (0, _util.wrapSandBoxPath)(path);
                }

                if (BK.FileUtil.isFileExist(bkFilePath)) {
                    var fileInfo = BK.FileUtil.getFileInfo(bkFilePath);
                    if (fileInfo) {
                        var stat = new Stats(path, 0, fileInfo.size, fileInfo.atime, fileInfo.mtime);
                        return stat;
                    }
                } else {
                    _Log2.default.d(0, 0, 'statSync failed, file not exist, file:' + bkFilePath);
                }
            }
        }
    }, {
        key: 'unzip',
        value: function unzip(object) {
            (0, _Timer.setTimeout)(function () {
                if (object) {
                    if (typeof object.zipFilePath == 'string' && typeof object.targetPath == 'string') {
                        if (BK.FileUtil.unzip(object.zipFilePath, object.targetPath)) {
                            if (object.success) {
                                object.success();
                            }
                        } else {
                            var res = { errMsg: 'unzip failed' };
                            if (object.fail) {
                                object.fail(res);
                            }
                        }
                    } else {
                        var res = { errMsg: 'invalid path' };
                        if (object.fail) {
                            object.fail(res);
                        }
                    }

                    if (object.complete) {
                        object.complete();
                    }
                } else {
                    _Log2.default.d(0, 0, 'unzip failed, no object');
                }
            }, 0);
        }
    }]);

    return FileSystemManager;
}();

exports.default = FileSystemManager;

var Stats = exports.Stats = function () {
    function Stats(path, mode, size, lastAccessedTime, lastModifiedTime) {
        _classCallCheck(this, Stats);

        this.path = path;
        this.mode = mode;
        this.size = size;
        this.lastAccessedTime = lastAccessedTime;
        this.lastModifiedTime = lastModifiedTime;
        this.isDir = BK.FileUtil.isDirectory(path);
    }

    _createClass(Stats, [{
        key: 'isFile',
        value: function isFile() {
            return !this.isDir;
        }
    }, {
        key: 'isDirectory',
        value: function isDirectory() {
            return this.isDir;
        }
    }]);

    return Stats;
}();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(3);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Http = function () {
    function Http(object) {
        _classCallCheck(this, Http);

        //   BK.Script.log(1,0,"request: "+JSON.stringify(object));

        this.url = object.url;
        this.data = object.data || "";
        this.header = object.header || {};
        this.dataType = object.dataType || object.responseType || "json";
        this.success = object.success || function () {};
        this.fail = object.fail || function () {};
        this.complete = object.complete || function () {};
        this.method = object.method || "get";
        this.object = object;
    }

    _createClass(Http, [{
        key: "request",
        value: function request() {
            var http = new BK.HttpUtil(this.url);
            console.log("bk request:", this.object);
            var method = "get";
            switch (this.method) {
                case "POST":
                    method = "post";
                    console.log("this.data", this.data);
                    http.setHttpPostData(this.data);
                    break;
                case "GET":
                    break;
                default:
                    break;
            }
            if (this.header) {
                for (var _j in this.header) {
                    http.setHttpHeader(_j, this.header[_j]);
                }
            }
            http.setHttpMethod(method);
            for (var j in this.header) {
                http.setHttpHeader(j, this.header[j]);
            }
            var that = this;
            http.requestAsync(function (res, code) {
                var length = res.bufferLength();
                //BK.Script.log(1,0,"requestAsync: "+length);

                console.log("bk Http request : " + code + " # " + that.dataType);
                if (code != 200) {
                    // BK.Script.log(1,0,"requestAsync fail: "+code);
                    console.log("request fail:", code, method, length, res.readStringBuffer(), that.object);
                    that.fail({ errMsg: " ", statusCode: code, header: {} });
                } else {
                    var content = undefined;
                    if (that.dataType != "arraybuffer") {
                        content = res.readAsString(true);
                    } else {
                        content = that.bricksBufferToArrayBuffer(res);
                    }
                    if (that.dataType == "json") try {
                        content = JSON.parse(content);
                    } catch (err) {
                        content = content;
                    }

                    //  console.log("bk Http request : "+res+" # "+JSON.stringify(content)+" # "+that.dataType+" "+that.success)
                    that.success({ data: content, statusCode: code, header: {} });
                    if (that.complete) {
                        that.complete({ data: content, statusCode: code, header: {} });
                    }
                }
            });
        }
    }, {
        key: "ab2str",
        value: function ab2str(buf) {
            return String.fromCharCode.apply(null, new Uint16Array(buf));
        }
    }, {
        key: "bricksBufferToArrayBuffer",
        value: function bricksBufferToArrayBuffer(bricksBuffer) {
            var arrayBuffer = new ArrayBuffer(bricksBuffer.bufferLength());
            var uint8Array = new Uint8Array(arrayBuffer);
            var pointer = 0;
            while (pointer < bricksBuffer.bufferLength()) {
                uint8Array[pointer++] = bricksBuffer.readUint8Buffer();
            }
            // bricksBuffer.releaseBuffer();
            return arrayBuffer;
        }
    }, {
        key: "uploadFile",
        value: function uploadFile() {
            var filePath = util.wrapSandBoxPath(this.object.filePath || "");
            var boundary = "a401103119";
            var contentType = "multipart/form-data; boundary=" + boundary;
            var formData = this.object.formData || {};
            var header = this.header || {};
            header["Content-Type"] = contentType;
            var encodingData = "";
            for (var i in formData) {
                encodingData += "--";
                encodingData += boundary;
                encodingData += "\r\n";
                encodingData += "Content-Disposition: form-data; name=\"";
                encodingData += i;
                encodingData += "\"\r\n\r\n";
                encodingData += formData[i];
                encodingData += "\r\n";
            }
            var buffer = BK.FileUtil.readFile(filePath);
            //var fileContent = buffer.readStringBuffer(buffer.bufferLength())
            encodingData += "--";
            encodingData += boundary;
            encodingData += "\r\n";
            encodingData += "Content-Disposition: form-data; name=\"";
            encodingData += i;
            encodingData += "\"; filename=\"";
            encodingData += this.object.name;
            encodingData += "\"\r\n";
            encodingData += "Content-Type: application/octet-stream\r\n\r\n";
            //encodingData+=fileContent;
            var end = "";
            end += "\r\n";
            end += "--";
            end += boundary;
            end += "--\r\n";
            var bodyBuffer = new BK.Buffer(buffer.bufferLength() + encodingData.length + end.length + 3 + 3);
            bodyBuffer.writeStringBuffer(encodingData);
            bodyBuffer.writeBuffer(buffer);
            bodyBuffer.writeStringBuffer(end);
            //BK.Script.log(0, 0, bodyBuffer.readUint16Buffer());

            //   BK.Script.log(1,0,"uploadFile package"+encodingData);
            //        for(var j=0;j<buffer.bufferLength();j++){
            //            var c =String.fromCharCode(buffer.readUint8Buffer());
            //            BK.Script.log(1,0,"fromCharCode"+c)
            //            encodingData+=c;
            //
            //        }
            //        encodingData+=end
            var http = new BK.HttpUtil(this.url);
            http.setHttpMethod("post");
            for (var j in header) {
                //   BK.Script.log(1,0,"headers "+j+header[j])
                http.setHttpHeader(j, header[j]);
            }
            var that = this;
            http.setBodyCompatible(false);
            http.setHttpRawBody(bodyBuffer);
            //        http.setHttpPostData(encodingData)
            http.requestAsync(function (res, code) {
                var length = res.bufferLength();
                //BK.Script.log(1,0,"requestAsync: "+length);

                if (code != 200) {
                    BK.Script.log(1, 0, "requestAsync fail: " + code);

                    that.fail({ data: "", statusCode: code, header: {} });
                } else {
                    BK.Script.log(1, 0, "requestAsync success: " + that.success);

                    that.success({ data: res.readBuffer(length), statusCode: code, header: {} });
                }
            });
        }
    }, {
        key: "downloadFile",
        value: function downloadFile() {
            var filepath = this.object.filePath || util.extractFilePathFromUrl(this.url);
            this.relpath = filepath;
            var filePath = util.wrapSandBoxPath(filepath);
            var fileName = util.extractFileNameFromUrl(this.url);
            BK.Script.log(1, 0, "downloadFile " + filePath + fileName);
            var http = new BK.HttpUtil(this.url);
            for (var j in this.header) {
                http.setHttpHeader(j, header[j]);
            }
            http.setHttpMethod("get");
            var that = this;
            http.requestAsync(function (res, code) {
                var length = res.bufferLength();
                BK.Script.log(1, 0, BK.FileUtil.isFileExist(filePath + fileName));

                //BK.Script.log(1,0,"requestAsync: "+length);

                if (code != 200) {
                    BK.Script.log(1, 0, "requestAsync fail: " + code);

                    that.fail({ data: "", statusCode: code, header: {} });
                } else {
                    // BK.Script.log(1,0,"requestAsync success: "+that.success);

                    var path = filePath.indexOf(fileName) != -1 ? filePath : filePath + fileName;
                    var ret = BK.FileUtil.writeBufferToFile(path, res);
                    if (!ret) {
                        BK.Script.log(1, 0, "write download file failed");
                    }
                    var temfilepath = that.relpath.indexOf(fileName) != -1 ? that.relpath : that.relpath + fileName;
                    BK.Script.log(1, 0, "write download file " + temfilepath + " " + BK.FileUtil.isFileExist(path));

                    that.success({ tempFilePath: temfilepath, statusCode: code, header: {} });
                }
            });
        }
    }]);

    return Http;
}();

exports.default = Http;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Timer = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * WebSocket实现，管理类
 */
var S_TOTAL_CONNECTION = 5;
var CONNECTION_MAP = new Map();
var S_CURRENT_CON_NUM = 0;
var CONNECTION_ID = 0;

/**
 * webSocket具体实现，对齐SocketTask
 */

var WebSocket = function () {
    function WebSocket(config) {
        _classCallCheck(this, WebSocket);

        var url = config.url;
        this.socket = new BK.WebSocket(url);
        this.id = ++CONNECTION_ID;
        var that = this;
        this.WEB_SOCKET_EVENT_MAP = [];
        this.socket.onOpen = function (socket) {
            that.onEvent(WebSocketManager.SOCK_EVENT_OPEN, socket);
        };
        this.socket.onError = function (socket) {
            that.onEvent(WebSocketManager.SOCK_EVENT_ERROR, socket);
        };
        this.socket.onClose = function (socket) {
            that.onEvent(WebSocketManager.SOCK_EVENT_CLOSE, socket);
        };
        this.socket.onMessage = function (socket, data) {
            var result = "";
            if (!data.isBinary) {
                result = data.data.readAsString();
            } else {
                result = that.bricksBufferToArrayBuffer(data.data);
            }
            that.onEvent(WebSocketManager.SOCK_EVENT_MESSAGE, that.socket, { data: result });
        };
    }

    _createClass(WebSocket, [{
        key: "bricksBufferToArrayBuffer",
        value: function bricksBufferToArrayBuffer(bricksBuffer) {
            var arrayBuffer = new ArrayBuffer(bricksBuffer.bufferLength());
            var uint8Array = new Uint8Array(arrayBuffer);
            var pointer = 0;
            while (pointer < bricksBuffer.bufferLength()) {
                uint8Array[pointer++] = bricksBuffer.readUint8Buffer();
            }
            return arrayBuffer;
        }
    }, {
        key: "onOpen",
        value: function onOpen(callback) {
            this.publishEvent(WebSocketManager.SOCK_EVENT_OPEN, callback);
        }
    }, {
        key: "onClose",
        value: function onClose(callback) {
            this.publishEvent(WebSocketManager.SOCK_EVENT_CLOSE, callback);
        }
    }, {
        key: "onMessage",
        value: function onMessage(callback) {
            this.publishEvent(WebSocketManager.SOCK_EVENT_MESSAGE, callback);
        }
    }, {
        key: "onError",
        value: function onError(callback) {
            this.publishEvent(WebSocketManager.SOCK_EVENT_ERROR, callback);
        }
    }, {
        key: "arrayBufferToBricksBuffer",
        value: function arrayBufferToBricksBuffer(arrayBuffer) {
            var bricksBuffer = new BK.Buffer(arrayBuffer.byteLength);
            var uint8Array = new Uint8Array(arrayBuffer);
            var pointer = 0;
            while (pointer < arrayBuffer.byteLength) {
                bricksBuffer.writeUint8Buffer(uint8Array[pointer++]);
            }
            return bricksBuffer;
        }
    }, {
        key: "send",
        value: function send(data) {

            var realData = data;
            var success = data.success;
            var fail = data.fail;
            var complete = data.complete;
            if (data) {
                if (data.data instanceof ArrayBuffer) {
                    realData = this.arrayBufferToBricksBuffer(data.data);
                } else {
                    if (data.data) {
                        realData = data.data;
                    }
                }
            }
            if (success) {
                success(this);
            }
            if (complete) {
                complete(this);
            }

            return this.socket.send(realData);
        }
    }, {
        key: "close",
        value: function close(data) {
            var success = data.success;
            var fail = data.fail;
            var complete = data.complete;
            if (success) {
                success(this);
            }
            if (complete) {
                complete(this);
            }
            return this.socket.close.apply(this);
        }
    }, {
        key: "connect",
        value: function connect() {
            this.socket.connect();
        }
    }, {
        key: "onEvent",
        value: function onEvent(event, socket, data) {
            var callback = this.WEB_SOCKET_EVENT_MAP[event];
            if (typeof callback === 'function') {
                callback(data);
            }
        }
    }, {
        key: "publishEvent",
        value: function publishEvent(event, callback) {
            this.WEB_SOCKET_EVENT_MAP[event] = callback;
        }
    }]);

    return WebSocket;
}();

//------------websocket管理-------------

var WEB_SOCKET_EVENT_MAP = [];
var SOCK_EVENT_OPEN = "OPEN";
var SOCK_EVENT_ERROR = "ERROR";
var SOCK_EVENT_MESSAGE = "MESSAGE";
var SOCK_EVENT_CLOSE = "CLOSE";

var WebSocketManager = function () {
    function WebSocketManager() {
        _classCallCheck(this, WebSocketManager);
    }

    _createClass(WebSocketManager, null, [{
        key: "onEvent",
        value: function onEvent(event, para, data) {

            var callback = WEB_SOCKET_EVENT_MAP[event];
            if (typeof callback === 'function') {

                callback(para, data);
            }
        }
    }, {
        key: "publishEvent",
        value: function publishEvent(event, callback) {
            WEB_SOCKET_EVENT_MAP[event] = callback;
        }

        /**
         * 创建新的socket连接
         * @param config
         */

    }, {
        key: "newConnection",
        value: function newConnection(config) {

            var successFunc = config.success ? config.success : function () {};
            var failFunc = config.fail ? config.fail : function () {};
            var completeFunc = config.complete ? config.complete : function () {};

            var realConn = null;
            var url = config.url;
            if (S_CURRENT_CON_NUM >= S_TOTAL_CONNECTION) {
                failFunc("Reach max request num");
            } else {
                if (!CONNECTION_MAP) {
                    CONNECTION_MAP = new Map();
                }
                var conn = undefined;
                if (conn) {} else {
                    realConn = new WebSocket(config);
                    if (realConn) {
                        CONNECTION_MAP.set(url, realConn);
                        S_CURRENT_CON_NUM++;
                        successFunc();
                    } else {
                        failFunc("Open fail for null");
                    }
                }
                completeFunc();
                return realConn;
            }
        }
    }, {
        key: "closeSocket",
        value: function closeSocket(para) {
            var successFunc = para.success ? para.success : function () {};
            var failFunc = para.fail ? para.fail : function () {};
            var completeFunc = para.complete ? para.complete : function () {};

            if (!CONNECTION_MAP) {
                failFunc("No request");
            }
            CONNECTION_MAP.forEach(function (val, index) {
                if (val instanceof WebSocket) {
                    val.close();
                }
            });

            successFunc();
            completeFunc();
        }

        /**
         * 暂不处理多个连接
         * @param data
         */

    }, {
        key: "sendMessage",
        value: function sendMessage(data) {
            var successFunc = data.success ? data.success : function () {};
            var failFunc = data.fail ? data.fail : function () {};
            var completeFunc = data.complete ? data.complete : function () {};

            if (!CONNECTION_MAP) {
                failFunc("No request");
            }

            CONNECTION_MAP.forEach(function (val, index) {
                if (val instanceof WebSocket) {
                    val.send(data.data);
                }
            });
            successFunc();
            completeFunc();
        }
    }]);

    return WebSocketManager;
}();

exports.default = WebSocketManager;


WebSocketManager.SOCK_EVENT_OPEN = SOCK_EVENT_OPEN;
WebSocketManager.SOCK_EVENT_ERROR = SOCK_EVENT_ERROR;
WebSocketManager.SOCK_EVENT_MESSAGE = SOCK_EVENT_MESSAGE;
WebSocketManager.SOCK_EVENT_CLOSE = SOCK_EVENT_CLOSE;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BTNCLICK_NOTSET = 10001;
var TEXTCHANGE_NOTSET = 10002;

var KeyBoard = function () {
    function KeyBoard() {
        _classCallCheck(this, KeyBoard);

        this.onBtnClick = function () {};
        this.onTextChange = function () {};
    }

    _createClass(KeyBoard, [{
        key: "showKeyboard",
        value: function showKeyboard(object) {
            var that = this;
            BK.Editor.showKeyBoard(function (value) {
                var res = {};
                res.value = value;
                that.onBtnClick(res);
            }, function (value) {
                var res = {};
                res.value = value;
                that.onTextChange(res);
            });
        }
    }, {
        key: "hideKeyboard",
        value: function hideKeyboard(object) {
            BK.Editor.hideKeyBoard();
        }
    }, {
        key: "onKeyboardInput",
        value: function onKeyboardInput(callback) {
            this.onTextChange = callback;
        }
    }, {
        key: "onKeyboardConfirm",
        value: function onKeyboardConfirm(callback) {
            this.onBtnClick = callback;
        }
    }, {
        key: "onKeyboardComplete",
        value: function onKeyboardComplete(callback) {
            this.onBtnClick = callback;
        }
    }, {
        key: "offKeyboardInput",
        value: function offKeyboardInput(callback) {
            this.onTextChange = function () {};
        }
    }, {
        key: "offKeyboardConfirm",
        value: function offKeyboardConfirm(callback) {
            this.onBtnClick = function () {};
        }
    }, {
        key: "offKeyboardComplete",
        value: function offKeyboardComplete(callback) {
            this.onBtnClick = function () {};
        }
    }]);

    return KeyBoard;
}();

exports.default = KeyBoard;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.code2accessToken = code2accessToken;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Login = function () {
    function Login() {
        _classCallCheck(this, Login);
    }

    _createClass(Login, [{
        key: "checkSession",
        value: function checkSession(object) {
            BK.Script.log(0, 0, "checkSession not implement yet");
            return true;
        }
    }, {
        key: "login",
        value: function login(object) {
            if (object) {
                BK.QQ.fetchOpenKey(function (errCode, cmd, data) {
                    if (errCode == 0 && data && data.openKey) {
                        // TODO remove code
                        if (object.success) {
                            var result = { code: "011tWTqk2qizXE0yQsrk2Vqzqk2tWTqq", openid: GameStatusInfo.openId, openkey: data.openKey };
                            object.success(result);
                        }
                    } else {
                        BK.Script.log(0, 0, "fetchOpenKey failed: errCode=" + errCode);
                        if (object.fail) {
                            object.fail();
                        }
                    }
                    if (object.complete) {
                        object.complete();
                    }
                });
            }
        }
    }]);

    return Login;
}();

exports.default = Login;
function code2accessToken() {
    BK.Script.log(0, 0, "code2accessToken failed: not implement yet");
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Share = function () {
    function Share() {
        _classCallCheck(this, Share);
    }

    _createClass(Share, [{
        key: "getShareInfo",
        value: function getShareInfo(object) {
            // TODO 转发群组后，如果showShareMenu里withShareTicket为true，在onShareAppMessage return的回调函数里会带上shareTicket
            // 此接口拿 shareTicket去换转发信息加密数据，暂时无法实现
        }
    }, {
        key: "hideShareMenu",
        value: function hideShareMenu(object) {
            // TODO 微信用于控制右上角三个点之下的转发菜单
            // 待实现
            if (object) {
                if (object.success) {
                    object.success();
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: "onShareAppMessage",
        value: function onShareAppMessage(callback) {
            this.shareCallback = callback;
        }
    }, {
        key: "offShareAppMessage",
        value: function offShareAppMessage(callback) {
            this.shareCallback = undefined;
        }
    }, {
        key: "showShareMenu",
        value: function showShareMenu(object) {
            // TODO 微信用于控制右上角三个点之下的转发菜单
            // 待实现
            if (object) {
                if (object.success) {
                    object.success();
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: "shareAppMessage",
        value: function shareAppMessage(object) {
            var summary = void 0;
            var picUrl = void 0;
            if (object) {
                if (object.title) {
                    summary = object.title;
                }
                if (object.imageUrl) {
                    picUrl = object.imageUrl;
                }
            }

            if (summary && picUrl) {
                var shareInfo = {
                    summary: summary, //QQ聊天消息标题
                    picUrl: picUrl, //QQ聊天消息图片
                    extendInfo: object.query, //QQ聊天消息扩展字段
                    localPicPath: "" //分享至空间、微信、朋友圈时需要的图。（选填，若无该字段，系统使用游戏对应的二维码）
                };
                BK.QQ.share(shareInfo, function (retCode, shareDest, isFirstShare) {
                    BK.Script.log(1, 1, "retCode:" + retCode + " shareDest:" + shareDest + " isFirstShare:" + isFirstShare);
                    var result = {
                        "errMsg": "shareAppMessage:ok",
                        shareTickets: [1]
                    };
                    if (retCode === 0) {
                        if (shareDest === 0 /* QQ */) {
                                BK.Script.log(1, 1, "成功分享至QQ");
                                result.shareTickets.push(1);
                            } else if (shareDest === 1 /* QZone */) {
                                BK.Script.log(1, 1, "成功分享至空间");
                            } else if (shareDest === 2 /* WX */) {
                                BK.Script.log(1, 1, "成功分享至微信");
                            } else if (shareDest === 3 /* WXCircle */) {
                                BK.Script.log(1, 1, "成功分享至朋友圈");
                            }
                        if (object && object.success) {
                            object.success(result);
                        }
                    } else if (retCode === 1) {
                        BK.Script.log(1, 1, "分享失败" + retCode);
                        if (object && object.fail) {
                            object.fail(result);
                        }
                    } else if (retCode === 2) {
                        BK.Script.log(1, 1, "分享失败，用户取消分享：" + retCode);
                        if (object && object.fail) {
                            object.fail(result);
                        }
                    }
                    if (object && object.complete) {
                        object.complete(result);
                    }
                });
            } else {
                if (object && object.fail) {
                    object.fail();
                }
            }

            if (object && object.complete) {
                object.complete();
            }
        }
    }, {
        key: "updateShareMenu",
        value: function updateShareMenu(object) {
            // TODO 微信用于控制右上角三个点之下的转发菜单
            // 待实现
            if (object) {
                if (object.success) {
                    object.success();
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }]);

    return Share;
}();

exports.default = Share;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GameClubButton = exports.UserGameData = exports.KVData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.removeUserStorage = removeUserStorage;
exports.setUserStorage = setUserStorage;

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KVData = exports.KVData = function KVData(key, value) {
    _classCallCheck(this, KVData);

    this.key = key;
    this.value = value;
};

var UserGameData = exports.UserGameData = function UserGameData(avatarUrl, nickname, openid, KVDataList) {
    _classCallCheck(this, UserGameData);

    this.avatarUrl = avatarUrl;
    this.nickname = nickname;
    this.openid = openid;
    this.KVDataList = KVDataList;
};

function removeUserStorage(access_token, openid, appid, signature, sig_method, key) {
    _Log2.default.d(0, 0, 'removeUserStorage failed, not implement yet');
}

function setUserStorage(access_token, openid, appid, signature, sig_method, kv_list) {
    _Log2.default.d(0, 0, 'setUserStorage failed, not implement yet');
}

var GameClubButton = exports.GameClubButton = function () {
    function GameClubButton(left, top, width, height) {
        _classCallCheck(this, GameClubButton);

        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    }

    _createClass(GameClubButton, [{
        key: 'show',
        value: function show() {
            _Log2.default.d(0, 0, 'GameClubButton: show failed, not implement yet');
        }
    }, {
        key: 'hide',
        value: function hide() {
            _Log2.default.d(0, 0, 'GameClubButton: hide failed, not implement yet');
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _Log2.default.d(0, 0, 'GameClubButton: destroy failed, not implement yet');
        }
    }]);

    return GameClubButton;
}();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInfoButton = exports.UserInfo = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserInfo = exports.UserInfo = function UserInfo(language, nickName, avatarUrl) {
    _classCallCheck(this, UserInfo);

    this.language = language;
    this.nickName = nickName;
    this.avatarUrl = avatarUrl;
};

var UserInfoButton = exports.UserInfoButton = function () {
    function UserInfoButton(text, image, style) {
        _classCallCheck(this, UserInfoButton);

        this.text = text;
        this.image = image;
        this.style = style;
    }

    _createClass(UserInfoButton, [{
        key: 'show',
        value: function show() {
            _Log2.default.d(0, 0, 'UserInfoButton: show failed, not implement yet');
        }
    }, {
        key: 'hide',
        value: function hide() {
            _Log2.default.d(0, 0, 'UserInfoButton: hide failed, not implement yet');
        }
    }, {
        key: 'onTap',
        value: function onTap(callback) {
            _Log2.default.d(0, 0, 'UserInfoButton: onTap failed, not implement yet');
        }
    }, {
        key: 'offTap',
        value: function offTap(callback) {
            _Log2.default.d(0, 0, 'UserInfoButton: offTap failed, not implement yet');
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _Log2.default.d(0, 0, 'UserInfoButton: destroy failed, not implement yet');
        }
    }]);

    return UserInfoButton;
}();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OpenSettingButton = exports.AuthSetting = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthSetting = exports.AuthSetting = function AuthSetting(key, value) {
    _classCallCheck(this, AuthSetting);

    this.key = key;
    this.value = value;
};

var OpenSettingButton = exports.OpenSettingButton = function () {
    function OpenSettingButton(text, image, style) {
        _classCallCheck(this, OpenSettingButton);

        this.text = text;
        this.image = image;
        this.style = style;
    }

    _createClass(OpenSettingButton, [{
        key: 'show',
        value: function show() {
            _Log2.default.d(0, 0, 'OpenSettingButton: show failed, not implement yet');
        }
    }, {
        key: 'hide',
        value: function hide() {
            _Log2.default.d(0, 0, 'OpenSettingButton: hide failed, not implement yet');
        }
    }, {
        key: 'onTap',
        value: function onTap(callback) {
            _Log2.default.d(0, 0, 'OpenSettingButton: onTap failed, not implement yet');
        }
    }, {
        key: 'offTap',
        value: function offTap(callback) {
            _Log2.default.d(0, 0, 'OpenSettingButton: offTap failed, not implement yet');
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            _Log2.default.d(0, 0, 'OpenSettingButton: destroy failed, not implement yet');
        }
    }]);

    return OpenSettingButton;
}();

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenDataContext = function () {
    function OpenDataContext(canvas) {
        _classCallCheck(this, OpenDataContext);

        this.canvas = canvas;
    }

    _createClass(OpenDataContext, [{
        key: 'postMessage',
        value: function postMessage(message) {
            _Log2.default.d(0, 0, 'OpenDataContext: postMessage, message=' + JSON.stringify(message));
            wx.postMessage(message);
        }
    }]);

    return OpenDataContext;
}();

exports.default = OpenDataContext;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RewardedVideoAd = exports.BannerAd = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BannerAd = exports.BannerAd = function () {
    function BannerAd(adUnitId, style) {
        _classCallCheck(this, BannerAd);

        this.adUnitId = adUnitId;
        this.style = style;
    }

    _createClass(BannerAd, [{
        key: 'show',
        value: function show() {
            if (this.adBannerHandle) {
                this.adBannerHandle.close();
            }

            var that = this;
            var promise = new Promise(function (resolve, reject) {
                BK.Advertisement.fetchBannerAd(function (retCode, msg, adBannerHandle) {
                    if (retCode == 0) {
                        adBannerHandle.show(function (succCode, msg, handle) {
                            if (succCode == 0) {
                                if (that.onLoadCallback) {
                                    that.onLoadCallback();
                                }
                                resolve();
                                // 不要在这里增加代码，否则可能收获一份惊喜
                            } else {
                                if (that.onErrorCallback) {
                                    that.onErrorCallback();
                                }
                                _Log2.default.d(0, 0, 'fetchBannerAd failed, msg=' + msg);
                                reject(msg);
                            }
                        });
                        adBannerHandle.onClickContent(function () {
                            if (that.onClickCallback) {
                                that.onClickCallback();
                            }
                        });
                        adBannerHandle.onClickClose(function () {
                            if (that.onClickCloseCallback) {
                                that.onClickCloseCallback();
                            }
                        });

                        that.adBannerHandle = adBannerHandle;
                    } else {
                        if (that.onErrorCallback) {
                            that.onErrorCallback();
                        }

                        _Log2.default.d(0, 0, 'fetchBannerAd failed, msg=' + msg);
                        reject(msg);
                    }
                });
            });
            return promise;
        }
    }, {
        key: 'hide',
        value: function hide() {
            if (this.adBannerHandle) {
                this.adBannerHandle.close();
            }
        }
    }, {
        key: 'onResize',
        value: function onResize(callback) {
            _Log2.default.d(0, 0, 'BannerAd: onResize, not implement yet');
        }
    }, {
        key: 'offResize',
        value: function offResize(callback) {
            _Log2.default.d(0, 0, 'BannerAd: offResize, not implement yet');
        }
    }, {
        key: 'onLoad',
        value: function onLoad(callback) {
            this.onLoadCallback = callback;
        }
    }, {
        key: 'offLoad',
        value: function offLoad(callback) {
            this.onLoadCallback = undefined;
        }
    }, {
        key: 'onError',
        value: function onError(callback) {
            this.onErrorCallback = callback;
        }
    }, {
        key: 'offError',
        value: function offError(callback) {
            this.onErrorCallback = undefined;
        }

        // bk增加

    }, {
        key: 'onClickContent',
        value: function onClickContent(callback) {
            this.onClickCallback = callback;
        }

        // bk增加

    }, {
        key: 'offClickContent',
        value: function offClickContent(callback) {
            this.onClickCallback = undefined;
        }

        // bk增加

    }, {
        key: 'onClickClose',
        value: function onClickClose(callback) {
            this.onClickCloseCallback = callback;
        }

        // bk增加

    }, {
        key: 'offClickClose',
        value: function offClickClose(callback) {
            this.onClickCloseCallback = undefined;
        }
    }, {
        key: 'destroy',
        value: function destroy() {}
    }]);

    return BannerAd;
}();

var RewardedVideoAd = exports.RewardedVideoAd = function () {
    function RewardedVideoAd(adUnitId, style, videoType) {
        _classCallCheck(this, RewardedVideoAd);

        this.adUnitId = adUnitId;
        this.style = style;
        this.videoType = videoType; // bk, 激励视频广告场景 0.游戏页面挂件广告 1.游戏结算页广告 2.游戏任务广告  3.游戏复活广告
    }

    _createClass(RewardedVideoAd, [{
        key: 'show',
        value: function show() {
            if (this.videoType === undefined) {
                this.videoType = 3;
            }
            var that = this;
            var promise = new Promise(function (resolve, reject) {
                BK.Advertisement.fetchVideoAd(that.videoType, function (retCode, msg, handle) {
                    _Log2.default.d(0, 0, "masonc, fetchVideoAd success, retCode=" + retCode + ", msg=" + msg + ", handle=" + handle);
                    if (retCode == 0 && handle) {
                        handle.setEventCallack(function (code, msg) {
                            // 看游戏需求来扩展callback
                        }, function (code, msg) {
                            // 看游戏需求来扩展callback
                            if (that.onCloseCallback) {
                                that.onCloseCallback({
                                    isEnded: true
                                });
                            }
                        }, function (code, msg) {
                            if (that.onCloseCallback) {
                                that.onCloseCallback({
                                    isEnded: false
                                });
                            }
                        }, function (code, msg) {
                            // 看游戏需求来扩展callback
                        });
                        if (that.onLoadCallback) {
                            that.onLoadCallback();
                        }
                        handle.jump();
                        resolve();
                    } else {
                        if (that.onErrorCallback) {
                            that.onErrorCallback();
                        }
                        reject(msg);
                    }
                });
            });
            return promise;
        }
    }, {
        key: 'load',
        value: function load() {
            // 此方法微信文档标明为隐藏广告，比较奇怪，但不支持
            _Log2.default.d(0, 0, 'RewardedVideoAd, load, not implement yet');
        }
    }, {
        key: 'onClose',
        value: function onClose(callback) {
            this.onCloseCallback = callback;
        }
    }, {
        key: 'offClose',
        value: function offClose(callback) {
            this.onCloseCallback = undefined;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(callback) {
            this.onLoadCallback = callback;
        }
    }, {
        key: 'offLoad',
        value: function offLoad(callback) {
            this.onLoadCallback = undefined;
        }
    }, {
        key: 'onError',
        value: function onError(callback) {
            this.onErrorCallback = callback;
        }
    }, {
        key: 'offError',
        value: function offError(callback) {
            this.onErrorCallback = undefined;
        }
    }]);

    return RewardedVideoAd;
}();

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.midasCancelPay = midasCancelPay;
exports.midasGetBalance = midasGetBalance;
exports.midasPay = midasPay;
exports.midasPresent = midasPresent;

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pay = function () {
    function Pay() {
        _classCallCheck(this, Pay);
    }

    _createClass(Pay, [{
        key: 'requestMidasPayment',
        value: function requestMidasPayment(object) {
            _Log2.default.d(0, 0, 'requestMidasPayment failed, see bk interface');
        }
    }]);

    return Pay;
}();

exports.default = Pay;
function midasCancelPay(object) {
    _Log2.default.d(0, 0, 'midasCancelPay failed, see bk interface');
}

function midasGetBalance(object) {
    _Log2.default.d(0, 0, 'midasGetBalance failed, see bk interface');
}

function midasPay(object) {
    _Log2.default.d(0, 0, 'midasPay failed, see bk interface');
}

function midasPresent(object) {
    _Log2.default.d(0, 0, 'midasPresent failed, see bk interface');
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STORAGE_PATH = 'GameSandBox://localStorage/storage';
var STORAGE_LIMIT_SIZE = 10240;

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);

        this.bkStorageCacheInit = false;
        this.initStorage();
    }

    _createClass(Storage, [{
        key: 'initStorage',
        value: function initStorage() {
            if (!this.bkStorageCacheInit) {
                // 初始化cache, 避免后续写入前频繁读文件
                if (BK.FileUtil.isFileExist(STORAGE_PATH)) {
                    var allStorageData = BK.FileUtil.readFile(STORAGE_PATH);
                    if ((typeof allStorageData === 'undefined' ? 'undefined' : _typeof(allStorageData)) === 'object') {
                        this.bkStorageCacheMap = new Map(JSON.parse(allStorageData.readAsString()));
                    } else {
                        this.bkStorageCacheMap = new Map();
                    }
                } else {
                    this.bkStorageCacheMap = new Map();
                }
                this.bkStorageCacheInit = true;
            }
        }
    }, {
        key: 'setStorage',
        value: function setStorage(object) {
            console.log("set storage :" + JSON.stringify(object));
            if (object && object.key && object.data) {
                this.initStorage();
                this.bkStorageCacheMap.set(object.key, object.data);
                var storageStr = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                BK.FileUtil.writeFile(STORAGE_PATH, storageStr);
                if (object.success) {
                    object.success();
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: 'setStorageSync',
        value: function setStorageSync(key, data) {
            console.log("set storage sync  :" + key + " " + data);
            if (key && data) {
                this.initStorage();
                this.bkStorageCacheMap.set(key, data);
                var storageStr = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                BK.FileUtil.writeFile(STORAGE_PATH, storageStr);
            }
        }
    }, {
        key: 'getStorage',
        value: function getStorage(object) {
            console.log("get storage :" + JSON.stringify(object));
            if (object && object.key) {
                this.initStorage();
                var data = this.bkStorageCacheMap.get(object.key);
                console.log("get storage result :" + JSON.stringify(data));
                if (data) {
                    if (object.success) {
                        object.success({ data: data });
                    }
                } else {
                    if (object.fail) {
                        object.fail();
                    }
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: 'getStorageSync',
        value: function getStorageSync(key) {

            if (key) {
                this.initStorage();
                console.log("get storage sync :" + key + " " + this.bkStorageCacheMap.get(key));
                return this.bkStorageCacheMap.get(key);
            }
        }
    }, {
        key: 'getStorageInfoSync',
        value: function getStorageInfoSync() {
            this.initStorage();
            var keys = new Array();
            this.bkStorageCacheMap.forEach(function (value, key, map) {
                keys.push(key);
            });
            var currentSize = 0;
            if (BK.FileUtil.isFileExist(STORAGE_PATH)) {
                var fileInfo = BK.FileUtil.getFileInfo(STORAGE_PATH);
                if (fileInfo) {
                    currentSize = fileInfo.size / 1024;
                }
            }
            return { keys: keys, currentSize: currentSize, limitSize: STORAGE_LIMIT_SIZE };
        }
    }, {
        key: 'getStorageInfo',
        value: function getStorageInfo(object) {
            if (object) {
                this.initStorage();
                var keys = new Array();
                this.bkStorageCacheMap.forEach(function (value, key, map) {
                    keys.push(key);
                });
                var currentSize = 0;
                if (BK.FileUtil.isFileExist(STORAGE_PATH)) {
                    var fileInfo = BK.FileUtil.getFileInfo(STORAGE_PATH);
                    if (fileInfo) {
                        currentSize = fileInfo.size / 1024;
                    }
                }
                var res = { keys: keys, currentSize: currentSize, limitSize: STORAGE_LIMIT_SIZE };
                if (object.success) {
                    object.success(res);
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: 'removeStorage',
        value: function removeStorage(object) {
            if (object && object.key) {
                this.initStorage();
                this.bkStorageCacheMap.delete(object.key);
                var storageStr = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                BK.FileUtil.writeFile(STORAGE_PATH, storageStr);
                if (object.success) {
                    object.success();
                }
                if (object.complete) {
                    object.complete();
                }
            }
        }
    }, {
        key: 'removeStorageSync',
        value: function removeStorageSync(key) {
            if (key) {
                this.initStorage();
                this.bkStorageCacheMap.delete(key);
                var storageStr = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                BK.FileUtil.writeFile(STORAGE_PATH, storageStr);
            }
        }
    }, {
        key: 'clearStorage',
        value: function clearStorage(object) {
            if (this.bkStorageCacheMap) {
                this.bkStorageCacheMap.clear();
            }
            var deleteResult = true;
            if (BK.FileUtil.isFileExist(STORAGE_PATH)) {
                deleteResult = BK.FileUtil.deleteFile(STORAGE_PATH);
            }
            if (deleteResult) {
                if (object.success) {
                    object.success();
                }
            } else {
                if (object.fail) {
                    object.fail();
                }
            }
            if (object.complete) {
                object.complete();
            }
        }
    }, {
        key: 'clearStorageSync',
        value: function clearStorageSync() {
            if (this.bkStorageCacheMap) {
                this.bkStorageCacheMap.clear();
            }
            if (BK.FileUtil.isFileExist(STORAGE_PATH)) {
                BK.FileUtil.deleteFile(STORAGE_PATH);
            }
        }
    }]);

    return Storage;
}();

exports.default = Storage;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Toast = function () {
    function Toast() {
        _classCallCheck(this, Toast);
    }

    _createClass(Toast, [{
        key: 'showToast',
        value: function showToast(e) {
            console.log("showToast not implemented yet", e);
        }
    }, {
        key: 'hideToast',
        value: function hideToast() {
            console.log("hideToast not implemented yet");
        }
    }, {
        key: 'showLoading',
        value: function showLoading(e) {
            console.log("showLoading not implemented yet", e);
            if (e && e.success) {
                e.success();
            }
            if (e && e.complete) {
                e.complete();
            }
        }
    }, {
        key: 'hideLoading',
        value: function hideLoading() {
            console.log("hideLoading not implemented yet");
        }
    }, {
        key: 'showModal',
        value: function showModal(e) {
            console.log("showModal not implemented yet", e);
            if (e && e.success) {
                e.success();
            }
        }
    }]);

    return Toast;
}();

exports.default = Toast;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Log = __webpack_require__(0);

var _Log2 = _interopRequireDefault(_Log);

var _Path = __webpack_require__(2);

var _Path2 = _interopRequireDefault(_Path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accelerometer = function () {
    function Accelerometer() {
        _classCallCheck(this, Accelerometer);

        this._event = {};
    }

    _createClass(Accelerometer, [{
        key: 'startAccelerometer',
        value: function startAccelerometer(object) {
            var success = object.success || function () {};
            var fail = object.fail || function () {};
            var complete = object.complete || function () {};
            console.log("Accelerometer not support yet");
            BK.Script.log(1, 0, "Accelerometer startAcelerometer  not support yet");
        }
    }, {
        key: 'stopAccelerometer',
        value: function stopAccelerometer(object) {
            console.log("Accelerometer not support yet");
            BK.Script.log(1, 0, "Accelerometer stopAccelerometer not support yet");
        }
    }, {
        key: 'onAccelerometerChange',
        value: function onAccelerometerChange(object) {
            this.addEventListener("accelerometerChange", object.callback);
            console.log("Accelerometer not support yet");
            BK.Script.log(1, 0, "Accelerometer onAccelerometerChange not support yet");
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(type, listener, options) {
            if (!this._event[type]) {
                this._event[type] = [];
            }
            this._event[type].push(listener);

            if (options && options.capture) {
                console.warn('EventTarget.addEventListener: options.capture is not implemented.');
            }
            if (options && options.once) {
                // console.warn('EventTarget.addEventListener: options.once is not implemented.')
            }
            if (options && options.passive) {
                console.warn('EventTarget.addEventListener: options.passive is not implemented.');
            }
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent() {
            var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            var listener = this._event[event.type];

            if (listener !== undefined) {
                for (var i = 0; i < listener.length; i++) {
                    listener[i](event);
                }
            }
        }
    }]);

    return Accelerometer;
}();

exports.default = Accelerometer;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

;


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var System = function () {
	function System() {
		_classCallCheck(this, System);
	}

	_createClass(System, [{
		key: "getNetworkType",
		value: function getNetworkType(object) {
			// wifi/2g/3g/4g/unknown(Android下不常见的网络类型)/none(无网络)
			var type = "3g";
			switch (GameStatusInfo.networkType) {
				case 1:
				case 2:
				case 3:
					type = "3g";
					break;
				case 0:
					type = "wifi";
					break;
				default:
					type = "unknown";
			}
			return type;
			if (object && object.success) {
				window.setTimeout(function () {
					var res = {};res.networkType = type;object.success(res);
				}.bind(type), 0);
			}
		}
	}, {
		key: "onNetworkStatusChange",
		value: function onNetworkStatusChange(callback) {}
	}]);

	return System;
}();

exports.default = System;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

function DOMParser(options){
	this.options = options ||{locator:{}};
	
}
DOMParser.prototype.parseFromString = function(source,mimeType){
	var options = this.options;
	var sax =  new XMLReader();
	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
	var errorHandler = options.errorHandler;
	var locator = options.locator;
	var defaultNSMap = options.xmlns||{};
	var entityMap = {'lt':'<','gt':'>','amp':'&','quot':'"','apos':"'"}
	if(locator){
		domBuilder.setDocumentLocator(locator)
	}
	
	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
	sax.domBuilder = options.domBuilder || domBuilder;
	if(/\/x?html?$/.test(mimeType)){
		entityMap.nbsp = '\xa0';
		entityMap.copy = '\xa9';
		defaultNSMap['']= 'http://www.w3.org/1999/xhtml';
	}
	defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
	if(source){
		sax.parse(source,defaultNSMap,entityMap);
	}else{
		sax.errorHandler.error("invalid doc source");
	}
	return domBuilder.doc;
}
function buildErrorHandler(errorImpl,domBuilder,locator){
	if(!errorImpl){
		if(domBuilder instanceof DOMHandler){
			return domBuilder;
		}
		errorImpl = domBuilder ;
	}
	var errorHandler = {}
	var isCallback = errorImpl instanceof Function;
	locator = locator||{}
	function build(key){
		var fn = errorImpl[key];
		if(!fn && isCallback){
			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg)}:errorImpl;
		}
		errorHandler[key] = fn && function(msg){
			fn('[xmldom '+key+']\t'+msg+_locator(locator));
		}||function(){};
	}
	build('warning');
	build('error');
	build('fatalError');
	return errorHandler;
}

//console.log('#\n\n\n\n\n\n\n####')
/**
 * +ContentHandler+ErrorHandler
 * +LexicalHandler+EntityResolver2
 * -DeclHandler-DTDHandler 
 * 
 * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
 * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
 * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
 */
function DOMHandler() {
    this.cdata = false;
}
function position(locator,node){
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}
/**
 * @see org.xml.sax.ContentHandler#startDocument
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
 */ 
DOMHandler.prototype = {
	startDocument : function() {
    	this.doc = new DOMImplementation().createDocument(null, null, null);
    	if (this.locator) {
        	this.doc.documentURI = this.locator.systemId;
    	}
	},
	startElement:function(namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
	    var el = doc.createElementNS(namespaceURI, qName||localName);
	    var len = attrs.length;
	    appendElement(this, el);
	    this.currentElement = el;
	    
		this.locator && position(this.locator,el)
	    for (var i = 0 ; i < len; i++) {
	        var namespaceURI = attrs.getURI(i);
	        var value = attrs.getValue(i);
	        var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator &&position(attrs.getLocator(i),attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr)
	    }
	},
	endElement:function(namespaceURI, localName, qName) {
		var current = this.currentElement
		var tagName = current.tagName;
		this.currentElement = current.parentNode;
	},
	startPrefixMapping:function(prefix, uri) {
	},
	endPrefixMapping:function(prefix) {
	},
	processingInstruction:function(target, data) {
	    var ins = this.doc.createProcessingInstruction(target, data);
	    this.locator && position(this.locator,ins)
	    appendElement(this, ins);
	},
	ignorableWhitespace:function(ch, start, length) {
	},
	characters:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
		//console.log(chars)
		if(chars){
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if(this.currentElement){
				this.currentElement.appendChild(charNode);
			}else if(/^\s*$/.test(chars)){
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator,charNode)
		}
	},
	skippedEntity:function(name) {
	},
	endDocument:function() {
		this.doc.normalize();
	},
	setDocumentLocator:function (locator) {
	    if(this.locator = locator){// && !('lineNumber' in locator)){
	    	locator.lineNumber = 0;
	    }
	},
	//LexicalHandler
	comment:function(chars, start, length) {
		chars = _toString.apply(this,arguments)
	    var comm = this.doc.createComment(chars);
	    this.locator && position(this.locator,comm)
	    appendElement(this, comm);
	},
	
	startCDATA:function() {
	    //used in characters() methods
	    this.cdata = true;
	},
	endCDATA:function() {
	    this.cdata = false;
	},
	
	startDTD:function(name, publicId, systemId) {
		var impl = this.doc.implementation;
	    if (impl && impl.createDocumentType) {
	        var dt = impl.createDocumentType(name, publicId, systemId);
	        this.locator && position(this.locator,dt)
	        appendElement(this, dt);
	    }
	},
	/**
	 * @see org.xml.sax.ErrorHandler
	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning:function(error) {
		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
	},
	error:function(error) {
		console.error('[xmldom error]\t'+error,_locator(this.locator));
	},
	fatalError:function(error) {
		console.error('[xmldom fatalError]\t'+error,_locator(this.locator));
	    throw error;
	}
}
function _locator(l){
	if(l){
		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
	}
}
function _toString(chars,start,length){
	if(typeof chars == 'string'){
		return chars.substr(start,length)
	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if(chars.length >= start+length || start){
			return new java.lang.String(chars,start,length)+'';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
	DOMHandler.prototype[key] = function(){return null}
})

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement (hander,node) {
    if (!hander.currentElement) {
        hander.doc.appendChild(node);
    } else {
        hander.currentElement.appendChild(node);
    }
}//appendChild and setAttributeNS are preformance key

//if(typeof require == 'function'){
	var XMLReader = __webpack_require__(31).XMLReader;
	var DOMImplementation = exports.DOMImplementation = __webpack_require__(5).DOMImplementation;
	exports.XMLSerializer = __webpack_require__(5).XMLSerializer ;
	exports.DOMParser = DOMParser;
//}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

//[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
//[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
//[5]   	Name	   ::=   	NameStartChar (NameChar)*
var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]///\u10000-\uEFFFF
var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
//var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0;//tag name offerring
var S_ATTR = 1;//attr name offerring 
var S_ATTR_SPACE=2;//attr name end and space offer
var S_EQ = 3;//=space?
var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
var S_ATTR_END = 5;//attr value end and no space(quot end)
var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7;//closed el<el />

function XMLReader(){
	
}

XMLReader.prototype = {
	parse:function(source,defaultNSMap,entityMap){
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap ,defaultNSMap = {})
		parse(source,defaultNSMap,entityMap,
				domBuilder,this.errorHandler);
		domBuilder.endDocument();
	}
}
function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10)
				, surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}
	function entityReplacer(a){
		var k = a.slice(1,-1);
		if(k in entityMap){
			return entityMap[k]; 
		}else if(k.charAt(0) === '#'){
			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
		}else{
			errorHandler.error('entity not found:'+a);
			return a;
		}
	}
	function appendText(end){//has some bugs
		if(end>start){
			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
			locator&&position(start);
			domBuilder.characters(xt,0,end-start);
			start = end
		}
	}
	function position(p,m){
		while(p>=lineEnd && (m = linePattern.exec(source))){
			lineStart = m.index;
			lineEnd = lineStart + m[0].length;
			locator.lineNumber++;
			//console.log('line++:',locator,startPos,endPos)
		}
		locator.columnNumber = p-lineStart+1;
	}
	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /.*(?:\r\n?|\n)|.*$/g
	var locator = domBuilder.locator;
	
	var parseStack = [{currentNSMap:defaultNSMapCopy}]
	var closeMap = {};
	var start = 0;
	while(true){
		try{
			var tagStart = source.indexOf('<',start);
			if(tagStart<0){
				if(!source.substr(start).match(/^\s*$/)){
					var doc = domBuilder.doc;
	    			var text = doc.createTextNode(source.substr(start));
	    			doc.appendChild(text);
	    			domBuilder.currentElement = text;
				}
				return;
			}
			if(tagStart>start){
				appendText(tagStart);
			}
			switch(source.charAt(tagStart+1)){
			case '/':
				var end = source.indexOf('>',tagStart+3);
				var tagName = source.substring(tagStart+2,end);
				var config = parseStack.pop();
				if(end<0){
					
	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
	        		//console.error('#@@@@@@'+tagName)
	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
	        		end = tagStart+1+tagName.length;
	        	}else if(tagName.match(/\s</)){
	        		tagName = tagName.replace(/[\s<].*/,'');
	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
	        		end = tagStart+1+tagName.length;
				}
				//console.error(parseStack.length,parseStack)
				//console.error(config);
				var localNSMap = config.localNSMap;
				var endMatch = config.tagName == tagName;
				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase()
		        if(endIgnoreCaseMach){
		        	domBuilder.endElement(config.uri,config.localName,tagName);
					if(localNSMap){
						for(var prefix in localNSMap){
							domBuilder.endPrefixMapping(prefix) ;
						}
					}
					if(!endMatch){
		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName );
					}
		        }else{
		        	parseStack.push(config)
		        }
				
				end++;
				break;
				// end elment
			case '?':// <?...?>
				locator&&position(tagStart);
				end = parseInstruction(source,tagStart,domBuilder);
				break;
			case '!':// <!doctype,<![CDATA,<!--
				locator&&position(tagStart);
				end = parseDCC(source,tagStart,domBuilder,errorHandler);
				break;
			default:
				locator&&position(tagStart);
				var el = new ElementAttributes();
				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
				//elStartEnd
				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
				var len = el.length;
				
				
				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
					el.closed = true;
					if(!entityMap.nbsp){
						errorHandler.warning('unclosed xml attribute');
					}
				}
				if(locator && len){
					var locator2 = copyLocator(locator,{});
					//try{//attribute position fixed
					for(var i = 0;i<len;i++){
						var a = el[i];
						position(a.offset);
						a.locator = copyLocator(locator,{});
					}
					//}catch(e){console.error('@@@@@'+e)}
					domBuilder.locator = locator2
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
					domBuilder.locator = locator;
				}else{
					if(appendElement(el,domBuilder,currentNSMap)){
						parseStack.push(el)
					}
				}
				
				
				
				if(el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed){
					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder)
				}else{
					end++;
				}
			}
		}catch(e){
			errorHandler.error('element parse error: '+e)
			//errorHandler.error('element parse error: '+e);
			end = -1;
			//throw e;
		}
		if(end>start){
			start = end;
		}else{
			//TODO: 这里有可能sax回退，有位置错误风险
			appendText(Math.max(tagStart,start)+1);
		}
	}
}
function copyLocator(f,t){
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
 * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
 */
function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){
	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG;//status
	while(true){
		var c = source.charAt(p);
		switch(c){
		case '=':
			if(s === S_ATTR){//attrName
				attrName = source.slice(start,p);
				s = S_EQ;
			}else if(s === S_ATTR_SPACE){
				s = S_EQ;
			}else{
				//fatalError: equal must after attrName or space after attrName
				throw new Error('attribute equal must after attrName');
			}
			break;
		case '\'':
		case '"':
			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
				){//equal
				if(s === S_ATTR){
					errorHandler.warning('attribute value must after "="')
					attrName = source.slice(start,p)
				}
				start = p+1;
				p = source.indexOf(c,start)
				if(p>0){
					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					el.add(attrName,value,start-1);
					s = S_ATTR_END;
				}else{
					//fatalError: no end quot match
					throw new Error('attribute value no end \''+c+'\' match');
				}
			}else if(s == S_ATTR_NOQUOT_VALUE){
				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
				//console.log(attrName,value,start,p)
				el.add(attrName,value,start);
				//console.dir(el)
				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
				start = p+1;
				s = S_ATTR_END
			}else{
				//fatalError: no equal before
				throw new Error('attribute value must after "="');
			}
			break;
		case '/':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				s =S_TAG_CLOSE;
				el.closed = true;
			case S_ATTR_NOQUOT_VALUE:
			case S_ATTR:
			case S_ATTR_SPACE:
				break;
			//case S_EQ:
			default:
				throw new Error("attribute invalid close char('/')")
			}
			break;
		case ''://end document
			//throw new Error('unexpected end of input')
			errorHandler.error('unexpected end of input');
			if(s == S_TAG){
				el.setTagName(source.slice(start,p));
			}
			return p;
		case '>':
			switch(s){
			case S_TAG:
				el.setTagName(source.slice(start,p));
			case S_ATTR_END:
			case S_TAG_SPACE:
			case S_TAG_CLOSE:
				break;//normal
			case S_ATTR_NOQUOT_VALUE://Compatible state
			case S_ATTR:
				value = source.slice(start,p);
				if(value.slice(-1) === '/'){
					el.closed  = true;
					value = value.slice(0,-1)
				}
			case S_ATTR_SPACE:
				if(s === S_ATTR_SPACE){
					value = attrName;
				}
				if(s == S_ATTR_NOQUOT_VALUE){
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start)
				}else{
					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!')
					}
					el.add(value,value,start)
				}
				break;
			case S_EQ:
				throw new Error('attribute value missed!!');
			}
//			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
			return p;
		/*xml space '\x20' | #x9 | #xD | #xA; */
		case '\u0080':
			c = ' ';
		default:
			if(c<= ' '){//space
				switch(s){
				case S_TAG:
					el.setTagName(source.slice(start,p));//tagName
					s = S_TAG_SPACE;
					break;
				case S_ATTR:
					attrName = source.slice(start,p)
					s = S_ATTR_SPACE;
					break;
				case S_ATTR_NOQUOT_VALUE:
					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
					el.add(attrName,value,start)
				case S_ATTR_END:
					s = S_TAG_SPACE;
					break;
				//case S_TAG_SPACE:
				//case S_EQ:
				//case S_ATTR_SPACE:
				//	void();break;
				//case S_TAG_CLOSE:
					//ignore warning
				}
			}else{//not space
//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
				switch(s){
				//case S_TAG:void();break;
				//case S_ATTR:void();break;
				//case S_ATTR_NOQUOT_VALUE:void();break;
				case S_ATTR_SPACE:
					var tagName =  el.tagName;
					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)){
						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!')
					}
					el.add(attrName,attrName,start);
					start = p;
					s = S_ATTR;
					break;
				case S_ATTR_END:
					errorHandler.warning('attribute space is required"'+attrName+'"!!')
				case S_TAG_SPACE:
					s = S_ATTR;
					start = p;
					break;
				case S_EQ:
					s = S_ATTR_NOQUOT_VALUE;
					start = p;
					break;
				case S_TAG_CLOSE:
					throw new Error("elements closed character '/' and '>' must be connected to");
				}
			}
		}//end outer switch
		//console.log('p++',p)
		p++;
	}
}
/**
 * @return true if has new namespace define
 */
function appendElement(el,domBuilder,currentNSMap){
	var tagName = el.tagName;
	var localNSMap = null;
	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
	var i = el.length;
	while(i--){
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if(nsp>0){
			var prefix = a.prefix = qName.slice(0,nsp);
			var localName = qName.slice(nsp+1);
			var nsPrefix = prefix === 'xmlns' && localName
		}else{
			localName = qName;
			prefix = null
			nsPrefix = qName === 'xmlns' && ''
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName ;
		//prefix == null for no ns prefix attribute 
		if(nsPrefix !== false){//hack!!
			if(localNSMap == null){
				localNSMap = {}
				//console.log(currentNSMap,0)
				_copy(currentNSMap,currentNSMap={})
				//console.log(currentNSMap,1)
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = 'http://www.w3.org/2000/xmlns/'
			domBuilder.startPrefixMapping(nsPrefix, value) 
		}
	}
	var i = el.length;
	while(i--){
		a = el[i];
		var prefix = a.prefix;
		if(prefix){//no prefix attribute has no namespace
			if(prefix === 'xml'){
				a.uri = 'http://www.w3.org/XML/1998/namespace';
			}if(prefix !== 'xmlns'){
				a.uri = currentNSMap[prefix || '']
				
				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if(nsp>0){
		prefix = el.prefix = tagName.slice(0,nsp);
		localName = el.localName = tagName.slice(nsp+1);
	}else{
		prefix = null;//important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = el.uri = currentNSMap[prefix || ''];
	domBuilder.startElement(ns,localName,tagName,el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if(el.closed){
		domBuilder.endElement(ns,localName,tagName);
		if(localNSMap){
			for(prefix in localNSMap){
				domBuilder.endPrefixMapping(prefix) 
			}
		}
	}else{
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}
function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
	if(/^(?:script|textarea)$/i.test(tagName)){
		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
		var text = source.substring(elStartEnd+1,elEndStart);
		if(/[&<]/.test(text)){
			if(/^script$/i.test(tagName)){
				//if(!/\]\]>/.test(text)){
					//lexHandler.startCDATA();
					domBuilder.characters(text,0,text.length);
					//lexHandler.endCDATA();
					return elEndStart;
				//}
			}//}else{//text area
				text = text.replace(/&#?\w+;/g,entityReplacer);
				domBuilder.characters(text,0,text.length);
				return elEndStart;
			//}
			
		}
	}
	return elStartEnd+1;
}
function fixSelfClosed(source,elStartEnd,tagName,closeMap){
	//if(tagName in closeMap){
	var pos = closeMap[tagName];
	if(pos == null){
		//console.log(tagName)
		pos =  source.lastIndexOf('</'+tagName+'>')
		if(pos<elStartEnd){//忘记闭合
			pos = source.lastIndexOf('</'+tagName)
		}
		closeMap[tagName] =pos
	}
	return pos<elStartEnd;
	//} 
}
function _copy(source,target){
	for(var n in source){target[n] = source[n]}
}
function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
	var next= source.charAt(start+2)
	switch(next){
	case '-':
		if(source.charAt(start + 3) === '-'){
			var end = source.indexOf('-->',start+4);
			//append comment source.substring(4,end)//<!--
			if(end>start){
				domBuilder.comment(source,start+4,end-start-4);
				return end+3;
			}else{
				errorHandler.error("Unclosed comment");
				return -1;
			}
		}else{
			//error
			return -1;
		}
	default:
		if(source.substr(start+3,6) == 'CDATA['){
			var end = source.indexOf(']]>',start+9);
			domBuilder.startCDATA();
			domBuilder.characters(source,start+9,end-start-9);
			domBuilder.endCDATA() 
			return end+3;
		}
		//<!DOCTYPE
		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
		var matchs = split(source,start);
		var len = matchs.length;
		if(len>1 && /!doctype/i.test(matchs[0][0])){
			var name = matchs[1][0];
			var pubid = len>3 && /^public$/i.test(matchs[2][0]) && matchs[3][0]
			var sysid = len>4 && matchs[4][0];
			var lastMatch = matchs[len-1]
			domBuilder.startDTD(name,pubid && pubid.replace(/^(['"])(.*?)\1$/,'$2'),
					sysid && sysid.replace(/^(['"])(.*?)\1$/,'$2'));
			domBuilder.endDTD();
			
			return lastMatch.index+lastMatch[0].length
		}
	}
	return -1;
}



function parseInstruction(source,start,domBuilder){
	var end = source.indexOf('?>',start);
	if(end){
		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
		if(match){
			var len = match[0].length;
			domBuilder.processingInstruction(match[1], match[2]) ;
			return end+2;
		}else{//error
			return -1;
		}
	}
	return -1;
}

/**
 * @param source
 */
function ElementAttributes(source){
	
}
ElementAttributes.prototype = {
	setTagName:function(tagName){
		if(!tagNamePattern.test(tagName)){
			throw new Error('invalid tagName:'+tagName)
		}
		this.tagName = tagName
	},
	add:function(qName,value,offset){
		if(!tagNamePattern.test(qName)){
			throw new Error('invalid attribute:'+qName)
		}
		this[this.length++] = {qName:qName,value:value,offset:offset}
	},
	length:0,
	getLocalName:function(i){return this[i].localName},
	getLocator:function(i){return this[i].locator},
	getQName:function(i){return this[i].qName},
	getURI:function(i){return this[i].uri},
	getValue:function(i){return this[i].value}
//	,getIndex:function(uri, localName)){
//		if(localName){
//			
//		}else{
//			var qName = uri
//		}
//	},
//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
//	getType:function(uri,localName){}
//	getType:function(i){},
}




function _set_proto_(thiz,parent){
	thiz.__proto__ = parent;
	return thiz;
}
if(!(_set_proto_({},_set_proto_.prototype) instanceof _set_proto_)){
	_set_proto_ = function(thiz,parent){
		function p(){};
		p.prototype = parent;
		p = new p();
		for(parent in thiz){
			p[parent] = thiz[parent];
		}
		return p;
	}
}

function split(source,start){
	var match;
	var buf = [];
	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
	reg.lastIndex = start;
	reg.exec(source);//skip <
	while(match = reg.exec(source)){
		buf.push(match);
		if(match[1])return buf;
	}
}

exports.XMLReader = XMLReader;



/***/ })
/******/ ]);