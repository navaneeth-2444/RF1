import React, { useRef } from "react";
import { Canvas,useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment} from "@react-three/drei";
function Model() {
       const { scene } = useGLTF("src/assets/Toaster.glb");
       const modelRef = useRef();
       return (
       <primitive ref={modelRef} object={scene} 
       scale={0.5} position={[-0.2,0.5,-0.5]} rotation={[0.8,0.65,0]}
       />
       );
     }


function Model1(){
       return(
              <Canvas>
                     <Environment
                        files="src/assets/symmetrical_garden_02_2k.hdr" 
                        background={false}
                        environmentIntensity={1} />
                     <Model />
                     <directionalLight position={[1,1,1]} intensity={1.5}/>
                     <directionalLight position={[-2,-3,1]} intensity={1}/>
              </Canvas>
       );
}
export default Model1;