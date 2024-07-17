"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";
import { easeInOut, motion } from "framer-motion";

interface MeshComponentProps {
  rotation: number;
}

interface ModelViewerProps {
  rotation: number;
}

export const MeshComponent: React.FC<MeshComponentProps> = ({ rotation })=> {
  const fileUrl = "canon1.glb";
  const gltf = useLoader(GLTFLoader, fileUrl);
  const meshRef = useRef<THREE.Object3D>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const { rotationSpring } = useSpring({
    rotationSpring: rotation,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // useFrame(() => {
  //   if (meshRef.current) {
  //     meshRef.current.rotation.y = (mouse.current.x * Math.PI) / 6; // Adjust the multiplier as needed
  //     meshRef.current.rotation.x = (mouse.current.y * Math.PI) / 8; // Adjust the multiplier as needed
  //   }
  // });

  // useEffect(() => {
  //   if (gltf && gltf.scene) {
  //     gltf.scene.traverse((child) => {
  //       if (child.isMesh) {
  //         console.log("Mesh:", child);
  //         if (child.material) {
  //           console.log("Material:", child.material);
  //         }
  //       }
  //     });
  //   }
  // }, [gltf]);

  return gltf ? (
    <>
    <a.primitive
      object={gltf.scene}
      ref={meshRef}
      position={[0, 0, 0]}
      rotation-x={Math.PI / 8.1}
      rotation-y={rotationSpring as unknown as number}
    />
    </>
  ) : null;
}
// Math.PI/1.4*2.5
export const ModelViewer: React.FC<ModelViewerProps> = ({rotation}) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const { rotationSpring } = useSpring({
    rotationSpring: rotation,
    config: { mass: 1, tension: 170, friction: 26 },
    onRest: () => {
      if (rotation === Math.PI / 1.4 * 2.5) {
        setAnimationComplete(true);
      }
    },
  });

  return (
    <div className="relative z-20 w-screen h-screen">
      <div className="md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden">
        <Canvas camera={{ position: [60, 70, -50], fov: 3 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 1, 0]} intensity={10} />
            <MeshComponent rotation={rotation} />
          </Suspense>
        </Canvas>
      </div>
      {animationComplete && (
        <motion.div
          className="absolute bg-black lg:w-[12.5rem] lg:h-[10rem] w-44 top-[62%] -rotate-[20deg] lg:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <motion.img
            src="/canonBg.png"
            alt="Background"
            className="w-full h-full object-cover"
            initial={{ rotate: 0,scale: 1  }}
            animate={{ rotate: 20,scale:5 }}
            transition={{ duration: 1 ,delay: 2 }}
          />
        </motion.div>
      )}
    </div>
  );
};