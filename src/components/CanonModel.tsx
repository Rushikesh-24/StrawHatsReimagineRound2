// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Canvas, useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// import { Suspense } from "react";
// import * as THREE from "three";
// import { useSpring, a } from "@react-spring/three";
// import { easeInOut, motion } from "framer-motion";
// import { Vibes } from "next/font/google";

// const vibes = Vibes({
//   weight: ["400"],
//   // display: ["swap"],
//   subsets: ["latin"],
// });

// interface MeshComponentProps {
//   rotation: object;
//   onLoad: () => void;
// }

// interface ModelViewerProps {
//   rotation: number;
// }

// export const MeshComponent: React.FC<MeshComponentProps> = ({ rotation,onLoad }) => {
//   const fileUrl = "canon1.glb";
//   const gltf = useLoader(GLTFLoader, fileUrl, () => onLoad());
//   const meshRef = useRef<THREE.Object3D>(null);
//   const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

//   const { rotationSpring } = useSpring({
//     rotationSpring: rotation,
//     config: { mass: 1, tension: 170, friction: 26 },
//   });

//   useEffect(() => {
//     const handleMouseMove = (event: { clientX: number; clientY: number }) => {
//       mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useFrame(() => {
//     if (meshRef.current && rotation == Math.PI / 1.3) {
//       meshRef.current.position.x = mouse.current.x * 0.2;
//       meshRef.current.position.y = mouse.current.y * 0.2;
//     }
//     else if(rotation !== Math.PI / 1.3 && meshRef.current){
//       meshRef.current.position.x = 0;
//       meshRef.current.position.y = 0;
//     }
//   });
//   // y = 40.1 z = -0.25
//   // y = 11.8 z = 0.25
//   return gltf ? (
//     <>
//       {/* this is better but error marta ts  */}

//       <a.primitive
//         object={gltf.scene}
//         ref={meshRef}
//         position={[50, 50, 0]}
//         rotation-x={69.5}
//         rotation-y={40.1}
//         rotation-z={-0.25}
//       />
//       {/* <primitive
//       object={gltf.scene}
//       ref={meshRef}
//       position={[0, 0, 0]}
//       rotation={[Math.PI / 8.1,rotation,0]}
//     /> */}
//     </>
//   ) : null;
// };
// export const ModelViewer: React.FC = () => {
//   const [animationComplete, setAnimationComplete] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [rotation, setRotation] = useState({y:40.1,z:-0.25});
//   const handleRotationChange = () => {
//     if (rotation.y == 11.8) {
//       setRotation({y:40.1,z:0.25});
//       setAnimationComplete(true);
//     } else {
//       setRotation({y:40.1,z:-0.25});
//       setAnimationComplete(false);
//     }
//   };
//   const { rotationSpring } = useSpring({
//     rotationSpring: rotation,
//     config: { mass: 1, tension: 170, friction: 26 },
//     onRest: () => {
//       if (rotation.y === 40.1) {
//         setAnimationComplete(true);
//       }
//     },
//   });
//   const handleModelLoad = () => {
//     setLoading(false);
//   };

