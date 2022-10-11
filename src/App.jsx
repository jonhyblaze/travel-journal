import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Spot from './components/Spot'
import data from './data'

function App() {

  const spots = data.map (item => {
    return (
      <Spot key={item.id}
            item={item}/>
    ) 
  })

  return (
    <div className="App">
      <Header />
      <main className="spots--list">
        {spots}
      </main>
    </div>
  )
}

export default App
