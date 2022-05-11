import {createStore , combineReducers } from 'redux'
import amountReducer from "./Amount/Reducer"

const reducers = combineReducers({
    amountReducer
})

const store = createStore(reducers,
    window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
)

export default store