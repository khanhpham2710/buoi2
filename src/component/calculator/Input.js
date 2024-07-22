import "Calculator.css"

function Input({ handleClick }){
    return (
        <div>
            <input className="input" type = "text" onChange={(e) => handleClick(e.target.value)}/>
        </div>
    )
}

export default Input;