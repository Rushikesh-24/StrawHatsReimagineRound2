'use client'
import { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const useLoadingManager = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const manager = new THREE.LoadingManager();
    
    manager.onProgress = (url, itemsLoaded, itemsTotal) => {
      setProgress((itemsLoaded / itemsTotal) * 100);
    };
    
    manager.onLoad = () => {
      setLoading(false);
    };

    // Load models
    const gltfLoader = new GLTFLoader(manager);
    gltfLoader.load('canon1.glb', (gltf) => {
      // Handle the loaded gltf object
    }, undefined, (error) => {
      // Handle any loading errors
    });

  }, []);

  return { loading, progress };
};

export default useLoadingManager;
