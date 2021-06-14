import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Navbar1 from './components/navbar'
import Footer from './components/footer'
function App() {
  return (
    <div>
    <Navbar1/>
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
