import React, { useState, useEffect } from 'react';

export const Product = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        function handleStatusChange(status) {
            console.log("Trong function")
        }
       console.log("Bên ngoài function")
        // Chỉ định clean up sau khi gọi effect:
        return function cleanup() {
           console.log("Trong return")
        };
    },[count]);


    // Tương tự như componentDidMount và componentDidUpdate:
    useEffect(() => {
        // // Cập nhập document title sử dụng browser API
        // document.title = `You clicked ${count} times`;
        // console.log("ádasd")
    }, [count]);

    useEffect(() => {
        // console.log("count1")
    }, [count1]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {

                setCount(count+ 1)
            }}>
                Click me
        </button>
        </div>
    );
}
