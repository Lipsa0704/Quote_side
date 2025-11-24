import { Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/Signup';
import Homepage from './components/Homepage';

import Motivational from './components/Motivational';
import Adventure from './components/Adventure';
import Attitude from './components/Attitude';
import Courage from './components/Courage';
import Dreams from './components/Dreams';
import Family from './components/Family';
import Friendship from './components/Friendship';
import Funny from './components/Funny';
import Happy from './components/Happy';
import Life from './components/Life';
import Love from './components/Love';
import Nature from './components/Nature';
import Peace from './components/Peace';
import Sad from './components/Sad';
import Self from './components/Self';
import Spiritual from './components/Spiritual';
import Success from './components/Success';
import Travel from './components/Travel';
import Wisdom from './components/Wisdom';

import Footer from './components/Footer';
import Aboutus from './components/Aboutus';




function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<Homepage />} />

        <Route path="/motivational" element={<Motivational />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/attitude" element={<Attitude />} />
        <Route path="/courage" element={<Courage />} />
        <Route path="/dreams" element={<Dreams />} />
        <Route path="/family" element={<Family />} />
        <Route path="/friendship" element={<Friendship />} />
        <Route path="/funny" element={<Funny />} />
        <Route path="/happy" element={<Happy />} />
        <Route path="/life" element={<Life />} />
        <Route path="/love" element={<Love />} />
        <Route path="/nature" element={<Nature />} />
        <Route path="/peace" element={<Peace />} />
        <Route path="/sad" element={<Sad />} />
        <Route path="/self" element={<Self />} />
        <Route path="/spiritual" element={<Spiritual />} />
        <Route path="/success" element={<Success />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/wisdom" element={<Wisdom />} />

        <Route path="/footer" element={<Footer/>} />
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </>
  )
}

export default App;
