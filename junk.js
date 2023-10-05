//<script>
 function obama() {
    let egogeom = new THREE.SphereGeometry(8, 32, 32);
    let egoskin = new  THREE.MeshStandardMaterial({ color: 0x00b140 });
    let ego = new THREE.Mesh(egogeom, egoskin);
    ego.castShadow = true;
    ego.rotation.y = Math.PI / 2;
    ego.position.set(camera.position.x, camera.position.y, camera.position.z);
    return ego;
}

 function paparazi() {
    let paparazzig = new THREE.CylinderGeometry(8, 8, 1, 20);
    let paparazzim = new THREE.MeshStandardMaterial({ color: 0xcccccc }); //standard para pegar a cor 
    let paparazzi = new THREE.Mesh(paparazzig, paparazzim);
    paparazzi.position.set(0, 0, 150);
    paparazzi.rotation.x = Math.PI / 2;
    paparazzi.castShadow = true;
    return paparazzi;
}

 function flo() {
    let groundGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    let groundMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc }); // Cinza claro
    let ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -30;
    ground.receiveShadow = true;
    return ground;
}

 function wall(wallsize = 300) {
    let wallGeometry = new THREE.PlaneGeometry(wallsize, wallsize / 2, 1, 1);
    let wallMaterial = new  THREE.MeshStandardMaterial({ color: 0xe75480 });;
    let full_wall = [];

    let backwall = new THREE.Mesh(wallGeometry, wallMaterial);
    backwall.position.z = -150;
    backwall.position.y = 45;
    full_wall.push(backwall);

    let frontwall = new THREE.Mesh(wallGeometry, wallMaterial);
    frontwall.position.z = 150;
    frontwall.rotation.y = Math.PI;
    frontwall.position.y = 45;
    full_wall.push(frontwall);

    let leftwall = new THREE.Mesh(wallGeometry, wallMaterial);
    leftwall.position.x = -150;
    leftwall.rotation.y = Math.PI / 2;
    leftwall.position.y = 45;
    full_wall.push(leftwall);

    let rightwall = new THREE.Mesh(wallGeometry, wallMaterial);
    rightwall.position.x = 150;
    rightwall.rotation.y = -Math.PI / 2;
    rightwall.position.y = 45;
    full_wall.push(rightwall);

    return full_wall;
}

 function  mjolnir(x = 0, y = 0, z = 0) {
    let mjolnirr = [];
    let length = 2, width = 2;

    let shape = new THREE.Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0, width);
    shape.lineTo(length, width);
    shape.lineTo(length, 0);
    shape.lineTo(0, 0);

    let extrudeSettings = {
        steps: 2,
        depth: 8,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 1,
        bevelOffset: 0,
        bevelSegments: 1
    };

    // hammer head
    let geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    let material = new THREE.MeshPhongMaterial({ color: 0xcccccc }); //standard para pegar a cor 
    let mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x - 4, y + 0, z + 1);
    mesh.rotation.y = Math.PI / 2;
    mesh.castShadow = true;
    mjolnirr.push(mesh);

    // habdle (ferro)
    let pilarGeometry2 = new THREE.CylinderGeometry(1, 1, 16, 15);
    let pilarMaterial2 = new THREE.MeshStandardMaterial({ color: 0xcccccc }); // Azul
    let pilar2 = new THREE.Mesh(pilarGeometry2, pilarMaterial2);
    pilar2.rotation.x = -Math.PI; // Colocar o círculo no plano horizontal
    pilar2.position.set(x + 0, y - 8, z + 0);
    pilar2.castShadow = true;
    mjolnirr.push(pilar2);

    // handle (madeira)
    let pilarGeometry = new THREE.CylinderGeometry(1, 1, 12, 15);
    let pilarMaterial = new THREE.MeshStandardMaterial({ color: 0x964B00 }); // Azul
    let pilar = new THREE.Mesh(pilarGeometry, pilarMaterial);
    pilar.rotation.x = -Math.PI; // Colocar o círculo no plano horizontal
    pilar.position.set(x + 0, y - 8, z + 0);
    pilar.castShadow = true;
    mjolnirr.push(pilar);

    let rings = 8
    for (let i = 1; i < rings; i++) {
        let torusGeometry = new THREE.TorusGeometry(0.8, 0.3, 16, 15);
        let torusMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 }); // Azul
        let torus = new THREE.Mesh(torusGeometry, torusMaterial);
        torus.rotation.x = -Math.PI / 2;
        torus.position.set(x + 0, y - 2 * i, z + 0);
        torus.castShadow = true;
        mjolnirr.push(torus);
    }

    let chains = 20
    for (let i = 1; i < chains; i++) {
        let turn = i % 2;
        let torusGeometry = new THREE.TorusGeometry(0.4, 0.1, 10, 20);
        let torusMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 }); // Azul
        let torus = new THREE.Mesh(torusGeometry, torusMaterial);
        if (turn == 0) {
            console.log('s');
            torus.rotation.y = -Math.PI / 2;
        };
        torus.position.set(x + 0, y - (14.5) - 0.5 * i, z + 0);
        torus.castShadow = true;
        mjolnirr.push(torus);
    }
    return mjolnirr;
}

 function redbox(redbox_size = 60) {
    let trueredbox = [];
    let redboxw = new THREE.BoxGeometry(1, redbox_size, redbox_size);
    let gateMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // Cinza claro

    let gate = new THREE.Mesh(redboxw, gateMaterial);
    gate.rotation.y = -Math.PI / 2;
    gate.position.z = redbox_size / 2;
    gate.castShadow = true;
    gate.receiveShadow = true;
    trueredbox.push(gate);

    let redboxbw = new THREE.Mesh(redboxw, gateMaterial);
    redboxbw.rotation.y = -Math.PI / 2;
    redboxbw.position.z = -redbox_size / 2;
    redboxbw.castShadow = true;
    redboxbw.receiveShadow = true;
    trueredbox.push(redboxbw);

    let redboxrw = new THREE.Mesh(redboxw, gateMaterial);
    redboxrw.rotation.x = -Math.PI / 2;
    redboxrw.position.x = redbox_size / 2;
    redboxrw.castShadow = true;
    trueredbox.push(redboxrw);

    let redboxlw = new THREE.Mesh(redboxw, gateMaterial);
    redboxlw.rotation.x = -Math.PI / 2;
    redboxlw.position.x = -redbox_size / 2;
    redboxlw.castShadow = true;
    trueredbox.push(redboxlw);

    let redboxfl = new THREE.Mesh(redboxw, gateMaterial);
    redboxfl.rotation.z = -Math.PI / 2;
    redboxfl.position.y = -redbox_size / 2;
    redboxfl.castShadow = true;
    trueredbox.push(redboxfl);

    let redboxrf = new THREE.Mesh(redboxw, gateMaterial);
    redboxrf.rotation.z = -Math.PI / 2;
    redboxrf.position.y = redbox_size / 2;
    redboxrf.receiveShadow = true;
    redboxrf.castShadow = true;
    trueredbox.push(redboxrf);

    return trueredbox;
}

 function wheel() {
    let rodageo = new THREE.CylinderGeometry(8, 8, 1, 10);
    let rodamat = new THREE.MeshStandardMaterial({ color: 0xcccccc }); //standard para pegar a cor 
    let roda = new THREE.Mesh(rodageo, rodamat);
    roda.rotation.y = -Math.PI / 2;
    roda.position.set(0, -29, 0);
    return roda;
}

