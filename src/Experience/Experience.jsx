import React, { useRef, useEffect } from 'react'
import Scene from './Scene'
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import gsap from "gsap";
import { useResponsiveStore } from '../stores/useResponsiveStore';



const Experience = () => {
  
  const cameraRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0});


  const { isMobile } = useResponsiveStore();

  const zoomValues = {
    default: isMobile ? 50 : 51,
  }

  

 

  useEffect(()=>{
    if(!cameraRef.current) return;

    zoomValues.default = isMobile ? 50 : 51;

    cameraRef.current.zoom = zoomValues.default;
    cameraRef.current.updateProjectionMatrix();

  }, [isMobile]);

  useEffect(() => {
    const onPointerMove = (e) => {
      pointerRef.current.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	    pointerRef.current.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
    };

    const onTouchMove = (e) => {
      if(e.touches.length===1){
        pointerRef.current.x = ( e.touches[0].clientX / window.innerWidth ) * 2 - 1;
	      pointerRef.current.y = - ( e.touches[0].clientY / window.innerHeight ) * 2 + 1;
      }
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("touchmove", onTouchMove);

    return ()=> {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("touchmove", onTouchMove);
    }
  })

  
  return (
    <>
      <Canvas>
        <OrthographicCamera 

        ref={cameraRef} 
        makeDefault 
        position={[5.354, 6.683, 5.045]} 
        rotation={[-0.567, 0.735, .404]} 
        zoom={zoomValues.default} 
        
        />
        {/* <OrbitControls /> */}

        <Scene camera={cameraRef} pointerRef={pointerRef} />
    </Canvas>
    </>
  )
}

export default Experience
