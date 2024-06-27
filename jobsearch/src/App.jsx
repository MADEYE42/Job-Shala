import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Search from './Components/SearchBar/Search'
import Jobs from './Components/JobsDiv/Jobs'
import Values from './Components/Values/Values'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar/>
      <Search />
      <Jobs />
      <Values />
      <Footer />
    </div>
  )
}

export default App