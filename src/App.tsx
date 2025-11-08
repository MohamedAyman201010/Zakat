import './App.css'
import MainScreen from './components/MainScreen'
import { Route,Routes } from 'react-router-dom'
import LogIn from './components/LogIn'
import ServiceZakat from './components/ServiceZakat'
import Zakat from './components/zakat'
import Campaigns from './components/Campaigns'
import Kafarat from './components/Kafarat'
import DetailsNews from './components/DetailsNews'
import DetailsProjects from './components/DetailsProjects'
import DetailsOffice from './components/DetailsOffice'
import AboutUs from './components/AboutUs'
import Legal from './components/Legal'

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<MainScreen/>}/>
        <Route path='/Login' element={<LogIn/>}/>
        <Route path='/services/zakat' element={<ServiceZakat/>}/>
        <Route path='/services/Kafarat' element={<Kafarat/>}/>
        <Route path='/zakat' element={<Zakat/>}/>
        <Route path='/services/campaigns' element={<Campaigns/>}/>
        <Route path='/news/details' element={<DetailsNews/>}/>
        <Route path='/project' element={<DetailsProjects/>}/>
        <Route path='/office' element={<DetailsOffice/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/tos' element={<Legal/>}/>
      </Routes>
    </>
  )
}

export default App
