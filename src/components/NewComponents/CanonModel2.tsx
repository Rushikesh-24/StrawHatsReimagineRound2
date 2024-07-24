'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { Suspense } from 'react';

const MeshComponent2: React.FC<{ onLoad: () => void }> = ({ onLoad }) => {
  const fileUrl = 'canon1.glb';
  const gltf = useLoader(GLTFLoader, fileUrl, () => onLoad());
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, camera }) => {
    const t = clock.getElapsedTime();
    let cameraZ = Math.max(70, 100 - t * 20);
    camera.position.z = cameraZ;
    camera.lookAt(0, 0, 0);

    if (cameraZ === 70 && meshRef.current) {
      let rotationChange = - 0.01 ;
      meshRef.current.rotation.y += rotationChange;
    }
  });

  return gltf ? (
    <mesh ref={meshRef} castShadow receiveShadow>
      <primitive object={gltf.scene} />
    </mesh>
  ) : null;
};

const CameraModel2 = () => {
  const [loading, setLoading] = useState(true);
  const lightRef = useRef<THREE.SpotLight>(null);

  const handleModelLoad = () => {
    setLoading(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (lightRef.current) {
      const { clientX, clientY } = event;
      lightRef.current.position.set(clientX / 10, clientY / 10, 30);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div data-scroll-section className='w-screen sm:h-screen h-[80vh] flex justify-center items-center relative bg-black'>
      <div className='lg:size-full md:size-5/6 sm:size-4/6 w-full h-1/2'>
      <Canvas
        shadows
        camera={{ position: [50, 20, -55], fov: 3 }}
        onCreated={(state) => {
          state.gl.shadowMap.enabled = true;
          state.gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <MeshComponent2 onLoad={handleModelLoad} />
          <spotLight
            position={[-20, 20, 40]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
            ref={lightRef}
            color={'red'}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <mesh receiveShadow position={[0, 0, 100]} rotation={[-Math.PI / 2, 0, 0]}  >
            <planeGeometry args={[200, 200]} />
            <shadowMaterial opacity={10} color={'white'}/>
          </mesh>
        </Suspense>
      </Canvas>
      </div>
      
    </div>
  );
};

export default CameraModel2;
