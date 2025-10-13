// App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = () => <h1 className="text-center mt-10 text-3xl font-bold">Welcome to Hero IO!</h1>
const Apps = () => <h1 className="text-center mt-10 text-2xl">Apps Page</h1>
const Installation = () => <h1 className="text-center mt-10 text-2xl">Installation Page</h1>

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="/installation" element={<Installation />} />
    </Routes>
  )
}

export default App
