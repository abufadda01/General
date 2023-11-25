import React, { useState } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increment , decrement , reset , incrementByAmount } from './counterSlice'


const Counter = () => {

    // useSelector((state) => state.sliceName.anyStateKeyInsideIt)
    const count = useSelector((state) => state.counter.count)

    // dispatch(any_action_name_inside_the_slice) , we invoke it 
    const dipatch = useDispatch()

    const [incrementByAmount , setIncrementByAmount] = useState(0)

    const addValue = Number(incrementByAmount) || 0

    const resetAll = () => {
        setIncrementByAmount(0)
        dipatch(reset())
    }


  return (
    <section>
        <p>{count}</p>

        <div>
            <button onClick={() => dipatch(increment())}>+</button>
            <button onClick={() => dipatch(decrement())}>-</button>
        </div>

        <input type="text" value={incrementByAmount} onChange={(e) => setIncrementByAmount(e.target.value)} />

        <div>
            <button onClick={() => dipatch(incrementByAmount())}>add Amount</button>
            <button onClick={() => dipatch(resetAll)}>reset</button>
        </div>

    </section>
  )
}

export default Counter