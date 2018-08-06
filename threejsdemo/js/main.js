import * as THREE from './libs/three.js'
import OrbitControls from './libs/OrbitControls.js'

let ctx   = canvas.getContext('webgl')
let controls;

export default class Main {
  constructor(){
    this.initScene()
  }

  initScene(){
    let scene, camera, renderer;
    const width = window.innerWidth;
    const height = window.innerHeight;
    let aspectRatio, fieldOfView, nearPlane, farPlane;

    let globalLight, shadowLight;

    const PI = Math.PI;
    let hero, delta;
    let clock;

    //material
    const blackMat = new THREE.MeshPhongMaterial({
      color: 0x100707,
      flatShading: THREE.FlatShading,
    });

    const orangeMat = new THREE.MeshPhongMaterial({
      color: 0xb44b39,
      shininess: 0,
      flatShading: THREE.FlatShading,
    });

    const lightOrangeMat = new THREE.MeshPhongMaterial({
      color: 0xe07a57,
      flatShading: THREE.FlatShading,
    });

    const whiteMat = new THREE.MeshPhongMaterial({
      color: 0xa49789,
      flatShading: THREE.FlatShading,
    })

    //initial parameters
    const parameters = {
      speed: 6,

      pawFRAmplitudeY: 4,
      pawFRAmplitudeZ: 8,
      pawFRCycleOffset: .2,
      pawFRAnkleRotationAmplitude: PI / 2,

      pawFLAmplitudeY: 4,
      pawFLAmplitudeZ: 8,
      pawFLCycleOffset: -.2,
      pawFLAnkleRotationAmplitude: PI / 2,

      pawBRAmplitudeY: 4,
      pawBRAmplitudeZ: 5,
      pawBRCycleOffset: -.1 + PI,
      pawBRAnkleRotationAmplitude: PI / 2,

      pawBLAmplitudeY: 4,
      pawBLAmplitudeZ: 5,
      pawBLCycleOffset: .1 - PI,
      pawBLAnkleRotationAmplitude: PI / 2,

      bodyYAmplitude: 4,
      bodyCycleOffset: -PI / 2,
      bodyRotationAmplitude: PI * .12,

      torsoYAmplitude: 2,
      torsoCycleOffset: -PI / 2,
      torsoRotationAmplitude: PI * .12,

      tailRotationAmplitude: PI / 3,
      tailCycleOffset: PI / 2,

      headYAmplitude: 3,
      headZAmplitude: 4,
      headCycleOffset: -PI / 2,
      headRotationAmplitude: PI / 8,

      mouthRotationAmplitude: .6,
      mouthCycleOffset: PI,

      earRightRotationAmplitude: .8,
      earRightCycleOffset: -PI / 2 + .2,

      earLeftRotationAmplitude: .6,
      earLeftCycleOffset: -PI / 2,

      eyeMinScale: .1,
      eyeMaxScale: 1,
      eyeCycleOffset: -Math.PI / 4,
    }

    function init() {
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xd6eae6, 150, 300);

      aspectRatio = width / height;
      fieldOfView = 50;
      nearPlane = 0.01;
      farPlane = 2000;
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane,
      );
      camera.position.z = 100;

      renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        context: ctx,
        alpha: true,
        antialias: true,
      });
      renderer.setClearColor(0xdbe6e6)
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.shadowMap.enabled = true;

      var div = document.createElement('div');
      

      controls = new OrbitControls(camera);
      clock = new THREE.Clock;
    }

    function createLights() {
      globalLight = new THREE.AmbientLight(0xffffff, 1);
      shadowLight = new THREE.DirectionalLight(0xffffff, .9);
      shadowLight.position.set(-8, 8, 8);
      shadowLight.castShadow = true;
      shadowLight.shadow.camera.left = -40;
      shadowLight.shadow.camera.right = 40;
      shadowLight.shadow.camera.top = 40;
      shadowLight.shadow.camera.bottom = -40;
      shadowLight.shadow.camera.near = 1;
      shadowLight.shadow.camera.far = 1000;
      shadowLight.shadow.mapSize.width = shadowLight.shadow.mapSize.height = 2048;
      scene.add(globalLight);
      scene.add(shadowLight);
    }

    function Hero() {
      this.status = "running";
      this.runningCycle = 0;
      this.mesh = new THREE.Group();
      this.body = new THREE.Group();
      this.mesh.add(this.body);

      let torsoGeom = new THREE.CubeGeometry(7, 7, 10, 1);

      this.torso = new THREE.Mesh(torsoGeom, orangeMat);
      this.torso.position.z = 0;
      this.torso.position.y = 7;
      this.torso.rotation.x = -Math.PI / 8;
      this.torso.castShadow = true;
      this.body.add(this.torso);

      let pantsGeom = new THREE.CubeGeometry(9, 9, 5, 1);
      this.pants = new THREE.Mesh(pantsGeom, whiteMat);
      this.pants.position.z = -3;
      this.pants.position.y = 0;
      this.pants.castShadow = true;
      this.torso.add(this.pants);

      let tailGeom = new THREE.CubeGeometry(3, 3, 3, 1);
      tailGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, -2));
      this.tail = new THREE.Mesh(tailGeom, lightOrangeMat);
      this.tail.position.z = -4;
      this.tail.position.y = 5;
      this.tail.castShadow = true;
      this.torso.add(this.tail);

      let headGeom = new THREE.CubeGeometry(10, 10, 13, 1);
      headGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 7.5));
      this.head = new THREE.Mesh(headGeom, orangeMat);
      this.head.position.z = 2;
      this.head.position.y = 11;
      this.head.castShadow = true;
      this.body.add(this.head);

      let cheekGeom = new THREE.CubeGeometry(1, 4, 4, 1);
      this.cheekR = new THREE.Mesh(cheekGeom, lightOrangeMat);
      this.cheekR.position.x = -5;
      this.cheekR.position.z = 7;
      this.cheekR.position.y = -2.5;
      this.cheekR.castShadow = true;
      this.head.add(this.cheekR);

      this.cheekL = this.cheekR.clone();
      this.cheekL.position.x = -this.cheekR.position.x;
      this.head.add(this.cheekL);

      let noseGeom = new THREE.CubeGeometry(6, 6, 3, 1);
      this.nose = new THREE.Mesh(noseGeom, lightOrangeMat);
      this.nose.position.z = 13.5;
      this.nose.position.y = 2.6;
      this.nose.castShadow = true;
      this.head.add(this.nose);

      let mouthGeom = new THREE.CubeGeometry(4, 2, 4, 1);
      mouthGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 3));
      mouthGeom.applyMatrix(new THREE.Matrix4().makeRotationX(Math.PI / 12));
      this.mouth = new THREE.Mesh(mouthGeom, orangeMat);
      this.mouth.position.z = 8;
      this.mouth.position.y = -4;
      this.mouth.castShadow = true;
      this.head.add(this.mouth);

      let pawFGeom = new THREE.CubeGeometry(3, 4, 3, 1);
      this.pawFR = new THREE.Mesh(pawFGeom, lightOrangeMat);
      this.pawFR.position.x = -2.5;
      this.pawFR.position.z = 6;
      this.pawFR.position.y = 1.5;
      this.pawFR.castShadow = true;
      this.body.add(this.pawFR);

      this.pawFL = this.pawFR.clone();
      this.pawFL.position.x = -this.pawFR.position.x;
      this.pawFL.castShadow = true;
      this.body.add(this.pawFL);

      let pawBGeom = new THREE.CubeGeometry(3, 3, 6, 1);
      this.pawBL = new THREE.Mesh(pawBGeom, lightOrangeMat);
      this.pawBL.position.y = 1.5;
      this.pawBL.position.z = 0;
      this.pawBL.position.x = 5;
      this.pawBL.castShadow = true;
      this.body.add(this.pawBL);

      this.pawBR = this.pawBL.clone();
      this.pawBR.position.x = -this.pawBL.position.x;
      this.pawBR.castShadow = true;
      this.body.add(this.pawBR);

      let earGeom = new THREE.CubeGeometry(7, 18, 2, 1);
      earGeom.vertices[6].x += 2;
      earGeom.vertices[6].z += .5;

      earGeom.vertices[7].x += 2;
      earGeom.vertices[7].z -= .5;

      earGeom.vertices[2].x -= 2;
      earGeom.vertices[2].z -= .5;

      earGeom.vertices[3].x -= 2;
      earGeom.vertices[3].z += .5;
      earGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 9, 0));

      this.earL = new THREE.Mesh(earGeom, orangeMat);
      this.earL.position.x = 2;
      this.earL.position.z = 2.5;
      this.earL.position.y = 5;
      this.earL.rotation.z = -Math.PI / 12;
      this.earL.castShadow = true;
      this.head.add(this.earL);

      this.earR = this.earL.clone();
      this.earR.position.x = -this.earL.position.x;
      this.earR.rotation.z = -this.earL.rotation.z;
      this.earR.castShadow = true;
      this.head.add(this.earR);

      let eyeGeom = new THREE.CubeGeometry(2, 4, 4);

      this.eyeL = new THREE.Mesh(eyeGeom, whiteMat);
      this.eyeL.position.x = 5;
      this.eyeL.position.z = 5.5;
      this.eyeL.position.y = 2.9;
      this.eyeL.castShadow = true;
      this.head.add(this.eyeL);

      let irisGeom = new THREE.CubeGeometry(.6, 2, 2);

      this.iris = new THREE.Mesh(irisGeom, blackMat);
      this.iris.position.x = 1.2;
      this.iris.position.y = 1;
      this.iris.position.z = 1;
      this.eyeL.add(this.iris);
      this.eyeR = this.eyeL.clone();
      this.eyeR.children[0].position.x = -this.iris.position.x;
      this.eyeR.position.x = -this.eyeL.position.x;
      this.head.add(this.eyeR);

      this.body.traverse(function (object) {
        if (object instanceof THREE.Mesh) {
          object.castShadow = true;
          object.receiveShadow = true;
        }
      });
    }

    Hero.prototype.run = function () {
      let s = parameters.speed;
      this.runningCycle += delta * s;
      let t = this.runningCycle;

      let p = parameters;

      // BODY
      this.body.position.y = 6 + Math.sin(t + p.bodyCycleOffset) * p.bodyYAmplitude;
      this.body.rotation.x = .2 + Math.sin(t + p.bodyCycleOffset) * p.bodyRotationAmplitude;
      // console.log(this.body.position.y);

      // TORSO
      this.torso.rotation.x = Math.sin(t + p.torsoCycleOffset) * p.torsoRotationAmplitude;
      this.torso.position.y = 7 + Math.sin(t + p.torsoCycleOffset) * p.torsoYAmplitude;

      // MOUTH
      this.mouth.rotation.x = Math.PI / 16 + Math.cos(t) * p.mouthRotationAmplitude;

      // HEAD
      this.head.position.z = 2 + Math.sin(t + p.headCycleOffset) * p.headZAmplitude;
      this.head.position.y = 8 + Math.cos(t + p.headCycleOffset) * p.headYAmplitude;
      this.head.rotation.x = -.2 + Math.sin(t + p.headCycleOffset + PI * 1.5) * p.headRotationAmplitude;

      // EARS
      this.earL.rotation.x = Math.cos(t + p.earLeftCycleOffset) * p.earLeftRotationAmplitude;
      this.earR.rotation.x = Math.cos(t + p.earRightCycleOffset) * p.earRightRotationAmplitude;

      /*
      eyeMinScale:.1,
      eyeMaxScale:1,
      */
      // EYES
      this.eyeR.scale.y = this.eyeL.scale.y = p.eyeMinScale + Math.abs(Math.cos(t * .5 + p.eyeCycleOffset)) * (p.eyeMaxScale - p.eyeMinScale);

      // TAIL
      this.tail.rotation.x = Math.cos(t + p.tailCycleOffset) * p.tailRotationAmplitude;


      // FRONT RIGHT PAW
      this.pawFR.position.y = 1.5 + Math.sin(t + p.pawFRCycleOffset) * p.pawFRAmplitudeY;
      this.pawFR.position.z = 6 - Math.cos(t + p.pawFRCycleOffset) * p.pawFRAmplitudeZ;
      this.pawFR.rotation.x = Math.cos(t + p.pawFRCycleOffset) * p.pawFRAnkleRotationAmplitude;

      // FRONT LEFT PAW

      this.pawFL.position.y = 1.5 + Math.sin(t + p.pawFLCycleOffset) * p.pawFLAmplitudeY;
      this.pawFL.position.z = 6 - Math.cos(t + p.pawFLCycleOffset) * p.pawFLAmplitudeZ;
      this.pawFL.rotation.x = Math.cos(t + p.pawFLCycleOffset) * p.pawFLAnkleRotationAmplitude;


      // BACK RIGHT PAW
      this.pawBR.position.y = 1.5 + Math.sin(t + p.pawBRCycleOffset) * p.pawBRAmplitudeY;
      this.pawBR.position.z = -Math.cos(t + p.pawBRCycleOffset) * p.pawBRAmplitudeZ;
      this.pawBR.rotation.x = Math.cos(t + p.pawBRCycleOffset + PI * .25) * p.pawBRAnkleRotationAmplitude;

      // BACK LEFT PAW
      this.pawBL.position.y = 1.5 + Math.sin(t + p.pawBLCycleOffset) * p.pawBLAmplitudeY;
      this.pawBL.position.z = -Math.cos(t + p.pawBLCycleOffset) * p.pawBLAmplitudeZ;
      this.pawBL.rotation.x = Math.cos(t + p.pawBLCycleOffset + PI * .25) * p.pawBLAnkleRotationAmplitude;
    }

    function createHero() {
      hero = new Hero();
      hero.mesh.position.y = -15;
      hero.mesh.rotation.y = Math.PI / 2;
      scene.add(hero.mesh);
    }

    function loop() {
      delta = clock.getDelta() * 1000 ;
      hero.run();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop, canvas);
    }

    init();
    createLights();
    createHero();
    loop();

  }
}  
