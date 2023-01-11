import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { API_URL } from './env'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello {API_URL}</h1>
    </div>
  )
}

export default App
