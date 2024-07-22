function Input({ handleClick }){
    return (
        <div>
            <input type = "text" onChange={(e) => handleClick(e.target.value)}/>
        </div>
    )
}

export default Input;