/// ---------------- CENA
const scene = new THREE.Scene();

/// ---------------- CAMERA
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 148; // Posicionar a câmera
const cameraDirection = new THREE.Vector3(0, 0, -1); // Direção inicial da câmera

const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera2.position.set(0, 0, 148);


/// ---------------- RENDERIZADOR
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

/// ---------------- ILUMINAÇÃO

// luz abiente1
const light2 = new THREE.PointLight(0xffffff, 1, 400);
light2.position.set(0, 40, -148);
scene.add(light2);


// luz abiente1
const light1 = new THREE.PointLight(0xffffff, 1, 400);
light1.position.set(0, 40, 148);
scene.add(light1);


// luz spot (azul)
const spotlight = new THREE.SpotLight(0xadd8e6, 4); // Cor azul, intensidade 2
spotlight.position.set(0, 0, 150); // Posição da luz
spotlight.target.position.set(0, 0, 0); // Define um alvo para a luz
spotlight.angle = Math.PI / 6; // Ângulo de propagação da luz (30 graus)
spotlight.penumbra = 0.1; // Suavização das bordas da sombra
spotlight.distance = 300; // Distância máxima da luz
spotlight.castShadow = true; // Habilitar sombras
scene.add(spotlight);

// luz spot (vermelha )
const spotlight2 = new THREE.SpotLight(0xe9baaa, 3); // Cor vermelha, intensidade 2
spotlight2.position.set(0, -28, 0); // Posição da luz
spotlight2.target.position.set(0, 20, 0); // Define um alvo para a luz
spotlight2.angle = Math.PI / 8; // Ângulo de propagação da luz (30 graus)
spotlight2.penumbra = 0.1; // Suavização das bordas da sombra
spotlight2.distance = 300; // Distância máxima da luz
spotlight2.castShadow = true; // Habilitar sombras
scene.add(spotlight2);

