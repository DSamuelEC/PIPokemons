import { Routes, Route } from 'react-router-dom';
import Landing from './screen/landingPage/Landing.jsx';
import FormCreate from './components/formCreate/FormCreate.jsx'
import Home from './components/home/Home.jsx';
import Detail from './components/detail/Detail.jsx';
import './App.css'

function App() {

  return (
    <div>
        <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<FormCreate/>}/>
        <Route path='/detail/:id' element={<Detail />}/>
        </Routes>
    </div>
  )
}

export default App
