import './App.css'
import { Route, Routes } from 'react-router-dom'
import Sociopath from './modules/components/Sociopath-App/Sociopath'
import LoginRedirect from './modules/components/Login-Page/Login-Redirect'

// TODO
// POST -> Author
// redirect from profile to currentdialog (Send Message)
//api/dialog/8 -> возвращает dialog id 2 бэк возвращает не тот диалог

function App(props) {

  return (
    <div className="App">
      <Routes>
        <Route path="*" index element={<Sociopath />} />
        <Route path="login" element={<LoginRedirect />} />
      </Routes>
    </div>

  )
}

export default App
