import {createStore , combineReducers } from 'redux'
import amountReducer from "./Amount2/Amount2"

const reducers = combineReducers({
    amount: amountReducer
})

const store = createStore(reducers,
    window.__redux_devtools_extension__ && window.__redux_devtools_extension__()
)

export default store