/// ---------------- OBJETOS

// personagem (primeira camera)
const ego = obama();
scene.add(ego);

// lente (segunda camera)
const paparazzi = paparazi();
scene.add(paparazzi);

// chão
const ground = flo();
scene.add(ground);

// paredes
const walls = wall();
draw_what_is_in_list(walls);

// martelo
const mjnr = mjolnir(0, 10, 0);
draw_what_is_in_list(mjnr);

// caixa vermelha
const rb = redbox();
draw_what_is_in_list(rb);

// roda
const roda = wheel();
scene.add(roda);

/// ---------------- FUNÇÕES AUXILIARES

function draw_what_is_in_list(list) {
  for (let i = 0; i < list.length; i++) {
    scene.add(list[i]);
  }
}

function toggleBlueLight() {
  isBlueLightOn = !isBlueLightOn;
  spotlight.intensity = isBlueLightOn ? 2 : 0;
}

function RedLight(isRedLightOn) {
  spotlight2.intensity = isRedLightOn ? 2 : 0;
}

function WaveLoop() {
  if (waveval <= Math.PI / 2) {
    waveval += 0.1;
  }
  else {
    waveval = -(Math.PI * 3) / 2;
  }
}

function WaveMoves(waveval) {
  wavemov = 3 * Math.cos(waveval) / 20;
}

function proximity() {
  if (
    camera.position.x <= mjnr[0].position.x + 30
    &&
    camera.position.x >= mjnr[0].position.x - 30
    &&
    camera.position.z <= mjnr[0].position.z + 30
    &&
    camera.position.z >= mjnr[0].position.x - 30) {

    WaveLoop();
    WaveMoves(waveval);
    for (let i = 0; i < mjnr.length; i++) {
      mjnr[i].position.y += wavemov;
    }
    inExpo = true;
  }

  else {
    inExpo = false;
  }

  if (
    camera.position.x <= rb[0].position.x + 40
    &&
    camera.position.x >= rb[0].position.x - 40
    &&
    camera.position.z <= rb[0].position.z + 40
    &&
    camera.position.z >= rb[0].position.z - 40) {
    if (rb[0].position.y < gate_open) {
      rb[0].position.y += 1;
    }
  }
  else {
    if (rb[0].position.y > gate_closed) {
      rb[0].position.y -= 1;
    }
  }
}


function collision(camera, object, objectsize = 300,limiar1=1,limiar2=2) {
  if (
    camera.z >= object.position.z - limiar1 &&
    camera.z <= object.position.z + limiar1 &&
    camera.x >= object.position.x - objectsize / limiar2 &&
    camera.x <= object.position.x + objectsize / limiar2


  ) {
    object.position;
    return true;

  } else {
    isColliding = false;
    return false;
  }
}

