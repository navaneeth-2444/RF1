import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {useGLTF, Environment,OrbitControls} from "@react-three/drei";

function Model() {
       const { scene } = useGLTF("src/assets/pot.glb");
       const modelRef = useRef();
       return (
       <primitive ref={modelRef} object={scene} 
       scale={2.5}
       position={[0,-1.5,0]}
       rotation={[0.6,-0.2,0.25]}
       />
       );
     }
     
function Model2() {
  return (
    <Canvas>
       <Environment
                     files="src/assets/symmetrical_garden_02_2k.hdr" 
                     background={false}
                     environmentIntensity={0.7} />
      <Model/>
      <ambientLight intensity={30} color={0x222222} />
      <directionalLight position={[1.556, 10, 12.955]} intensity={1} color={0xffffff} />
    </Canvas>
  );
}

export default Model2;