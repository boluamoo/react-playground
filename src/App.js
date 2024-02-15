import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import Error from './pages/Error'
import { useState, createContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState('Bolu')
  const client = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{ username, setUsername }}>
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/profile">Profile</Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <div>Footer</div>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
