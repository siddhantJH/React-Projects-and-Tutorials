
import {React,useId} from "react";     //useId is used for generating uniq id's that can be passed to accessibilit attribute   


//It is used for generating uniqe id used to pass to the accesibility attribute , take 
//a pause we are at 5:53  minutes lets take a deep dive of what we have done so far 
//remember if you want to improve the performance of the loop in react we should pass the key 
function InputBox({label,amount,onAmountChange,onCurrencyChange,currencyOptions=[],selectCurrency="usd",amountDisable=false,currencyDisable=false,className = ""}) {
    
    const amountInputId=useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value ={amount} //if this amound changes now we need to call 
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}  //agar onAmountchange exist karta hai tabhi call karo 
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e)=>onCurrencyChange && onCurrencyChange((e.target.value))}
                    disabled={currencyDisable}
                //whenever we use loop in jsx pass a key , if we want performance pass the key
                    >
                       {
                        currencyOptions.map((currency)=>(
                            <option key={currency} value={currency}> 
                            {currency}
                            </option>
                        ))
                       }
                </select> 
            </div>
        </div>
    );
}


export default InputBox