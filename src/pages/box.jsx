import Tree from '@/components/canvas/Tree'
import Instructions from '@/components/dom/Instructions'
import dynamic from 'next/dynamic'

const Home = dynamic(() => import('@/components/canvas/Tree'), {
  ssr: true,
})

// Step 5 - delete Instructions components
const Page = (props) => {
  return (
    <>
      <Instructions />
    </>
  )
}

Page.r3f = (props) => (
  <>
    <Home route='/' />
    <Tree />
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
