import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Footer from './pages/Footer'
import Missing from './pages/Missing'

import Rooms from "./components/Rooms/Rooms"
import Login from './components/Account/Login'
import Register from './components/Account/Register'
import FogotPassword from './components/Account/ForgotPassword'

import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/reset-password" component={FogotPassword} />
        <Route exact path="*" component={Missing} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
