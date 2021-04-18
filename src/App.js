import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './containers/Home';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/PawsUp' component={Home} />
        {/* <Route exact path='/about-us' component={AboutUs} />
        <Route exact path='/contact-us' component={Contact} /> */}
        <Route />
      </Switch>
    </BrowserRouter>
  );
}

export default App;