function  Databinding() 
{
    const name = "Mayank Maheshwari";
    const handleClick = (e) => {
        e.target.style.color = "red";
        e.target.style.backgroundColor = "black";
        e.target.style.cursor = "pointer";
        alert("Button clicked!");
    }
    return (

        <>
            <h4>Name: {name}</h4>
            <input type ="button" value= "Click me" id="btn" onClick={(e) => handleClick(e)} />
        </>
    )
}

export default Databinding;