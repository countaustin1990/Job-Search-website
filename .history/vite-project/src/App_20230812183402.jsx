import NavBar from './components/NavBar'
import Job from './components/Job'
import Value from './components/Value'
import Search from './components/Search'
import Footer from './components/Footer'

const App = () => {
  return(
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
  )
}



export default App


