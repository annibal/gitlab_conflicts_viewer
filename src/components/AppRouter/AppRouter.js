import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { getRoutes } from './RoutesProvider'

import MergeRequestsPage from '../MergeRequestsPage/MergeRequestsPage'

function AppRouter() {

    const Routes = getRoutes();
    const mainRoute = Routes.MERGE_REQUESTS;
    const routePrefix = '/';

    return (
        <Switch>
            <Route path={routePrefix + Routes.MERGE_REQUESTS}>
                <MergeRequestsPage />
            </Route>
            <Route path="/"><Redirect to={mainRoute} /></Route>
            <Route path=""><Redirect to={mainRoute} /></Route>
        </Switch>
    )
}

export default AppRouter