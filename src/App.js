import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
import Navbar1 from './components/navbar'
function App() {
  return (
    <div>
    <Navbar1/>
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
