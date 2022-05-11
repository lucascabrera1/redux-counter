import {deposit, Withdraw} from "../../store/Amount/Action"
import {SelectCurrentAmount} from "../../store/Amount/Reducer"
import {connect} from "react-redux"

const mapStateToProps = (state) => {
    return {
        amount : SelectCurrentAmount(state)
    }
}

const Counter = ({amount, deposit, Withdraw}) => {
    return (
        <div>
            <h1>{amount}</h1>
            <button onClick={() => deposit()}>Deposite</button>
            <button onClick={() => Withdraw()}>Withdraw</button>
        </div>
    )
}

export default connect(mapStateToProps, {deposit, Withdraw}) (Counter)