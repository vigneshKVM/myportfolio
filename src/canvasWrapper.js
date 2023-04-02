import React from "react";

const CanvasWrapper = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      <Cylinder3d position={[-1.2, 0, 0]} />
      <Cylinder3d position={[1.2, 0, 0]} />
    </Canvas>
  );
};
