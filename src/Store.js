import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import ProjectsReducer from './components/Projects/ProjectsReducer'
import MergeRequestsReducer from './components/MergeRequests/MergeRequestsReducer'
import FiltersReducer from './components/Filters/FiltersReducer'

export const setupReducers = () => {
    const storeTree = combineReducers({
        projects: ProjectsReducer,
        mergeRequests: MergeRequestsReducer,
        filters: FiltersReducer
    });
    return storeTree;
}

export const setupStore = (rootReducer) => {
    const store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}