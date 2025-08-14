import { useEffect, useState } from "react";


function getStockPrice() {
    // Simulate fetching stock price
  return (100 + Math.random() * 100).toFixed(2);
}


function Stockprice() {

    const [price, setPrice] = useState(getStockPrice());
    const [isCheck, setIsCheck] = useState(false);

    useEffect (() => {
            setTimeout(()=> {
                setPrice(getStockPrice());
                 //document.getElementById('sid').innerHTML = getStockPrice();
            }, 1000);    
    },[isCheck]);
  
    const handleChnage = (e) => {
    setIsCheck(true);
}

return ( 
    <>
      <div>
        <input type="checkbox" id="isCheck" onChange={(e)=> handleChnage(e)}/>Is Selected
        <h1>Live Stock Price</h1>
        <label>Stock Price (INR): <strong id ="sid"> {price}</strong></label>
      </div>
    </>
  )
}



export default Stockprice;