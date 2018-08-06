import 'libs/weapp-adapter'
import * as PIXI from 'pixi.min.js'
import 'pixi_getter.js'
let instance;
var Globalsharecanvas = null;
var sprite = null;
export default class Main {
  constructor() {
    instance = this;

    instance.maingame();
    
  }
  maingame()
  {
    var { pixelRatio, windowWidth, windowHeight } = wx.getSystemInfoSync();
    const app = new PIXI.Application({
      width: windowWidth * pixelRatio,
      height: windowHeight * pixelRatio,
      antialias: false,
      resolution: 1,
      view: canvas
    });

    app.renderer.plugins.interaction.mapPositionToPoint = (point, x, y) => {
      point.x = x * pixelRatio
      point.y = y * pixelRatio
    }
    app.ticker.add(function () {
      
      //渲染图片
      var texture = PIXI.Texture.fromImage("images/1.png");

		sprite = new PIXI.Sprite(texture);
		sprite.x = 0;
		sprite.y = 0;
		sprite.alpha = 1;
		app.stage.addChild(sprite);
    }, this);
    //----------------------------------------------
  
  }
}