function Buttons( { handleButton } ){
    return (
        <div>
            <button onClick = {()=>handleButton("+")} value="+">+</button>
            <button onClick = {()=>handleButton("-")} value="-">-</button>
            <button onClick = {()=>handleButton("*")} value="*">x</button>
            <button onClick = {()=>handleButton("/")} value="/">/</button>
        </div>
    )
}

export default Buttons;