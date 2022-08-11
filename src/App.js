import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate,useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shot from './Shot';
import Login from './login';
function Navbar(){
  let location = useLocation();
  console.log(location.pathname);
  const pathname = location.pathname;
  if(pathname != '/login')
  {
    return (
  
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">Top navbar</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#"> <Link to="/">Home</Link></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#"><Link to="/about"><Link to="/shot">Contact Us</Link></Link></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                      </li>
                    </ul>
      
                  </div>
                </div>
              </nav>
        )
  }
 
}
function App() {
 // let location = useLocation();
 // console.log(location);
  return (
    <Router>
      <div >
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/shot">Contact Us</Link>
          </li>
        </ul> */}
        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/shot' element={< Shot />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
