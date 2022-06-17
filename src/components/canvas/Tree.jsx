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
  Trail,
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
  const sphere = useRef(null)
  const sphere2 = useRef(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // sphere.current.position.x = Math.sin(t) * 3
    sphere.current.position.z = Math.cos(t) * 2
    sphere.current.position.x = Math.sin(t) * 2

    sphere2.current.position.z = Math.cos(t) * -2
    sphere2.current.position.x = Math.sin(t) * -2
  })
  return (
    <>
      <ambientLight shadow={false} intensity={0.5} />

      <Environment
        files={['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png']}
        background
      />
      <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1.5]}
      >
        <mesh castShadow={false} visible position={[0, -1.2, 0]}>
          <sphereGeometry
            contactShadows={false}
            shadows={false}
            attach='geometry'
            args={[1, 16, 16]}
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
      {green(sphere)}

      <mesh
        castShadow={false}
        visible
        ref={sphere2}
        userData={{ test: 'hello' }}
        position={[0, 0, 0]}
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
      <EffectComposer>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={500} />
      </EffectComposer>
    </>
  )
}
export default Tree

function green(sphere) {
  return (
    <mesh visible position={[0, 0.1, 0]} ref={sphere}>
      <sphereGeometry attach='geometry' args={[0.5, 16, 16]} />
      <meshStandardMaterial
        attach='material'
        color='lime'
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  )
}
