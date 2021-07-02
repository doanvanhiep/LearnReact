import TodoReducer from './todo';
import TodoReducer1 from './todo1';
import { createStore, combineReducers,applyMiddleware } from 'redux';


const reducer = combineReducers({
    todo: TodoReducer,
    todo1: TodoReducer1
});

const middleWare= store => next => action =>{
    if(action.type==="ADD_TODO" && action.payload==="fuck1")
    {
        action.payload="*****"
    }
    return next(action);
}
export default createStore(reducer,applyMiddleware(middleWare));