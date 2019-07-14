import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import HomePage from './pages/HomePages'


class App extends React.Component {

  componentWillMount() {
    //console.log("App::componentWillMount");
    this.setState({
      routes: [
        { path: "/", component: HomePage, exact: true }


      ]
    })
  }

  componentDidMount() {
    console.log("App::componentDidMount");
  }

  render() {
    //console.log("App::render");
    return (
      <React.Fragment>
        <Router>
          {this.state.routes.map((route, key) => <Route key={route.path}
            path={route.path} component={route.component}
            exact={route.exact === true ? true : false}
          />)}
        </Router>
      </React.Fragment>
    );
  }
}


export default App;
