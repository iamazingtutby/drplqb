import React from 'react';
import { Route } from 'react-router';
import Solutions from './solutions';

export default (
    <Route>
        <Route component={ Solutions } path={ Solutions.path } />
    </Route>
)
