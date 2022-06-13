import useStore from '@/helpers/store'
import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

import { Canvas } from '@react-three/fiber'
import {
  PresentationControls,
  Stage,
  Float,
  Billboard,
  Environment,
} from '@react-three/drei'
import { Sphere, SphereBufferGeometry, SphereGeometry } from 'three'
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from '@react-three/postprocessing'

import { LayerMaterial, Depth } from 'lamina'

const Tree = ({ route }) => {
  // This reference will give us direct access to the THREE.Mesh object

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <ambientLight shadow={false} intensity={0.5} />

      <Environment
        files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        background
      />
      <Stage environment='forest'>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1.5]}
        >
          <mesh
            castShadow={false}
            visible
            userData={{ test: 'hello' }}
            position={[0, 1, 0]}
          >
            <sphereGeometry
              contactShadows={false}
              shadows={false}
              attach='geometry'
              args={[0.8, 16, 16]}
            />
            <meshStandardMaterial
              attach='material'
              color='magenta'
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1.3]}
        >
          <mesh visible position={[-2, 0, 0]}>
            <sphereGeometry attach='geometry' args={[0.5, 16, 16]} />
            <meshStandardMaterial
              attach='material'
              color='lime'
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </Float>
        <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={1} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[1, 1.3]}
        >
          <mesh
            castShadow={false}
            visible
            userData={{ test: 'hello' }}
            position={[2, 0, 0]}
          >
            <sphereGeometry attach='geometry' args={[0.5, 16, 16]} />
            <meshStandardMaterial
              attach='material'
              color='#ff6700'
              transparent
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
        </Float>
      </Stage>
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={500} />
      </EffectComposer>
    </>
  )
}
export default Tree
