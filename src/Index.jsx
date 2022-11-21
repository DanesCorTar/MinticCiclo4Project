import './App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Logoimg } from './components/logoimg'
import { Boximg } from './components/Boximg'
import { Userlogo } from './components/Userlogo'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Logoimg />
        </div>
        <div className="col-3"></div>
        <div className="col-3">
          <Userlogo />
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <h1>Instaya</h1>
        </div>
        <div className="col-10"></div>
      </div>
      <div className="row justify-content-end">
        <div className="col-3"></div>
        <div className="col-7">
          <h2>Tu pedido en 24 horas</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <Boximg />
        </div>  
      </div>
    </div>
  )
}
export default App
