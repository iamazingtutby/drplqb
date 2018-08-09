import React from 'react';
import { Route } from 'react-router';
import Services from './services';

export default (
    <Route>
        <Route component={ Services } path={ Services.path } />
    </Route>
)
