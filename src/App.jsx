import React from 'react'
import NavBar from './Componenets/NavBar/NavBar'
import './App.css'
import Banner from './Componenets/Banner/Banner'
import RowPost from './Componenets/RowPost/RowPost'
import {Action,originals,Comady ,Romance} from './urls'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={Action}  title='Action' isSmall/>
      <RowPost url={Comady} title='Comady' isSmall/>
      <RowPost url={Romance}  title='Horror' isSmall/>
      
    </div>
  )
}

export default App
