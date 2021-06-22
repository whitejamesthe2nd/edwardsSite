import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import {completion} from '../reducers/completion'
let storeEnhancer;

if (process.env.NODE_ENV !== 'production') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    storeEnhancer = composeEnhancers(applyMiddleware(thunk));
} else {
    storeEnhancer = applyMiddleware(thunk);
}




const ReducerMerger = combineReducers({completion})


const configureStore = (initialState) => {
    return createStore (
            ReducerMerger,
            initialState,
            storeEnhancer
        )
};

export default configureStore;
