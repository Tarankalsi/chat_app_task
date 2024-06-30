
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Chat from './pages/Chat'

function App() {


  return (
    <> <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>

    </>
  )
}

export default App
