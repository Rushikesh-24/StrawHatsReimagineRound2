"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { Vibes } from "next/font/google";
import Image from "next/image";
import canonImage from '../../public/canonBg.png'
import Link from "next/link";

const vibes = Vibes({
  weight: ["400"],
  subsets: ["latin"],
});


interface ModelViewerProps {}

const  MeshComponent2: React.FC<{ bool: boolean; onLoad: () => void, }> = ({ bool, onLoad})=> {
  const fileUrl = "canonlens.glb";
  const gltf = useLoader(GLTFLoader, fileUrl,()=>onLoad());
  const meshRef = useRef<THREE.Mesh>(null);
  const maxCameraZ = 50;
  const fixedRotationY = -2.4;
  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    const scrollY = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    let cameraZ = Math.max(50, 100 - (t * 20));
  
    const maxRotationSpeed = 0.02; // Define a maximum rotation speed
  
    if (bool) {
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, maxCameraZ, 0.1);
      camera.lookAt(0, 0, 0);
      if (meshRef.current) {
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, fixedRotationY, 0.1);
      }
    } else {
      camera.position.z = cameraZ;
      camera.lookAt(0, 0, 0);
  
      if (cameraZ === 50 && meshRef.current) {
        let rotationChange = -0.01 - scrollY;
        // Clamp the rotation change to the maximum rotation speed
        rotationChange = THREE.MathUtils.clamp(rotationChange, -maxRotationSpeed, maxRotationSpeed);
        meshRef.current.rotation.y += rotationChange;
      }
    }
  });

  return gltf ? (
    <mesh ref={meshRef}>
      <primitive object={gltf.scene} />
    </mesh>
  ) : null;
}

export const LensModelViewer: React.FC<ModelViewerProps> = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bool, setbool] = useState(false)
  const lightRef = useRef<THREE.SpotLight>(null);

  const handleRotationChange = () => {
    setbool(!bool);
    setAnimationComplete(!bool);
  };
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
    <div data-scroll-section className="relative z-20 w-screen h-screen overflow-hidden">
      {loading && (
        <div className="w-screen h-screen justify-center items-center flex">
          <div className="w-2/5 h-2/5 flex justify-center items-center relative overflow-hidden animate-pulse">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 border-t-2 border-l-2 border-white w-12 h-12"></div>
              <div className="absolute top-0 right-0 border-t-2 border-r-2 border-white w-12 h-12"></div>
              <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-white w-12 h-12"></div>
              <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-white w-12 h-12"></div>
            </div>
            <p className={`${vibes.className} text-5xl text-white`}>3D Model</p>
          </div>
        </div>
      )}
      <motion.div
        className={`md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] sm:w-[80vw] sm:h-[60vh] h-[30vh] w-[80vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden`}
      >
        <Canvas camera={{ position: [50, 20, -55], fov: 3 }} className="" shadows="basic">
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <MeshComponent2 bool={bool} onLoad={handleModelLoad}/>
            <spotLight position={[-20, 20, 40]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} ref={lightRef} color={"white"} castShadow={true}/>
          </Suspense>
        </Canvas>
      </motion.div>
      {animationComplete && (
        <motion.div
          className={`absolute bg-black xl:w-[19rem] xl:h-[16rem] xl:left-[44%] xl:top-[64%] lg:w-[21rem] lg:h-[15.5rem] lg:top-[65%] md:w-[17rem] md:h-52 md:top-[62%] sm:top-[59%] sm:w-44 sm:h-36 w-[6.4rem] h-20 left-[45%] top-[54%] lg:left-[42%] sm:left-[44.2%] transform -translate-x-1/2 -translate-y-1/2 -rotate-1 `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6,delay:0.4, ease: "easeInOut" }}
        >
          <Image
            src={canonImage}
            alt="Background"
            className={`w-full h-full object-cover`}
            placeholder="blur"
          />
        </motion.div>
      )}
      <Link href={''}
        className="hover-detect view bg-red-900 flex justify-start items-center bg-opacity-40 border-white border lg:w-80 lg:h-20 sm:w-60 sm:h-16 w-36  group cursor-pointer absolute lg:bottom-20 lg:right-24 sm:bottom-14 sm:right-16 right-10 bottom-10 rounded-lg overflow-hidden flex-row hover:bg-white /hover:flex-row-reverse transition-all ease-in-out duration-100 bg-black text-white"
        onClick={handleRotationChange}
      >
        <div className="w-0 group-hover:w-1/4 h-full duration-500 group-hover:flex group-hover:translate-y-0 group-hover:translate-x-0 translate-y-full -translate-x-full justify-center items-center stroke-black bg-white  ">
          <svg
            width="37"
            height="43"
            viewBox="0 0 37 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <line y1="4.7666" x2="37.0046" y2="4.7666" strokeWidth="8" />
            <line
              x1="33.0024"
              y1="43.0046"
              x2="33.0024"
              y2="6"
              strokeWidth="8"
            />
            <line
              x1="5.80187"
              y1="32.0887"
              x2="31.9681"
              y2="5.9225"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className="lg:text-5xl sm:text-3xl text-xl w-3/4 h-full flex justify-center items-center bg-opacity-40 group-hover:text-black group-hover:bg-white duration-100">
          EXPLORE
        </div>
        <div className="w-1/4 h-full group-hover:w-[0%] overflow-hidden flex justify-center items-center stroke-black bg-white  group-hover:stroke-white">
          <svg
            width="37"
            height="43"
            viewBox="0 0 37 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-500 group-hover:-translate-y-full group-hover:translate-x-full"
          >
            <line y1="4.7666" x2="37.0046" y2="4.7666" strokeWidth="8" />
            <line
              x1="33.0024"
              y1="43.0046"
              x2="33.0024"
              y2="6"
              strokeWidth="8"
            />
            <line
              x1="5.80187"
              y1="32.0887"
              x2="31.9681"
              y2="5.9225"
              strokeWidth="10"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};
