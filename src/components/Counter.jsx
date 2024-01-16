import { useState } from "react"

const Counter = (props) => {

    const [counter, setCounter] = useState(props.productPrice);
    
    function negative(){
        if (counter > 0){
            setCounter(counter - 1)
        }
    }
 
    return (
        <div>
            <button onClick={()=> setCounter(counter + 1)}>+</button>
            <span>{counter}₺</span>
            <button onClick={negative}>-</button>
        </div>
    )

}

export default Counter