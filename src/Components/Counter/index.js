import {deposit, Withdraw} from "../../store/Amount2/Action2"
import { useSelector, useDispatch } from "react-redux"

/*const mapStateToProps = (state) => {
    return {
        amount : SelectCurrentAmount(state)
    }
}*/

const Counter = () => {
    const amount = useSelector(state => state.amount)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => dispatch(deposit)}>Deposite</button>
            <button onClick={() => dispatch(Withdraw)}>Withdraw</button>
        </div>
    )
}

export default Counter