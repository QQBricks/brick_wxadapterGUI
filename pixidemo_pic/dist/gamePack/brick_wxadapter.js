!
function(e) {
    var t = {};

    function n(i) {
        if(t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.n = function(e) {
        var t = e && e.__esModule ?
        function() {
            return e.
        default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 27)
}([function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.
default = {
        d: function(e, t, n) {
            BK.Script.log(e, t, n)
        }
    }
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    var r = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, null, [{
                key: "getPath",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "GameRes",
                        n = e;
                    return "GameRes" === t ? n = "GameRes://" + n : "GameSandBox" === t && (n = "GameSandBox://" + n), n
                }
            }]), e
        }();
    t.
default = r, r.SCHEMA_RES = "GameRes", r.SCHEMA_SAND = "GameSandBox"
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setTimeout = o, t.clearTimeout = a, t.requestAnimationFrame = function(e) {
        var t = (new Date).getTime(),
            n = o(e, 0);
        return t + 0, n
    }, t.cancelAnimationFrame = function(e) {
        a(e)
    }, t.setInterval = function(e, t) {
        var n = new BK.Ticker;
        n.interval = 60 * t / 1e3, n.setTickerCallBack(function(t, n) {
            e()
        });
        var i = ++r;
        return GameGlobal.intervals[i] = {
            i: i,
            ticker: n
        }, i
    }, t.clearInterval = function(e) {
        e && GameGlobal.intervals[e] && (GameGlobal.intervals[e].ticker.dispose(), delete GameGlobal.intervals[e])
    }, GameGlobal.timers = {}, GameGlobal.intervals = {};
    var i = 0,
        r = 0;
    BK.Director.ticker.add(function(e, t) {
        Object.keys(GameGlobal.timers).map(function(t) {
            var n = GameGlobal.timers[t];
            n.b + n.t <= e && (delete GameGlobal.timers[t], n.f(e))
        })
    });

    function o(e, t) {
        t || (t = 0);
        var n = ++i;
        return GameGlobal.timers[n] = {
            b: Date.now(),
            t: t,
            f: e
        }, n
    }
    function a(e) {
        delete GameGlobal.timers[e]
    }
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isRemoteUrl = o, t.wrapLocalUrl = a, t.wrapSandBoxPath = l, t.extractFileNameFromUrl = f, t.extractFilePathFromUrl = function(e) {
        var t = 0;
        t = e.startsWith("https") ? e.substr(8).indexOf("/") + 9 : e.startWitch("http") ? e.substr(7).indexOf("/") + 8 : e.indexOf("/") + 1;
        var n = e.lastIndexOf("/");
        return e.substring(t, n) + "/"
    }, t.getImgPath = function(e) {
        var t = void 0;
        if(o(e)) {
            var n = f(e);
            t = l("download/images/" + n)
        } else 0 == e.indexOf(i) || 0 == e.indexOf(r) ? t = e : (t = a(e), BK.FileUtil.isFileExist(t) || (t = l(e)));
        return t
    }, t.getAudioPath = function(e) {
        var t = void 0;
        if(o(e)) {
            var n = f(e);
            t = l("download/audio/" + n)
        } else t = a(e);
        return t
    }, t.hexToRgb = function(e) {
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16),
            a: parseInt(t[4], 16)
        } : null
    }, t.colourNameToHex = function(e) {
        var t = {
            aliceblue: "#f0f8ff",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            aquamarine: "#7fffd4",
            azure: "#f0ffff",
            beige: "#f5f5dc",
            bisque: "#ffe4c4",
            black: "#000000",
            blanchedalmond: "#ffebcd",
            blue: "#0000ff",
            blueviolet: "#8a2be2",
            brown: "#a52a2a",
            burlywood: "#deb887",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkkhaki: "#bdb76b",
            darkmagenta: "#8b008b",
            darkolivegreen: "#556b2f",
            darkorange: "#ff8c00",
            darkorchid: "#9932cc",
            darkred: "#8b0000",
            darksalmon: "#e9967a",
            darkseagreen: "#8fbc8f",
            darkslateblue: "#483d8b",
            darkslategray: "#2f4f4f",
            darkturquoise: "#00ced1",
            darkviolet: "#9400d3",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            dimgray: "#696969",
            dodgerblue: "#1e90ff",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            forestgreen: "#228b22",
            fuchsia: "#ff00ff",
            gainsboro: "#dcdcdc",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gray: "#808080",
            green: "#008000",
            greenyellow: "#adff2f",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            "indianred ": "#cd5c5c",
            indigo: "#4b0082",
            ivory: "#fffff0",
            khaki: "#f0e68c",
            lavender: "#e6e6fa",
            lavenderblush: "#fff0f5",
            lawngreen: "#7cfc00",
            lemonchiffon: "#fffacd",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lightcyan: "#e0ffff",
            lightgoldenrodyellow: "#fafad2",
            lightgrey: "#d3d3d3",
            lightgreen: "#90ee90",
            lightpink: "#ffb6c1",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            lightskyblue: "#87cefa",
            lightslategray: "#778899",
            lightsteelblue: "#b0c4de",
            lightyellow: "#ffffe0",
            lime: "#00ff00",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            magenta: "#ff00ff",
            maroon: "#800000",
            mediumaquamarine: "#66cdaa",
            mediumblue: "#0000cd",
            mediumorchid: "#ba55d3",
            mediumpurple: "#9370d8",
            mediumseagreen: "#3cb371",
            mediumslateblue: "#7b68ee",
            mediumspringgreen: "#00fa9a",
            mediumturquoise: "#48d1cc",
            mediumvioletred: "#c71585",
            midnightblue: "#191970",
            mintcream: "#f5fffa",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            navajowhite: "#ffdead",
            navy: "#000080",
            oldlace: "#fdf5e6",
            olive: "#808000",
            olivedrab: "#6b8e23",
            orange: "#ffa500",
            orangered: "#ff4500",
            orchid: "#da70d6",
            palegoldenrod: "#eee8aa",
            palegreen: "#98fb98",
            paleturquoise: "#afeeee",
            palevioletred: "#d87093",
            papayawhip: "#ffefd5",
            peachpuff: "#ffdab9",
            peru: "#cd853f",
            pink: "#ffc0cb",
            plum: "#dda0dd",
            powderblue: "#b0e0e6",
            purple: "#800080",
            rebeccapurple: "#663399",
            red: "#ff0000",
            rosybrown: "#bc8f8f",
            royalblue: "#4169e1",
            saddlebrown: "#8b4513",
            salmon: "#fa8072",
            sandybrown: "#f4a460",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            skyblue: "#87ceeb",
            slateblue: "#6a5acd",
            slategray: "#708090",
            snow: "#fffafa",
            springgreen: "#00ff7f",
            steelblue: "#4682b4",
            tan: "#d2b48c",
            teal: "#008080",
            thistle: "#d8bfd8",
            tomato: "#ff6347",
            turquoise: "#40e0d0",
            violet: "#ee82ee",
            wheat: "#f5deb3",
            white: "#ffffff",
            whitesmoke: "#f5f5f5",
            yellow: "#ffff00",
            yellowgreen: "#9acd32"
        };
        return void 0 !== t[e.toLowerCase()] && t[e.toLowerCase()]
    };
    var i = "GameRes://",
        r = "GameSandBox://";

    function o(e) {
        return /^https?:\/\//.test(e)
    }
    function a(e) {
        return /^GameRes:\/\//.test(e) ? e : "GameRes://" + e.replace(/^\.*\//, "")
    }
    function l(e) {
        return /^GameSandBox:\/\//.test(e) ? e : "GameSandBox://" + e.replace(/^\.*\//, "")
    }
    function f(e) {
        var t = e.lastIndexOf("/");
        return -1 == t && (t = e.lastIndexOf("\\")), e.substr(t + 1)
    }
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0);
    (i = o) && i.__esModule;
    var a = new(function() {
        function e() {
            !
            function(e, t) {
                if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.touchEventStartcb = [], this.touchEventMovecb = [], this.touchEventEndcb = [], this.touchEventCancelcb = []
        }
        return r(e, [{
            key: "dispatchEvent",
            value: function() {
                var e = this;
                BK.Director.ticker.add(function() {
                    var t = BK.TouchEvent.getTouchEvent();
                    if(void 0 != t) t.map(function(t) {
                        var n = t.x,
                            i = BK.Director.screenPixelSize.height - t.y,
                            r = BK.Director.screenPixelSize.width / BK.Director.renderSize.width;
                        n /= r, i /= r;
                        var o = {
                            identifier: t.id,
                            screenX: n,
                            screenY: i,
                            clientX: n,
                            clientY: i,
                            pageX: n,
                            pageY: i
                        };
                        return 2 == t.status ? e.touchEventStartcb.map(function(e) {
                            e({
                                touches: [o],
                                changedTouches: [o],
                                timeStamp: Date.now(),
                                preventDefault: function() {}
                            })
                        }) : 3 == t.status ? e.touchEventMovecb.map(function(e) {
                            e({
                                touches: [o],
                                changedTouches: [o],
                                timeStamp: Date.now(),
                                preventDefault: function() {}
                            })
                        }) : 1 == t.status && e.touchEventEndcb.map(function(e) {
                            e({
                                touches: [o],
                                changedTouches: [o],
                                timeStamp: Date.now(),
                                preventDefault: function() {}
                            })
                        }), o
                    }, e);
                    BK.TouchEvent.updateTouchStatus()
                })
            }
        }, {
            key: "onTouchStart",
            value: function(e) {
                null != e && this.touchEventStartcb.push(e)
            }
        }, {
            key: "onTouchMove",
            value: function(e) {
                this.touchEventMovecb.push(e)
            }
        }, {
            key: "onTouchCancel",
            value: function(e) {
                this.touchEventCancelcb.push(e)
            }
        }, {
            key: "onTouchEnd",
            value: function(e) {
                this.touchEventEndcb.push(e)
            }
        }, {
            key: "offTouchStart",
            value: function(e) {
                var t = this.touchEventStartcb.indexOf(e);
                this.touchEventStartcb.splice(t, 1)
            }
        }, {
            key: "offTouchMove",
            value: function(e) {
                var t = this.touchEventMovecb.indexOf(e);
                this.touchEventMovecb.splice(t, 1)
            }
        }, {
            key: "offTouchCancel",
            value: function(e) {
                var t = this.touchEventCancelcb.indexOf(e);
                this.touchEventCancelcb.splice(t, 1)
            }
        }, {
            key: "offTouchEnd",
            value: function(e) {
                var t = this.touchEventEndcb.indexOf(e);
                this.touchEventEndcb.splice(t, 1)
            }
        }]), e
    }());
    a.dispatchEvent(), t.
default = a
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    var r = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "getNetworkType",
                value: function(e) {
                    var t = "3g";
                    switch(GameStatusInfo.networkType) {
                    case 1:
                    case 2:
                    case 3:
                        t = "3g";
                        break;
                    case 0:
                        t = "wifi";
                        break;
                    default:
                        t = "unknown"
                    }
                    return t
                }
            }, {
                key: "onNetworkStatusChange",
                value: function(e) {}
            }]), e
        }();
    t.
default = r
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    r(n(0)), r(n(1));

    function r(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var o = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this._event = {}
            }
            return i(e, [{
                key: "startAccelerometer",
                value: function(e) {
                    e.success, e.fail, e.complete;
                    console.log("Accelerometer not support yet"), BK.Script.log(1, 0, "Accelerometer startAcelerometer  not support yet")
                }
            }, {
                key: "stopAccelerometer",
                value: function(e) {
                    console.log("Accelerometer not support yet"), BK.Script.log(1, 0, "Accelerometer stopAccelerometer not support yet")
                }
            }, {
                key: "onAccelerometerChange",
                value: function(e) {
                    this.addEventListener("accelerometerChange", e.callback), console.log("Accelerometer not support yet"), BK.Script.log(1, 0, "Accelerometer onAccelerometerChange not support yet")
                }
            }, {
                key: "addEventListener",
                value: function(e, t, n) {
                    this._event[e] || (this._event[e] = []), this._event[e].push(t), n && n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n && n.once, n && n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.")
                }
            }, {
                key: "dispatchEvent",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this._event[e.type];
                    if(void 0 !== t) for(var n = 0; n < t.length; n++) t[n](e)
                }
            }]), e
        }();
    t.
default = o
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    r(n(0)), r(n(1));

    function r(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var o = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "showToast",
                value: function(e) {
                    console.log("showToast not implemented yet", e)
                }
            }, {
                key: "hideToast",
                value: function() {
                    console.log("hideToast not implemented yet")
                }
            }, {
                key: "showLoading",
                value: function(e) {
                    console.log("showLoading not implemented yet", e), e && e.success && e.success(), e && e.complete && e.complete()
                }
            }, {
                key: "hideLoading",
                value: function() {
                    console.log("hideLoading not implemented yet")
                }
            }, {
                key: "showModal",
                value: function(e) {
                    console.log("showModal not implemented yet", e), e && e.success && e.success()
                }
            }]), e
        }();
    t.
default = o
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = function() {
        function e(e, t) {
            for(var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }();
    var o = "GameSandBox://localStorage/storage",
        a = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.bkStorageCacheInit = !1, this.initStorage()
            }
            return r(e, [{
                key: "initStorage",
                value: function() {
                    if(!this.bkStorageCacheInit) {
                        if(BK.FileUtil.isFileExist(o)) {
                            var e = BK.FileUtil.readFile(o);
                            "object" === (void 0 === e ? "undefined" : i(e)) ? this.bkStorageCacheMap = new Map(JSON.parse(e.readAsString())) : this.bkStorageCacheMap = new Map
                        } else this.bkStorageCacheMap = new Map;
                        this.bkStorageCacheInit = !0
                    }
                }
            }, {
                key: "setStorage",
                value: function(e) {
                    if(console.log("set storage :" + JSON.stringify(e)), e && e.key && e.data) {
                        this.initStorage(), this.bkStorageCacheMap.set(e.key, e.data);
                        var t = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                        BK.FileUtil.writeFile(o, t), e.success && e.success(), e.complete && e.complete()
                    }
                }
            }, {
                key: "setStorageSync",
                value: function(e, t) {
                    if(console.log("set storage sync  :" + e + " " + t), e && t) {
                        this.initStorage(), this.bkStorageCacheMap.set(e, t);
                        var n = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                        BK.FileUtil.writeFile(o, n)
                    }
                }
            }, {
                key: "getStorage",
                value: function(e) {
                    if(console.log("get storage :" + JSON.stringify(e)), e && e.key) {
                        this.initStorage();
                        var t = this.bkStorageCacheMap.get(e.key);
                        console.log("get storage result :" + JSON.stringify(t)), t ? e.success && e.success({
                            data: t
                        }) : e.fail && e.fail(), e.complete && e.complete()
                    }
                }
            }, {
                key: "getStorageSync",
                value: function(e) {
                    if(e) return this.initStorage(), console.log("get storage sync :" + e + " " + this.bkStorageCacheMap.get(e)), this.bkStorageCacheMap.get(e)
                }
            }, {
                key: "getStorageInfoSync",
                value: function() {
                    this.initStorage();
                    var e = new Array;
                    this.bkStorageCacheMap.forEach(function(t, n, i) {
                        e.push(n)
                    });
                    var t = 0;
                    if(BK.FileUtil.isFileExist(o)) {
                        var n = BK.FileUtil.getFileInfo(o);
                        n && (t = n.size / 1024)
                    }
                    return {
                        keys: e,
                        currentSize: t,
                        limitSize: 10240
                    }
                }
            }, {
                key: "getStorageInfo",
                value: function(e) {
                    if(e) {
                        this.initStorage();
                        var t = new Array;
                        this.bkStorageCacheMap.forEach(function(e, n, i) {
                            t.push(n)
                        });
                        var n = 0;
                        if(BK.FileUtil.isFileExist(o)) {
                            var i = BK.FileUtil.getFileInfo(o);
                            i && (n = i.size / 1024)
                        }
                        var r = {
                            keys: t,
                            currentSize: n,
                            limitSize: 10240
                        };
                        e.success && e.success(r), e.complete && e.complete()
                    }
                }
            }, {
                key: "removeStorage",
                value: function(e) {
                    if(e && e.key) {
                        this.initStorage(), this.bkStorageCacheMap.delete(e.key);
                        var t = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                        BK.FileUtil.writeFile(o, t), e.success && e.success(), e.complete && e.complete()
                    }
                }
            }, {
                key: "removeStorageSync",
                value: function(e) {
                    if(e) {
                        this.initStorage(), this.bkStorageCacheMap.delete(e);
                        var t = JSON.stringify(Array.from(this.bkStorageCacheMap.entries()));
                        BK.FileUtil.writeFile(o, t)
                    }
                }
            }, {
                key: "clearStorage",
                value: function(e) {
                    this.bkStorageCacheMap && this.bkStorageCacheMap.clear();
                    var t = !0;
                    BK.FileUtil.isFileExist(o) && (t = BK.FileUtil.deleteFile(o)), t ? e.success && e.success() : e.fail && e.fail(), e.complete && e.complete()
                }
            }, {
                key: "clearStorageSync",
                value: function() {
                    this.bkStorageCacheMap && this.bkStorageCacheMap.clear(), BK.FileUtil.isFileExist(o) && BK.FileUtil.deleteFile(o)
                }
            }]), e
        }();
    t.
default = a
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    t.midasCancelPay = function(e) {
        a.
    default.d(0, 0, "midasCancelPay failed, see bk interface")
    }, t.midasGetBalance = function(e) {
        a.
    default.d(0, 0, "midasGetBalance failed, see bk interface")
    }, t.midasPay = function(e) {
        a.
    default.d(0, 0, "midasPay failed, see bk interface")
    }, t.midasPresent = function(e) {
        a.
    default.d(0, 0, "midasPresent failed, see bk interface")
    };
    var r, o = n(0),
        a = (r = o) && r.__esModule ? r : {
        default:
            r
        };
    var l = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "requestMidasPayment",
                value: function(e) {
                    a.
                default.d(0, 0, "requestMidasPayment failed, see bk interface")
                }
            }]), e
        }();
    t.
