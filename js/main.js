  // blue -  BABYLON.Color3(0.00,0.45,0.74) 
 // black - BABYLON.Color3(0.07,0.07,0.07)
 // Red - BABYLON.Color3(0.94,0.18,0.18)
   var canvas = document.getElementById("scene");
        var engine = new BABYLON.Engine(canvas, true);
        var framesTexture;
        var frameSide;
        var frameInner;
        var frameTop;
        var lenseTexture;
        var cap1;
        var cap2;
        BABYLON.OBJFileLoader.OPTIMIZE_WITH_UV = true;
        var createScene = function () {
            var scene = new BABYLON.Scene(engine);
        	scene.clearColor = new BABYLON.Color4(0,0,0,0);
            //Adding a light
            var light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 10, -100), scene);
            light.diffuse = new BABYLON.Color3(0.4, 0.4, 0.4);
			light.specular = new BABYLON.Color3(1, 1, 1);

			var light0 = new BABYLON.SpotLight("Spot0", new BABYLON.Vector3(0, 5, -100), new BABYLON.Vector3(0, 0, 0), 0.8, 2, scene);
			light0.diffuse = new BABYLON.Color3(1, 1, 1);
			light0.specular = new BABYLON.Color3(0.5, 0.5, 0.5);

			var light2 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0, 0, -0), scene);
			light2.diffuse = new BABYLON.Color3(1, 1, 1);
			light2.specular = new BABYLON.Color3(1, 1, 1);

			var light3 = new BABYLON.HemisphericLight("Hemi0", new BABYLON.Vector3(0, 1, 0), scene);
			light3.diffuse = new BABYLON.Color3(0.15, 0.15, 0.15);
			light3.specular = new BABYLON.Color3(0.15, 0.15, 0.15);
			light3.groundColor = new BABYLON.Color3(0, 0, 0);
        
            //Adding an Arc Rotate Camera
            var camera = new BABYLON.ArcRotateCamera("Camera", -1.57, 1.5, 10, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, false);
        	camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius;
           //  // The first parameter can be used to specify which mesh to import. Here we import all meshes
           // BABYLON.SceneLoader.Load("/models/", "RayBanz_HazzBBerry.obj", engine, function (newScene) { 
           //    // ...
           // });))))

           	var loader = new BABYLON.AssetsManager(scene);
			var rayban = loader.addMeshTask("rayban", "", "models/", "untitled.json");
			var position = -5;
			rayban.onSuccess = function ( t ) {
  				t.loadedMeshes.forEach(function(m) {
  					console.log(m.material.subMaterials)
  					framesTexture = m.material.subMaterials[5]
  					//.emissiveColor = new BABYLON.Color3(0.00,0.00,0.00)
  					lenseTexture = m.material.subMaterials[2]
  					frameSide = m.material.subMaterials[6]
  					frameInner = m.material.subMaterials[4]
  					frameTop = m.material.subMaterials[7]
  					cap1 = m.material.subMaterials[0]
        			cap2 = m.material.subMaterials[3]
  					//m.material.subMaterials[0].emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
  					//m.material.subMaterials[3].emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
  				    m.position = BABYLON.Vector3.Zero()
		        });		   
			}
            // Move the light with the camera
            scene.registerBeforeRender(function () {
                light.position = camera.position;
            });
        	
        	loader.onFinish = function() {
        		console.log( rayban )
    	        engine.runRenderLoop(function () {
    	            scene.render();
    	        });
        	};

        	document.querySelector('.black')
        			.addEventListener( 'click', function ( e ) {
        				e.preventDefault()
        				console.log( 'black')
        				
        				TweenMax.to( lenseTexture.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        			})

        	document.querySelector('.blue')
        			.addEventListener( 'click', function ( e ) {
        				e.preventDefault()
        				//lenseTexture.emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
        				TweenMax.to( lenseTexture.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )
        				
        			})

        	document.querySelector('.frame-controls .blue')
        			.addEventListener( 'click', function ( e ) {
        				e.preventDefault()
        				//lenseTexture.emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
        				TweenMax.to( framesTexture.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )

        				TweenMax.to( frameSide.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )
        				TweenMax.to( frameInner.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )
        				TweenMax.to( frameTop.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )
        				TweenMax.to( cap1.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )
        				TweenMax.to( cap2.emissiveColor, 1, {
        					r:0.00 , g:0.45, b: 0.74
        				} )


        				
        			})
        	document.querySelector('.frame-controls .black')
        			.addEventListener( 'click', function ( e ) {
        				e.preventDefault()
        				//lenseTexture.emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
        				TweenMax.to( framesTexture.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        				TweenMax.to( frameSide.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        				TweenMax.to( frameInner.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        				TweenMax.to( frameTop.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        				TweenMax.to( cap1.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )
        				TweenMax.to( cap2.emissiveColor, 1, {
        					r:0.07 , g:0.07, b: 0.07
        				} )



        				
        			})				
        	document.querySelector('.red')
        			.addEventListener( 'click', function ( e ) {
        				e.preventDefault()
        				//lenseTexture.emissiveColor = new BABYLON.Color3(0.00,0.45,0.74)
        				TweenMax.to( lenseTexture.emissiveColor, 1, {
        					r:0.94 , g:0.18, b: 0.18
        				} )        				
        	})						
        	loader.load();

            return scene;
        }
        
        var scene = createScene();

        // engine.runRenderLoop(function () {
        //     scene.render();
        // });

        // Resize
        window.addEventListener("resize", function () {
            engine.resize();
        });