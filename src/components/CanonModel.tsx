"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";
import { easeInOut, motion } from "framer-motion";
import { Vibes } from "next/font/google";
import Image from "next/image";
import canonImage from '../../public/canonBg.png'

const vibes = Vibes({
  weight: ["400"],
  subsets: ["latin"],
});

interface MeshComponentProps {
  rotation: { y: number; z: number };
  onLoad: () => void;
}

interface ModelViewerProps {}

export const MeshComponent: React.FC<MeshComponentProps> = ({
  rotation,
  onLoad,
}) => {
  const fileUrl = "canon1.glb";
  const gltf = useLoader(GLTFLoader, fileUrl, () => onLoad());
  const meshRef = useRef<THREE.Object3D>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  let background:HTMLElement | null;
  const spring = useSpring({
    to: { rotationY: rotation.y, rotationZ: rotation.z },
    config: { mass: 1, tension: 170, friction: 26 },
  });

  useEffect(() => {
    background = document.querySelector(".bg-heroimage");
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    //if(background?.style){
      requestAnimationFrame(()=>{
        if(background) background.style.backgroundPosition = `top ${mouse.current.y*10}px left ${mouse.current.x*10}px`
      })
    //}
    if (meshRef.current && rotation.y === 40.1 && rotation.z === -0.25) {
      meshRef.current.position.x = mouse.current.x * 0.2;
      meshRef.current.position.y = mouse.current.y * 0.2;      
    } else if (rotation.y !== 40.1 && rotation.z !== -0.25 && meshRef.current) {
      meshRef.current.position.x = 0;
      meshRef.current.position.y = 0;
    }
  });

  return gltf ? (
    <>
      {/*@ts-ignore */}
      <a.primitive
        object={gltf.scene}
        ref={meshRef}
        position={[50, 50, 0]}
        rotation-x={69.5}
        rotation-y={spring.rotationY}
        rotation-z={spring.rotationZ}
      />
    </>
  ) : null;
};

export const ModelViewer: React.FC<ModelViewerProps> = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rotation, setRotation] = useState({ y: 40.1, z: -0.25 });

  const handleRotationChange = () => {
    if (rotation.y === 43.1 && rotation.z === 0.25) {
      setAnimationComplete(false);
      setRotation({ y: 40.1, z: -0.25 });
    } else {
      setRotation({ y: 43.1, z: 0.25 });
    }
  };

  const spring = useSpring({
    to: { y: rotation.y, z: rotation.z },
    config: { mass: 1, tension: 170, friction: 26 },
    onRest: () => {
      if (rotation.y === 40.1 && rotation.z === -0.25) {
        setAnimationComplete(false);
      } else {
        setAnimationComplete(true);
      }
    },
  });

  const handleModelLoad = () => {
    setLoading(false);
  };
  return (
    <div className="relative z-20 w-screen h-screen overflow-hidden">
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
        className={`md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] sm:w-[80vw] sm:h-[60vh] h-[30vh] w-[80vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden `}
        // ${animationComplete?"scale-[300] transition-all ease-in-out duration-[2s] delay-[3s]":""}
      >
        <Canvas camera={{ position: [50, 20, -55], fov: 3 }} className="" shadows="variance">
          <Suspense fallback={null}>
            <ambientLight intensity={1}/>
            <directionalLight position={[0, 1, 0]} intensity={10} />
            <MeshComponent rotation={rotation} onLoad={handleModelLoad} />
            <spotLight position={[-20, 20, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          </Suspense>
        </Canvas>
      </motion.div>
      {animationComplete && (
        <motion.div
          className={`absolute bg-black xl:w-[17.8rem] xl:h-[14rem] lg:w-[16rem] lg:h-[13.5rem] md:w-56 md:h-48 sm:top-[54%] sm:w-40 sm:h-32 w-24 h-20 left-[43%] top-[52%] lg:top-[55.8%] lg:left-[42%] sm:left-[41.2%] transform -translate-x-1/2 -translate-y-1/2 -rotate-1 `}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: easeInOut }}
        >
          <Image
            src={canonImage}
            alt="Background"
            className={`w-full h-full object-cover`}
            placeholder="blur"
          />
        </motion.div>
      )}
      <div
        className="hover-detect flex justify-start items-center bg-opacity-40 border-white border lg:w-80 lg:h-20 sm:w-60 sm:h-16 w-36  group cursor-pointer absolute lg:bottom-20 lg:right-24 sm:bottom-14 sm:right-16 right-10 bottom-10 rounded-lg overflow-hidden flex-row hover:bg-white /hover:flex-row-reverse transition-all ease-in-out duration-100 bg-black text-white"
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
        <div className="lg:text-5xl sm:text-3xl text-xl w-3/4 mx-2 h-full flex justify-center items-center bg-opacity-40 group-hover:text-black group-hover:bg-white duration-100">
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
      </div>
    </div>
  );
};
