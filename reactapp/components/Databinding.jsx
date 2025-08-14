import { useRef, useState } from "react";

function  Databinding() 
{
    const name = "Mayank Maheshwari";
    
    // userstate is used to chnage the value of custname
    const [custname, setCustname] =useState("Mayank Maheshwari");
    
    // useref is used to get the value of fullname 
    // take refrence of Dom element
    const fullnameref = useRef('');
    
    // handleClick is used to change the style of button and show alert
    const handleClick = (e) => {
        e.target.style.color = "red";
        e.target.style.backgroundColor = "black";
        e.target.style.cursor = "pointer";
        alert("Button clicked!");
    }

    // handleChnage is used to set the value of custname and fullname
    const handleChnage = (e) => {

        //Set the value from text box of input to custname
        setCustname(e.target.value);

        
    }
    return (

        <>
            <h4>Name: {name}</h4>
            <input type ="button" value= "Click me" id="btn" onClick={(e) => handleClick(e)} />

            <div>
                <label>Name:</label>
                <input type="text" value={custname} onChange={(e)=> handleChnage(e)}/>
                <span>{custname}</span>
                
            </div>

            <div>
                <label>Full Name:</label>
                <input type= "text" ref={fullnameref} />
                <span>{fullnameref}</span>
            </div>
        </>

        
    )
}

export default Databinding;