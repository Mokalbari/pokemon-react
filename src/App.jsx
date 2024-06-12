import './App.css'

import Filter from './components/Filter'
import PokemonList from './components/PokemonList'
import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <MainContainer />
      </div>
    </>
  )
}

export default App
