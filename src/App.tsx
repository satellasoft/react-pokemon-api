import './shared/styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import {Router} from './router/Index'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}

export default App