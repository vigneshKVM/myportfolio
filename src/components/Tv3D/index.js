import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

// Components
import TvMesh from "./TvMesh";

const Tv3D = () => {
  return (
    <Canvas style={{ height: "100vh" }}>
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      <TvMesh position={[0, 0, 0]} />
      <OrbitControls />
      <axesHelper/>
      <gridHelper/>
      <Stats />
    </Canvas>
  );
};

export default Tv3D;
