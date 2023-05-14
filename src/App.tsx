import './App.css'
import { Routes,Route } from 'react-router-dom';
import FirstPage from './pages/first-page';
import SecondPage from './pages/second-page';
function App() {
  return (
    <Routes>
      <Route path="/" element={<div id="roott"><FirstPage/></div>} />
      <Route path="/second" element={<SecondPage/>} />
    </Routes>
  )
}

export default App
