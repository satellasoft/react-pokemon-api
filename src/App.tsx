import './shared/styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import {Router} from './routes/'

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