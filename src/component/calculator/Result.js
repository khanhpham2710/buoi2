function Result( {result , handleClick} ){
    return (
        <div>
            <h1>Result: {result}</h1>
            <button onClick={ handleClick } >Calculate</button>
        </div>
    )
}

export default Result;