default = l
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RewardedVideoAd = t.BannerAd = void 0;
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0),
        a = (i = o) && i.__esModule ? i : {
        default:
            i
        };

    function l(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.BannerAd = function() {
        function e(t, n) {
            l(this, e), this.adUnitId = t, this.style = n
        }
        return r(e, [{
            key: "show",
            value: function() {
                this.adBannerHandle && this.adBannerHandle.close();
                var e = this;
                return new Promise(function(t, n) {
                    BK.Advertisement.fetchBannerAd(function(i, r, o) {
                        0 == i ? (o.show(function(i, r, o) {
                            0 == i ? (e.onLoadCallback && e.onLoadCallback(), t()) : (e.onErrorCallback && e.onErrorCallback(), a.
                        default.d(0, 0, "fetchBannerAd failed, msg=" + r), n(r))
                        }), o.onClickContent(function() {
                            e.onClickCallback && e.onClickCallback()
                        }), o.onClickClose(function() {
                            e.onClickCloseCallback && e.onClickCloseCallback()
                        }), e.adBannerHandle = o) : (e.onErrorCallback && e.onErrorCallback(), a.
                    default.d(0, 0, "fetchBannerAd failed, msg=" + r), n(r))
                    })
                })
            }
        }, {
            key: "hide",
            value: function() {
                this.adBannerHandle && this.adBannerHandle.close()
            }
        }, {
            key: "onResize",
            value: function(e) {
                a.
            default.d(0, 0, "BannerAd: onResize, not implement yet")
            }
        }, {
            key: "offResize",
            value: function(e) {
                a.
            default.d(0, 0, "BannerAd: offResize, not implement yet")
            }
        }, {
            key: "onLoad",
            value: function(e) {
                this.onLoadCallback = e
            }
        }, {
            key: "offLoad",
            value: function(e) {
                this.onLoadCallback = void 0
            }
        }, {
            key: "onError",
            value: function(e) {
                this.onErrorCallback = e
            }
        }, {
            key: "offError",
            value: function(e) {
                this.onErrorCallback = void 0
            }
        }, {
            key: "onClickContent",
            value: function(e) {
                this.onClickCallback = e
            }
        }, {
            key: "offClickContent",
            value: function(e) {
                this.onClickCallback = void 0
            }
        }, {
            key: "onClickClose",
            value: function(e) {
                this.onClickCloseCallback = e
            }
        }, {
            key: "offClickClose",
            value: function(e) {
                this.onClickCloseCallback = void 0
            }
        }, {
            key: "destroy",
            value: function() {}
        }]), e
    }(), t.RewardedVideoAd = function() {
        function e(t, n, i) {
            l(this, e), this.adUnitId = t, this.style = n, this.videoType = i
        }
        return r(e, [{
            key: "show",
            value: function() {
                void 0 === this.videoType && (this.videoType = 3);
                var e = this;
                return new Promise(function(t, n) {
                    BK.Advertisement.fetchVideoAd(e.videoType, function(i, r, o) {
                        a.
                    default.d(0, 0, "masonc, fetchVideoAd success, retCode=" + i + ", msg=" + r + ", handle=" + o), 0 == i && o ? (o.setEventCallack(function(e, t) {}, function(t, n) {
                            e.onCloseCallback && e.onCloseCallback({
                                isEnded: !0
                            })
                        }, function(t, n) {
                            e.onCloseCallback && e.onCloseCallback({
                                isEnded: !1
                            })
                        }, function(e, t) {}), e.onLoadCallback && e.onLoadCallback(), o.jump(), t()):
                        (e.onErrorCallback && e.onErrorCallback(), n(r))
                    })
                })
            }
        }, {
            key: "load",
            value: function() {
                a.
            default.d(0, 0, "RewardedVideoAd, load, not implement yet")
            }
        }, {
            key: "onClose",
            value: function(e) {
                this.onCloseCallback = e
            }
        }, {
            key: "offClose",
            value: function(e) {
                this.onCloseCallback = void 0
            }
        }, {
            key: "onLoad",
            value: function(e) {
                this.onLoadCallback = e
            }
        }, {
            key: "offLoad",
            value: function(e) {
                this.onLoadCallback = void 0
            }
        }, {
            key: "onError",
            value: function(e) {
                this.onErrorCallback = e
            }
        }, {
            key: "offError",
            value: function(e) {
                this.onErrorCallback = void 0
            }
        }]), e
    }()
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0),
        a = (i = o) && i.__esModule ? i : {
        default:
            i
        };
    var l = function() {
            function e(t) {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.canvas = t
            }
            return r(e, [{
                key: "postMessage",
                value: function(e) {
                    a.
                default.d(0, 0, "OpenDataContext: postMessage, message=" + JSON.stringify(e)), wx.postMessage(e)
                }
            }]), e
        }();
    t.
default = l
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.OpenSettingButton = t.AuthSetting = void 0;
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0),
        a = (i = o) && i.__esModule ? i : {
        default:
            i
        };

    function l(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.AuthSetting = function e(t, n) {
        l(this, e), this.key = t, this.value = n
    }, t.OpenSettingButton = function() {
        function e(t, n, i) {
            l(this, e), this.text = t, this.image = n, this.style = i
        }
        return r(e, [{
            key: "show",
            value: function() {
                a.
            default.d(0, 0, "OpenSettingButton: show failed, not implement yet")
            }
        }, {
            key: "hide",
            value: function() {
                a.
            default.d(0, 0, "OpenSettingButton: hide failed, not implement yet")
            }
        }, {
            key: "onTap",
            value: function(e) {
                a.
            default.d(0, 0, "OpenSettingButton: onTap failed, not implement yet")
            }
        }, {
            key: "offTap",
            value: function(e) {
                a.
            default.d(0, 0, "OpenSettingButton: offTap failed, not implement yet")
            }
        }, {
            key: "destroy",
            value: function() {
                a.
            default.d(0, 0, "OpenSettingButton: destroy failed, not implement yet")
            }
        }]), e
    }()
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.UserInfoButton = t.UserInfo = void 0;
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0),
        a = (i = o) && i.__esModule ? i : {
        default:
            i
        };

    function l(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.UserInfo = function e(t, n, i) {
        l(this, e), this.language = t, this.nickName = n, this.avatarUrl = i
    }, t.UserInfoButton = function() {
        function e(t, n, i) {
            l(this, e), this.text = t, this.image = n, this.style = i
        }
        return r(e, [{
            key: "show",
            value: function() {
                a.
            default.d(0, 0, "UserInfoButton: show failed, not implement yet")
            }
        }, {
            key: "hide",
            value: function() {
                a.
            default.d(0, 0, "UserInfoButton: hide failed, not implement yet")
            }
        }, {
            key: "onTap",
            value: function(e) {
                a.
            default.d(0, 0, "UserInfoButton: onTap failed, not implement yet")
            }
        }, {
            key: "offTap",
            value: function(e) {
                a.
            default.d(0, 0, "UserInfoButton: offTap failed, not implement yet")
            }
        }, {
            key: "destroy",
            value: function() {
                a.
            default.d(0, 0, "UserInfoButton: destroy failed, not implement yet")
            }
        }]), e
    }()
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GameClubButton = t.UserGameData = t.KVData = void 0;
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    t.removeUserStorage = function(e, t, n, i, r, o) {
        a.
    default.d(0, 0, "removeUserStorage failed, not implement yet")
    }, t.setUserStorage = function(e, t, n, i, r, o) {
        a.
    default.d(0, 0, "setUserStorage failed, not implement yet")
    };
    var r, o = n(0),
        a = (r = o) && r.__esModule ? r : {
        default:
            r
        };

    function l(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    t.KVData = function e(t, n) {
        l(this, e), this.key = t, this.value = n
    }, t.UserGameData = function e(t, n, i, r) {
        l(this, e), this.avatarUrl = t, this.nickname = n, this.openid = i, this.KVDataList = r
    };
    t.GameClubButton = function() {
        function e(t, n, i, r) {
            l(this, e), this.left = t, this.top = n, this.width = i, this.height = r
        }
        return i(e, [{
            key: "show",
            value: function() {
                a.
            default.d(0, 0, "GameClubButton: show failed, not implement yet")
            }
        }, {
            key: "hide",
            value: function() {
                a.
            default.d(0, 0, "GameClubButton: hide failed, not implement yet")
            }
        }, {
            key: "destroy",
            value: function() {
                a.
            default.d(0, 0, "GameClubButton: destroy failed, not implement yet")
            }
        }]), e
    }()
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    var r = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "getShareInfo",
                value: function(e) {}
            }, {
                key: "hideShareMenu",
                value: function(e) {
                    e && (e.success && e.success(), e.complete && e.complete())
                }
            }, {
                key: "onShareAppMessage",
                value: function(e) {
                    this.shareCallback = e
                }
            }, {
                key: "offShareAppMessage",
                value: function(e) {
                    this.shareCallback = void 0
                }
            }, {
                key: "showShareMenu",
                value: function(e) {
                    e && (e.success && e.success(), e.complete && e.complete())
                }
            }, {
                key: "shareAppMessage",
                value: function(e) {
                    var t = void 0,
                        n = void 0;
                    if(e && (e.title && (t = e.title), e.imageUrl && (n = e.imageUrl)), t && n) {
                        var i = {
                            summary: t,
                            picUrl: n,
                            extendInfo: e.query,
                            localPicPath: ""
                        };
                        BK.QQ.share(i, function(t, n, i) {
                            BK.Script.log(1, 1, "retCode:" + t + " shareDest:" + n + " isFirstShare:" + i);
                            var r = {
                                errMsg: "shareAppMessage:ok",
                                shareTickets: [1]
                            };
                            0 === t ? (0 === n ? (BK.Script.log(1, 1, "成功分享至QQ"), r.shareTickets.push(1)) : 1 === n ? BK.Script.log(1, 1, "成功分享至空间") : 2 === n ? BK.Script.log(1, 1, "成功分享至微信") : 3 === n && BK.Script.log(1, 1, "成功分享至朋友圈"), e && e.success && e.success(r)) : 1 === t ? (BK.Script.log(1, 1, "分享失败" + t), e && e.fail && e.fail(r)) : 2 === t && (BK.Script.log(1, 1, "分享失败，用户取消分享：" + t), e && e.fail && e.fail(r)), e && e.complete && e.complete(r)
                        })
                    } else e && e.fail && e.fail();
                    e && e.complete && e.complete()
                }
            }, {
                key: "updateShareMenu",
                value: function(e) {
                    e && (e.success && e.success(), e.complete && e.complete())
                }
            }]), e
        }();
    t.
default = r
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    t.code2accessToken = function() {
        BK.Script.log(0, 0, "code2accessToken failed: not implement yet")
    };
    var r = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            return i(e, [{
                key: "checkSession",
                value: function(e) {
                    return BK.Script.log(0, 0, "checkSession not implement yet"), !0
                }
            }, {
                key: "login",
                value: function(e) {
                    e && BK.QQ.fetchOpenKey(function(t, n, i) {
                        if(0 == t && i && i.openKey) {
                            if(e.success) {
                                var r = {
                                    code: "011tWTqk2qizXE0yQsrk2Vqzqk2tWTqq",
                                    openid: GameStatusInfo.openId,
                                    openkey: i.openKey
                                };
                                e.success(r)
                            }
                        } else BK.Script.log(0, 0, "fetchOpenKey failed: errCode=" + t), e.fail && e.fail();
                        e.complete && e.complete()
                    })
                }
            }]), e
        }();
    t.
default = r
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();
    var r = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.onBtnClick = function() {}, this.onTextChange = function() {}
            }
            return i(e, [{
                key: "showKeyboard",
                value: function(e) {
                    var t = this;
                    BK.Editor.showKeyBoard(function(e) {
                        var n = {};
                        n.value = e, t.onBtnClick(n)
                    }, function(e) {
                        var n = {};
                        n.value = e, t.onTextChange(n)
                    })
                }
            }, {
                key: "hideKeyboard",
                value: function(e) {
                    BK.Editor.hideKeyBoard()
                }
            }, {
                key: "onKeyboardInput",
                value: function(e) {
                    this.onTextChange = e
                }
            }, {
                key: "onKeyboardConfirm",
                value: function(e) {
                    this.onBtnClick = e
                }
            }, {
                key: "onKeyboardComplete",
                value: function(e) {
                    this.onBtnClick = e
                }
            }, {
                key: "offKeyboardInput",
                value: function(e) {
                    this.onTextChange = function() {}
                }
            }, {
                key: "offKeyboardConfirm",
                value: function(e) {
                    this.onBtnClick = function() {}
                }
            }, {
                key: "offKeyboardComplete",
                value: function(e) {
                    this.onBtnClick = function() {}
                }
            }]), e
        }();
    t.
