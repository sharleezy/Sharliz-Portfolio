import React, { lazy, Suspense, useRef } from 'react';
import * as THREE from "three";
import { useFrame } from '@react-three/fiber';

const Room = lazy(() => import("./models/Sharliz-Portfolio-v4"));
const Hitbox = lazy(() => import("./models/DeskHitbox"));



const Scene = ({camera, pointerRef}) => {

  const groupRotationRef = useRef(0);
  const groupRef = useRef();

  useFrame(() =>{

    if(!groupRef.current) return;
      //console.log(camera.current.position);
      //console.log(camera.current.rotation);
      //console.log(camera.current.zoom);

      const targetRotation = pointerRef.current.x * Math.PI * 0.05;
      groupRotationRef.current = THREE.MathUtils.lerp(
        groupRotationRef.current,
        targetRotation,
        0.1
      );

      groupRef.current.rotation.y = groupRotationRef.current;
    })
    
  return (
    <>
      <Suspense>
        <group ref={groupRef}>

        <Hitbox/>
        <Room/>
        </group>
      </Suspense>
    </>
  )
}

export default Scene
