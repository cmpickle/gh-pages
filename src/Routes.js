import * as React from 'react';
import { Home } from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction, withStyles } from '@material-ui/core';
import { Home as HomeIcon, Book as BookIcon } from '@material-ui/icons'
import { Books } from './Books';

const RoutesComponent = (props) => {
  const { classes } = props;
  const [navLink, setNavLink] = React.useState('home');
  return (
    <Router>
      <div>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <BottomNavigation
            value={navLink}
            onChange={(event, newValue) => {
              setNavLink(newValue);
            }}
            showLabels
            className={classes.stickToBottom}
            >
              <Link to="/">
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
              </Link>
              <Link to="/books">
                <BottomNavigationAction label="Books" icon={<BookIcon />} />
              </Link>
            </BottomNavigation>
      </div>
    </Router>
  )
}

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  }
}

export const Routes = withStyles(styles)(RoutesComponent);
