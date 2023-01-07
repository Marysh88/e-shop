import React from 'react'
import Header from './Header'
import Main from './Main'
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Header/>
      </Router>
      <Main/>
    </div>
  )
}

export default App
