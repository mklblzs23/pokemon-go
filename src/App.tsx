import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'

function App() {

  return <BrowserRouter>
    <Routes>
      <Route index Component={Login} />
    </Routes>
</BrowserRouter>
}

export default App