function reversecollision(camera, object,objectsize = 300,limiar1=1,limiar2=2) {
  if (
    camera.z >= object.position.z - objectsize / limiar2 &&
    camera.z <= object.position.z + objectsize / limiar2 &&
    camera.x >= object.position.x - limiar1 &&
    camera.x <= object.position.x + limiar1
    ) {
    object.position;
    return true;
  } else {
    isColliding = false;
    return false;
  }
}

/// ---------------- VARIAVEIS AUXILIARES
let fixedCamera;
let activeCamera = camera;
let isColliding = false;
let verticalAngle = 0;
let isRedLightOn = false;
let isBlueLightOn = true;
let waveval = -(Math.PI * 3) / 2;
let wavemov = 0;
let inExpo = false;

/// ---------------- CONSTANTES AUXILIARES

const movementSpeed = 1;
const keyState = {};
const gate_closed = 0;
const gate_open = 60;
const maxVerticalAngle = Math.PI / 2; // 90 graus

/// ---------------- EVENT LISTENER

document.addEventListener('keydown', (event) => {
  keyState[event.code] = true;
  if (event.code === 'KeyZ') {
    toggleRedLight();
  }
  if (event.code === 'KeyX') {
    toggleBlueLight();
  }

  if (event.code === 'KeyC') {
    activeCamera = activeCamera === camera ? camera2 : camera;
  }

});

document.addEventListener('keyup', (event) => {
  keyState[event.code] = false;
});

/// ---------------- FUNÇÃO DE ANIMAÇÂO
const animate = () => {

  requestAnimationFrame(animate);

  // Movimentação da câmera

  const newcamera = camera.position.clone();
  const newego = camera.position.clone();

  if (keyState['KeyS']) {
    newcamera.add(cameraDirection.clone().multiplyScalar(-movementSpeed));
    newego.add(cameraDirection.clone().multiplyScalar(-movementSpeed));

  }
  if (keyState['KeyW']) {
    newcamera.add(cameraDirection.clone().multiplyScalar(movementSpeed));
    newego.add(cameraDirection.clone().multiplyScalar(movementSpeed));

  }

  if (keyState['KeyA']) {
    const sideDirection = new THREE.Vector3().crossVectors(cameraDirection, camera.up);
    newcamera.add(sideDirection.multiplyScalar(-movementSpeed));
    newego.add(sideDirection.multiplyScalar(movementSpeed));
  }
  if (keyState['KeyD']) {
    const sideDirection = new THREE.Vector3().crossVectors(cameraDirection, camera.up);
    newcamera.add(sideDirection.multiplyScalar(movementSpeed));
    newego.add(sideDirection.multiplyScalar(movementSpeed));
  }

  // se não colidiu em alguma parede
  if ( 
    !collision(newcamera, walls[0]) && 
    !collision(newcamera, walls[1]) && 
    !reversecollision(newcamera, walls[2]) && 
    !reversecollision(newcamera, walls[3]) && 
    !collision(newcamera, rb[1],60,4,4) && 
    !reversecollision(newcamera, rb[2],60,6) && 
    !reversecollision(newcamera, rb[3],60,6)
  
    ) {
    camera.position.copy(newcamera);
    //console.log(ego);
    ego.position.copy(newego);
    isColliding = true;
  }
  else {
    isColliding = false;
  }
  // Movimento da visão da câmera
  if (keyState['ArrowLeft']) {
    const rotationMatrix = new THREE.Matrix4().makeRotationY(0.02);
    cameraDirection.applyMatrix4(rotationMatrix);
    ego.rotation.y += 0.02;
  }

  if (keyState['ArrowRight']) {
    const rotationMatrix = new THREE.Matrix4().makeRotationY(-0.02);
    cameraDirection.applyMatrix4(rotationMatrix);
    ego.rotation.y -= 0.02;
  }

  camera.lookAt(camera.position.clone().add(cameraDirection)); // Atualiza a direção do olhar da câmera

  // sensores de proximidade e colisão atualizandp
  proximity();

  RedLight(inExpo);

  renderer.render(scene, activeCamera);
};

animate();

//</script>
