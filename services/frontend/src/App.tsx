import { useState, useEffect } from 'react'
import { MessageBoard } from './components/MessageBoard'
import './App.css'

function App() {
  const [backendStatus, setBackendStatus] = useState<string>('Checking...')

  useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch('http://localhost:8000/health')
        const data = await response.json()
        setBackendStatus(data.status === 'healthy' ? '✅ Connected' : '❌ Unhealthy')
      } catch {
        setBackendStatus('❌ Connection Failed')
      }
    }
    
    checkBackend()
    const interval = setInterval(checkBackend, 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <h1>Kkonnect</h1>
      <div className="status-bar">
        Backend Status: <span>{backendStatus}</span>
      </div>
      <MessageBoard />
    </div>
  )
}

export default App
