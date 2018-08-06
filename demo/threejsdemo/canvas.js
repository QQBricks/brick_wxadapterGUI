function Canvas() {
    var argumentLength = arguments.length;
    this._shadowColor = { r: 0, g: 0, b: 0, a: 0 };
    this._shadowOffset = { x: 0, y: 0 };
    this._shadowRadius = 0;
    this._textBaseLine = 0;
    this._textAlign = 0;
    this._useH5Mode = 0;
    if (argumentLength == 2) {
        this.__nativeObj = new BK.CanvasNode(arguments[0], arguments[1]);
    }
    else {
        return undefined;
    }
    this.setFlipXY(0, 1);
    var names = Object.getOwnPropertyNames(this.__nativeObj);
    names.forEach(function (element) {
        var key = element;
        if (key != "scale" && key != "contentSize" && key != "size") {
            Object.defineProperty(this, key, {
                get: function () {
                    return this.__nativeObj[key];
                },
                set: function (obj) {
                    this.__nativeObj[key] = obj;
                }
            });
        }
    }, this);
    Object.defineProperty(Canvas.prototype, "contentSize", {
        get: function () {
            return this.__nativeObj["contentSize"];
        },
        set: function (obj) {
            this.__nativeObj["contentSize"] = obj;
            this.__nativeObj.resetCanvas();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "size", {
        get: function () {
            return this.__nativeObj["size"];
        },
        set: function (obj) {
            this.__nativeObj["size"] = obj;
            this.__nativeObj.resetCanvas();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "textBaseline", {
        get: function () {
            return this._textBaseLine;
        },
        set: function (value) {
            switch (value) {
                case 0:
                case 1:
                case 2:
                    this._textBaseLine = value;
                    break;
                case 'bottom':
                case 'Bottom':
                    this._textBaseLine = 0;
                    break;
                case 'Middle':
                case 'middle':
                    this._textBaseLine = 1;
                    break;
                case 'Top':
                case 'top':
                    this._textBaseLine = 2;
                    break;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "textAlign", {
        get: function () {
            return this._textAlign;
        },
        set: function (value) {
            switch (value) {
                case 0:
                case 1:
                case 2:
                    this._textAlign = value;
                    break;
                case 'left':
                    this._textAlign = 0;
                    break;
                case 'center':
                    this._textAlign = 1;
                    break;
                case 'right':
                    this._textAlign = 2;
                    break;
            }
            this.__nativeObj.setTextAlign(this._textAlign);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "lineWidth", {
        get: function () {
            return this.__nativeObj.lineWidth;
        },
        set: function (value) {
            this.__nativeObj.lineWidth = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "globalAlpha", {
        get: function () {
            return this.__nativeObj.globalAlpha;
        },
        set: function (value) {
            value = Math.min(1, value);
            value = Math.max(0, value);
            this.__nativeObj.globalAlpha = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "fillColor", {
        get: function () {
            return this.__nativeObj.fillColor;
        },
        set: function (value) {
            this.__nativeObj.fillColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "strokeColor", {
        get: function () {
            return this.__nativeObj.strokeColor;
        },
        set: function (value) {
            this.__nativeObj.strokeColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "lineCap", {
        get: function () {
            return this.__nativeObj.lineCap;
        },
        set: function (value) {
            this.__nativeObj.lineCap = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "lineJoin", {
        get: function () {
            return this.__nativeObj.lineJoin;
        },
        set: function (value) {
            this.__nativeObj.lineJoin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Canvas.prototype, "miterLimit", {
        get: function () {
            return this.__nativeObj.miterLimit;
        },
        set: function (value) {
            this.__nativeObj.miterLimit = value;
        },
        enumerable: true,
        configurable: true
    });
}
Canvas.prototype.setImagePath = function (path) {
    if (path) {
        this.imagePath = path;
        var texture = new BK.Texture(path);
        this.__nativeObj.setTexture(texture);
    }
};
Canvas.prototype.getImagePath = function () {
    return this.imagePath;
};
Canvas.prototype.setTexture = function (texture) {
    this.__nativeObj.setTexture(texture);
};
Canvas.prototype.setFlipXY = function (flipx, flipy) {
    this.__nativeObj.setUVFlip(flipx, flipy);
};
Canvas.prototype.setUVFlip = function (flipu, flipv) {
    this.__nativeObj.setUVFlip(flipu, flipv);
};
Canvas.prototype.setUVWrap = function (wrapu, wrapv) {
    this.__nativeObj.setUVWrap(wrapu, wrapv);
};
Canvas.prototype.setXYStretch = function (stretchX, stretchY) {
    this.__nativeObj.setXYStretch(stretchX, stretchY);
};
Canvas.prototype.adjustTexturePosition = function (x, y, width, height, rotated) {
    this.__nativeObj.adjustTexturePosition(x, y, width, height, rotated);
};
Canvas.prototype.addChild = function (child) {
    return this.__nativeObj.addChild(child);
};
Canvas.prototype.dispose = function () {
    return this.__nativeObj.dispose();
};
Canvas.prototype.removeChild = function (child) {
    return this.__nativeObj.removeChild(child);
};
Canvas.prototype.removeChildById = function (id) {
    return this.__nativeObj.removeChildById(id);
};
Canvas.prototype.removeChildByName = function (name) {
    return this.__nativeObj.removeChildByName(name);
};
Canvas.prototype.removeChildByTag = function (tag) {
    return this.__nativeObj.removeChildByTag(tag);
};
Canvas.prototype.queryChildAtIndex = function (index) {
    return this.__nativeObj.queryChildAtIndex(index);
};
Canvas.prototype.queryChildById = function (Id) {
    return this.__nativeObj.queryChildById(Id);
};
Canvas.prototype.queryChildByName = function (name) {
    return this.__nativeObj.queryChildByName(name);
};
Canvas.prototype.queryChildByTag = function (tag) {
    return this.__nativeObj.queryChildByTag(tag);
};
Canvas.prototype.getChildCount = function () {
    return this.__nativeObj.getChildCount();
};
Canvas.prototype.removeFromParent = function () {
    return this.__nativeObj.removeFromParent();
};
Canvas.prototype.attachComponent = function (component) {
    return this.__nativeObj.attachComponent(component);
};
Canvas.prototype.detachComponent = function (component) {
    return this.__nativeObj.detachComponent(component);
};
Canvas.prototype.queryComponent = function (type) {
    return this.__nativeObj.queryComponent(type);
};
Canvas.prototype.queryComponentList = function (type) {
    return this.__nativeObj.queryComponentList(type);
};
Canvas.prototype.hittest = function (pos) {
    return this.__nativeObj.hittest(pos);
};
Canvas.prototype.isEqual = function (node) {
    return this.__nativeObj.isEqual(node);
};
Canvas.prototype.convertToWorldSpace = function (pos) {
    return this.__nativeObj.convertToWorldSpace(pos);
};
Canvas.prototype.convertToNodeSpace = function (pos) {
    return this.__nativeObj.convertToNodeSpace(pos);
};
Canvas.prototype.setAtlas = function (jsonUrl, name) {
    if (this.__nativeObj) {
        BK.CanvasSheetCache.loadSheet(jsonUrl);
        var texturePath = BK.CanvasSheetCache.getTexturePathByFilename(name);
        var texture = new BK.Texture(texturePath);
        this.__nativeObj.setTexture(texture);
        var frameInfo = BK.CanvasSheetCache.getFrameInfoByFilename(name);
        this.__nativeObj.adjustTexturePosition(frameInfo.frame.x, frameInfo.frame.y, frameInfo.frame.w, frameInfo.frame.h, frameInfo.rotated);
    }
    return 0;
};
Canvas.prototype.useH5Mode = function () {
    if (this.__nativeObj) {
        this._useH5Mode = 1;
        var argumentLength = arguments.length;
        if (argumentLength == 1) {
            this._useH5Mode = arguments[0];
            return this.__nativeObj.useH5Mode(arguments[0]);
        }
        else {
            return this.__nativeObj.useH5Mode();
        }
    }
    return 0;
};
Canvas.prototype.drawCircle = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.drawCircle(arguments[0], arguments[1], arguments[2]);
    }
    return 0;
};
Canvas.prototype.drawEllipse = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.drawEllipse(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.drawImage = function () {
    if (this.__nativeObj) {
        var argumentLength = arguments.length;
        if (argumentLength == 9) {
            this.__nativeObj.drawImage(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
        }
        else if (argumentLength == 5) {
            this.__nativeObj.drawImage(arguments[0], 0, 0, 0, 0, arguments[1], arguments[2], arguments[3], arguments[4]);
        }
        else if (argumentLength == 3) {
            this.__nativeObj.drawImage(arguments[0], 0, 0, 0, 0, arguments[1], arguments[2], 0, 0);
        }
        else {
            return undefined;
        }
    }
    return 0;
};
Canvas.prototype.fill = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.fill();
    }
    return 0;
};
Canvas.prototype.stroke = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.stroke();
    }
    return 0;
};
Canvas.prototype.rect = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.rect(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.fillRect = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.fillRect(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.strokeRect = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.strokeRect(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.clearRect = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.clearRect(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.beginPath = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.beginPath();
    }
    return 0;
};
Canvas.prototype.closePath = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.closePath();
    }
    return 0;
};
Canvas.prototype.moveTo = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.moveTo(arguments[0], arguments[1]);
    }
    return 0;
};
Canvas.prototype.lineTo = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.lineTo(arguments[0], arguments[1]);
    }
    return 0;
};
Canvas.prototype.arcTo = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.arcTo(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    return 0;
};
Canvas.prototype.arc = function () {
    if (this.__nativeObj) {
        var argumentLength = arguments.length;
        if (argumentLength == 5) {
            return this.__nativeObj.arc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
        }
        else if (argumentLength == 6) {
            return this.__nativeObj.arc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
        }
    }
    return 0;
};
Canvas.prototype.quadraticCurveTo = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.quadraticCurveTo(arguments[0], arguments[1], arguments[2], arguments[3]);
    }
    return 0;
};
Canvas.prototype.bezierCurveTo = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.bezierCurveTo(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    }
    return 0;
};
Canvas.prototype.save = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.save();
    }
    return 0;
};
Canvas.prototype.restore = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.restore();
    }
    return 0;
};
Canvas.prototype.fillText = function () {
    var argumentLength = arguments.length;
    if (argumentLength == 3) {
        var maxWidth = 2048;
        var maxHeight = 1024;
        var measureSize = this.measureText(arguments[0], maxWidth, maxHeight);
        var x = arguments[1];
        var y = arguments[2];
        var baseLineType = this._useH5Mode == 1 ? 2 - this._textBaseLine : this._textBaseLine;
        switch (baseLineType) {
            case 1:
                y = y - measureSize.height * 0.5;
                break;
            case 2:
                y = y - measureSize.height * 1;
                break;
            case 0:
            default:
                break;
        }
        switch (this._textAlign) {
            case 1:
                x = x - measureSize.width * 0.5;
                break;
            case 2:
                x = x - measureSize.width * 1;
                break;
            case 0:
            default:
                break;
        }
        return this.__nativeObj.fillText(arguments[0], x, y, Math.min(maxWidth, measureSize.width), Math.min(maxHeight, measureSize.height));
    }
    return 0;
};
Canvas.prototype.clip = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.clip();
    }
    return 0;
};
Canvas.prototype.isPointInPath = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.isPointInPath(arguments[0], arguments[1]);
    }
};
Canvas.prototype.scale = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.scales(arguments[0], arguments[1]);
    }
};
Canvas.prototype.rotate = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.rotate(arguments[0]);
    }
};
Canvas.prototype.translate = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.translate(arguments[0], arguments[1]);
    }
};
Canvas.prototype.transforms = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.transforms(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
    }
};
Canvas.prototype.shadowColor = function () {
    this._shadowColor = arguments[0];
    if (this.__nativeObj) {
        return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor);
    }
};
Canvas.prototype.shadowRadius = function () {
    this._shadowRadius = arguments[0];
    if (this.__nativeObj) {
        return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor);
    }
};
Canvas.prototype.shadowOffsetX = function () {
    this._shadowOffset.x = arguments[0];
    if (this.__nativeObj) {
        return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor);
    }
};
Canvas.prototype.shadowOffsetY = function () {
    this._shadowOffset.y = arguments[0];
    if (this.__nativeObj) {
        return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor);
    }
};
Canvas.prototype.clear = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.clear();
    }
};
Canvas.prototype.getTexture = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.getTexture();
    }
    return null;
};
Canvas.prototype.drawText = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.drawText(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
    }
    return null;
};
Canvas.prototype.setTextSize = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.setTextSize(arguments[0]);
    }
    return null;
};
Canvas.prototype.setTextAlign = function () {
    if (this.__nativeObj) {
        switch (arguments[0]) {
            case 0:
            case 1:
            case 2:
                this._textAlign = arguments[0];
                break;
            case 'left':
                this._textAlign = 0;
                break;
            case 'center':
                this._textAlign = 1;
                break;
            case 'right':
                this._textAlign = 2;
                break;
        }
        return this.__nativeObj.setTextAlign(this._textAlign);
    }
    return null;
};
Canvas.prototype.setTextBold = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.setTextBold(arguments[0]);
    }
    return null;
};
Canvas.prototype.setTextItalic = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.setTextItalic(arguments[0]);
    }
    return null;
};
Canvas.prototype.measureText = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.measureText(arguments[0], arguments[1], arguments[2]);
    }
    return null;
};
Canvas.prototype.updateCanvasTexture = function () {
    if (this.__nativeObj) {
        return this.__nativeObj.updateCanvasTexture();
    }
    return null;
};
Canvas.prototype.saveTo = function () {
    var argumentLength = arguments.length;
    if (this.__nativeObj && argumentLength == 1) {
        this.__nativeObj.saveTo(arguments[0]);
    }
    return null;
};
BK.Canvas = Canvas;
BK.Script.log(0, 0, "Load Canvas.js succeed.");
