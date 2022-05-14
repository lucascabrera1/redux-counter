const deposit = () => {
    return ({
        type: "DEPOSIT_MONEY",
        payload: 10
    })
}

const Withdraw = () => {
    return ({
        type: "WITHDRAW_MONEY",
        payload: -10
    })
}

export {deposit, Withdraw}