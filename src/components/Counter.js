import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount, reset} from "../features/counter/counterSlice";

function Counter() {

    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch()

    const [incrementAmount, setIncrementAmount] = useState()

    const addValue = Number(incrementAmount) || 0

    function resetAll() {
        setIncrementAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>

            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type={"text"}
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={() => resetAll()}>Reset</button>
            </div>

        </section>
    );
}

export default Counter;