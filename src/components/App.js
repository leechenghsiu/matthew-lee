import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from './Sidebar';
import Homepage from './Homepage';
import WorkList from './WorkList';
import WorkListItem from './WorkListItem';
import About from './About';
import ScrollToTop from '../ScrollToTop';

const App = () => {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <React.Fragment>
              <Sidebar />
              <Route path="/works" exact component={WorkList} />
              <Route path="/works/:slug" exact component={WorkListItem} />
              <Route path="/about" exact component={About} />
            </React.Fragment>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