//   return (
//     <div className="relative z-20 w-screen h-screen overflow-hidden">
//       {
//         loading &&
//         <div className="w-screen h-screen justify-center items-center flex">
//          <div className="w-2/5 h-2/5 flex justify-center items-center relative overflow-hidden animate-pulse">
//         <div className="absolute inset-0 pointer-events-none">
//           {/* Top-left corner */}
//           <div className="absolute top-0 left-0 border-t-2 border-l-2 border-white w-12 h-12"></div>
//           {/* Top-right corner */}
//           <div className="absolute top-0 right-0 border-t-2 border-r-2 border-white w-12 h-12"></div>
//           {/* Bottom-left corner */}
//           <div className="absolute bottom-0 left-0 border-b-2 border-l-2 border-white w-12 h-12"></div>
//           {/* Bottom-right corner */}
//           <div className="absolute bottom-0 right-0 border-b-2 border-r-2 border-white w-12 h-12"></div>
//         </div>
//         <p className={`${vibes.className} text-5xl text-white`}>3D Model</p>
//       </div>
//         </div>
//       }
//       <motion.div
//         className="md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden"
//         // initial={{ scale: 1 }}
//         // animate={{ scale: animationComplete ? 2 : 3 }}
//       >
//         <Canvas camera={{ position: [50, 20, -55], fov: 3 }} className="">
//           <Suspense fallback={null}>
//             <ambientLight intensity={1} />
//             <directionalLight position={[0, 1, 0]} intensity={10} />
//             <MeshComponent rotation={rotation}  onLoad={handleModelLoad}/>
//           </Suspense>
//         </Canvas>
//       </motion.div>
//       {animationComplete && (
//         <motion.div
//           className="absolute bg-black lg:w-[17.3rem] lg:h-[14rem] w-56 top-[54%] lg:top-[55%] lg:left-[44.5%] left-[43.2%] transform -translate-x-1/2 -translate-y-1/2 z-20 -rotate-1 h-48"
//           initial={{ opacity: 0}}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, ease: easeInOut ,delay: 0.4}}
//         >
//           <motion.img
//             src="/canonBg.png"
//             alt="Background"
//             className={`w-full h-full object-cover`}
//           />
//         </motion.div>
//       )}
//       <div
//         className="hover-detect flex justify-center items-center bg-opacity-40 border-white border w-80 h-20 group cursor-pointer absolute bottom-28 right-28 flex-row hover:flex-row-reverse transition-all duration-100 delay-75 bg-black text-white ease-in-out z-10"
//         onClick={handleRotationChange}
//       >
//         <div className="text-5xl w-3/4 h-full flex justify-center items-center bg-opacity-40 group-hover:text-black group-hover:bg-white">
//           EXPLORE
//         </div>
//         <div className="w-1/4 h-full flex justify-center items-center stroke-black bg-white group-hover:bg-black group-hover:stroke-white">
//           <svg
//             width="37"
//             height="43"
//             viewBox="0 0 37 43"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className=""
//           >
//             <line y1="4.7666" x2="37.0046" y2="4.7666" strokeWidth="8" />
//             <line
//               x1="33.0024"
//               y1="43.0046"
//               x2="33.0024"
//               y2="6"
//               strokeWidth="8"
//             />
//             <line
//               x1="5.80187"
//               y1="32.0887"
//               x2="31.9681"
//               y2="5.9225"
//               strokeWidth="10"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { Suspense } from "react";
import * as THREE from "three";
import { useSpring, a } from "@react-spring/three";
import { easeInOut, motion } from "framer-motion";
import { Vibes } from "next/font/google";

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

  const spring = useSpring({
    to: { rotationY: rotation.y, rotationZ: rotation.z },
    config: { mass: 1, tension: 170, friction: 26 },
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

  useFrame(() => {
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
        className={`md:flex justify-center items-center lg:h-screen lg:w-screen md:w-[80vw] md:h-[80vh] hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden `}
        // ${animationComplete?"scale-[300] transition-all ease-in-out duration-[2s] delay-[3s]":""}
      >
        <Canvas camera={{ position: [50, 20, -55], fov: 3 }} className="">
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 1, 0]} intensity={10} />
            <MeshComponent rotation={rotation} onLoad={handleModelLoad} />
          </Suspense>
        </Canvas>
      </motion.div>
      {animationComplete && (
        <motion.div
          className={`absolute bg-black lg:w-[17.3rem] lg:h-[14rem] w-56 top-[54%] lg:top-[55.8%] lg:left-[43%] left-[43.2%] transform -translate-x-1/2 -translate-y-1/2 -rotate-1 h-48`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: easeInOut, delay: 0.4 }}
        >
          <motion.img
            src="/canonBg.png"
            alt="Background"
            className={`w-full h-full object-cover`}
          />
        </motion.div>
      )}
      <div
        className="hover-detect flex justify-start items-center bg-opacity-40 border-white border w-80 h-20 group cursor-pointer absolute bottom-28 right-28 overflow-hidden flex-row hover:bg-white /hover:flex-row-reverse transition-all ease-in-out duration-100 bg-black text-white"
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
        <div className="text-5xl w-3/4 h-full flex justify-center items-center bg-opacity-40 group-hover:text-black group-hover:bg-white duration-100">
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
