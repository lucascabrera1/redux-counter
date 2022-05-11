const initialState = {
    amount: 0,
}

/*const restar = (state) => {
    state
    if (state.amount <= 0) {
        return (<h1>"no queda dinero disponible"</h1>)
    }
    else {
        return {
            ...state,
            amount: state.amount -10 
        }
    }
}*/

export default (state = initialState, action) => {
    if (action.type === "DEPOSIT_MONEY"){
        return {
            ...state,
            amount: state.amount +10 
        }
    }
    if (action.type === "WITHDRAW_MONEY"){
        return {
            ...state,
            amount: state.amount -10 
        }
    }
    return state
}

export const SelectCurrentAmount = (state) => {
    return state.amountReducer.amount
}