default = r
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        o = n(0);
    (i = o) && i.__esModule, n(2);

    function a(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var l = new Map,
        f = 0,
        c = 0,
        u = function() {
            function e(t) {
                a(this, e);
                var n = t.url;
                this.socket = new BK.WebSocket(n), this.id = ++c;
                var i = this;
                this.WEB_SOCKET_EVENT_MAP = [], this.socket.onOpen = function(e) {
                    i.onEvent(d.SOCK_EVENT_OPEN, e)
                }, this.socket.onError = function(e) {
                    i.onEvent(d.SOCK_EVENT_ERROR, e)
                }, this.socket.onClose = function(e) {
                    i.onEvent(d.SOCK_EVENT_CLOSE, e)
                }, this.socket.onMessage = function(e, t) {
                    var n = "";
                    n = t.isBinary ? i.bricksBufferToArrayBuffer(t.data) : t.data.readAsString(), i.onEvent(d.SOCK_EVENT_MESSAGE, i.socket, {
                        data: n
                    })
                }
            }
            return r(e, [{
                key: "bricksBufferToArrayBuffer",
                value: function(e) {
                    for(var t = new ArrayBuffer(e.bufferLength()), n = new Uint8Array(t), i = 0; i < e.bufferLength();) n[i++] = e.readUint8Buffer();
                    return t
                }
            }, {
                key: "onOpen",
                value: function(e) {
                    this.publishEvent(d.SOCK_EVENT_OPEN, e)
                }
            }, {
                key: "onClose",
                value: function(e) {
                    this.publishEvent(d.SOCK_EVENT_CLOSE, e)
                }
            }, {
                key: "onMessage",
                value: function(e) {
                    this.publishEvent(d.SOCK_EVENT_MESSAGE, e)
                }
            }, {
                key: "onError",
                value: function(e) {
                    this.publishEvent(d.SOCK_EVENT_ERROR, e)
                }
            }, {
                key: "arrayBufferToBricksBuffer",
                value: function(e) {
                    for(var t = new BK.Buffer(e.byteLength), n = new Uint8Array(e), i = 0; i < e.byteLength;) t.writeUint8Buffer(n[i++]);
                    return t
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = e,
                        n = e.success,
                        i = (e.fail, e.complete);
                    return e && (e.data instanceof ArrayBuffer ? t = this.arrayBufferToBricksBuffer(e.data) : e.data && (t = e.data)), n && n(this), i && i(this), this.socket.send(t)
                }
            }, {
                key: "close",
                value: function(e) {
                    var t = e.success,
                        n = (e.fail, e.complete);
                    return t && t(this), n && n(this), this.socket.close.apply(this)
                }
            }, {
                key: "connect",
                value: function() {
                    this.socket.connect()
                }
            }, {
                key: "onEvent",
                value: function(e, t, n) {
                    var i = this.WEB_SOCKET_EVENT_MAP[e];
                    "function" == typeof i && i(n)
                }
            }, {
                key: "publishEvent",
                value: function(e, t) {
                    this.WEB_SOCKET_EVENT_MAP[e] = t
                }
            }]), e
        }(),
        s = [],
        d = function() {
            function e() {
                a(this, e)
            }
            return r(e, null, [{
                key: "onEvent",
                value: function(e, t, n) {
                    var i = s[e];
                    "function" == typeof i && i(t, n)
                }
            }, {
                key: "publishEvent",
                value: function(e, t) {
                    s[e] = t
                }
            }, {
                key: "newConnection",
                value: function(e) {
                    var t = e.success ? e.success : function() {},
                        n = e.fail ? e.fail : function() {},
                        i = e.complete ? e.complete : function() {},
                        r = null,
                        o = e.url;
                    if(!(f >= 5)) {
                        l || (l = new Map);
                        return(r = new u(e)) ? (l.set(o, r), f++, t()) : n("Open fail for null"), i(), r
                    }
                    n("Reach max request num")
                }
            }, {
                key: "closeSocket",
                value: function(e) {
                    var t = e.success ? e.success : function() {},
                        n = e.fail ? e.fail : function() {},
                        i = e.complete ? e.complete : function() {};
                    l || n("No request"), l.forEach(function(e, t) {
                        e instanceof u && e.close()
                    }), t(), i()
                }
            }, {
                key: "sendMessage",
                value: function(e) {
                    var t = e.success ? e.success : function() {},
                        n = e.fail ? e.fail : function() {},
                        i = e.complete ? e.complete : function() {};
                    l || n("No request"), l.forEach(function(t, n) {
                        t instanceof u && t.send(e.data)
                    }), t(), i()
                }
            }]), e
        }();
    t.
default = d, d.SOCK_EVENT_OPEN = "OPEN", d.SOCK_EVENT_ERROR = "ERROR", d.SOCK_EVENT_MESSAGE = "MESSAGE", d.SOCK_EVENT_CLOSE = "CLOSE"
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = function(e) {
            if(e && e.__esModule) return e;
            var t = {};
            if(null != e) for(var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.
        default = e, t
        }(n(3));
    var o = function() {
            function e(t) {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.url = t.url, this.data = t.data || "", this.header = t.header || {}, this.dataType = t.dataType || t.responseType || "json", this.success = t.success ||
                function() {}, this.fail = t.fail ||
                function() {}, this.complete = t.complete ||
                function() {}, this.method = t.method || "get", this.object = t
            }
            return i(e, [{
                key: "request",
                value: function() {
                    var e = new BK.HttpUtil(this.url);
                    console.log("bk request:", this.object);
                    var t = "get";
                    switch(this.method) {
                    case "POST":
                        t = "post", console.log("this.data", this.data), e.setHttpPostData(this.data)
                    }
                    if(this.header) for(var n in this.header) e.setHttpHeader(n, this.header[n]);
                    for(var i in e.setHttpMethod(t), this.header) e.setHttpHeader(i, this.header[i]);
                    var r = this;
                    e.requestAsync(function(e, n) {
                        var i = e.bufferLength();
                        if(console.log("bk Http request : " + n + " # " + r.dataType), 200 != n) console.log("request fail:", n, t, i, e.readStringBuffer(), r.object), r.fail({
                            errMsg: " ",
                            statusCode: n,
                            header: {}
                        });
                        else {
                            var o = void 0;
                            o = "arraybuffer" != r.dataType ? e.readAsString(!0) : r.bricksBufferToArrayBuffer(e), "json" == r.dataType && (o = JSON.parse(o)), r.success({
                                data: o,
                                statusCode: n,
                                header: {}
                            }), r.complete && r.complete({
                                data: o,
                                statusCode: n,
                                header: {}
                            })
                        }
                    })
                }
            }, {
                key: "ab2str",
                value: function(e) {
                    return String.fromCharCode.apply(null, new Uint16Array(e))
                }
            }, {
                key: "bricksBufferToArrayBuffer",
                value: function(e) {
                    for(var t = new ArrayBuffer(e.bufferLength()), n = new Uint8Array(t), i = 0; i < e.bufferLength();) n[i++] = e.readUint8Buffer();
                    return t
                }
            }, {
                key: "uploadFile",
                value: function() {
                    var e = r.wrapSandBoxPath(this.object.filePath || ""),
                        t = this.object.formData || {},
                        n = this.header || {};
                    n["Content-Type"] = "multipart/form-data; boundary=a401103119";
                    var i = "";
                    for(var o in t) i += "--", i += "a401103119", i += "\r\n", i += 'Content-Disposition: form-data; name="', i += o, i += '"\r\n\r\n', i += t[o], i += "\r\n";
                    var a = BK.FileUtil.readFile(e);
                    i += "--", i += "a401103119", i += "\r\n", i += 'Content-Disposition: form-data; name="', i += o, i += '"; filename="', i += this.object.name, i += '"\r\n', i += "Content-Type: application/octet-stream\r\n\r\n";
                    var l = "";
                    l += "\r\n", l += "--", l += "a401103119", l += "--\r\n";
                    var f = new BK.Buffer(a.bufferLength() + i.length + l.length + 3 + 3);
                    f.writeStringBuffer(i), f.writeBuffer(a), f.writeStringBuffer(l);
                    var c = new BK.HttpUtil(this.url);
                    for(var u in c.setHttpMethod("post"), n) c.setHttpHeader(u, n[u]);
                    var s = this;
                    c.setBodyCompatible(!1), c.setHttpRawBody(f), c.requestAsync(function(e, t) {
                        var n = e.bufferLength();
                        200 != t ? (BK.Script.log(1, 0, "requestAsync fail: " + t), s.fail({
                            data: "",
                            statusCode: t,
                            header: {}
                        })) : (BK.Script.log(1, 0, "requestAsync success: " + s.success), s.success({
                            data: e.readBuffer(n),
                            statusCode: t,
                            header: {}
                        }))
                    })
                }
            }, {
                key: "downloadFile",
                value: function() {
                    var e = this.object.filePath || r.extractFilePathFromUrl(this.url);
                    this.relpath = e;
                    var t = r.wrapSandBoxPath(e),
                        n = r.extractFileNameFromUrl(this.url);
                    BK.Script.log(1, 0, "downloadFile " + t + n);
                    var i = new BK.HttpUtil(this.url);
                    for(var o in this.header) i.setHttpHeader(o, header[o]);
                    i.setHttpMethod("get");
                    var a = this;
                    i.requestAsync(function(e, i) {
                        e.bufferLength();
                        if(BK.Script.log(1, 0, BK.FileUtil.isFileExist(t + n)), 200 != i) BK.Script.log(1, 0, "requestAsync fail: " + i), a.fail({
                            data: "",
                            statusCode: i,
                            header: {}
                        });
                        else {
                            var r = -1 != t.indexOf(n) ? t : t + n;
                            BK.FileUtil.writeBufferToFile(r, e) || BK.Script.log(1, 0, "write download file failed");
                            var o = -1 != a.relpath.indexOf(n) ? a.relpath : a.relpath + n;
                            BK.Script.log(1, 0, "write download file " + o + " " + BK.FileUtil.isFileExist(r)), a.success({
                                tempFilePath: o,
                                statusCode: i,
                                header: {}
                            })
                        }
                    })
                }
            }]), e
        }();
    t.
default = o
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.Stats = void 0;
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = f(n(0)),
        o = f(n(1)),
        a = n(3),
        l = n(2);

    function f(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function c(e, t) {
        if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var u = function() {
            function e() {
                c(this, e)
            }
            return i(e, [{
                key: "readFile",
                value: function(e) {
                    r.
                default.d(0, 0, "readFile, object=" + JSON.stringify(e));
                    var t = this;
                    (0, l.setTimeout)(function() {
                        if(e) {
                            var n = e.encoding;
                            if("string" == typeof e.filePath) {
                                var i = (0, a.wrapLocalUrl)(e.filePath);
                                if(BK.FileUtil.isFileExist(i) || (i = (0, a.wrapSandBoxPath)(e.filePath)), BK.FileUtil.isFileExist(i)) {
                                    var o = BK.FileUtil.readFile(i),
                                        l = void 0,
                                        f = {
                                            data: l = !n || "utf-8" !== n && "utf8" !== n && "ascii" !== n && "latin1" !== n ? t.bricksBufferToArrayBuffer(o) : o.readAsString()
                                        };
                                    r.
                                default.d(0, 0, "readFile, success, filePath=" + e.filePath + ", bkFilePath=" + i + ", data=" + l), e.success && e.success(f)
                                } else {
                                    r.
                                default.d(0, 0, "readFile failed, file not exist, filePath=" + e.filePath + ", bkFilePath=" + i);
                                    f = {
                                        errMsg: "file not exist"
                                    };
                                    e.fail && e.fail(f)
                                }
                            } else {
                                r.
                            default.d(0, 0, "readFile failed, invalid filePath, filePath=" + e.filePath);
                                f = {
                                    errMsg: "invalid filePath"
                                };
                                e.fail && e.fail(f)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "readFile failed, no object")
                    }, 0)
                }
            }, {
                key: "readFileSync",
                value: function(e, t) {
                    if(r.
                default.d(0, 0, "readFileSync, filePath=" + e + ", encoding=" + t), "string" == typeof e) {
                        var n = (0, a.wrapLocalUrl)(e);
                        if(BK.FileUtil.isFileExist(n) || (n = (0, a.wrapSandBoxPath)(e)), BK.FileUtil.isFileExist(n)) {
                            var i = BK.FileUtil.readFile(n);
                            return "utf-8" === t || "utf8" === t || "ascii" === t || "latin1" === t ? (r.
                        default.d(0, 0, "readFileSync success, string, bkFilePath=" + n), i.readAsString()) : (r.
                        default.d(0, 0, "readFileSync success, ArrayBuffer, bkFilePath=" + n), BK.Misc.BKBufferToArrayBuffer(i))
                        }
                        throw new Error("readFileSync:fail, file not exist ${bkFilePath}")
                    }
                    throw new Error("readFileSync:fail, invalid filePath")
                }
            }, {
                key: "bricksBufferToArrayBuffer",
                value: function(e) {
                    for(var t = new ArrayBuffer(e.bufferLength()), n = new Uint8Array(t), i = 0; i < e.bufferLength();) n[i++] = e.readUint8Buffer();
                    return t
                }
            }, {
                key: "writeFile",
                value: function(e) {
                    r.
                default.d(0, 0, "writeFile, object=" + JSON.stringify(e)), (0, l.setTimeout)(function() {
                        if(e && e.filePath && e.data) {
                            if("string" == typeof e.filePath) {
                                var t = (0, a.wrapSandBoxPath)(e.filePath);
                                if("string" == typeof e.data) BK.FileUtil.writeFile(t, e.data);
                                else {
                                    var n = BK.Misc.arrayBufferToBKBuffer(e.data);
                                    BK.FileUtil.writeBufferToFile(t, n)
                                }
                                r.
                            default.d(0, 0, "writeFile success, filePath=" + e.filePath), e.success && e.success()
                            } else {
                                e.fail && e.fail({
                                    errMsg: "invalid filePath"
                                })
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "writeFile failed, no object")
                    }, 0)
                }
            }, {
                key: "writeFileSync",
                value: function(e, t, n) {
                    if(r.
                default.d(0, 0, "writeFileSync, filePath=" + e), !e || !t) throw new Error("writeFileSync:fail, invalid param");
                    if("string" != typeof e) throw new Error("writeFileSync:fail, invalid filePath");
                    var i = (0, a.wrapSandBoxPath)(e);
                    if("string" == typeof t) BK.FileUtil.writeFile(i, t);
                    else {
                        var o = BK.Misc.arrayBufferToBKBuffer(t);
                        BK.FileUtil.writeBufferToFile(i, o)
                    }
                    r.
                default.d(0, 0, "writeFileSync success, filePath=" + e)
                }
            }, {
                key: "access",
                value: function(e) {
                    r.
                default.d(0, 0, "access, object=" + JSON.stringify(e)), (0, l.setTimeout)(function() {
                        var t = BK.FileUtil.isFileExist((0, a.wrapLocalUrl)(e.path));
                        if(t || (t = BK.FileUtil.isFileExist((0, a.wrapSandBoxPath)(e.path))), r.
                    default.d(0, 0, "access, path=" + e.path + ", isFileExist=" + t), t) e.success && e.success();
                        else {
                            e.fail && e.fail({
                                errMsg: "fail no such file or directory"
                            })
                        }
                        e.complete && e.complete()
                    }, 0)
                }
            }, {
                key: "accessSync",
                value: function(e) {
                    var t = BK.FileUtil.isFileExist((0, a.wrapLocalUrl)(e));
                    if(t || (t = BK.FileUtil.isFileExist((0, a.wrapSandBoxPath)(e))), r.
                default.d(0, 0, "accessSync, path=" + e + ", isFileExist=" + t), !t) throw new Error("no such file or directory")
                }
            }, {
                key: "mkdirSync",
                value: function(e, t) {
                    if(r.
                default.d(0, 0, "mkdirSync, dirPath=" + e), "string" != typeof e) throw new Error("mkdirSync:failed, invalid dirPath");
                    var n = (0, a.wrapSandBoxPath)(e);
                    if(BK.FileUtil.isFileExist(n)) throw new Error("mkdirSync:failed, file already exist ${bkFilePath}");
                    if(!BK.FileUtil.makeDir(n)) throw new Error("mkdir failed")
                }
            }, {
                key: "mkdir",
                value: function(e) {
                    r.
                default.d(0, 0, "mkdir, object=" + JSON.stringify(e)), (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.dirPath) if(BK.FileUtil.makeDir((0, a.wrapSandBoxPath)(e.dirPath))) e.success && e.success();
                            else {
                                var t = {
                                    errMsg: "mkdir failed"
                                };
                                e.fail && e.fail(t)
                            } else {
                                t = {
                                    errMsg: "invalid dirPath"
                                };
                                e.fail && e.fail(t)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "mkdir failed, no object")
                    }, 0)
                }
            }, {
                key: "removeSavedFile",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.filePath) {
                                var t = (0, a.wrapSandBoxPath)(e.filePath);
                                if(BK.FileUtil.isFileExist(t)) if(BK.FileUtil.deleteFile(t)) e.success && e.success(n);
                                else {
                                    var n = {
                                        errMsg: "delete failed"
                                    };
                                    e.fail && e.fail(n)
                                } else {
                                    n = {
                                        errMsg: "file not exist"
                                    };
                                    e.fail && e.fail(n)
                                }
                            } else {
                                n = {
                                    errMsg: "invalid filePath"
                                };
                                e.fail && e.fail(n)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "removeSavedFile failed, no object")
                    }, 0)
                }
            }, {
                key: "unlink",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.filePath) {
                                var t = (0, a.wrapSandBoxPath)(e.filePath);
                                if(BK.FileUtil.isFileExist(t)) if(BK.FileUtil.deleteFile(t)) e.success && e.success();
                                else {
                                    var n = {
                                        errMsg: "fail"
                                    };
                                    e.fail && e.fail(n)
                                } else {
                                    n = {
                                        errMsg: "file not exist"
                                    };
                                    e.fail && e.fail(n)
                                }
                            } else {
                                n = {
                                    errMsg: "invalid filePath"
                                };
                                e.fail && e.fail(n)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "unlink failed, no object")
                    }, 0)
                }
            }, {
                key: "unlinkSync",
                value: function(e) {
                    if("string" == typeof e) {
                        var t = (0, a.wrapSandBoxPath)(e);
                        if(!BK.FileUtil.isFileExist(t)) throw new Error("unlinkSync:fail, file not exist");
                        BK.FileUtil.deleteFile(t) && object.success && object.success(res)
                    }
                }
            }, {
                key: "copyFile",
                value: function(e) {
                    var t = BK.FileUtil.readFile("GameSandBox://" + e.srcPath);
                    BK.FileUtil.writeBufferToFile("GameSandBox://" + e.destPath, t), e.success && e.success()
                }
            }, {
                key: "copyFileSync",
                value: function(e, t) {
                    var n = BK.FileUtil.readFile("GameSandBox://" + object.srcPath);
                    return BK.FileUtil.writeBufferToFile("GameSandBox://" + object.destPath, n)
                }
            }, {
                key: "getFileInfo",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.filePath) {
                                var t = (0, a.wrapLocalUrl)(e.filePath);
                                if(BK.FileUtil.isFileExist(t) || (t = (0, a.wrapSandBoxPath)(e.filePath)), BK.FileUtil.isFileExist(t) || BK.FileUtil.isFileExist((0, a.wrapSandBoxPath)(e.filePath))) {
                                    var n = BK.FileUtil.getFileInfo(t) || BK.FileUtil.getFileInfo((0, a.wrapSandBoxPath)(e.filePath));
                                    if(n) {
                                        var i = {
                                            size: n.size
                                        };
                                        e.success && e.success(i)
                                    } else {
                                        i = {
                                            errMsg: "getFileInfo failed"
                                        };
                                        e.fail && e.fail(i)
                                    }
                                } else {
                                    i = {
                                        errMsg: "file not exist"
                                    };
                                    e.fail && e.fail(i)
                                }
                            } else {
                                i = {
                                    errMsg: "invalid filePath"
                                };
                                e.fail && e.fail(i)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "getFileInfo failed, no object")
                    }, 0)
                }
            }, {
                key: "getSavedFileList",
                value: function(e) {}
            }, {
                key: "rmdir",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.dirPath) {
                                var t = (0, a.wrapSandBoxPath)(e.dirPath);
                                if(BK.FileUtil.deleteFile(t)) e.success && e.success(n);
                                else {
                                    var n = {
                                        errMsg: "fail"
                                    };
                                    e.fail && e.fail(n)
                                }
                            } else {
                                n = {
                                    errMsg: "invalid dirPath"
                                };
                                e.fail && e.fail(n)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "rmdir failed, no object")
                    }, 0)
                }
            }, {
                key: "rmdirSync",
                value: function(e, t) {
                    if("string" != typeof e) throw new Error("rmdirSync:fail, invalid dirPath");
                    var n = (0, a.wrapSandBoxPath)(e);
                    if(!BK.FileUtil.isFileExist(n)) throw new Error("rmdirSync:fail, no such file or directory ${dirPath}");
                    if(!BK.FileUtil.deleteFile(n)) throw new Error("rmdirSync:fail, ${dirPath}")
                }
            }, {
                key: "rename",
                value: function(e) {
                    r.
                default.d(0, 0, "rename not implement yet")
                }
            }, {
                key: "renameSync",
                value: function(e, t) {
                    r.
                default.d(0, 0, "renameSync not implement yet")
                }
            }, {
                key: "readdir",
                value: function(e) {
                    if(e) if("string" == typeof e.dirPath) {
                        var t = void 0;
                        0 == e.dirPath.indexOf(o.
                    default.SRC_PRE) || 0 == e.dirPath.indexOf(o.
                    default.SAND_PRE) ? t = e.dirPath : (t = (0, a.wrapSandBoxPath)(e.dirPath), BK.FileUtil.isFileExist(t) || (t = (0, a.wrapLocalUrl)(e.dirPath))), r.
                    default.d(0, 0, "readdir dirPath=" + e.dirPath + ", bkFilePath=" + t), BK.FileUtil.isFileExist(t) ? BK.FileUtil.getFileList({
                            path: t,
                            needDir: !0
                        }, function(t, n) {
                            if(0 == t) {
                                var i = [];
                                if(n && n.files && n.files.length > 0) for(var r = 0; r < n.files.length; r++) {
                                    var o = n.files[r];
                                    i[r] = o.substr(o.lastIndexOf("/") + 1)
                                }
                                e.success && e.success({
                                    files: i
                                })
                            } else e.fail && e.fail({
                                errMsg: "get fileList failed, code:${code}"
                            });
                            e.complete && e.complete()
                        }):
                        r.
                    default.d(0, 0, "readdir bkFilePath=" + t + ", not exist")
                    } else e.fail && e.fail({
                        errMsg: "invalid dirPath"
                    }), e.complete && e.complete();
                    else r.
                default.d(0, 0, "readdir failed, no object")
                }
            }, {
                key: "readdirSync",
                value: function(e) {
                    if("string" == typeof e) {
                        var t = void 0;
                        0 == e.indexOf(o.
                    default.SRC_PRE) || 0 == e.indexOf(o.
                    default.SAND_PRE) ? t = e : (t = (0, a.wrapSandBoxPath)(e), BK.FileUtil.isFileExist(t) || (t = (0, a.wrapLocalUrl)(e))), r.
                    default.d(0, 0, "readdirSync dirPath=" + e + ", bkFilePath=" + t);
                        var n = [];
                        return BK.FileUtil.isFileExist(t) ? BK.FileUtil.getFileList({
                            path: t,
                            needDir: !0
                        }, function(e, i) {
                            if(r.
                        default.d(0, 0, "readdirSync bkFilePath=" + t + ", code=" + e), 0 == e && i && i.files && i.files.length > 0) for(var o = 0; o < i.files.length; o++) {
                                var a = i.files[o];
                                n[o] = a.substr(a.lastIndexOf("/") + 1)
                            }
                        }):
                        r.
                    default.d(0, 0, "readdirSync bkFilePath=" + t + ", not exist"), n
                    }
                    throw new Error("readdirSync failed, invalid dirPath")
                }
            }, {
                key: "saveFile",
                value: function(e) {
                    r.
                default.d(0, 0, "saveFile not implement yet")
                }
            }, {
                key: "saveFileSync",
                value: function(e, t) {
                    r.
                default.d(0, 0, "saveFileSync not implement yet")
                }
            }, {
                key: "stat",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.path) {
                                var t = (0, a.wrapLocalUrl)(e.path);
                                if(BK.FileUtil.isFileExist(t) || (t = (0, a.wrapSandBoxPath)(e.path)), BK.FileUtil.isFileExist(t)) {
                                    var n = BK.FileUtil.getFileInfo(t);
                                    if(n) {
                                        var i = {
                                            stat: new s(e.path, 0, n.size, n.atime, n.mtime)
                                        };
                                        e.success && e.success(i)
                                    } else {
                                        i = {
                                            errMsg: "get file info failed"
                                        };
                                        e.fail && e.fail(i)
                                    }
                                } else {
                                    i = {
                                        errMsg: "file not exist"
                                    };
                                    e.fail && e.fail(i)
                                }
                            } else {
                                i = {
                                    errMsg: "no path"
                                };
                                e.fail && e.fail(i)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "stat failed, no param")
                    }, 0)
                }
            }, {
                key: "statSync",
                value: function(e) {
                    if("string" == typeof e) {
                        var t = (0, a.wrapLocalUrl)(e);
                        if(BK.FileUtil.isFileExist(t) || (t = (0, a.wrapSandBoxPath)(e)), BK.FileUtil.isFileExist(t)) {
                            var n = BK.FileUtil.getFileInfo(t);
                            if(n) return new s(e, 0, n.size, n.atime, n.mtime)
                        } else r.
                    default.d(0, 0, "statSync failed, file not exist, file:" + t)
                    }
                }
            }, {
                key: "unzip",
                value: function(e) {
                    (0, l.setTimeout)(function() {
                        if(e) {
                            if("string" == typeof e.zipFilePath && "string" == typeof e.targetPath) if(BK.FileUtil.unzip(e.zipFilePath, e.targetPath)) e.success && e.success();
                            else {
                                var t = {
                                    errMsg: "unzip failed"
                                };
                                e.fail && e.fail(t)
                            } else {
                                t = {
                                    errMsg: "invalid path"
                                };
                                e.fail && e.fail(t)
                            }
                            e.complete && e.complete()
                        } else r.
                    default.d(0, 0, "unzip failed, no object")
                    }, 0)
                }
            }]), e
        }();
    t.
default = u;
    var s = t.Stats = function() {
            function e(t, n, i, r, o) {
                c(this, e), this.path = t, this.mode = n, this.size = i, this.lastAccessedTime = r, this.lastModifiedTime = o, this.isDir = BK.FileUtil.isDirectory(t)
            }
            return i(e, [{
                key: "isFile",
                value: function() {
                    return !this.isDir
                }
            }, {
                key: "isDirectory",
                value: function() {
                    return this.isDir
                }
            }]), e
        }()
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = (l(n(1)), l(n(0))),
        o = n(3),
        a = n(2);

    function l(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var f = new WeakMap,
        c = new WeakMap,
        u = new WeakMap,
        s = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), c.set(this, ""), u.set(this, !1)
            }
            return i(e, [{
                key: "play",
                value: function() {
                    var e = c.get(this),
                        t = u.get(this);
                    if(r.
                default.d(0, 0, "InnerAudioContext play: " + e + ", loop=" + t), void 0 !== e) {
                        var n = this;
                        if(void 0 === f.get(this)) {
                            var i = (0, o.getAudioPath)(e);
                            if((0, o.isRemoteUrl)(e)) {
                                if(!BK.FileUtil.isFileExist(i)) {
                                    var a = i;
                                    r.
                                default.d(0, 0, "InnerAudioContext, not downloaded:" + e + ", path:" + a);
                                    var l = new BK.HttpUtil(e);
                                    return l.setHttpMethod("get"), void l.requestAsync(function(e, o) {
                                        (r.
                                    default.d(0, 0, "InnerAudioContext, download audio over"), 200 == o) ? BK.FileUtil.writeBufferToFile(a, e) ? (f.set(n, n.createContext(i, t)), void 0 !== f.get(n) && (f.get(n).startMusic(function() {
                                            n.onEndedCallback && n.onEndedCallback()
                                        }), n.onPlayCallback && n.onPlayCallback())) : r.
                                    default.d(0, 0, "InnerAudioContext, save audio failed"):
                                        r.
                                    default.d(0, 0, "InnerAudioContext, download audio failed:" + o + ", url=" + url)
                                    })
                                }
                                r.
                            default.d(0, 0, "InnerAudioContext, downloaded:" + e), f.set(this, this.createContext(i, t))
                            } else f.set(this, this.createContext(i, t))
                        }
                        void 0 !== f.get(this) && (f.get(this).startMusic(function() {
                            n.onEndedCallback && n.onEndedCallback()
                        }), n.onPlayCallback && n.onPlayCallback())
                    } else r.
                default.d(0, 0, "no src value")
                }
            }, {
                key: "createContext",
                value: function(e, t) {
                    return new BK.Audio(t ? 0 : 1, e, t ? -1 : 1)
                }
            }, {
                key: "pause",
                value: function() {
                    if(r.
                default.d(0, 0, "InnerAudioContext pause: " + c.get(this)), void 0 !== f.get(this)) {
                        f.get(this).pauseMusic(), this.onPauseCallback && this.onPauseCallback()
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    if(r.
                default.d(0, 0, "InnerAudioContext stop: " + c.get(this)), void 0 !== f.get(this)) {
                        f.get(this).stopMusic(), this.onStopCallback && this.onStopCallback()
                    }
                }
            }, {
                key: "seek",
                value: function() {}
            }, {
                key: "onCanplay",
                value: function(e) {
                    this.onCanplayCallback = e
                }
            }, {
                key: "offCanplay",
                value: function(e) {
                    this.onCanplayCallback = void 0
                }
            }, {
                key: "onPlay",
                value: function(e) {
                    this.onPlayCallback = e
                }
            }, {
                key: "offPlay",
                value: function(e) {
                    this.onPlayCallback = void 0
                }
            }, {
                key: "onPause",
                value: function(e) {
                    this.onPauseCallback = e
                }
            }, {
                key: "offPause",
                value: function(e) {
                    this.onPauseCallback = void 0
                }
            }, {
                key: "onStop",
                value: function(e) {
                    this.onStopCallback = e
                }
            }, {
                key: "offStop",
                value: function(e) {
                    this.onStopCallback = void 0
                }
            }, {
                key: "onEnded",
                value: function(e) {
                    this.onEndedCallback = e
                }
            }, {
                key: "offEnded",
                value: function(e) {
                    this.onEndedCallback = void 0
                }
            }, {
                key: "onError",
                value: function(e) {
                    this.onErrorCallback = e
                }
            }, {
                key: "offError",
                value: function(e) {
                    this.onErrorCallback = void 0
                }
            }, {
                key: "onTimeUpdate",
                value: function(e) {
                    this.onTimeUpdateCallback = e
                }
            }, {
                key: "offTimeUpdate",
                value: function(e) {
                    this.onTimeUpdateCallback = void 0
                }
            }, {
                key: "onWaiting",
                value: function(e) {
                    this.onWaitingCallback = e
                }
            }, {
                key: "offWaiting",
                value: function(e) {
                    this.onWaitingCallback = void 0
                }
            }, {
                key: "onSeeking",
                value: function(e) {
                    this.onSeekingCallback = e
                }
            }, {
                key: "offSeeking",
                value: function(e) {
                    this.onSeekingCallback = void 0
                }
            }, {
                key: "onSeeked",
                value: function(e) {
                    this.onSeekedCallback = e
                }
            }, {
                key: "offSeeked",
                value: function(e) {
                    this.onSeekedCallback = void 0
                }
            }, {
                key: "src",
                get: function() {
                    return c.get(this)
                },
                set: function(e) {
                    c.set(this, e);
                    var t = this;
                    (0, a.setTimeout)(function() {
                        r.
                    default.d(0, 0, "InnerAudioContext onCanplayCallback"), t.onCanplayCallback && t.onCanplayCallback()
                    }, 0)
                }
            }, {
                key: "loop",
                get: function() {
                    return u.get(this)
                },
                set: function(e) {
                    u.set(this, e)
                }
            }]), e
        }();
    t.
