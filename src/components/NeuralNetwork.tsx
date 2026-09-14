"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";


function BrainNodes() {

  const groupRef = useRef<THREE.Group>(null);


  useFrame(() => {

    if(groupRef.current){

      groupRef.current.rotation.y += 0.005;
      groupRef.current.rotation.x += 0.002;

    }

  });



  const nodes = [
    [0,0,0],
    [1.5,1,0],
    [-1.5,1,0],
    [1.5,-1,0],
    [-1.5,-1,0],
    [0,2,0],
    [0,-2,0],
    [0,0,1.5],
    [0,0,-1.5]
  ];



  return (

    <group ref={groupRef}>


      {nodes.map((position,index)=>(

        <Sphere
          key={index}
          args={[0.12,32,32]}
          position={
            position as [
              number,
              number,
              number
            ]
          }
        >

          <meshStandardMaterial
            color="#2563eb"
            emissive="#3b82f6"
            emissiveIntensity={2}
          />

        </Sphere>

      ))}



      {/* Connecting Lines */}

      {nodes.slice(1).map((pos,index)=>{

        const start = new THREE.Vector3(
          0,
          0,
          0
        );

        const end = new THREE.Vector3(
          pos[0],
          pos[1],
          pos[2]
        );


        const direction = new THREE.Vector3()
        .subVectors(end,start);


        const length = direction.length();


        return (

          <mesh
          key={index}
          position={[
            direction.x/2,
            direction.y/2,
            direction.z/2
          ]}
          >

            <cylinderGeometry
              args={[
                0.01,
                0.01,
                length,
                16
              ]}
            />


            <meshStandardMaterial
              color="#93c5fd"
            />

          </mesh>

        );

      })}


    </group>

  );

}





export default function NeuralNetwork(){


return (

<div
className="
w-full
h-[450px]
"
>


<Canvas
camera={{
position:[
0,
0,
5
]
}}
>


<ambientLight intensity={1}/>


<pointLight
position={[5,5,5]}
intensity={2}
/>



<BrainNodes />


<OrbitControls
enableZoom={false}
/>


</Canvas>


</div>

);


}