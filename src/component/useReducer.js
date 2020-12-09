import React ,{useReducer,useState} from 'react'


function reducer(q, action1) {
    switch (action1.type1) {
        case 'INCREMENT':
            return q+1;
        case 'DECREMENT':
            return q-1;
        default:
            throw new Error();
    }
}


export const Counter=() =>{
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <>
            <h1>{state}</h1>
            <div style={{ display: 'flex' }}>
                <button onClick={() => dispatch({ type1: 'DECREMENT' })}> - </button>
                <button onClick={() => dispatch({ type1: 'INCREMENT' })}> + </button>
            </div>
        </>
    )
}