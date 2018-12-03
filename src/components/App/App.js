import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import PlayerProfileEdit from '../PlayerProfileEdit/PlayerProfileEdit';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import CreateTeamPage from '../CreateTeamPage/CreateTeamPage';
import TeamProfilePage from '../TeamProfilePage/TeamProfilePage';
import BuildTactic from '../BuildTactic/BuildTactic';
import TacticsPage from '../TacticsPage/TacticsPage';
import CreateEventPage from '../CreateEventPage/CreateEventPage';
import EventsPage from '../EventsPage/EventsPage';

import './App.css';
import { userInfo } from 'os';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/profile" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />
            {/* This is the route to the player profile edit page */}
            <ProtectedRoute 
            exact 
            path="/playerEdit"
            component={PlayerProfileEdit}
            />
            {/* This is the route to the player Profile page */}
            <ProtectedRoute
            exact
            path="/profile"
            component={PlayerProfile}
            />
            {/* THis is the route to the "Create Team Page" */}
            <ProtectedRoute
            exact
            path="/createTeam"
            component={CreateTeamPage}
            />
            {/* This is the route to the "team/teamAdmin page" */}
            <ProtectedRoute
            exact
            path="/teamProfile"
            component={TeamProfilePage}
            />
            {/* This is the route to the "Build Tactic Page" */}
            <ProtectedRoute
            exact
            path="/buildTactic"
            component={BuildTactic}
            />
            {/* This is the route to the "Tactics Page" */}
            <ProtectedRoute
            exact
            path="/tactics"
            component={TacticsPage}
            />
            {/* This is the route to the "Create Events Page" */}
            <ProtectedRoute
            exact
            path="/createEvent"
            component={CreateEventPage}
            />
            {/* This is the route to the "Events Page" */}
            <ProtectedRoute
            exact
            path="/events"
            component={EventsPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