default = s
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = l(n(0)),
        o = (l(n(1)), n(3)),
        a = n(2);

    function l(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var f = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.width = 0, this.height = 0, this.tmpSrc = "", this._event = {}, this.bkLocalPath = ""
            }
            return i(e, [{
                key: "removeEventListener",
                value: function(e, t) {
                    this._event[e] || (this._event[e] = []);
                    var n = this._event[e].indexOf(t);
                    this._event[e].splice(n, 1)
                }
            }, {
                key: "addEventListener",
                value: function(e, t, n) {
                    this._event[e] || (this._event[e] = []), this._event[e].push(t), n && n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n && n.once, n && n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.")
                }
            }, {
                key: "dispatchEvent",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this._event[e.type];
                    if(void 0 !== t) for(var n = 0; n < t.length; n++) t[n] && t[n](e)
                }
            }, {
                key: "handleImgUrl",
                value: function() {
                    var e = this.tmpSrc,
                        t = this.bkLocalPath;
                    r.
                default.d(0, 0, "image, handleImgUrl, url=" + e + ", bkLocalPath=" + t), "string" == typeof e ? (0, o.isRemoteUrl)(e) ? BK.FileUtil.isFileExist(t) ? (r.
                default.d(0, 0, "image, handleImgUrl, downloaded, localPath=" + t), this.createImgObj(t)):
                    (r.
                default.d(0, 0, "image, handleImgUrl, load remote url, url=" + e), this.loadImg()) : this.createImgObj(t) : this.dispatchEvent({
                        type: "error"
                    })
                }
            }, {
                key: "loadImg",
                value: function() {
                    var e = this,
                        t = e.tmpSrc,
                        n = e.bkLocalPath;
                    r.
                default.d(0, 0, "image, loadImg, load remote url, url=" + t + ", path=" + n);
                    var i = new BK.HttpUtil(t);
                    i.setHttpMethod("get"), i.requestAsync(function(i, o) {
                        200 == o ? BK.FileUtil.writeBufferToFile(n, i) ? e.createImgObj(n) : (r.
                    default.d(0, 0, "ImageAdapter, save img failed"), e.dispatchEvent({
                            type: "error"
                        })) : (r.
                    default.d(0, 0, "ImageAdapter, loadImg failed:" + o + ", url=" + t), e.dispatchEvent({
                            type: "error"
                        }))
                    })
                }
            }, {
                key: "createImgObj",
                value: function(e) {
                    var t = BK.Image.loadImage(e);
                    r.
                default.d(0, 0, "image, createImgObj, img=" + t + ", path=" + e);
                    var n = this;
                    void 0 !== t ? (this._bknode = t, this.__nativeObj = t, this.naturalWidth = t.width, this.naturalHeight = t.height, this.width = t.width, this.height = t.height, this.type = "arraybuffer", this.source = this.src, 0 === this.width && 0 === this.height && (this.width = t.width, this.height = t.height), r.
                default.d(0, 0, "image, createImgObj, dispatchEvent load with obj, path=" + e), (0, a.setTimeout)(function() {
                        n.dispatchEvent({
                            target: n,
                            type: "load"
                        })
                    }, 0)):
                    (r.
                default.d(0, 0, "image, createImgObj, dispatchEvent error, path=" + e), (0, a.setTimeout)(function() {
                        n.dispatchEvent({
                            type: "error",
                            target: n
                        })
                    }, 0))
                }
            }, {
                key: "height",
                get: function() {
                    return this._height
                },
                set: function(e) {
                    this._height = e
                }
            }, {
                key: "width",
                get: function() {
                    return this._width
                },
                set: function(e) {
                    this._width = e
                }
            }, {
                key: "src",
                get: function() {
                    return this.bkLocalPath
                },
                set: function(e) {
                    var t = (0, o.getImgPath)(e);
                    r.
                default.d(0, 0, "image, src=" + e), t !== this.bkLocalPath && (this.bkLocalPath = t, this.tmpSrc = e, this.handleImgUrl())
                }
            }, {
                key: "data",
                get: function() {
                    return this._data
                },
                set: function(e) {
                    this._data = e
                }
            }, {
                key: "source",
                get: function() {
                    return this._source
                },
                set: function(e) {
                    this._source = e
                }
            }, {
                key: "onload",
                set: function(e) {
                    this.addEventListener("load", e, {
                        once: !0
                    })
                }
            }, {
                key: "onerror",
                set: function(e) {
                    this.addEventListener("error", e, {
                        once: !0
                    })
                }
            }]), e
        }();
    t.
default = f
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Math.PI,
        r = 2 * i,
        o = i / 180,
        a = [];

    function l(e, t, n, i, r, o) {
        void 0 === e && (e = 1), void 0 === t && (t = 0), void 0 === n && (n = 0), void 0 === i && (i = 1), void 0 === r && (r = 0), void 0 === o && (o = 0);
        return this.a = e, this.b = t, this.c = n, this.d = i, this.tx = r, this.ty = o, this
    }
    l.release = function(e) {
        e && a.push(e)
    }, l.create = function() {
        var e = a.pop();
        return e || (e = new l), e
    }, l.prototype.clone = function() {
        return new l(this.a, this.b, this.c, this.d, this.tx, this.ty)
    }, l.prototype.concat = function(e) {
        var t = this.a * e.a,
            n = 0,
            i = 0,
            r = this.d * e.d,
            o = this.tx * e.a + e.tx,
            a = this.ty * e.d + e.ty;
        0 === this.b && 0 === this.c && 0 === e.b && 0 === e.c || (t += this.b * e.c, r += this.c * e.b, n += this.a * e.b + this.b * e.d, i += this.c * e.a + this.d * e.c, o += this.ty * e.c, a += this.tx * e.b), this.a = t, this.b = n, this.c = i, this.d = r, this.tx = o, this.ty = a
    }, l.prototype.copyFrom = function(e) {
        return this.a = e.a, this.b = e.b, this.c = e.c, this.d = e.d, this.tx = e.tx, this.ty = e.ty, this
    }, l.prototype.identity = function() {
        this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0
    }, l.prototype.invert = function() {
        this.$invertInto(this)
    }, l.prototype.$invertInto = function(e) {
        var t = this.a,
            n = this.b,
            i = this.c,
            r = this.d,
            o = this.tx,
            a = this.ty;
        if(0 == n && 0 == i) return e.b = e.c = 0, void(0 == t || 0 == r ? e.a = e.d = e.tx = e.ty = 0 : (t = e.a = 1 / t, r = e.d = 1 / r, e.tx = -t * o, e.ty = -r * a));
        var l = t * r - n * i;
        if(0 != l) {
            l = 1 / l;
            var f = e.a = r * l;
            n = e.b = -n * l, i = e.c = -i * l, r = e.d = t * l, e.tx = -(f * o + i * a), e.ty = -(n * o + r * a)
        } else e.identity()
    }, l.prototype.rotate = function(e) {
        if(0 !== (e = +e)) {
            e /= o;
            var t = egret.NumberUtils.cos(e),
                n = egret.NumberUtils.sin(e),
                i = this.a,
                r = this.b,
                a = this.c,
                l = this.d,
                f = this.tx,
                c = this.ty;
            this.a = i * t - r * n, this.b = i * n + r * t, this.c = a * t - l * n, this.d = a * n + l * t, this.tx = f * t - c * n, this.ty = f * n + c * t
        }
    }, l.prototype.scale = function(e, t) {
        1 !== e && (this.a *= e, this.c *= e, this.tx *= e), 1 !== t && (this.b *= t, this.d *= t, this.ty *= t)
    }, l.prototype.setTo = function(e, t, n, i, r, o) {
        return this.a = e, this.b = t, this.c = n, this.d = i, this.tx = r, this.ty = o, this
    }, l.prototype.transformPoint = function(e, t, n) {
        var i = this.a * e + this.c * t + this.tx,
            r = this.b * e + this.d * t + this.ty;
        return n ? (n.setTo(i, r), n) : new egret.Point(i, r)
    }, l.prototype.translate = function(e, t) {
        this.tx += e, this.ty += t
    }, l.prototype.equals = function(e) {
        return this.a == e.a && this.b == e.b && this.c == e.c && this.d == e.d && this.tx == e.tx && this.ty == e.ty
    }, l.prototype.prepend = function(e, t, n, i, r, o) {
        var a = this.tx;
        if(1 != e || 0 != t || 0 != n || 1 != i) {
            var l = this.a,
                f = this.c;
            this.a = l * e + this.b * n, this.b = l * t + this.b * i, this.c = f * e + this.d * n, this.d = f * t + this.d * i
        }
        return this.tx = a * e + this.ty * n + r, this.ty = a * t + this.ty * i + o, this
    }, l.prototype.append = function(e, t, n, i, r, o) {
        var a = this.a,
            l = this.b,
            f = this.c,
            c = this.d;
        return 1 == e && 0 == t && 0 == n && 1 == i || (this.a = e * a + t * f, this.b = e * l + t * c, this.c = n * a + i * f, this.d = n * l + i * c), this.tx = r * a + o * f + this.tx, this.ty = r * l + o * c + this.ty, this
    }, l.prototype.deltaTransformPoint = function(e) {
        var t = this.a * e.x + this.c * e.y,
            n = this.b * e.x + this.d * e.y;
        return new egret.Point(t, n)
    }, l.prototype.toString = function() {
        return "(a=" + this.a + ", b=" + this.b + ", c=" + this.c + ", d=" + this.d + ", tx=" + this.tx + ", ty=" + this.ty + ")"
    }, l.prototype.createBox = function(e, t, n, i, r) {
        void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === r && (r = 0);
        if(0 !== n) {
            n /= o;
            var a = egret.NumberUtils.cos(n),
                l = egret.NumberUtils.sin(n);
            this.a = a * e, this.b = l * t, this.c = -l * e, this.d = a * t
        } else this.a = e, this.b = 0, this.c = 0, this.d = t;
        this.tx = i, this.ty = r
    }, l.prototype.createGradientBox = function(e, t, n, i, r) {
        void 0 === n && (n = 0), void 0 === i && (i = 0), void 0 === r && (r = 0), this.createBox(e / 1638.4, t / 1638.4, n, i + e / 2, r + t / 2)
    }, l.prototype.$transformBounds = function(e) {
        var t = this.a,
            n = this.b,
            i = this.c,
            r = this.d,
            o = this.tx,
            a = this.ty,
            l = e.x,
            f = e.y,
            c = l + e.width,
            u = f + e.height,
            s = t * l + i * f + o,
            d = n * l + r * f + a,
            h = t * c + i * f + o,
            g = n * c + r * f + a,
            p = t * c + i * u + o,
            E = n * c + r * u + a,
            v = t * l + i * u + o,
            y = n * l + r * u + a,
            _ = 0;
        s > h && (_ = s, s = h, h = _), p > v && (_ = p, p = v, v = _), e.x = Math.floor(s < p ? s : p), e.width = Math.ceil((h > v ? h : v) - e.x), d > g && (_ = d, d = g, g = _), E > y && (_ = E, E = y, y = _), e.y = Math.floor(d < E ? d : E), e.height = Math.ceil((g > y ? g : y) - e.y)
    }, l.prototype.getDeterminant = function() {
        return this.a * this.d - this.b * this.c
    }, l.prototype.$getScaleX = function() {
        var e = this;
        if(0 == e.b) return e.a;
        var t = Math.sqrt(e.a * e.a + e.b * e.b);
        return this.getDeterminant() < 0 ? -t : t
    }, l.prototype.$getScaleY = function() {
        var e = this;
        if(0 == e.c) return e.d;
        var t = Math.sqrt(e.c * e.c + e.d * e.d);
        return this.getDeterminant() < 0 ? -t : t
    }, l.prototype.$getSkewX = function() {
        return this.d < 0 ? Math.atan2(this.d, this.c) + i / 2 : Math.atan2(this.d, this.c) - i / 2
    }, l.prototype.$getSkewY = function() {
        return this.a < 0 ? Math.atan2(this.b, this.a) - i : Math.atan2(this.b, this.a)
    }, l.prototype.$updateScaleAndRotation = function(e, t, n, i) {
        if(!(0 != n && n != r || 0 != i && i != r)) return this.a = e, this.b = this.c = 0, void(this.d = t);
        n /= o, i /= o;
        var a = egret.NumberUtils.cos(n),
            l = egret.NumberUtils.sin(n);
        n == i ? (this.a = a * e, this.b = l * e) : (this.a = egret.NumberUtils.cos(i) * e, this.b = egret.NumberUtils.sin(i) * e), this.c = -l * t, this.d = a * t
    }, l.prototype.$preMultiplyInto = function(e, t) {
        var n = e.a * this.a,
            i = 0,
            r = 0,
            o = e.d * this.d,
            a = e.tx * this.a + this.tx,
            l = e.ty * this.d + this.ty;
        0 === e.b && 0 === e.c && 0 === this.b && 0 === this.c || (n += e.b * this.c, o += e.c * this.b, i += e.a * this.b + e.b * this.d, r += e.c * this.a + e.d * this.c, a += e.ty * this.c, l += e.tx * this.b), t.a = n, t.b = i, t.c = r, t.d = o, t.tx = a, t.ty = l
    }, t.
