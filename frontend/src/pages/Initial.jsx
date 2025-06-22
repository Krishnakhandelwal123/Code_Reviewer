import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import { TextParallaxContentExample } from '../components/Parallax'
import Contact from '../pages/Contact'

const Initial = () => {
  return (
    <div className='bg-black min-h-screen'>
      <Navbar />
      <Landing />
      <TextParallaxContentExample />
      <Contact />
    </div>
  )
}

export default Initial
