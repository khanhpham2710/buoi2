import Input from "./Input"
import Buttons from "./Buttons"
import Result from './Result'
import { useState } from "react"


function Calculator(){
    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [button, setButton] = useState()

    const [result, setResult] = useState()

    function handleResult(){
        setResult(eval(input1 + button + input2))
    }

    function handleButton(a){
        setButton(a)
    }

    function handleInput1(a){
        setInput1(a)
    } 

    function handleInput2(a){
        setInput2(a)
    }

    return (
        <div>
            <Input handleClick = {handleInput1}/>
            <Input handleClick = {handleInput2}/>
            <Buttons handleButton = {handleButton}/>
            <Result result= {result} handleClick = {handleResult}/>
        </div>
    )
}

export default Calculator