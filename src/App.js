import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Sociopath from './modules/components/Sociopath-App/Sociopath'
import LoginRedirect from './modules/components/Login-Page/Login-Redirect'
import { LightLoadingPageContainer } from './modules/components/Elements/Loading/Light-Loading-Page-Container'




const App = (props) => {

  return (
    <div className="App">
      {!props.preloader

        ? <Routes>
          <Route path="*" index element={<Sociopath />} />
          <Route path="login" element={<LoginRedirect />} />
        </Routes>

        : <div className='preloader__wrapper'><LightLoadingPageContainer /></div>
      }
    </div>

  )
}

export default App
