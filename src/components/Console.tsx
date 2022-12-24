/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, memo, useEffect } from "react";
import { Html, useGLTF, useProgress } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useZuStore } from "../zustand/zuStore";
type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    ControlsLeft: THREE.Mesh;
    ButtonRight: THREE.Mesh;
    ControlsBottom: THREE.Mesh;
  };
  materials: {
    Border: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Superstructure: THREE.MeshStandardMaterial;
  };
};

interface IConsole {
  setHovering: (value: boolean) => void;
  text: string;
  setText: (value: string) => void;
}

const Console: React.FC<IConsole> = memo(({ setHovering, text, setText }) => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const group = useRef<any>();
  const power = useZuStore((store) => store.state.power);
  const setModelLoaded = useZuStore((store) => store.actions.setModelLoaded);

  useEffect(() => {
    setModelLoaded();
  }, [active, progress, errors, item]);

  const { nodes, materials } = useGLTF("/console.gltf") as unknown as GLTFResult;
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!power) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 4) / 20,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 8) / 20,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        ((-2 + Math.sin(t / 2)) / 2) * 0.1,
        0.1
      );
    }
  });

  const handleHovering = (value: boolean) => {
    if (!power) return;
    setHovering(value);
  };

  return (
    <motion.group
      initial="on"
      transition={spring}
      animate={power ? "on" : ""}
      variants={{
        on: {
          x: 0,
          y: -0.1,
          z: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
      }}
      ref={group as any}
      dispose={null}
      position={[0, -0.1, 0]}
      scale={[1.2, 1.2, 1.2]}
    >
      <mesh geometry={nodes.Cube004.geometry} material={materials.Border} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.Superstructure} />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials.Border} />
      <mesh
        geometry={nodes.ControlsLeft.geometry}
        material={materials.Border}
        onPointerEnter={() => handleHovering(true)}
        onPointerLeave={() => handleHovering(false)}
        onClick={() => {
          text === "About me" ? setText("Projects") : setText("About me");
        }}
      />
      <mesh geometry={nodes.ButtonRight.geometry} material={materials.Border} />
      <mesh geometry={nodes.ControlsBottom.geometry} material={materials.Border} />{" "}
      <motion.mesh
        initial="off"
        animate={power ? "on" : "off"}
        variants={{
          off: { scaleX: 0 },
          on: { scaleX: 1 },
        }}
        geometry={nodes.Cube004_1.geometry}
        material={power ? materials.Screen : materials.Border}
        position={[0, 0, 0]}
        scale={[1, 1, 1]}
      >
        {power ? (
          <Html
            className="content"
            position={[-0.004, 1.18, 0.16]}
            scale={[0.5, 0.5, 1]}
            transform
            occlude
          >
            <motion.div
              initial="off"
              animate={power ? "on" : "off"}
              variants={{
                off: { scaleX: 0, opacity: 0 },
                on: {
                  scaleX: 1,
                  opacity: 1,
                  fontSize: 2,
                },
              }}
              transition={{ delay: 0.4 }}
              className={"wrapper"}
              onPointerDown={(e) => e.stopPropagation()}
            >
              {text}
            </motion.div>
          </Html>
        ) : null}
      </motion.mesh>
    </motion.group>
  );
});

useGLTF.preload("/console.gltf");

export default Console;
const spring = { type: "spring", stiffness: 700, damping: 25 };
