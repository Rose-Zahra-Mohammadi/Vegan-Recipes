// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Routes, Route } from 'react-router-dom'
import Main from './views/Main'
import './App.css'
import Create from './views/Create'
import Detail from './views/Detail'
import Food from './views/Food'
import Spaghetti from './views/Spaghetti'

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route element={<Main />} path="/home" />
          <Route element={<Main />} path="/" />
          <Route element={<Create />} path="/create" />
          <Route element={<Detail />} path="/recipe/:id" />
          <Route element={<Food />} path="/:type" />
          <Route element={<Spaghetti />} path="/spaghetti" />
        </Routes>
      </div>
    </div>
  )
}

export default App
