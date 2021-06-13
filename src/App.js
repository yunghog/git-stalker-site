import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './pages/home'
function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home}/>
      </Router>
    </div>
  );
}

export default App;
