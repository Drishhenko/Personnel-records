import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { routes } from './routes'

function App() {
  const [token, setToken] = useState('')
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(token)
    }
  }, [])

  return (
    <BrowserRouter>
      <NavBar token={token} setToken={setToken} />
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={<Component token={token} />}
            exact
          />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
