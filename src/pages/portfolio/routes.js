import React from 'react';
import { Route } from 'react-router';
import Portfolio from './portfolio';

export default (
    <Route>
        <Route component={ Portfolio } path={ Portfolio.path } />
    </Route>
)
