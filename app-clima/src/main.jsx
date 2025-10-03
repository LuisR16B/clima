import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Clima } from './pages/Clima'
import { ProvedorTemas } from './context/Tema.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProvedorTemas>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clima/>} />
          <Route path="/*" element={<h1> Error </h1>} />
        </Routes>
      </BrowserRouter>
    </ProvedorTemas>
  </StrictMode>
)
