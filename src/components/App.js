import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import theme from './ui/Theme'
import Header from '../components/ui/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <div>Home</div> } />
        <Route exact path='/portfolio' component={() => <div>Portfolio</div> } />
        <Route exact path='/tech' component={() => <div>Tech Stack</div> } />
        <Route exact path='/about' component={() => <div>About Us</div> } />
        <Route exact path='/contact' component={() => <div>Contact Us</div> } />
        <Route exact path='/estimate' component={() => <div>Get and Estimate</div> } />
        <Route exact path='/portfolio' component={() => <div>Our Portfolio</div> } />
        <Route exact path='/process' component={() => <div>Our Process</div> } />
      </Switch>
      </BrowserRouter>
      <div my={2}>
          {[...new Array(125)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </div>
    </ThemeProvider>
  );
}

export default App;
