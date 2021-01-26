import '../App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function RouterConfig() {
  return (
    <div>
      <header>
        <h1>PWA Applications</h1>
      </header>
      <Router>
        <div style={{ textAlign: 'center' }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About Us</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/About">
              <About />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default RouterConfig;
