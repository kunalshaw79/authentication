import './App.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
<Router>
  <Navbar></Navbar>
  <Routes>
  <Route path="/home" element={<Home/>} />
  </Routes>
  <Routes>
  <Route path="/" element={<Signup/>} />
  </Routes>
  <Routes>
  <Route path="/login" element={<Login/>} />
  </Routes>
  <Routes>
  <Route path="/profile" element={<Profile />} />
  </Routes>
</Router>
{/* <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/">
                <Signup/>
              </Route>
              <Route exact path="/about">
                <About/>
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
            </Routes>
          </div>
</Router> */}
    </div>
  );
}

export default App;