default = l
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i, r, o = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

    function a() {
        return i || ((i = new BK.WebGL).id = 0, i.DEPTH_BUFFER_BIT = 256, i.STENCIL_BUFFER_BIT = 1024, i.COLOR_BUFFER_BIT = 16384, i.POINTS = 0, i.LINES = 1, i.LINE_LOOP = 2, i.LINE_STRIP = 3, i.TRIANGLES = 4, i.TRIANGLE_STRIP = 5, i.TRIANGLE_FAN = 6, i.ZERO = 0, i.ONE = 1, i.SRC_COLOR = 768, i.ONE_MINUS_SRC_COLOR = 769, i.SRC_ALPHA = 770, i.ONE_MINUS_SRC_ALPHA = 771, i.DST_ALPHA = 772, i.ONE_MINUS_DST_ALPHA = 773, i.DST_COLOR = 774, i.ONE_MINUS_DST_COLOR = 775, i.SRC_ALPHA_SATURATE = 776, i.FUNC_ADD = 32774, i.BLEND_EQUATION = 32777, i.BLEND_EQUATION_RGB = 32777, i.BLEND_EQUATION_ALPHA = 34877, i.FUNC_SUBTRACT = 32778, i.FUNC_REVERSE_SUBTRACT = 32779, i.BLEND_DST_RGB = 32968, i.BLEND_SRC_RGB = 32969, i.BLEND_DST_ALPHA = 32970, i.BLEND_SRC_ALPHA = 32971, i.CONSTANT_COLOR = 32769, i.ONE_MINUS_CONSTANT_COLOR = 32770, i.CONSTANT_ALPHA = 32771, i.ONE_MINUS_CONSTANT_ALPHA = 32772, i.BLEND_COLOR = 32773, i.ARRAY_BUFFER = 34962, i.ELEMENT_ARRAY_BUFFER = 34963, i.ARRAY_BUFFER_BINDING = 34964, i.ELEMENT_ARRAY_BUFFER_BINDING = 34965, i.STREAM_DRAW = 35040, i.STATIC_DRAW = 35044, i.DYNAMIC_DRAW = 35048, i.BUFFER_SIZE = 34660, i.BUFFER_USAGE = 34661, i.CURRENT_VERTEX_ATTRIB = 34342, i.FRONT = 1028, i.BACK = 1029, i.FRONT_AND_BACK = 1032, i.CULL_FACE = 2884, i.BLEND = 3042, i.DITHER = 3024, i.STENCIL_TEST = 2960, i.DEPTH_TEST = 2929, i.SCISSOR_TEST = 3089, i.POLYGON_OFFSET_FILL = 32823, i.SAMPLE_ALPHA_TO_COVERAGE = 32926, i.SAMPLE_COVERAGE = 32928, i.NO_ERROR = 0, i.INVALID_ENUM = 1280, i.INVALID_VALUE = 1281, i.INVALID_OPERATION = 1282, i.OUT_OF_MEMORY = 1285, i.CW = 2304, i.CCW = 2305, i.LINE_WIDTH = 2849, i.ALIASED_POINT_SIZE_RANGE = 33901, i.ALIASED_LINE_WIDTH_RANGE = 33902, i.CULL_FACE_MODE = 2885, i.FRONT_FACE = 2886, i.DEPTH_RANGE = 2928, i.DEPTH_WRITEMASK = 2930, i.DEPTH_CLEAR_VALUE = 2931, i.DEPTH_FUNC = 2932, i.STENCIL_CLEAR_VALUE = 2961, i.STENCIL_FUNC = 2962, i.STENCIL_FAIL = 2964, i.STENCIL_PASS_DEPTH_FAIL = 2965, i.STENCIL_PASS_DEPTH_PASS = 2966, i.STENCIL_REF = 2967, i.STENCIL_VALUE_MASK = 2963, i.STENCIL_WRITEMASK = 2968, i.STENCIL_BACK_FUNC = 34816, i.STENCIL_BACK_FAIL = 34817, i.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, i.STENCIL_BACK_PASS_DEPTH_PASS = 34819, i.STENCIL_BACK_REF = 36003, i.STENCIL_BACK_VALUE_MASK = 36004, i.STENCIL_BACK_WRITEMASK = 36005, i.VIEWPORT = 2978, i.SCISSOR_BOX = 3088, i.COLOR_CLEAR_VALUE = 3106, i.COLOR_WRITEMASK = 3107, i.UNPACK_ALIGNMENT = 3317, i.PACK_ALIGNMENT = 3333, i.MAX_TEXTURE_SIZE = 3379, i.MAX_VIEWPORT_DIMS = 3386, i.SUBPIXEL_BITS = 3408, i.RED_BITS = 3410, i.GREEN_BITS = 3411, i.BLUE_BITS = 3412, i.ALPHA_BITS = 3413, i.DEPTH_BITS = 3414, i.STENCIL_BITS = 3415, i.POLYGON_OFFSET_UNITS = 10752, i.POLYGON_OFFSET_FACTOR = 32824, i.TEXTURE_BINDING_2D = 32873, i.SAMPLE_BUFFERS = 32936, i.SAMPLES = 32937, i.SAMPLE_COVERAGE_VALUE = 32938, i.SAMPLE_COVERAGE_INVERT = 32939, i.COMPRESSED_TEXTURE_FORMATS = 34467, i.DONT_CARE = 4352, i.FASTEST = 4353, i.NICEST = 4354, i.GENERATE_MIPMAP_HINT = 33170, i.BYTE = 5120, i.UNSIGNED_BYTE = 5121, i.SHORT = 5122, i.UNSIGNED_SHORT = 5123, i.INT = 5124, i.UNSIGNED_INT = 5125, i.FLOAT = 5126, i.DEPTH_COMPONENT = 6402, i.ALPHA = 6406, i.RGB = 6407, i.RGBA = 6408, i.LUMINANCE = 6409, i.LUMINANCE_ALPHA = 6410, i.UNSIGNED_SHORT_4_4_4_4 = 32819, i.UNSIGNED_SHORT_5_5_5_1 = 32820, i.UNSIGNED_SHORT_5_6_5 = 33635, i.FRAGMENT_SHADER = 35632, i.VERTEX_SHADER = 35633, i.MAX_VERTEX_ATTRIBS = 34921, i.MAX_VERTEX_UNIFORM_VECTORS = 36347, i.MAX_VARYING_VECTORS = 36348, i.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, i.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, i.MAX_TEXTURE_IMAGE_UNITS = 34930, i.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, i.SHADER_TYPE = 35663, i.DELETE_STATUS = 35712, i.LINK_STATUS = 35714, i.VALIDATE_STATUS = 35715, i.ATTACHED_SHADERS = 35717, i.ACTIVE_UNIFORMS = 35718, i.ACTIVE_ATTRIBUTES = 35721, i.SHADING_LANGUAGE_VERSION = 35724, i.CURRENT_PROGRAM = 35725, i.NEVER = 512, i.LESS = 513, i.EQUAL = 514, i.LEQUAL = 515, i.GREATER = 516, i.NOTEQUAL = 517, i.GEQUAL = 518, i.ALWAYS = 519, i.KEEP = 7680, i.REPLACE = 7681, i.INCR = 7682, i.DECR = 7683, i.INVERT = 5386, i.INCR_WRAP = 34055, i.DECR_WRAP = 34056, i.VENDOR = 7936, i.RENDERER = 7937, i.VERSION = 7938, i.NEAREST = 9728, i.LINEAR = 9729, i.NEAREST_MIPMAP_NEAREST = 9984, i.LINEAR_MIPMAP_NEAREST = 9985, i.NEAREST_MIPMAP_LINEAR = 9986, i.LINEAR_MIPMAP_LINEAR = 9987, i.TEXTURE_MAG_FILTER = 10240, i.TEXTURE_MIN_FILTER = 10241, i.TEXTURE_WRAP_S = 10242, i.TEXTURE_WRAP_T = 10243, i.TEXTURE_2D = 3553, i.TEXTURE = 5890, i.TEXTURE_CUBE_MAP = 34067, i.TEXTURE_BINDING_CUBE_MAP = 34068, i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, i.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, i.TEXTURE0 = 33984, i.TEXTURE1 = 33985, i.TEXTURE2 = 33986, i.TEXTURE3 = 33987, i.TEXTURE4 = 33988, i.TEXTURE5 = 33989, i.TEXTURE6 = 33990, i.TEXTURE7 = 33991, i.TEXTURE8 = 33992, i.TEXTURE9 = 33993, i.TEXTURE10 = 33994, i.TEXTURE11 = 33995, i.TEXTURE12 = 33996, i.TEXTURE13 = 33997, i.TEXTURE14 = 33998, i.TEXTURE15 = 33999, i.TEXTURE16 = 34e3, i.TEXTURE17 = 34001, i.TEXTURE18 = 34002, i.TEXTURE19 = 34003, i.TEXTURE20 = 34004, i.TEXTURE21 = 34005, i.TEXTURE22 = 34006, i.TEXTURE23 = 34007, i.TEXTURE24 = 34008, i.TEXTURE25 = 34009, i.TEXTURE26 = 34010, i.TEXTURE27 = 34011, i.TEXTURE28 = 34012, i.TEXTURE29 = 34013, i.TEXTURE30 = 34014, i.TEXTURE31 = 34015, i.ACTIVE_TEXTURE = 34016, i.REPEAT = 10497, i.CLAMP_TO_EDGE = 33071, i.MIRRORED_REPEAT = 33648, i.FLOAT_VEC2 = 35664, i.FLOAT_VEC3 = 35665, i.FLOAT_VEC4 = 35666, i.INT_VEC2 = 35667, i.INT_VEC3 = 35668, i.INT_VEC4 = 35669, i.BOOL = 35670, i.BOOL_VEC2 = 35671, i.BOOL_VEC3 = 35672, i.BOOL_VEC4 = 35673, i.FLOAT_MAT2 = 35674, i.FLOAT_MAT3 = 35675, i.FLOAT_MAT4 = 35676, i.SAMPLER_2D = 35678, i.SAMPLER_CUBE = 35680, i.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, i.VERTEX_ATTRIB_ARRAY_SIZE = 34339, i.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, i.VERTEX_ATTRIB_ARRAY_TYPE = 34341, i.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, i.VERTEX_ATTRIB_ARRAY_POINTER = 34373, i.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, i.IMPLEMENTATION_COLOR_READ_TYPE = 35738, i.IMPLEMENTATION_COLOR_READ_FORMAT = 35739, i.COMPILE_STATUS = 35713, i.LOW_FLOAT = 36336, i.MEDIUM_FLOAT = 36337, i.HIGH_FLOAT = 36338, i.LOW_INT = 36339, i.MEDIUM_INT = 36340, i.HIGH_INT = 36341, i.FRAMEBUFFER = 36160, i.RENDERBUFFER = 36161, i.RGBA4 = 32854, i.RGB5_A1 = 32855, i.RGB565 = 36194, i.DEPTH_COMPONENT16 = 33189, i.STENCIL_INDEX8 = 36168, i.DEPTH_STENCIL = 34041, i.RENDERBUFFER_WIDTH = 36162, i.RENDERBUFFER_HEIGHT = 36163, i.RENDERBUFFER_INTERNAL_FORMAT = 36164, i.RENDERBUFFER_RED_SIZE = 36176, i.RENDERBUFFER_GREEN_SIZE = 36177, i.RENDERBUFFER_BLUE_SIZE = 36178, i.RENDERBUFFER_ALPHA_SIZE = 36179, i.RENDERBUFFER_DEPTH_SIZE = 36180, i.RENDERBUFFER_STENCIL_SIZE = 36181, i.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, i.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, i.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, i.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, i.COLOR_ATTACHMENT0 = 36064, i.DEPTH_ATTACHMENT = 36096, i.STENCIL_ATTACHMENT = 36128, i.DEPTH_STENCIL_ATTACHMENT = 33306, i.NONE = 0, i.FRAMEBUFFER_COMPLETE = 36053, i.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, i.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, i.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, i.FRAMEBUFFER_UNSUPPORTED = 36061, i.FRAMEBUFFER_BINDING = 36006, i.RENDERBUFFER_BINDING = 36007, i.MAX_RENDERBUFFER_SIZE = 34024, i.INVALID_FRAMEBUFFER_OPERATION = 1286, i.UNPACK_FLIP_Y_WEBGL = 37440, i.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, i.CONTEXT_LOST_WEBGL = 37442, i.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, i.BROWSER_DEFAULT_WEBGL = 37444, i.SHADER_BINARY_FORMATS = 36344, i.NUM_SHADER_BINARY_FORMATS = 36345, i.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, i.activeTexture = u, i.attachShader = s, i.bindAttribLocation = d, i.bindBuffer = h, i.bindFramebuffer = g, i.bindRenderbuffer = p, i.bindTexture = E, i.blendColor = v, i.blendEquation = y, i.blendEquationSeparate = _, i.blendFunc = m, i.blendFuncSeparate = S, i.bufferData = b, i.bufferData = b, i.bufferSubData = T, i.checkFramebufferStatus = A, i.clear = k, i.clearColor = C, i.clearDepth = B, i.clearStencil = I, i.colorMask = P, i.compileShader = R, i.compressedTexImage2D = w, i.compressedTexSubImage2D = F, i.copyTexImage2D = O, i.copyTexSubImage2D = M, i.createBuffer = U, i.createFramebuffer = N, i.createProgram = L, i.createRenderbuffer = x, i.createShader = D, i.createTexture = K, i.cullFace = G, i.deleteBuffer = V, i.deleteFramebuffer = j, i.deleteProgram = H, i.deleteRenderbuffer = X, i.deleteShader = z, i.deleteTexture = W, i.depthFunc = q, i.depthMask = Y, i.depthRange = Q, i.detachShader = J, i.disable = Z, i.disableVertexAttribArray = $, i.drawArrays = ee, i.drawElements = te, i.enable = ne, i.enableVertexAttribArray = ie, i.finish = re, i.flush = oe, i.framebufferRenderbuffer = ae, i.framebufferTexture2D = le, i.frontFace = fe, i.generateMipmap = ce, i.getAttribLocation = ue, i.getError = se, i.getProgramInfoLog = he, i.getShaderInfoLog = ge, i.getShaderSource = pe, i.getUniformLocation = Ee, i.getVertexAttribOffset = ve, i.hint = ye, i.isBuffer = _e, i.isEnabled = me, i.isFramebuffer = Se, i.isProgram = be, i.isRenderbuffer = Te, i.isShader = Ae, i.isTexture = ke, i.lineWidth = Ce, i.linkProgram = Be, i.pixelStorei = Ie, i.polygonOffset = Pe, i.readPixels = Re, i.renderbufferStorage = we, i.sampleCoverage = Fe, i.scissor = Oe, i.shaderSource = Me, i.stencilFunc = Ue, i.stencilFuncSeparate = Ne, i.stencilMask = Le, i.stencilMaskSeparate = xe, i.stencilOp = De, i.stencilOpSeparate = Ke, i.texImage2D = Ge, i.texSubImage2D = He, i.texParameterf = Ve, i.texParameteri = je, i.uniform1f = Xe, i.uniform2f = ze, i.uniform3f = We, i.uniform4f = qe, i.uniform1i = Ye, i.uniform2i = Qe, i.uniform3i = Je, i.uniform4i = Ze, i.uniform1fv = $e, i.uniform2fv = et, i.uniform3fv = tt, i.uniform4fv = nt, i.uniform1iv = it, i.uniform2iv = rt, i.uniform3iv = ot, i.uniform4iv = at, i.uniformMatrix2fv = lt, i.uniformMatrix3fv = ft, i.uniformMatrix4fv = ct, i.useProgram = ut, i.validateProgram = st, i.vertexAttrib1f = dt, i.vertexAttrib2f = ht, i.vertexAttrib3f = gt, i.vertexAttrib4f = pt, i.vertexAttrib1fv = Et, i.vertexAttrib2fv = vt, i.vertexAttrib3fv = yt, i.vertexAttrib4fv = _t, i.vertexAttribPointer = mt, i.viewport = St, i.getActiveAttrib = bt, i.getActiveUniform = Tt, i.getAttachedShaders = At, i.getBufferParameter = kt, i.getFramebufferAttachmentParameter = Ct, i.getProgramParameter = Bt, i.getRenderbufferParameter = It, i.getShaderParameter = Pt, i.getTexParameter = Rt, i.getVertexAttrib = wt, i.getParameter = Ot, i.getUniform = Ft, i.getShaderPrecisionFormat = de, i.getExtension = function() {
            return null
        }, i.getSupportedExtensions = function() {
            return []
        }, i.OpenOptMode = _i, i.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height)), Object.prototype.hasOwnProperty.call(GameGlobal, "renderTicker") && renderTicker.setTickerCallBack(function(e, t) {}), i
    }
    function l(e) {
        if(Object.prototype.hasOwnProperty.call(e, "__rawBKData")) return e.__rawBKData;
        if(Object.prototype.hasOwnProperty.call(e, "__nativeObj")) return e.__nativeObj;
        if(0 ==
        function() {
            if(void 0 == r) {
                "android" == GameStatusInfo.platform && (r = !0);
                var e = BK.Director.queryDeviceInfo(),
                    t = e.version.split(".");
                "ios" == e.platform && Number(t[0]) >= 10 || "android" == e.platform ? r = !0 : (BK.Script.log(1, 0, "Current Device dont supoort TypedArray.[info = " + JSON.stringify(e) + "]"), r = !1)
            }
            return r
        }()) {
            if(e instanceof Int8Array == 1) {
                for(var t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeInt8Buffer(e[n]);
                return t
            }
            if(e instanceof Uint8Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeUint8Buffer(e[n]);
                return t
            }
            if(e instanceof Int16Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeInt16Buffer(e[n]);
                return t
            }
            if(e instanceof Uint16Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeUint16Buffer(e[n]);
                return t
            }
            if(e instanceof Int32Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeInt32Buffer(e[n]);
                return t
            }
            if(e instanceof Uint32Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeUint32Buffer(e[n]);
                return t
            }
            if(e instanceof Float32Array == 1) {
                for(t = new BK.Buffer(e.byteLength, !1), n = 0; n < e.length; n++) t.writeFloatBuffer(e[n]);
                return t
            }
            if(e instanceof ArrayBuffer == 1) {
                t = new BK.Buffer(e.byteLength, !1);
                var i = new DataView(e);
                for(n = 0; n < e.byteLength; n++) t.writeUint8Buffer(i.getUint8(n));
                return t
            }
        }
        return e
    }
    var f = !1;

    function c() {
        0 == f && (BK.MQQ.SsoRequest.send({}, "cs.first_frame_drawn.local"), f = !0)
    }
    function u(e) {
        i.glActiveTexture(e)
    }
    function s(e, t) {
        i.glAttachShader(e, t)
    }
    function d(e, t, n) {
        i.glBindAttribLocation(e, t, n)
    }
    function h(e, t) {
        i.glBindBuffer(e, t)
    }
    function g(e, t) {
        i.glBindFramebuffer(e, t)
    }
    function p(e, t) {
        i.glBindRenderbuffer(e, t)
    }
    function E(e, t) {
        i.glBindTexture(e, t)
    }
    function v(e, t, n, r) {
        i.glBlendColor(e, t, n, r)
    }
    function y(e) {
        i.glBlendEquation(e)
    }
    function _(e, t) {
        i.glBlendEquationSeparate(e, t)
    }
    function m(e, t) {
        i.glBlendFunc(e, t)
    }
    function S(e, t, n, r) {
        i.glBlendFuncSeparate(e, t, n, r)
    }
    function b(e, t, n) {
        i.glBufferData(e, t, n)
    }
    function b(e, t, n) {
        i.glBufferData(e, l(t), n)
    }
    function T(e, t, n) {
        i.glBufferSubData(e, t, l(n))
    }
    function A(e) {
        return i.glCheckFramebufferStatus(e)
    }
    function k(e) {
        i.glClear(e)
    }
    function C(e, t, n, r) {
        i.glClearColor(e, t, n, r)
    }
    function B(e) {
        i.glClearDepth(e)
    }
    function I(e) {
        i.glClearStencil(e)
    }
    function P(e, t, n, r) {
        i.glColorMask(e, t, n, r)
    }
    function R(e) {
        i.glCompileShader(e)
    }
    function w(e, t, n, r, o, a, l) {
        i.glCompressedTexImage2D(e, t, n, r, o, a, l)
    }
    function F(e, t, n, r, o, a, l, f) {
        i.glCompressedTexSubImage2D(e, t, n, r, o, a, l, f)
    }
    function O(e, t, n, r, o, a, l, f) {
        i.glCopyTexImage2D(e, t, n, r, o, a, l, f)
    }
    function M(e, t, n, r, o, a, l, f) {
        i.glCopyTexSubImage2D(e, t, n, r, o, a, l, f)
    }
    function U() {
        return i.glCreateBuffer()
    }
    function N() {
        return i.glCreateFramebuffer()
    }
    function L() {
        return i.glCreateProgram()
    }
    function x() {
        return i.glCreateRenderbuffer()
    }
    function D(e) {
        return i.glCreateShader(e)
    }
    function K() {
        return i.glCreateTexture()
    }
    function G(e) {
        i.glCullFace(e)
    }
    function V(e) {
        i.glDeleteBuffer(e)
    }
    function j(e) {
        i.glDeleteFramebuffer(e)
    }
    function H(e) {
        i.glDeleteProgram(e)
    }
    function X(e) {
        i.glDeleteRenderbuffer(e)
    }
    function z(e) {
        i.glDeleteShader(e)
    }
    function W(e) {
        i.glDeleteTexture(e)
    }
    function q(e) {
        i.glDepthFunc(e)
    }
    function Y(e) {
        i.glDepthMask(e)
    }
    function Q(e, t) {
        i.glDepthRange(e, t)
    }
    function J(e, t) {
        i.glDetachShader(e, t)
    }
    function Z(e) {
        i.glDisable(e)
    }
    function $(e) {
        i.glDisableVertexAttribArray(e)
    }
    function ee(e, t, n) {
        i.glDrawArrays(e, t, n), n > 0 && c()
    }
    function te(e, t, n, r) {
        i.glDrawElements(e, t, n, r), t > 0 && c()
    }
    function ne(e) {
        i.glEnable(e)
    }
    function ie(e) {
        i.glEnableVertexAttribArray(e)
    }
    function re() {
        i.glFinish()
    }
    function oe() {
        i.glFlush()
    }
    function ae(e, t, n, r) {
        i.glFramebufferRenderbuffer(e, t, n, r)
    }
    function le(e, t, n, r, o) {
        i.glFramebufferTexture2D(e, t, n, r, o)
    }
    function fe(e) {
        i.glFrontFace(e)
    }
    function ce(e) {
        i.glGenerateMipmap(e)
    }
    function ue(e, t) {
        return i.glGetAttribLocation(e, t)
    }
    function se() {
        return i.glGetError()
    }
    function de(e, t) {
        return i.glGetShaderPrecisionFormat(e, t)
    }
    function he(e) {
        return i.glGetProgramInfoLog(e)
    }
    function ge(e) {
        return i.glGetShaderInfoLog(e)
    }
    function pe(e) {
        return i.glGetShaderSource(e)
    }
    function Ee(e, t) {
        return i.glGetUniformLocation(e, t)
    }
    function ve(e, t) {
        return i.glGetVertexAttribOffset(e, t)
    }
    function ye(e, t) {
        i.glHint(e, t)
    }
    function _e(e) {
        return i.glIsBuffer(e)
    }
    function me(e) {
        return i.glIsEnabled(e)
    }
    function Se(e) {
        return i.glIsFramebuffer(e)
    }
    function be(e) {
        return i.glIsProgram(e)
    }
    function Te(e) {
        return i.glIsRenderbuffer(e)
    }
    function Ae(e) {
        return i.glIsShader(e)
    }
    function ke(e) {
        return i.glIsTexture(e)
    }
    function Ce(e) {
        i.glLineWidth(e)
    }
    function Be(e) {
        i.glLinkProgram(e)
    }
    function Ie(e, t) {
        i.glPixelStorei(e, t)
    }
    function Pe(e, t) {
        i.glPolygonOffset(e, t)
    }
    function Re(e, t, n, r, o, a, l) {
        i.glReadPixels(e, t, n, r, o, a, l)
    }
    function we(e, t, n, r) {
        i.glRenderbufferStorage(e, t, n, r)
    }
    function Fe(e, t) {
        i.glSampleCoverage(e, t)
    }
    function Oe(e, t, n, r) {
        i.glScissor(e, t, n, r)
    }
    function Me(e, t) {
        i.glShaderSource(e, t)
    }
    function Ue(e, t, n) {
        i.glStencilFunc(e, t, n)
    }
    function Ne(e, t, n, r) {
        i.glStencilFuncSeparate(e, t, n, r)
    }
    function Le(e) {
        i.glStencilMask(e)
    }
    function xe(e, t) {
        i.glStencilMaskSeparate(e, t)
    }
    function De(e, t, n) {
        i.glStencilOp(e, t, n)
    }
    function Ke(e, t, n, r) {
        i.glStencilOpSeparate(e, t, n, r)
    }
    function Ge(e, t, n) {
        switch(arguments.length) {
        case 6:
            var r = arguments[3],
                o = arguments[4],
                a = arguments[5];
            Object.prototype.hasOwnProperty.call(a, "__nativeObj") ? i.glTexImage2D(e, t, n, r, o, a.__nativeObj) : a.bkImage ? i.glTexImage2D(e, t, n, r, o, a.bkImage) : i.glTexImage2D(e, t, n, r, o, a);
            break;
        case 9:
            var l = arguments[3],
                f = arguments[4],
                c = arguments[5],
                u = (r = arguments[6], o = arguments[7], arguments[8]);
            i.glTexImage2D(e, t, n, l, f, c, r, o, u)
        }
    }
    function Ve(e, t, n) {
        i.glTexParameterf(e, t, n)
    }
    function je(e, t, n) {
        i.glTexParameteri(e, t, n)
    }
    function He(e, t, n, r) {
        switch(arguments.length) {
        case 7:
            var o = arguments[4],
                a = arguments[5],
                l = arguments[6];
            Object.prototype.hasOwnProperty.call(l, "__nativeObj") ? i.glTexSubImage2D(e, t, n, r, o, a, l.__nativeObj) : i.glTexSubImage2D(e, t, n, r, o, a, l);
            break;
        case 9:
            var f = arguments[4],
                c = arguments[5],
                u = (o = arguments[6], a = arguments[7], arguments[8]);
            i.glTexSubImage2D(e, t, n, r, f, c, o, a, u)
        }
    }
    function Xe(e, t) {
        i.glUniform1f(e, t)
    }
    function ze(e, t, n) {
        i.glUniform2f(e, t, n)
    }
    function We(e, t, n, r) {
        i.glUniform3f(e, t, n, r)
    }
    function qe(e, t, n, r, o) {
        i.glUniform4f(e, t, n, r, o)
    }
    function Ye(e, t) {
        i.glUniform1i(e, t)
    }
    function Qe(e, t, n) {
        i.glUniform2i(e, t, n)
    }
    function Je(e, t, n, r) {
        i.glUniform3i(e, t, n, r)
    }
    function Ze(e, t, n, r, o) {
        i.glUniform4i(e, t, n, r, o)
    }
    function $e(e, t) {
        i.glUniform1fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function et(e, t) {
        i.glUniform2fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function tt(e, t) {
        i.glUniform3fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function nt(e, t) {
        i.glUniform4fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function it(e, t) {
        i.glUniform1iv(e, l(t instanceof Array == 1 ? new Int32Array(t) : t))
    }
    function rt(e, t) {
        i.glUniform2iv(e, l(t instanceof Array == 1 ? new Int32Array(t) : t))
    }
    function ot(e, t) {
        i.glUniform3iv(e, l(t instanceof Array == 1 ? new Int32Array(t) : t))
    }
    function at(e, t) {
        i.glUniform4iv(e, l(t instanceof Array == 1 ? new Int32Array(t) : t))
    }
    function lt(e, t, n) {
        i.glUniformMatrix2fv(e, t, l(n instanceof Array == 1 ? new Float32Array(n) : n))
    }
    function ft(e, t, n) {
        i.glUniformMatrix3fv(e, t, l(n instanceof Array == 1 ? new Float32Array(n) : n))
    }
    function ct(e, t, n) {
        i.glUniformMatrix4fv(e, t, l(n instanceof Array == 1 ? new Float32Array(n) : n))
    }
    function ut(e) {
        i.glUseProgram(e)
    }
    function st(e) {
        i.glValidateProgram(e)
    }
    function dt(e, t) {
        i.glVertexAttrib1f(e, t)
    }
    function ht(e, t, n) {
        i.glVertexAttrib2f(e, t, n)
    }
    function gt(e, t, n, r) {
        i.glVertexAttrib3f(e, t, n, r)
    }
    function pt(e, t, n, r, o) {
        i.glVertexAttrib4f(e, t, n, r, o)
    }
    function Et(e, t) {
        i.glVertexAttrib1fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function vt(e, t) {
        i.glVertexAttrib2fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function yt(e, t) {
        i.glVertexAttrib3fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function _t(e, t) {
        i.glVertexAttrib4fv(e, l(t instanceof Array == 1 ? new Float32Array(t) : t))
    }
    function mt(e, t, n, r, o, a) {
        i.glVertexAttribPointer(e, t, n, r, o, a)
    }
    function St(e, t, n, r) {
        i.glViewport(e, t, n, r)
    }
    function bt(e, t) {
        return i.glGetActiveAttrib(e, t)
    }
    function Tt(e, t) {
        return i.glGetActiveUniform(e, t)
    }
    function At(e) {
        return i.glGetAttachedShaders(e)
    }
    function kt(e, t) {
        return i.glGetBufferParameter(e, t)
    }
    function Ct(e, t, n) {
        return i.glGetFramebufferAttachmentParameter(e, t, n)
    }
    function Bt(e, t) {
        return i.glGetProgramParameter(e, t)
    }
    function It(e, t) {
        return i.glGetRenderbufferParameter(e, t)
    }
    function Pt(e, t) {
        return i.glGetShaderParameter(e, t)
    }
    function Rt(e, t) {
        return i.glGetTexParameter(e, t)
    }
    function wt(e, t) {
        return i.glGetVertexAttrib(e, t)
    }
    function Ft(e, t) {
        return i.glGetUniform(e, t)
    }
    function Ot(e) {
        switch(e) {
        case i.ACTIVE_TEXTURE:
        case i.ALPHA_BITS:
        case i.ARRAY_BUFFER_BINDING:
        case i.BLUE_BITS:
        case i.CULL_FACE_MODE:
        case i.CURRENT_PROGRAM:
        case i.DEPTH_BITS:
        case i.DEPTH_FUNC:
        case i.ELEMENT_ARRAY_BUFFER_BINDING:
        case i.FRAMEBUFFER_BINDING:
        case i.FRONT_FACE:
        case i.GENERATE_MIPMAP_HINT:
        case i.GREEN_BITS:
        case i.IMPLEMENTATION_COLOR_READ_FORMAT:
        case i.IMPLEMENTATION_COLOR_READ_TYPE:
        case i.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
        case i.MAX_CUBE_MAP_TEXTURE_SIZE:
        case i.MAX_FRAGMENT_UNIFORM_VECTORS:
        case i.MAX_RENDERBUFFER_SIZE:
        case i.MAX_TEXTURE_IMAGE_UNITS:
        case i.MAX_TEXTURE_SIZE:
        case i.MAX_VARYING_VECTORS:
        case i.MAX_VERTEX_ATTRIBS:
        case i.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
        case i.MAX_VERTEX_UNIFORM_VECTORS:
        case i.MAX_VIEWPORT_DIMS:
        case i.NUM_COMPRESSED_TEXTURE_FORMATS:
        case i.NUM_SHADER_BINARY_FORMATS:
        case i.PACK_ALIGNMENT:
        case i.RED_BITS:
        case i.RENDERBUFFER_BINDING:
        case i.SAMPLE_BUFFERS:
        case i.SAMPLES:
        case i.STENCIL_BACK_FAIL:
        case i.STENCIL_BACK_FUNC:
        case i.STENCIL_BACK_PASS_DEPTH_FAIL:
        case i.STENCIL_BACK_PASS_DEPTH_PASS:
        case i.STENCIL_BACK_REF:
        case i.STENCIL_BACK_VALUE_MASK:
        case i.STENCIL_BACK_WRITEMASK:
        case i.STENCIL_BITS:
        case i.STENCIL_CLEAR_VALUE:
        case i.STENCIL_FAIL:
        case i.STENCIL_FUNC:
        case i.STENCIL_PASS_DEPTH_FAIL:
        case i.STENCIL_PASS_DEPTH_PASS:
        case i.STENCIL_REF:
        case i.STENCIL_VALUE_MASK:
        case i.STENCIL_WRITEMASK:
        case i.SUBPIXEL_BITS:
        case i.TEXTURE_BINDING_2D:
        case i.TEXTURE_BINDING_CUBE_MAP:
        case i.UNPACK_ALIGNMENT:
        case i.BLEND_DST_ALPHA:
        case i.BLEND_DST_RGB:
        case i.BLEND_EQUATION_ALPHA:
        case i.BLEND_EQUATION_RGB:
        case i.BLEND_SRC_ALPHA:
        case i.BLEND_SRC_RGB:
            return i.glGetParameterInt(e, 1);
        case i.ALIASED_LINE_WIDTH_RANGE:
        case i.ALIASED_POINT_SIZE_RANGE:
        case i.DEPTH_RANGE:
        case i.MAX_VIEWPORT_DIMS:
            return i.glGetParameterFloat(e, 2);
        case i.BLEND:
        case i.CULL_FACE:
        case i.DEPTH_TEST:
        case i.DEPTH_WRITEMASK:
        case i.DITHER:
        case i.POLYGON_OFFSET_FILL:
        case i.SAMPLE_ALPHA_TO_COVERAGE:
        case i.SAMPLE_COVERAGE:
        case i.SAMPLE_COVERAGE_INVERT:
        case i.SCISSOR_TEST:
        case i.SHADER_COMPILER:
        case i.STENCIL_TEST:
            return i.glGetParameterBool(e, 1);
        case i.BLEND_COLOR:
        case i.COLOR_CLEAR_VALUE:
            return i.glGetParameterFloat(e, 4);
        case i.SCISSOR_BOX:
        case i.VIEWPORT:
            return i.glGetParameterInt(e, 4);
        case i.COLOR_WRITEMASK:
            return i.glGetParameterBool(e, 4);
        case i.POLYGON_OFFSET_FACTOR:
        case i.POLYGON_OFFSET_UNITS:
        case i.SAMPLE_COVERAGE_VALUE:
            return i.glGetParameterFloat(e, 1);
        case i.SHADER_BINARY_FORMATS:
            var t = i.glGetParameterInt(i.NUM_SHADER_BINARY_FORMATS, 1);
            return i.glGetParameterInt(e, t);
        case i.COMPRESSED_TEXTURE_FORMATS:
            t = i.glGetParameterInt(i.NUM_COMPRESSED_TEXTURE_FORMATS, 1);
            return i.glGetParameterInt(e, t);
        case i.VERSION:
            return "WebGL 1"
        }
    }
    var Mt, Ut = 0,
        Nt = 1,
        Lt = 3,
        xt = 4,
        Dt = 5,
        Kt = 6,
        Gt = 7,
        Vt = 8,
        jt = 9,
        Ht = 10,
        Xt = 11,
        zt = 14,
        Wt = 15,
        qt = 16,
        Yt = 17,
        Qt = 18,
        Jt = 20,
        Zt = 23,
        $t = 24,
        en = 25,
        tn = 26,
        nn = 27,
        rn = 28,
        on = 29,
        an = 30,
        ln = 31,
        fn = 32,
        cn = 33,
        un = 34,
        sn = 35,
        dn = 36,
        hn = 37,
        gn = 38,
        pn = 39,
        En = 40,
        vn = 41,
        yn = 42,
        _n = 43,
        mn = 44,
        Sn = 45,
        bn = 46,
        Tn = 47,
        An = 48,
        kn = 49,
        Cn = 50,
        Bn = 51,
        In = 52,
        Pn = 53,
        Rn = 54,
        wn = 55,
        Fn = 57,
        On = 58,
        Mn = 59,
        Un = 60,
        Nn = 61,
        Ln = 62,
        xn = 64,
        Dn = 65,
        Kn = 67,
        Gn = 68,
        Vn = 69,
        jn = 70,
        Hn = 71,
        Xn = 72,
        zn = 73,
        Wn = 74,
        qn = 75,
        Yn = 76,
        Qn = 77,
        Jn = 78,
        Zn = 79,
        $n = 80,
        ei = 81,
        ti = 82,
        ni = 83,
        ii = 84,
        ri = 85,
        oi = 86,
        ai = 87,
        li = 88,
        fi = 89,
        ci = 90,
        ui = 91,
        si = 92,
        di = 93,
        hi = 94,
        gi = 95,
        pi = 96,
        Ei = 97,
        vi = 1e5,
        yi = 0;

    function _i() {
        i.flushCommand &&
        function() {
            if("android" == GameStatusInfo.platform) return !0;
            var e = BK.Director.queryDeviceInfo(),
                t = e.version.split(".");
            if("ios" == e.platform && Number(t[0]) >= 10) return !0;
            return !1
        }() && (i.activeTexture = bi, i.attachShader = Ti, i.bindAttribLocation = Ai, i.bindBuffer = ki, i.bindFramebuffer = Ci, i.bindRenderbuffer = Bi, i.bindTexture = Ii, i.blendColor = Pi, i.blendEquation = Ri, i.blendEquationSeparate = wi, i.blendFunc = Fi, i.blendFuncSeparate = Oi, i.bufferData = Mi, i.bufferData = Mi, i.bufferSubData = Ui, i.checkFramebufferStatus = Ni, i.clear = Li, i.clearColor = xi, i.clearDepth = Di, i.clearStencil = Ki, i.colorMask = Gi, i.compileShader = Vi, i.compressedTexImage2D = ji, i.compressedTexSubImage2D = Hi, i.copyTexImage2D = Xi, i.copyTexSubImage2D = zi, i.createBuffer = Wi, i.createFramebuffer = qi, i.createProgram = Yi, i.createRenderbuffer = Qi, i.createShader = Ji, i.createTexture = Zi, i.cullFace = $i, i.deleteBuffer = er, i.deleteFramebuffer = tr, i.deleteProgram = nr, i.deleteRenderbuffer = ir, i.deleteShader = rr, i.deleteTexture = or, i.depthFunc = ar, i.depthMask = lr, i.depthRange = fr, i.detachShader = cr, i.disable = ur, i.disableVertexAttribArray = sr, i.drawArrays = dr, i.drawElements = hr, i.enable = gr, i.enableVertexAttribArray = pr, i.finish = Er, i.flush = vr, i.framebufferRenderbuffer = yr, i.framebufferTexture2D = _r, i.frontFace = mr, i.generateMipmap = Sr, i.getActiveAttrib = br, i.getActiveUniform = Tr, i.getAttachedShaders = Ar, i.getAttribLocation = kr, i.getBufferParameter = Cr, i.getParameter = Br, i.getError = Ir, i.getFramebufferAttachmentParameter = Pr, i.getProgramParameter = Rr, i.getProgramInfoLog = wr, i.getRenderbufferParameter = Fr, i.getShaderParameter = Or, i.getShaderPrecisionFormat = Mr, i.getShaderInfoLog = Ur, i.getShaderSource = Nr, i.getTexParameter = Lr, i.getUniform = xr, i.getUniformLocation = Dr, i.getVertexAttrib = Kr, i.getVertexAttribOffset = Gr, i.hint = Vr, i.isBuffer = jr, i.isEnabled = Hr, i.isFramebuffer = Xr, i.isProgram = zr, i.isRenderbuffer = Wr, i.isShader = qr, i.isTexture = Yr, i.lineWidth = Qr, i.linkProgram = Jr, i.pixelStorei = Zr, i.polygonOffset = $r, i.readPixels = eo, i.renderbufferStorage = to, i.sampleCoverage = no, i.scissor = io, i.shaderSource = ro, i.stencilFunc = oo, i.stencilFuncSeparate = ao, i.stencilMask = lo, i.stencilMaskSeparate = fo, i.stencilOp = co, i.stencilOpSeparate = uo, i.texImage2D = so, i.texImage2D = so, i.texParameterf = ho, i.texParameteri = go, i.texSubImage2D = po, i.texSubImage2D = po, i.uniform1f = Eo, i.uniform2f = vo, i.uniform3f = yo, i.uniform4f = _o, i.uniform1i = mo, i.uniform2i = So, i.uniform3i = bo, i.uniform4i = To, i.uniform1fv = Ao, i.uniform2fv = ko, i.uniform3fv = Co, i.uniform4fv = Bo, i.uniform1iv = Io, i.uniform2iv = Po, i.uniform3iv = Ro, i.uniform4iv = wo, i.uniformMatrix2fv = Fo, i.uniformMatrix3fv = Oo, i.uniformMatrix4fv = Mo, i.useProgram = Uo, i.validateProgram = No, i.vertexAttrib1f = Lo, i.vertexAttrib2f = xo, i.vertexAttrib3f = Do, i.vertexAttrib4f = Ko, i.vertexAttrib1fv = Go, i.vertexAttrib2fv = Vo, i.vertexAttrib3fv = jo, i.vertexAttrib4fv = Ho, i.vertexAttribPointer = Xo, i.viewport = zo, i.glCommit = Si, i.getExtension = function() {
            return null
        }), Mt = new Float32Array(vi)
    }
    function mi() {
        yi > 0 && (i.flushCommand(yi, Mt), yi = 0)
    }
    function Si() {
        mi(), i.commit()
    }
    function bi(e) {
        yi + 2 > vi && mi(), Mt[yi] = Ut, Mt[yi + 1] = e, yi += 2
    }
    function Ti(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = Nt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Ai(e, t, n) {
        mi(), d(e, t, n)
    }
    function ki(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = Lt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Ci(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = xt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Bi(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = Dt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Ii(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = Kt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Pi(e, t, n, i) {
        yi + 5 > vi && mi(), Mt[yi] = Gt, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function Ri(e) {
        yi + 2 > vi && mi(), Mt[yi] = Vt, Mt[yi + 1] = e, yi += 2
    }
    function wi(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = jt, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Fi(e, t) {
        yi + 3 > vi && mi(), Mt[yi] = Ht, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function Oi(e, t, n, i) {
        yi + 5 > vi && mi(), Mt[yi] = Xt, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function Mi(e, t, n) {
        mi(), b(e, t, n)
    }
    function Ui(e, t, n) {
        mi(), T(e, t, n)
    }
    function Ni(e) {
        mi(), A(e)
    }
    function Li(e) {
        yi + 2 > vi && mi(), Mt[yi] = zt, Mt[yi + 1] = e, yi += 2
    }
    function xi(e, t, n, i) {
        yi + 5 > vi && mi(), Mt[yi] = Wt, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function Di(e) {
        yi + 2 > vi && mi(), Mt[yi] = qt, Mt[yi + 1] = e, yi += 2
    }
    function Ki(e) {
        yi + 2 > vi && mi(), Mt[yi] = Yt, Mt[yi + 1] = e, yi += 2
    }
    function Gi(e, t, n, i) {
        yi + 5 > vi && mi(), Mt[yi] = Qt, Mt[yi + 1] = e ? 1 : 0, Mt[yi + 2] = t ? 1 : 0, Mt[yi + 3] = n ? 1 : 0, Mt[yi + 4] = i ? 1 : 0, yi += 5
    }
    function Vi(e) {
        yi + 2 > vi && mi(), Mt[yi] = Jt, Mt[yi + 1] = e, yi += 2
    }
    function ji(e, t, n, i, r, o, a) {
        mi(), w(e, t, n, i, r, o, a)
    }
    function Hi(e, t, n, i, r, o, a, l) {
        mi(), F(e, t, n, i, r, o, a, l)
    }
    function Xi(e, t, n, i, r, o, a, l) {
        yi + 9 > vi && mi(), Mt[yi] = Zt, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, Mt[yi + 6] = o, Mt[yi + 7] = a, Mt[yi + 8] = l, yi += 9
    }
    function zi(e, t, n, i, r, o, a, l) {
        yi + 9 > vi && mi(), Mt[yi] = $t, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, Mt[yi + 6] = o, Mt[yi + 7] = a, Mt[yi + 8] = l, yi += 9
    }
    function Wi() {
        return mi(), U()
    }
    function qi() {
        return mi(), N()
    }
    function Yi() {
        return mi(), L()
    }
    function Qi() {
        return mi(), x()
    }
    function Ji(e) {
        return mi(), D(e)
    }
    function Zi() {
        return mi(), K()
    }
    function $i(e) {
        yi + 2 >= vi && mi(), Mt[yi] = en, Mt[yi + 1] = e, yi += 2
    }
    function er(e) {
        yi + 2 >= vi && mi(), Mt[yi] = tn, Mt[yi + 1] = e, yi += 2
    }
    function tr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = nn, Mt[yi + 1] = e, yi += 2
    }
    function nr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = rn, Mt[yi + 1] = e, yi += 2
    }
    function ir(e) {
        yi + 2 >= vi && mi(), Mt[yi] = on, Mt[yi + 1] = e, yi += 2
    }
    function rr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = an, Mt[yi + 1] = e, yi += 2
    }
    function or(e) {
        yi + 2 >= vi && mi(), Mt[yi] = ln, Mt[yi + 1] = e, yi += 2
    }
    function ar(e) {
        yi + 2 >= vi && mi(), Mt[yi] = fn, Mt[yi + 1] = e, yi += 2
    }
    function lr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = cn, Mt[yi + 1] = e ? 1 : 0, yi += 2
    }
    function fr(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = un, Mt[yi + 1] = e, Mt[yi + 1] = t, yi += 3
    }
    function cr(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = sn, Mt[yi + 1] = e, Mt[yi + 1] = t, yi += 3
    }
    function ur(e) {
        yi + 2 >= vi && mi(), Mt[yi] = dn, Mt[yi + 1] = e, yi += 2
    }
    function sr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = hn, Mt[yi + 1] = e, yi += 2
    }
    function dr(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = gn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4, n > 0 && c()
    }
    function hr(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = pn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5, t > 0 && c()
    }
    function gr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = En, Mt[yi + 1] = e, yi += 2
    }
    function pr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = vn, Mt[yi + 1] = e, yi += 2
    }
    function Er() {
        yi + 1 >= vi && mi(), Mt[yi] = yn, yi += 1
    }
    function vr() {
        yi + 1 >= vi && mi(), Mt[yi] = _n, yi += 1
    }
    function yr(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = mn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function _r(e, t, n, i, r) {
        yi + 6 >= vi && mi(), Mt[yi] = Sn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, yi += 6
    }
    function mr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = bn, Mt[yi + 1] = e, yi += 2
    }
    function Sr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = Tn, Mt[yi + 1] = e, yi += 2
    }
    function br(e, t) {
        return mi(), bt(e, t)
    }
    function Tr(e, t) {
        return mi(), Tt(e, t)
    }
    function Ar(e) {
        return mi(), At(e)
    }
    function kr(e, t) {
        return mi(), ue(e, t)
    }
    function Cr(e, t) {
        return mi(), kt(e, t)
    }
    function Br(e) {
        return mi(), Ot(e)
    }
    function Ir() {
        return mi(), se()
    }
    function Pr(e, t, n) {
        return mi(), Ct(e, t, n)
    }
    function Rr(e, t) {
        return mi(), Bt(e, t)
    }
    function wr(e) {
        return mi(), he(e)
    }
    function Fr(e, t) {
        return mi(), It(e, t)
    }
    function Or(e, t) {
        return mi(), Pt(e, t)
    }
    function Mr(e, t) {
        return mi(), de(e, t)
    }
    function Ur(e) {
        return mi(), ge(e)
    }
    function Nr(e) {
        return mi(), pe(e)
    }
    function Lr(e, t) {
        return mi(), Rt(e, t)
    }
    function xr(e, t) {
        return mi(), Ft(e, t)
    }
    function Dr(e, t) {
        return mi(), Ee(e, t)
    }
    function Kr(e, t) {
        return mi(), wt(e, t)
    }
    function Gr(e, t) {
        return mi(), ve(e, t)
    }
    function Vr(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = An, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function jr(e) {
        return mi(), _e(e)
    }
    function Hr(e) {
        return mi(), me(e)
    }
    function Xr(e) {
        return mi(), Se(e)
    }
    function zr(e) {
        return mi(), be(e)
    }
    function Wr(e) {
        return mi(), Te(e)
    }
    function qr(e) {
        return mi(), Ae(e)
    }
    function Yr(e) {
        return mi(), ke(e)
    }
    function Qr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = kn, Mt[yi + 1] = e, yi += 2
    }
    function Jr(e) {
        yi + 2 >= vi && mi(), Mt[yi] = Cn, Mt[yi + 1] = e, yi += 2
    }
    function Zr(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = Bn, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function $r(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = In, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function eo(e, t, n, i, r, o, a) {
        mi(), Re(e, t, n, i, r, o, a)
    }
    function to(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = Pn, Mt[yi + 1] = e, Mt[yi + 2] = internalFormat, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function no(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = Rn, Mt[yi + 1] = e, Mt[yi + 2] = t ? 1 : 0, yi += 3
    }
    function io(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = wn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function ro(e, t) {
        mi(), Me(e, t)
    }
    function oo(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = Fn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function ao(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = On, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function lo(e) {
        yi + 2 >= vi && mi(), Mt[yi] = Mn, Mt[yi + 1] = e, yi += 2
    }
    function fo(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = Un, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function co(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = Nn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function uo(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = Ln, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function so(e, t, n) {
        switch(mi(), arguments.length) {
        case 6:
            var r = arguments[3],
                o = arguments[4],
                a = arguments[5];
            Object.prototype.hasOwnProperty.call(a, "__nativeObj") ? i.glTexImage2D(e, t, n, r, o, a.__nativeObj) : a.bkImage ? i.glTexImage2D(e, t, n, r, o, a.bkImage) : i.glTexImage2D(e, t, n, r, o, a);
            break;
        case 9:
            var l = arguments[3],
                f = arguments[4],
                c = arguments[5],
                u = (r = arguments[6], o = arguments[7], arguments[8]);
            i.glTexImage2D(e, t, n, l, f, c, r, o, u)
        }
    }
    function ho(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = xn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function go(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = Dn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function po(e, t, n, i, r, o, a, l, f) {
        mi(), He(e, t, n, i, r, o, a, l, f)
    }
    function po(e, t, n, i, r, o, a) {
        mi(), He(e, t, n, i, r, o, a)
    }
    function Eo(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = Kn, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function vo(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = Hn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function yo(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = qn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function _o(e, t, n, i, r) {
        yi + 6 >= vi && mi(), Mt[yi] = Zn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, yi += 6
    }
    function mo(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = Vn, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function So(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = zn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function bo(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = Qn, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function To(e, t, n, i, r) {
        yi + 6 >= vi && mi(), Mt[yi] = ei, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, yi += 6
    }
    function Ao(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = Gn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function ko(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = Xn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Co(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = Yn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Bo(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = $n, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Io(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = jn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Po(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = Wn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Ro(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = Jn, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function wo(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = ti, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Fo(e, t, n) {
        yi + 4 + n.length >= vi && mi(), Mt[yi] = ni, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n.length, Mt.set(n, yi + 4), yi += 4 + n.length
    }
    function Oo(e, t, n) {
        yi + 4 + n.length >= vi && mi(), Mt[yi] = ii, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n.length, Mt.set(n, yi + 4), yi += 4 + n.length
    }
    function Mo(e, t, n) {
        yi + 4 + n.length >= vi && mi(), Mt[yi] = ri, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n.length, Mt.set(n, yi + 4), yi += 4 + n.length
    }
    function Uo(e) {
        yi + 2 >= vi && mi(), Mt[yi] = oi, Mt[yi + 1] = e, yi += 2
    }
    function No(e) {
        yi + 2 >= vi && mi(), Mt[yi] = ai, Mt[yi + 1] = e, yi += 2
    }
    function Lo(e, t) {
        yi + 3 >= vi && mi(), Mt[yi] = li, Mt[yi + 1] = e, Mt[yi + 2] = t, yi += 3
    }
    function xo(e, t, n) {
        yi + 4 >= vi && mi(), Mt[yi] = fi, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, yi += 4
    }
    function Do(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = ci, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    function Ko(e, t, n, i, r) {
        yi + 6 >= vi && mi(), Mt[yi] = ui, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, Mt[yi + 5] = r, yi += 6
    }
    function Go(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = si, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Vo(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = di, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function jo(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = hi, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Ho(e, t) {
        yi + 3 + t.length >= vi && mi(), Mt[yi] = gi, Mt[yi + 1] = e, Mt[yi + 2] = t.length, Mt.set(t, yi + 3), yi += 3 + t.length
    }
    function Xo(e, t, n, i, r, o) {
        yi + 7 >= vi && mi(), Mt[yi] = pi, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i ? 1 : 0, Mt[yi + 5] = r, Mt[yi + 6] = o, yi += 7
    }
    function zo(e, t, n, i) {
        yi + 5 >= vi && mi(), Mt[yi] = Ei, Mt[yi + 1] = e, Mt[yi + 2] = t, Mt[yi + 3] = n, Mt[yi + 4] = i, yi += 5
    }
    var Wo = function() {
            function e() {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.webgl = a();
                var t = this.webgl,
                    n = 0;
                BK.Director.ticker.add(function(e, i) {
                    e - n > 10 && (t.glCommit(), n = e)
                })
            }
            return o(e, [{
                key: "getContext",
                value: function() {
                    return this.webgl
                }
            }]), e
        }();
    t.
default = Wo
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
    function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }, r = function() {
        function e(e, t) {
            for(var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(), o = function e(t, n, i) {
        null === t && (t = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(t, n);
        if(void 0 === r) {
            var o = Object.getPrototypeOf(t);
            return null === o ? void 0 : e(o, n, i)
        }
        if("value" in r) return r.value;
        var a = r.get;
        return void 0 !== a ? a.call(i) : void 0
    }, a = d(n(0)), l = d(n(4)), f = d(n(1)), c = d(n(24)), u = d(n(23)), s = n(3);

    function d(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    var h = (BK.Director.screenPixelSize.width + 0) / 640,
        g = 10,
        p = function(e) {
            function t(e, n) {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = function(e, t) {
                        if(!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
                return BK.Director.root.addChild(i), i.useH5Mode(), i.setTextSize(g), i.fillColor = {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0
                }, i.resetPaint(), i._width = e, i._height = n, i._lastHeight = n, i._lastWidth = e, i.inversMatrix = u.
            default.create(), i._fontSize = g, i._fontStyle = "", i._fillColor = i.fillColor, i._strokeColor = i.strokeColor, i._textList = [], i
            }
            return function(e, t) {
                if("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, BK.Canvas), r(t, [{
                key: "resetPaint",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.style = {}, this.drawStyle = 0, e && (this.fillColor = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }, this.strokeColor = {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 0
                    }, this._fillColor = this.fillColor, this._strokeColor = this.strokeColor, this._textList = [])
                }
            }, {
                key: "updateSize",
                value: function() {
                    if(Math.floor(this._lastHeight) !== Math.floor(this._height) || Math.floor(this._lastWidth) !== Math.floor(this._width)) {
                        this._height || (this._height = 0), this._width || (this._width = 0), this.__nativeObj.size = {
                            height: this._height,
                            width: this._width
                        }, this.__nativeObj.resetCanvas(), this._lastWidth = this._width, this._lastHeight = this._height, this.resetPaint(!0)
                    } else this.globalCompositeOperation = "source-over", this.globalAlpha = 1, this.setTransform(1, 0, 0, 1, 0, 0)
                }
            }, {
                key: "scale",
                value: function() {
                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "scale", this) ? o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "scale", this).apply(this, arguments) : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canvasScale", this).apply(this, arguments)
                }
            }, {
                key: "getContext",
                value: function(e) {
                    return "2d" === e ? this : "webgl" === e ? (new c.
                default).getContext() : void 0
                }
            }, {
                key: "toTempFilePath",
                value: function(e) {
                    return this.toTempFilePathSync(e)
                }
            }, {
                key: "toDataURL",
                value: function() {
                    return this.toDataURL()
                }
            }, {
                key: "toTempFilePathSync",
                value: function(e) {
                    var t = new BK.ScreenShot;
                    if("object" === (void 0 === e ? "undefined" : i(e))) {
                        var n = e.x,
                            r = e.y,
                            o = e.width,
                            a = e.height;
                        e.destWidth, e.destHeight, e.fileType, e.quality;
                        t.origin = {
                            x: n,
                            y: r
                        }, t.size = {
                            width: o,
                            height: a
                        }
                    }
                    return t.shotToFile()
                }
            }, {
                key: "drawImage",
                value: function() {
                    "object" === i(arguments[0]) && (arguments[0] = arguments[0].src), o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "drawImage", this).apply(this, arguments)
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    "touchstart" === e && t ? l.
                default.onTouchStart(t):
                    "touchmove" === e && t ? l.
                default.onTouchMove(t):
                    "touchend" === e && t && l.
                default.onTouchEnd(t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    "touchstart" === e && l.
                default.offTouchStart(t)
                }
            }, {
                key: "fillText",
                value: function() {
                    var e = this;
                    e._height || (e._height = 0), e._width || (e._width = 0), this.__nativeObj.size = {
                        height: e._height,
                        width: e._width
                    }, this.__nativeObj.resetCanvas(), this._lastWidth = this._width, this._lastHeight = this._height, this.resetPaint(!1), this.font = this._fontStyle, this.text = arguments[0], this.setTextSize(this._fontSize * h), this.strokeColor = this._strokeColor, this.fillColor = this._fillColor, this._textList && this._textList.map(function(t) {
                        var n = t.fillColor,
                            i = t.strokeColor;
                        e.strokeColor = i, e.fillColor = n, e.__nativeObj.fillText(t.text, t.x, t.y, t.w, t.h), e.strokeColor = e._strokeColor, e.fillColor = e._fillColor
                    });
                    arguments[1], arguments[2];
                    if(arguments[1] && (arguments[1] *= h), arguments[2] *= h, 3 == arguments.length) {
                        var t = this.measureText(arguments[0], 2048, 1024),
                            n = arguments[1],
                            i = arguments[2];
                        return i -= .5 * t.height, this._textList.push({
                            text: arguments[0],
                            fillColor: e.fillColor,
                            strokeColor: e.strokeColor,
                            x: n,
                            y: i,
                            w: Math.min(2048, t.width),
                            h: Math.min(1024, t.height)
                        }), this.__nativeObj.fillText(arguments[0], n, i, Math.min(2048, t.width), Math.min(1024, t.height))
                    }
                    return 0
                }
            }, {
                key: "createImageData",
                value: function() {
                    return {
                        data: {}
                    }
                }
            }, {
                key: "getImageData",
                value: function() {
                    return {
                        data: {}
                    }
                }
            }, {
                key: "putImageData",
                value: function() {
                    return {
                        data: {}
                    }
                }
            }, {
                key: "moveTo",
                value: function() {
                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "moveTo", this) && (arguments[0] *= h, arguments[1] *= h, o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "moveTo", this).apply(this, arguments))
                }
            }, {
                key: "lineTo",
                value: function() {
                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "lineTo", this) && (arguments[0] *= h, arguments[1] *= h, o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "lineTo", this).apply(this, arguments))
                }
            }, {
                key: "fill",
                value: function() {
                    this._textList = [], this.clearRect(0, 0, this._width, this._height, "ios" === GameStatusInfo.platform), this.fillRect(0, 0, this._width, this._height)
                }
            }, {
                key: "clear",
                value: function() {
                    this._textList = [], o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "clear", this) && o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "clear", this).apply(this, arguments)
                }
            }, {
                key: "clearRect",
                value: function(e, n, i, r, a) {
                    this._textList = [];
                    var l = arguments[2] || 0,
                        f = arguments[3] || 0;
                    (a || l < BK.Director.screenPixelSize.width && f < BK.Director.screenPixelSize.height) && o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "clearRect", this) && o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "clearRect", this).apply(this, arguments)
                }
            }, {
                key: "setTransform",
                value: function(e, n, i, r, a, l) {
                    if(o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canvasSetTransform", this)) o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canvasSetTransform", this).apply(this, arguments);
                    else {
                        var f = this.inversMatrix,
                            c = u.
                        default.create().setTo(e, n, i, r, a, l),
                            s = u.
                        default.create().setTo(1, 0, 0, 1, 0, 0);
                        f ? s.concat(f):
                        f = u.
                    default.create(), f.setTo(e, n, i, r, a, l), f.invert(), this.inversMatrix = f, s.concat(c), this.transforms(s.a, s.b, s.c, s.d, s.tx, s.ty), u.
                    default.release(c), u.
                    default.release(s)
                    }
                }
            }, {
                key: "transform",
                value: function() {
                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canvasTransform", this) ? o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "canvasTransform", this).apply(this, arguments) : o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "transforms", this).apply(this, arguments)
                }
            }, {
                key: "transforms",
                value: function() {
                    o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "transforms", this).apply(this, arguments)
                }
            }, {
                key: "createLinearGradient",
                value: function() {
                    return {
                        addColorStop: function() {}
                    }
                }
            }, {
                key: "strokeText",
                value: function() {}
            }, {
                key: "height",
                set: function(e) {
                    this._height = e, this.updateSize()
                },
                get: function() {
                    return this._height
                }
            }, {
                key: "width",
                set: function(e) {
                    this._width = e, this.updateSize()
                },
                get: function() {
                    return this._width
                }
            }, {
                key: "fillStyle",
                set: function(e) {
                    var t = 0;
                    if(e.includes && e.includes("#")) {
                        if(e.length < 9) for(var n = 9 - e.length, i = 0; i < n; i++) e += "f";
                        t = parseInt(e.replace(/^#/, ""), 16)
                    } else if(e.includes && e.includes("rgba")) {
                        var r = (e = (e = e.replace("rgba(", "")).replace(")", "")).split(",");
                        t = !1, this.fillColor = {
                            r: r[0] > 200 ? 1 * r[0] / 255 : r[0],
                            g: r[1] > 200 ? 1 * r[1] / 255 : r[1],
                            b: r[2] > 200 ? 1 * r[2] / 255 : r[2],
                            a: r[3] > 200 ? 1 * r[3] / 255 : r[3]
                        }, this._fillColor = this.fillColor
                    } else if(isNaN(e)) {
                        var o = (0, s.colourNameToHex)(e);
                        if(o.length < 9) for(var l = 9 - o.length, f = 0; f < l; f++) o += "f";
                        o ? t = parseInt(o.replace(/^#/, ""), 16) : a.
                    default.d(0, 0, "Can not find color for " + o)
                    } else t = parseInt(e);
                    t && (this.fillColor = {
                        r: 1 * (t >> 24 & 255) / 255,
                        g: 1 * (t >> 16 & 255) / 255,
                        b: 1 * (t >> 8 & 255) / 255,
                        a: 1 * (255 & t) / 255
                    }, this._fillColor = this.fillColor)
                }
            }, {
                key: "strokeStyle",
                set: function(e) {
                    var t = 0;
                    if(e.includes && e.includes("#")) {
                        if(e.length < 9) {
                            var n = 9 - e.length,
                                i = "f";
                            isNaN(e.replace(/^#/, "")) || 0 !== parseInt(e.replace(/^#/, "")) || (i = "0");
                            for(var r = 0; r < n; r++) e += i
                        }
                        t = parseInt(e.replace(/^#/, ""), 16)
                    } else if(e.includes && e.includes("rgba")) {
                        var o = (e = (e = e.replace("rgba(", "")).replace(")", "")).split(",");
                        t = !1, this.strokeColor = {
                            r: o[0] > 200 ? 1 * o[0] / 255 : o[0],
                            g: o[1] > 200 ? 1 * o[1] / 255 : o[1],
                            b: o[2] > 200 ? 1 * o[2] / 255 : o[2],
                            a: o[3] > 200 ? 1 * o[3] / 255 : o[3]
                        }, this._strokeColor = this.strokeColor
                    } else if(isNaN(e)) {
                        var l = (0, s.colourNameToHex)(e);
                        if(l.length < 9) for(var f = 9 - l.length, c = 0; c < f; c++) l += "f";
                        l ? t = parseInt(l.replace(/^#/, ""), 16) : a.
                    default.d(0, 0, "Can not find color for " + l)
                    } else t = parseInt(e);
                    t && (this.strokeColor = {
                        r: 1 * (t >> 24 & 255) / 255,
                        g: 1 * (t >> 16 & 255) / 255,
                        b: 1 * (t >> 8 & 255) / 255,
                        a: 1 * (255 & t) / 255
                    }, this._strokeColor = this.strokeColor)
                }
            }, {
                key: "font",
                set: function(e) {
                    if(e && "string" == typeof e) {
                        this._fontStyle = e;
                        var t = e.split(" "),
                            n = t.length,
                            i = (n - 5 >= 0 && t[n - 5], n - 4 >= 0 && t[n - 4], n - 3 >= 0 && t[n - 3], n - 2 >= 0 ? t[n - 2] : null),
                            r = n - 1 >= 0 ? t[n - 1] : null;
                        if(i) {
                            var o = parseInt(i) || g;
                            this._fontSize = o, this.setTextSize(o)
                        }
                        if(r) {
                            var a = void 0;
                            BK.FileUtil.isFileExist(f.
                        default.getPath("res/" + r)) && (a = f.
                        default.getPath("res/" + r)), BK.FileUtil.isFileExist(f.
                        default.getPath("fonts/" + r)) && (a = f.
                        default.getPath("fonts/" + r)), BK.FileUtil.isFileExist(f.
                        default.getPath(r)) && (a = f.
                        default.getPath(r)), a ? this.fontPath !== a && "GameRes://Arial" !== a && (this.fontPath = a) : console.log("Font not exists ## " + r)
                        }
                    }
                }
            }]), t
        }();
    t.
default = p
}, function(e, t, n) {;
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = function() {
            function e(e, t) {
                for(var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }(),
        r = n(2);
    var o = !0,
        a = function() {
            function e(t, n, i, r) {
                !
                function(e, t) {
                    if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.scene = t, this.query = GameStatusInfo.gameParam, this.shareTicket = i, this.isSticky = r
            }
            return i(e, [{
                key: "getLaunchOptionsSync",
                value: function() {
                    return {
                        scene: this.scene,
                        query: this.query,
                        isSticky: this.isSticky,
                        shareTicket: this.shareTicket
                    }
                }
            }, {
                key: "exitMiniProgram",
                value: function() {}
            }, {
                key: "onHide",
                value: function(e) {
                    "function" == typeof e && BK.QQ.listenGameEventEnterBackground({}, e)
                }
            }, {
                key: "offHide",
                value: function() {
                    "function" == typeof callback && BK.QQ.listenGameEventEnterBackground({}, null)
                }
            }, {
                key: "onShow",
                value: function(e) {
                    if("function" == typeof e) {
                        var t = this;
                        t.query = GameStatusInfo.gameParam, BK.QQ.listenGameEventEnterForeground({
                            scene: t.scene,
                            query: GameStatusInfo.gameParam,
                            shareTicket: t.shareTicket
                        }, e), o && ((0, r.setTimeout)(function() {
                            e({
                                scene: t.scene,
                                query: GameStatusInfo.gameParam,
                                shareTicket: t.shareTicket
                            })
                        }, 0), o = !1)
                    }
                }
            }, {
                key: "offShow",
                value: function(e) {
                    "function" == typeof e && BK.QQ.listenGameEventEnterBackground(null)
                }
            }]), e
        }();
    t.
default = a
}, function(e, t, n) {;
    var i;
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.requestAnimationFrame = t.cancelAnimationFrame = t.clearTimeout = t.setTimeout = t.clearInterval = t.setInterval = t.Log = t.wx = t.Canvas = t.Image = void 0;
    var r = A(n(26)),
        o = A(n(0)),
        a = A(n(25)),
        l = A(n(22)),
        f = A(n(4)),
        c = n(2),
        u = A(n(21)),
        s = A(n(20)),
        d = A(n(19)),
        h = A(n(18)),
        g = A(n(17)),
        p = A(n(16)),
        E = A(n(15)),
        v = (n(14), n(13), n(12), A(n(11))),
        y = n(10),
        _ = A(n(9)),
        m = A(n(8)),
        S = A(n(7)),
        b = A(n(6)),
        T = A(n(5));

    function A(e) {
        return e && e.__esModule ? e : {
        default:
            e
        }
    }
    function k(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var C = new r.
default(8, "test", "test", !0),
        B = new g.
    default,
        I = new E.
    default,
        P = new _.
    default,
        R = new s.
    default,
        w = new m.
    default,
        F = new p.
    default,
        O = new a.
    default(1021, 85),
        M = new v.
    default(O),
        U = void 0,
        N = void 0,
        L = void 0,
        x = new S.
    default,
        D = new b.
    default,
        K = new T.
    default;
    new BK.Game({
        onLoad: function(e) {
            BK.Script.log(0, 0, "BK.Game, onLoad")
        },
        onMaximize: function(e) {
            BK.Script.log(0, 0, "BK.Game, onMaxmize")
        },
        onMinmize: function(e) {
            BK.Script.log(0, 0, "BK.Game, onMinmize")
        },
        onEnterBackground: function(e) {
            BK.Script.log(0, 0, "BK.Game, onEnterbackground"), L && L()
        },
        onEnterForeground: function(e) {
            BK.Script.log(0, 0, "BK.Game, onEnterforeground"), N && N()
        },
        onShare: function(e) {
            if(BK.Script.log(0, 0, "BK.Game, onShare"), I && I.shareCallback) {
                var t = I.shareCallback();
                if(void 0 !== t) return {
                    summary: t.title,
                    extendInfo: {},
                    localPicPath: "",
                    picUrl: t.imageUrl
                }
            }
        },
        onClose: function(e) {
            BK.Script.log(0, 0, "BK.Game, onClose")
        }
    });
    var G = (k(i = {
        exitMiniProgram: function() {
            return C.exitMiniProgram()
        },
        getLaunchOptionsSync: function() {
            return C.getLaunchOptionsSync()
        },
        onHide: function(e) {
            return C.onHide(e)
        },
        offHide: function() {
            return C.offHide()
        },
        onShow: function(e) {
            return C.onShow(e)
        },
        offShow: function(e) {
            return C.offShow(e)
        },
        log: function(e, t, n) {
            o.
        default.d(e, t, n)
        },
        createCanvas: function() {
            return new a.
        default(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height)
        },
        createImage: function() {
            return new l.
        default
        },
        getSystemInfo: function(e) {
            window.setTimeout(function() {
                return e.success({
                    devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                    brand: "",
                    model: "",
                    pixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                    screenWidth: 4 * BK.Director.renderSize.width,
                    screenHeight: 4 * BK.Director.renderSize.height,
                    windowWidth: 4 * BK.Director.renderSize.width,
                    windowHeight: 4 * BK.Director.renderSize.height,
                    language: "zh_CN",
                    version: GameStatusInfo.QQVer,
                    system: GameStatusInfo.platform + " 10.0",
                    platform: GameStatusInfo.platform,
                    fontSizeSetting: "",
                    SDKVersion: "",
                    benchmarkLevel: "",
                    battery: "",
                    wifiSignal: ""
                }), {
                    devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                    brand: "",
                    model: "",
                    pixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                    screenWidth: 4 * BK.Director.renderSize.width,
                    screenHeight: 4 * BK.Director.renderSize.height,
                    windowWidth: 4 * BK.Director.renderSize.width,
                    windowHeight: 4 * BK.Director.renderSize.height,
                    language: "zh_CN",
                    version: GameStatusInfo.QQVer,
                    system: GameStatusInfo.platform + " " + GameStatusInfo.osVersion,
                    platform: GameStatusInfo.platform,
                    fontSizeSetting: "",
                    SDKVersion: "",
                    benchmarkLevel: "",
                    battery: "",
                    wifiSignal: ""
                }
            }, 10)
        },
        getSystemInfoSync: function() {
            return {
                devicePixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                brand: "",
                model: "",
                pixelRatio: BK.Director.screenPixelSize.width / BK.Director.renderSize.width,
                screenWidth: BK.Director.renderSize.width,
                screenHeight: BK.Director.renderSize.height,
                windowWidth: BK.Director.renderSize.width,
                windowHeight: BK.Director.renderSize.height,
                language: "zh_CN",
                version: GameStatusInfo.QQVer,
                system: GameStatusInfo.platform + " 10.0" + GameStatusInfo.osVersion,
                platform: GameStatusInfo.platform,
                fontSizeSetting: "",
                SDKVersion: "",
                benchmarkLevel: "",
                battery: "",
                wifiSignal: ""
            }
        },
        onTouchStart: function(e) {
            f.
        default.onTouchStart(e)
        },
        offTouchStart: function(e) {
            f.
        default.offTouchStart(e)
        },
        onTouchMove: function(e) {
            f.
        default.onTouchMove(e)
        },
        onTouchCancel: function(e) {
            f.
        default.onTouchCancel(e)
        },
        onTouchEnd: function(e) {
            f.
        default.onTouchEnd(e)
        }
    }, "offTouchStart", function(e) {
        f.
    default.offTouchStart(index, 1)
    }), k(i, "offTouchMove", function(e) {
        f.
    default.offTouchMove(e)
    }), k(i, "offTouchCancel", function(e) {
        f.
    default.offTouchCancel(e)
    }), k(i, "offTouchEnd", function(e) {
        f.
    default.offTouchEnd(e)
    }), k(i, "createInnerAudioContext", function() {
        return new u.
    default
    }), k(i, "getUserInfo", function(e) {
        var t = {
            userInfo: {
                nickName: "",
                gender: 1,
                language: "zh_CN",
                city: "",
                province: "",
                country: "China",
                avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKJn00QRPUIQXL4HtGLnhzVHTCA4kiaSibn6pcfs0FhWV5SzicglRrKA9wUwxBZIBHNbVWIB9R9IvYBQ/132"
            },
            rawData: "",
            signature: "",
            encryptedData: "",
            iv: "",
            errMsg: "getUserInfo:ok"
        };
        BK.QQ.fetchOpenKey(function(n, i, r) {
            0 === n && r && r.openKey ? e.success && (t.openid = GameStatusInfo.openId, t.openkey = r.openKey, BK.QQ.getRankList(function(n, i, r) {
                if(r && r.data && r.data.rankList) for(var o = r.data.rankList, a = 0; a < o.length; a++) {
                    var l = o[a];
                    l && l.ownFlag && 1 === l.ownFlag && (t.userInfo.avatarUrl = l.head, t.userInfo.nickName = l.nick, t.rawData = JSON.stringify(t.userInfo), e.success(t), e.complete())
                }
            })) : (BK.Script.log(0, 0, "fetchOpenKey ailed: errCode=" + n), e.fail && e.fail()), e.complete && e.complete()
        })
    }), k(i, "getFileSystemManager", function() {
        return o.
    default.d(0, 0, "getFileSystemManager"), R
    }), k(i, "request", function(e) {
        return new d.
    default(e).request()
    }), k(i, "downloadFile", function(e) {
        return new d.
    default(e).downloadFile()
    }), k(i, "uploadFile", function(e) {
        return new d.
    default(e).uploadFile()
    }), k(i, "hideKeyboard", function(e) {
        B.hideKeyboard(e)
    }), k(i, "onKeyboardInput", function(e) {
        B.onKeyboardInput(e)
    }), k(i, "offKeyboardInput", function(e) {
        B.offKeyboardInput(e)
    }), k(i, "onKeyboardConfirm", function(e) {
        B.onKeyboardConfirm(e)
    }), k(i, "offKeyboardConfirm", function(e) {
        B.offKeyboardConfirm(e)
    }), k(i, "onKeyboardComplete", function(e) {
        B.onKeyboardComplete(e)
    }), k(i, "offKeyboardComplete", function(e) {
        B.offKeyboardComplete(e)
    }), k(i, "showKeyboard", function(e) {
        B.showKeyboard(e)
    }), k(i, "setKeepScreenOn", function() {}), k(i, "showToast", function(e) {
        x.showToast(e)
    }), k(i, "hideToast", function() {
        x.hideToast()
    }), k(i, "showLoading", function(e) {
        x.showLoading(e)
    }), k(i, "hideLoading", function() {
        x.hideLoading()
    }), k(i, "showModal", function(e) {
        x.showModal(e)
    }), k(i, "getNetworkType", function(e) {
        K.getNetworkType(e)
    }), k(i, "checkSession", function(e) {
        F.checkSession(e)
    }), k(i, "login", function(e) {
        console.log("begin login"), F.login(e)
    }), k(i, "getShareInfo", function(e) {
        I.getShareInfo(e)
    }), k(i, "hideShareMenu", function(e) {
        I.hideShareMenu(e)
    }), k(i, "onShareAppMessage", function(e) {
        I.onShareAppMessage(e)
    }), k(i, "offShareAppMessage", function(e) {
        I.offShareAppMessage(e)
    }), k(i, "showShareMenu", function(e) {
        I.showShareMenu(e)
    }), k(i, "shareAppMessage", function(e) {
        I.shareAppMessage(e)
    }), k(i, "updateShareMenu", function(e) {
        I.updateShareMenu(e)
    }), k(i, "getLocation", function(e) {
        if(e) if(e.appid) {
            var t = {
                appid: e.appid,
                needCity: 1
            };
            BK.Director.getLocation(t, function(t, n, i) {
                var r = !1;
                if(0 == t) {
                    if(i) {
                        r = !0;
                        var a = {
                            latitude: i.latitude,
                            longitude: i.longitude,
                            speed: i.speed,
                            altitude: i.altitude,
                            verticalAccuracy: i.verticalAccuracy,
                            horizontalAccuracy: i.horizontalAccuracy
                        };
                        e.success && e.success(a)
                    }
                } else o.
            default.d(0, 0, "getLocation failed, statusCode=" + t);
                r || e.fail && e.fail(), e.complete && e.complete()
            })
        } else o.
    default.d(0, 0, "getLocation failed, no appid");
        else o.
    default.d(0, 0, "getLocation failed, no object")
    }), k(i, "setStorage", function(e) {
        w.setStorage(e)
    }), k(i, "setStorageSync", function(e, t) {
        w.setStorageSync(e, t)
    }), k(i, "getStorage", function(e) {
        w.getStorage(e)
    }), k(i, "getStorageSync", function(e) {
        return w.getStorageSync(e)
    }), k(i, "getStorageInfoSync", function() {
        return w.getStorageInfoSync()
    }), k(i, "getStorageInfo", function(e) {
        w.getStorageInfo(e)
    }), k(i, "removeStorage", function(e) {
        w.removeStorage(e)
    }), k(i, "removeStorageSync", function(e) {
        w.removeStorageSync(e)
    }), k(i, "clearStorage", function(e) {
        w.clearStorage(e)
    }), k(i, "clearStorageSync", function() {
        w.clearStorageSync()
    }), k(i, "connectSocket", function(e) {
        return console.log("connect socket "), h.
    default.newConnection(e)
    }), k(i, "closeSocket", function(e) {
        h.
    default.closeSocket(e)
    }), k(i, "onSocketOpen", function(e) {
        console.log("open socket "), h.
    default.publishEvent(h.
    default.SOCK_EVENT_OPEN, e)
    }), k(i, "onSocketClose", function(e) {
        console.log("close socket "), h.
    default.publishEvent(h.
    default.SOCK_EVENT_CLOSE, e)
    }), k(i, "onSocketMessage", function(e) {
        h.
    default.publishEvent(h.
    default.SOCK_EVENT_MESSAGE, e)
    }), k(i, "onSocketError", function(e) {
        h.
    default.publishEvent(h.
    default.SOCK_EVENT_ERROR, e)
    }), k(i, "sendSocketMessage", function(e) {
        h.
    default.sendMessage(e)
    }), k(i, "loadFont", function(e) {
        return e
    }), k(i, "onError", function() {}), k(i, "getFriendCloudStorage", function(e) {
        e && (BK.Script.log(0, 0, "getFriendCloudStorage, object=" + JSON.stringify(e)), BK.QQ.getRankList(function(t, n, i) {
            BK.Script.log(0, 0, "getRankList, cmd=" + n + ", errCode=" + t + ", data=" + JSON.stringify(i));
            var r = [];
            if(i && i.data && i.data.rankList) for(var o = i.data.rankList, a = 0; a < o.length; a++) {
                var l = o[a];
                BK.Script.log(1, 1, "rankList i:" + a + " nick:" + l.nick + "  head:" + l.head + " accPoint:" + l.busData.accPoint);
                var f = "";
                l && l.ownFlag && 1 == l.ownFlag && (f = GameStatusInfo.openId), r[a] = {
                    avatarUrl: l.head,
                    nickname: l.nick,
                    openid: f,
                    KVDataList: [{
                        key: "key_score",
                        value: l.busData.accPoint
                    }]
                }
            }
            BK.Script.log(0, 0, "getRankList, result=" + JSON.stringify(r)), e.success && e.success({
                data: r
            }), e.complete && e.complete()
        }))
    }), k(i, "getUserCloudStorage", function(e) {
        BK.Script.log(0, 0, "getUserCloudStorage, object=" + JSON.stringify(e))
    }), k(i, "getGroupCloudStorage", function(e) {
        BK.Script.log(0, 0, "getGroupCloudStorage, object=" + JSON.stringify(e))
    }), k(i, "getSharedCanvas", function() {
        return O
    }), k(i, "removeUserCloudStorage", function(e) {
        BK.Script.log(0, 0, "removeUserCloudStorage, object=" + JSON.stringify(e))
    }), k(i, "setUserCloudStorage", function(e) {
        if(BK.Script.log(0, 0, "setUserCloudStorage, object=" + JSON.stringify(e)), e && e.KVDataList) {
            for(var t = [], n = 0, i = 0; i < e.KVDataList.length; i++) {
                var r = e.KVDataList[i];
                if("key_score" == r.key) {
                    n = r.value;
                    break
                }
            }
            t[0] = {
                openId: GameStatusInfo.openId,
                scoreInfo: {
                    score: n
                }
            }, BK.QQ.scoreUpload(t, function(t, n, i) {
                0 == t ? e.success && e.success() : e.fail && e.fail(), e.complete && e.complete()
            }, null)
        }
    }), k(i, "checkIsUserAdvisedToRest", function(e) {}), k(i, "createUserInfoButton", function(e) {}), k(i, "createOpenSettingButton", function(e) {}), k(i, "getSetting", function(e) {
        e.success && e.success({
            errMsg: "getSetting:ok",
            authSetting: {
                "scope.userInfo": !0,
                "scope.userLocation": !0,
                "scope.address": !0,
                "scope.invoiceTitle": !0,
                "scope.werun": !0,
                "scope.record": !0,
                "scope.writePhotosAlbum": !0,
                "scope.camera": !0
            }
        })
    }), k(i, "openSetting", function(e) {}), k(i, "getWeRunData", function(e) {}), k(i, "authorize", function(e) {}), k(i, "createGameClubButton", function(e) {}), k(i, "openCustomerServiceConversation", function(e) {}), k(i, "getOpenDataContext", function() {
        return o.
    default.d(0, 0, "getOpenDataContext, context=" + M), M
    }), k(i, "onMessage", function(e) {
        o.
    default.d(0, 0, "onMessage, callback=" + e), U = e
    }), k(i, "postMessage", function(e) {
        o.
    default.d(0, 0, "postMessage, messageObj=" + JSON.stringify(e) + ", bkOnMessageCallback=" + U), U && U(e)
    }), k(i, "createBannerAd", function(e) {
        if(e) return new y.BannerAd(e.adUnitId, e.style)
    }), k(i, "createRewardedVideoAd", function(e) {
        if(e) return new y.RewardedVideoAd(e.adUnitId, e.style, e.videoType)
    }), k(i, "startAccelerometer", function(e) {
        D.startAccelerometer(e)
    }), k(i, "onAccelerometerChange", function(e) {
        D.onAccelerometerChange(e)
    }), k(i, "stopAccelerometer", function(e) {
        D.stopAccelerometer(e)
    }), k(i, "requestMidasPayment", function(e) {
        P.requestMidasPayment(e)
    }), k(i, "onAudioInterruptionEnd", function(e) {
        N = e
    }), k(i, "offAudioInterruptionEnd", function(e) {
        N = void 0
    }), k(i, "onAudioInterruptionBegin", function(e) {
        L = e
    }), k(i, "offAudioInterruptionBegin", function(e) {
        L = void 0
    }), i);
    G.env = {}, G.env.USER_DATA_PATH = "", t.Image = l.
default, t.Canvas = a.
default, t.wx = G, t.Log = o.
default, t.setInterval = c.setInterval, t.clearInterval = c.clearInterval, t.setTimeout = c.setTimeout, t.clearTimeout = c.clearTimeout, t.cancelAnimationFrame = c.cancelAnimationFrame, t.requestAnimationFrame = c.requestAnimationFrame, window.Image = l.
default, window.wx = G, window.setInterval = c.setInterval, window.clearInterval = c.clearInterval, window.setTimeout = c.setTimeout, window.clearTimeout = c.clearTimeout, window.cancelAnimationFrame = c.cancelAnimationFrame, window.requestAnimationFrame = c.requestAnimationFrame
}]);