import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    count : 0
}


export const counterSlice = createSlice({

    name : "counter" ,
    
    initialState,
    
    // contains the actions creator (actions)
    // as the reducer(state , action) function
    // state parameter will access any state key that related to this slice  
    reducers : {
        increment : (state) => {
            state.count += 1
        },
        decrement : (state) => {
            state.count -= 1
        },
        reset : (state) => {
            state.count = 0
        },
        incrementByAmount : (state , action) => {
            state.count += action.payload
        }
    }
})


// export the actions creator (actions) for this slice so we could use them in different places
export const {increment , decrement , reset , incrementByAmount} = counterSlice.actions

// export the whole reducer of this slice because the store need it
export default counterSlice.reducer
