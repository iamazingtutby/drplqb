import React from 'react';
import { Route } from 'react-router';
import Contacts from './contacts';

export default (
    <Route>
        <Route component={ Contacts } path={ Contacts.path } />
    </Route>
)
