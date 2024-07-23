'use client'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import CursorModel from './CursorModel'

export default function Scene({activeMenu}:any) {
  return (
    <div className='fixed top-0 h-screen w-full'>
        <Canvas>
            <CursorModel activeMenu={activeMenu}/>
        </Canvas>
    </div>
  )
}