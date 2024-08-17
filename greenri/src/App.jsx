import { useState } from 'react'
import UnderConstructionPage from './pages/UnderConstructionPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UnderConstructionPage />
    </>
  )
}

export default App
