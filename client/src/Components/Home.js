import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import Resources from "./Resources";
import Profile from './Profile';
import Error from './Error';

const Home = ({ userDetails, logoutUser }) => {
    return (
        <Router>
            <Navbar logoutUser={logoutUser} />
            <Switch>
                <Route exact path='/'>
                    {/* {userDetails.email} */}
                    <Profile />
                </Route>
                <Route path='/resources'>
                    <Resources />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    );
}
export default Home
