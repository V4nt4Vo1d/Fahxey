
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Streamers from './pages/Streamers'
import About from './pages/About'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/streams" element={<Streamers />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
