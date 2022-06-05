// import 'font-awesome/css/font-awesome.min.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Shared/Navbar';
import Home from './Page/Home';
import "./App.css"
import Footer from './Components/Shared/Footer';
import Register from './Page/Register';
import Login from './Page/Login';
import SmartQuotes from './Page/SmartQuotes';

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/SmartQuotes" element={<SmartQuotes></SmartQuotes>}></Route>
        </Routes>
        <Footer></Footer>
      </Navbar>
    </div>
  );
}

export default App;
