import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/App';

import HomePage from './pages/home/home';
import HomeRoutes from './pages/home/routes';
import ContactsRoutes from './pages/contacts/routes';
import PortfolioRoutes from './pages/portfolio/routes';
import ServicesRoutes from './pages/services/routes';
import SolutionsRoutes from './pages/solutions/routes';



export default (
    <Route component={ App } path={ App.path } >
        <IndexRoute component={ HomePage } />

        { HomeRoutes }
        { ServicesRoutes }
        { SolutionsRoutes }
        { PortfolioRoutes }
        { ContactsRoutes }
    </Route>
);