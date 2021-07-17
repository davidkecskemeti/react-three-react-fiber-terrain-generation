import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Sky } from "@react-three/drei";
import "./index.css";
import Terrain from "./Terrain";

function App() {
  return (
    <Canvas>
      <fog attach="fog" args={["white", 0, 26]} />
      <OrbitControls />
      <pointLight intensity={2} position={[7, 5, 1]} />
      <Sky sunPosition={[7, 5, 1]} />
      <Suspense fallback={null}>
        <Terrain />
      </Suspense>
    </Canvas>
  );
}

export default App;
