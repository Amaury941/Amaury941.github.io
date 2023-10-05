let textureLoader = new THREE.TextureLoader();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 148; // Posicionar a câmera
let cameraDirection = new THREE.Vector3(0, 0, -1); // Direção inicial da câmera

export function obama() {
    let egotexture = textureLoader.load('imagem1.png');
    let egogeom = new THREE.SphereGeometry(8, 32, 32);
    let egoskin = new THREE.MeshStandardMaterial({ map: egotexture });
    let ego = new THREE.Mesh(egogeom, egoskin);
    ego.castShadow = true;
    ego.rotation.y = Math.PI / 2;
    ego.position.set(camera.position.x, camera.position.y, camera.position.z);
    return ego;
}

export function paparazi() {
    let paparazzig = new THREE.CylinderGeometry(8, 8, 1, 20);
    let paparazzim = new THREE.MeshStandardMaterial({ color: 0xcccccc }); //standard para pegar a cor 
    let paparazzi = new THREE.Mesh(paparazzig, paparazzim);
    paparazzi.position.set(0, 0, 150);
    paparazzi.rotation.x = Math.PI / 2;
    paparazzi.castShadow = true;
    return paparazzi;
}

export function flo() {
    let groundGeometry = new THREE.PlaneGeometry(300, 300, 1, 1);
    let groundMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc }); // Cinza claro
    let ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -30;
    ground.receiveShadow = true;
    return ground;
}

export function wall(wallsize = 300) {
    let walltexture = textureLoader.load('imagem2.jpg');
    let wallGeometry = new THREE.PlaneGeometry(wallsize, wallsize / 2, 1, 1);
    let wallMaterial = new THREE.MeshStandardMaterial({ map: walltexture });
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

export function  mjolnir(x = 0, y = 0, z = 0) {
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

export function redbox(redbox_size = 60) {
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

export function wheel() {
    let rodageo = new THREE.CylinderGeometry(8, 8, 1, 10);
    let rodamat = new THREE.MeshStandardMaterial({ color: 0xcccccc }); //standard para pegar a cor 
    let roda = new THREE.Mesh(rodageo, rodamat);
    roda.rotation.y = -Math.PI / 2;
    roda.position.set(0, -29, 0);
    return roda;
}