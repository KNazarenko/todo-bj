import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/layout/Header';
import Tasks from './components/tasks/Tasks';
import Edit from './components/pages/Edit';
import Add from './components/pages/Add';
import Login from './components/pages/Login';
import store from './store';
import history from './history';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="App">
          <Header />
          <div className="container col-md-8 col-xl-6 mt-4">
            <Switch>
              <Route exact path="/" component={Tasks} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/post/:id" component={Edit} />
              <Route exact path="/page/:id" component={Tasks} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
