import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from "./background.module.css";

const setPosition = (array) => {
  for (let i = 0; i < 150; i++) {
    const i3 = i * 3;

    const x = (i / (150 - 1) - 0.5) * 3;
    const y = Math.cos(i / 10.5) * 0.5;

    array[i3] = x;
    array[i3 + 1] = y;
    array[i3 + 2] = 1;
  }
  return array;
};

function Background() {
  const canvasRef = useRef();
  let mouse = new THREE.Vector3(0, 0, 1);
  let colorChangeCounter = 0;
  let octa, geometry, material, positions;
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  const matrix = new THREE.Matrix4();

  useEffect(() => {
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.z = 30;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);

    const createPoints = () => {
      geometry = new THREE.BufferGeometry();
      material = new THREE.PointsMaterial({
        color: color.setHex(Math.random() * 0xffffff),
        size: 3.5,
        sizeAttenuation: false,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);
      positions = setPosition(new Float32Array(150 * 3));

      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.attributes.position.needsUpdate = true;
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / sizes.width) * 2 - 1;
      mouse.y = -(event.clientY / sizes.height) * 2 + 1;
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      mouse = pos;
    });

    window.addEventListener("resize", () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      positions = setPosition(new Float32Array(150 * 3));
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.attributes.position.needsUpdate = true;
    });

    const addOcta = () => {
      const geometry = new THREE.TetrahedronGeometry(1);
      const material = new THREE.MeshNormalMaterial();
      octa = new THREE.InstancedMesh(geometry, material, 100);
      scene.add(octa);
      octa.position.z = -2;
      octa.position.x = -10;
      octa.position.y = -2;
      for (let i = 0; i < 40; ++i) {
        dummy.position.x = Math.random() * 40 - 2;
        dummy.position.y = Math.random() * 40 - 2;
        dummy.position.z = Math.random() * 40 - 2;

        dummy.rotation.x = Math.random() * 2 - Math.PI;
        dummy.rotation.y = Math.random() * 2 - Math.PI;
        dummy.rotation.z = Math.random() * 2 - Math.PI;

        dummy.updateMatrix();
        octa.setMatrixAt(i, dummy.matrix);
      }
    };

    const animate = () => {
      const time = Date.now();
      for (let i = 0; i < 40; ++i) {
        octa.getMatrixAt(i, matrix);
        matrix.decompose(dummy.position, dummy.rotation, dummy.scale);
        dummy.rotation.x = (i / 100000) * time;
        dummy.rotation.y = (i / 100000) * time;
        dummy.rotation.z = (i / 100000) * time;

        dummy.updateMatrix();
        octa.setMatrixAt(i, dummy.matrix);
      }
      octa.instanceMatrix.needsUpdate = true;
    };

    const updatePoint = () => {
      for (let i = 0; i < 150; i++) {
        const i3 = i * 3;
        const previous = (i - 1) * 3;
        if (i3 === 0) {
          positions[0] = mouse.x;
          positions[1] = mouse.y + 0.05;
          positions[2] = mouse.z;
        } else {
          const currentPoint = new THREE.Vector3(
            positions[i3],
            positions[i3 + 1],
            positions[i3 + 2]
          );

          const previousPoint = new THREE.Vector3(
            positions[previous],
            positions[previous + 1],
            positions[previous + 2]
          );

          const lerpPoint = currentPoint.lerp(previousPoint, 0.9);

          positions[i3] = lerpPoint.x;
          positions[i3 + 1] = lerpPoint.y;
          positions[i3 + 2] = mouse.z;
        }
      }
      geometry.attributes.position.needsUpdate = true;
    };

    const updatetrailColor = () => {
      colorChangeCounter++;
      if (colorChangeCounter >= 150) {
        color.setHex(Math.random() * 0xffffff);
        material.color = color;
        colorChangeCounter = 0;
      }
    };
    const render = () => {
      renderer.render(scene, camera);
      updatetrailColor();
      updatePoint();
      animate();
      window.requestAnimationFrame(render);
    };
    createPoints();
    addOcta();
    render();

    const doc = document.getElementsByClassName("App")[0];
    let prevScrollPos = doc.scrollTop;

    doc?.addEventListener("scroll", (event) => {
      const currentScrollPos = doc.scrollTop;

      let mul = prevScrollPos < currentScrollPos ? 1 : -0.5;
      camera.position.z = camera.position.z + 0.05 * mul;
      camera.position.x = camera.position.x + 0.01 * mul;
      camera.rotation.y = camera.position.y + 0.01 * mul;

      prevScrollPos = currentScrollPos;
    });
  }, []);

  return <canvas ref={canvasRef} id={styles.bg}></canvas>;
}
export default Background;
