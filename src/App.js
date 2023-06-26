import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile_user';
import { BrowserRouter ,Routes, Route }from 'react-router-dom';
import Servers from './pages/Servers';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
// import Register from './pages/Register';

function App() {
  return (
    <div>
    <Header/>
    <body>
    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<SignUp/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route path="/server/:id" element={<Servers/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </body>
    </div>
  );
}

export default App;
