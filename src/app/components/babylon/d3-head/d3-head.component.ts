import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import {
  Engine,
  FreeCamera,
  Scene,
  Light,
  Mesh,
  Color3,
  Color4,
  Vector3,
  HemisphericLight,
  StandardMaterial,
  Texture,
  DynamicTexture
} from 'babylonjs';
import 'babylonjs-materials';

@Component({
  selector: 'app-d3-head',
  templateUrl: './d3-head.component.html',
  styleUrls: ['./d3-head.component.scss']
})
export class D3HeadComponent implements OnInit {
  private canvas: HTMLCanvasElement;
  private engine: Engine;
  private camera: FreeCamera;
  private scene: Scene;
  private light: Light;

  private sphere1: Mesh;
  private sphere2: Mesh;


  @ViewChild('d3head_nav', { static: true })
  public d3head_nav: ElementRef<HTMLCanvasElement>;

  constructor(private ngZone: NgZone) { 

  }

  ngOnInit() {
    this.createScene(this.d3head_nav);
    this.animate();
  }

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

      // Then, load the Babylon 3D engine:
    this.canvas = canvas.nativeElement;
    this.engine = new Engine(this.canvas,  true);

    // create a basic BJS Scene object
    this.scene = new Scene(this.engine);
    this.scene.clearColor = new Color4(0, 0, 0, 0);

    // create a FreeCamera, and set its position to (x:5, y:10, z:-20 )
    this.camera = new FreeCamera('camera1', new Vector3(5, 10, -20), this.scene);

    // target the camera to scene origin
    this.camera.setTarget(Vector3.Zero());

    // attach the camera to the canvas
    this.camera.attachControl(this.canvas, false);

    // create a basic light, aiming 0,1,0 - meaning, to the sky
    this.light = new HemisphericLight('light1', new Vector3(0, 1, 0), this.scene);

    // create a built-in "sphere" shape; its constructor takes 4 params: name, subdivisions, radius, scene
    this.sphere1 = Mesh.CreateSphere('sphere1', 16, 2, this.scene);
    this.sphere2 = Mesh.CreateSphere('sphere2',15,3, this.scene);

    // create the material with its texture for the sphere and assign it to the sphere
    const spherMaterial = new StandardMaterial('sun_surface', this.scene);
    spherMaterial.diffuseTexture = new Texture('assets/textures/sun.jpg', this.scene);
    this.sphere1.material = spherMaterial;

    // move the sphere upward 1/2 of its height
    this.sphere1.position.y = 1;

    // simple rotation along the y axis
    this.scene.registerAfterRender(() => {
      this.sphere1.rotate (
        new Vector3(0, 1, 0),
        0.02,
        BABYLON.Space.LOCAL
      );
    });

    // generates the world x-y-z axis for better understanding
    //this.showWorldAxis(8);
  }

  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
      };

      if (document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      window.addEventListener('resize', () => {
        this.engine.resize();
      });
    });
  }

}
