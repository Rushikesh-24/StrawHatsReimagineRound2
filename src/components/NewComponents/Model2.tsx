'use client'
import React, { useEffect, useRef, useState } from 'react'
import { easeInOut, motion } from "framer-motion";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";
import { Suspense } from "react";

const  MeshComponent2: React.FC<{ onLoad: () => void, }> = ({ onLoad})=> {
    const fileUrl = "canon1.glb";
    const gltf = useLoader(GLTFLoader, fileUrl,()=>onLoad());
    const meshRef = useRef<THREE.Mesh>(null);
    
    useFrame(({ clock, camera }) => {
      const t = clock.getElapsedTime();
      const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      let cameraZ = Math.max(50, 100 - (t * 20));    
      const maxRotationSpeed = 0.02; 
        camera.position.z = cameraZ;
        camera.lookAt(0, 0, 0);
    
        if (cameraZ === 50 && meshRef.current) {
          let rotationChange = -0.01 - scrollY;
          rotationChange = THREE.MathUtils.clamp(rotationChange, -maxRotationSpeed, maxRotationSpeed);
          meshRef.current.rotation.y += rotationChange;
        }
    });
  
    return gltf ? (
      <mesh ref={meshRef}>
        <primitive object={gltf.scene} />
      </mesh>
    ) : null;
  }

const Model2 = () => {
    const [loading, setLoading] = useState(true);
  const lightRef = useRef<THREE.SpotLight>(null);
    const handleModelLoad = () => {
        setLoading(false);
      };
      const handleMouseMove = (event: MouseEvent) => {
        if (lightRef.current) {
          const { clientX, clientY } = event;
          lightRef.current.position.set(clientX/10,clientY/10, 30);
        }
      };
      useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
      useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
  return (
    <div data-scroll-section className='w-screen h-screen flex justify-center items-center relative'>
 <motion.div
    className={`md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] sm:w-[80vw] sm:h-[60vh] h-[30vh] w-[80vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden`}
  >
    <Canvas camera={{ position: [50, 20, -55], fov: 3 }} className="" shadows="basic">
      <Suspense fallback={null}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 1, 0]} intensity={10} />
        <MeshComponent2 onLoad={handleModelLoad}/>
        <spotLight position={[-20, 20, 40]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} ref={lightRef} color={"red"} castShadow={true}/>
      </Suspense>
    </Canvas>
  </motion.div>
    </div>
   
  )
}

export default Model2