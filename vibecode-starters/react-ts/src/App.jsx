import React from 'react'

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '20px'
    }}>
      <h1 style={{ color: '#3b82f6', fontSize: '2.5rem', marginBottom: '1rem' }}>Hello World</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>The live preview is working!</p>
      <p style={{ color: '#888', marginTop: '2rem' }}>Welcome to the Page!</p>
    </div>
  )
}

export default App
