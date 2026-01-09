import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Training from './pages/Training'
import Lectures from './pages/Lectures'
import Courses from './pages/Courses'
import TrainingPlan from './pages/TrainingPlan'
import Marketplace from './pages/Marketplace'
import TrainingCamp from './pages/TrainingCamp'
import Equipment from './pages/Equipment'

declare global {
  interface Window {
    Telegram: any
  }
}

function App() {
  const [tg] = useState(() => window.Telegram?.WebApp)

  useEffect(() => {
    if (tg) {
      tg.ready()
      tg.expand()
      tg.enableClosingConfirmation()
    }
  }, [tg])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/lectures" element={<Lectures />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/plan" element={<TrainingPlan />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/camp" element={<TrainingCamp />} />
        <Route path="/equipment" element={<Equipment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
