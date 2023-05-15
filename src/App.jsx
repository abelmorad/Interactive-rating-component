import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Rate from './components/Rate'
import Rated from './components/Rated'


function App() {

  return (
    <main className="App">
      <Routes>
        <Route
          path='/'
          element={<Rate />}
        />
        <Route
          path='rated'
          element={<Rated />}
        />
      </Routes>
    </main>
  )
}
export default App


