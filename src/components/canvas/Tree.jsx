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
  Image,
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
    const t = clock.getElapsedTime() / 6

    // sphere.current.position.x = Math.sin(t) * 3
    sphere.current.position.x = Math.cos(t) * 1.35
    sphere.current.position.y = Math.sin(t) * 1.5
    sphere.current.position.z = Math.sin(t) * 1.5

    sphere2.current.position.x = Math.sin(t) * -1.3
    sphere2.current.position.y = Math.sin(t) * -1.5
    sphere2.current.position.z = Math.cos(t) * -1.5
  })
  return (
    <>
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
        <Billboard>
          <mesh castShadow={false} visible position={[0, -1.2, 0]}>
            <Image
              onClick={() =>
                (window.location.href = 'https://www.yeoy.world/world')
              }
              scale={1.3}
              url='/purple.png'
              transparent
            />
          </mesh>
        </Billboard>
      </Float>
      {green(sphere)}

      <mesh
        castShadow={false}
        visible
        ref={sphere2}
        userData={{ test: 'hello' }}
        position={[0, 0, 0]}
      >
        <Billboard>
          <Image
            onClick={() => (window.location.href = 'https://www.yeoy.world/')}
            url='/yellow.png'
            transparent
            scale={1.2}
          />
        </Billboard>
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
      <Billboard>
        <Image
          scale={1}
          url='/orange.png'
          onClick={() =>
            (window.location.href = 'https://soundcloud.com/user-823746783')
          }
          transparent
        />
      </Billboard>
    </mesh>
  )
}
