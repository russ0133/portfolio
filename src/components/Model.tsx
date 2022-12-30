/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, memo, useEffect } from "react";
import * as THREE from "three";

import { useGLTF, useProgress } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

import { useZuStore } from "@zustand/store";
import { getRandomHexColor } from "@utils/color";

import { ContentScreen, Screen } from "@components/console";
import { ConsoleScreenMenu } from "@App";

export type GLTFResult = GLTF & {
  nodes: {
    Cube004: THREE.Mesh;
    Cube004_1: THREE.Mesh;
    Cube005: THREE.Mesh;
    Cube005_1: THREE.Mesh;
    ControlsLeft: THREE.Mesh;
    ButtonRight: THREE.Mesh;
    ControlsBottom: THREE.Mesh;
    LED_Button: THREE.Mesh;
  };
  materials: {
    Border: THREE.MeshStandardMaterial;
    Screen: THREE.MeshStandardMaterial;
    Superstructure: THREE.MeshStandardMaterial;
    LED: THREE.MeshStandardMaterial;
  };
};

interface IModel {
  setHovering: (value: boolean) => void;
}

const Model: React.FC<IModel> = memo(({ setHovering }) => {
  const { nodes, materials } = useGLTF("/console.gltf") as unknown as GLTFResult;

  const {
    isModelLoaded,
    isPowerOn,
    isViewingContent,
    selectedOption,
    shouldReturnToPosition: shouldMoveConsole,
  } = useZuStore((store) => store.state.console);

  const { setModelLoaded, setSelectedOption, setIsViewingContent, setUIOpen, setIsFirstRun } =
    useZuStore((store) => store.actions);

  const handleControls = () => {
    if (selectedOption == ConsoleScreenMenu.length - 1) return setSelectedOption(0);
    else return setSelectedOption(selectedOption + 1);
  };

  const [ledColor, setLedColor] = React.useState("#0391BA");
  const { active, progress, errors, item } = useProgress();
  const group = useRef<any>();

  useEffect(() => {
    setModelLoaded();
  }, [active, progress, errors, item]);

  useEffect(() => {
    if (isModelLoaded) {
      materials.Superstructure.color = new THREE.Color(ledColor);
    }
  }, [ledColor]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!isPowerOn) {
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
    if (!isPowerOn) return;
    setHovering(value);
  };

  const fn = () => {
    if (shouldMoveConsole) return "on";
    if (isPowerOn) return "on";
    else return "";
  };

  const init = () => {
    if (shouldMoveConsole) return "return";
    else return "on";
  };
  return (
    <>
      {!isViewingContent ? (
        <motion.group
          initial={init()}
          transition={spring}
          animate={fn()}
          variants={{
            on: {
              x: 0,
              y: -0.1,
              z: 0,
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
            },
            return: {
              x: 0,
              y: -1,
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
            onClick={isPowerOn ? handleControls : undefined}
          />
          <mesh
            geometry={nodes.ButtonRight.geometry}
            material={materials.Border}
            onPointerEnter={() => handleHovering(true)}
            onPointerLeave={() => handleHovering(false)}
            onClick={(e) => {
              if (isPowerOn) {
                setIsViewingContent(true);
                setUIOpen(false);
                setIsFirstRun(false);
                e.stopPropagation();
              }
            }}
          />
          <mesh
            geometry={nodes.LED_Button.geometry}
            material={isPowerOn ? materials.LED : materials.Border}
            onClick={() => {
              setLedColor(getRandomHexColor());
            }}
          />
          <mesh
            geometry={nodes.ControlsBottom.geometry}
            material={materials.Border}
            onPointerEnter={() => handleHovering(true)}
            onPointerLeave={() => handleHovering(false)}
            onClick={() => {
              setLedColor(getRandomHexColor());
            }}
          />
          <Screen nodes={nodes} materials={materials} />
        </motion.group>
      ) : (
        <ContentScreen nodes={nodes} materials={materials} />
      )}
    </>
  );
});

useGLTF.preload("/console.gltf");

export default Model;
const spring = { type: "spring", stiffness: 400, damping: 25 };
