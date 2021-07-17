import React from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";
import { Plane } from "@react-three/drei";
import "./index.css";
import elevationImage from "./assets/elevation.png";
import colorsImage from "./assets/colors.png";
import normalsImage from "./assets/normals.png";

export interface TerrainProps {}

const Terrain: React.FC<TerrainProps> = () => {
  const height = useLoader(THREE.TextureLoader, elevationImage);
  const normals = useLoader(THREE.TextureLoader, normalsImage);
  const colors = useLoader(THREE.TextureLoader, colorsImage);

  return (
    <group>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[64, 64, 1024, 1024]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colors}
          metalness={0.2}
          normalMap={normals}
          displacementMap={height}
        />
      </Plane>
    </group>
  );
};

export default Terrain;
