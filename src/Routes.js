import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact'; 
import About from './Components/About';

function Routes () {
    return (
        <Router>
            <App />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/about" component={About}/>
            </Switch>
        </Router>
    );
}

export default Routes;