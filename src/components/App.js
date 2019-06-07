import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Homepage from './Homepage';
import WorkList from './WorkList';
import WorkListItem from './WorkListItem';
import About from './About';
import Page404 from './Page404';
import history from '../history';
import ScrollToTop from '../ScrollToTop';

const App = () => {
  return (
    <div>
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <React.Fragment>
              <Sidebar />
              <Route path="/works" exact component={WorkList} />
              <Route path="/works/:slug" exact component={WorkListItem} />
              <Route path="/about" exact component={About} />
            </React.Fragment>
            <Route component={Page404} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
