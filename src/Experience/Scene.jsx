import React, { Suspense, useRef } from 'react';
import * as THREE from "three";
import Room from  "./models/Sharliz-Portfolio-v4";
import Hitbox from "./models/DeskHitbox";
import { useFrame } from '@react-three/fiber';

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
