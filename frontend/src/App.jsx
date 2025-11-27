import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MyReservations from './pages/MyReservations'
import Reservations from './pages/Reservations'

const ROUTES = [
  { path: '/', element: <Home /> },
  { path: '/menu', element: <Menu /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/my-reservations', element: <MyReservations /> },
  { path: '/reservations', element: <Reservations /> },
]

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="content">
        <Routes>
          {ROUTES.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
