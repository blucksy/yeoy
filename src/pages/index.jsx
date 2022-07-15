import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions'
import { useState, useEffect } from 'react'
// import Shader from '@/components/canvas/Shader/Shader'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Tree'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  //state if user has interacted with the page
  const [interacted, setInteracted] = useState(false)

  // detect if user has interacted with page
  useEffect(() => {
    const handleInteraction = () => {
      setInteracted(true)
    }
    window.addEventListener('mousedown', handleInteraction)
    return () => {
      window.removeEventListener('mousedown', handleInteraction)
    }
  }, [])
  return <>{!interacted && <div className='pulsating-circle' />}</>
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    <Shader />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
