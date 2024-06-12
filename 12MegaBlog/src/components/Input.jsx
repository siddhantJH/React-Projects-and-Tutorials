import React,{useId} from "react";

//htmlFor props is used for accessibility purpose
const Input = React.forwardRef(function Input({label,type='text',className='',...props},ref){
    const id=useId();
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1" htmlFor={props.id}>{label}</label>}
            <input type={type} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} 
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})
//agar labeldl diya hai to label display hoga 
//then we used htmlFor ke andar id pass kar do accessibility purpose ke liye use kar sakte hai 

//ref={} jo ref user se liya hai use yaha pass kardo yahi vo chiz hai 
//jo aapko reference degi parent componenet ke andar, isiliye forward ref use ara hai ,
//componenet is differenet but we need a reference there (where we use this componenet)
//so reference waha se pass bhi kiya jaega aur state ka access bhi liya jaega  yaha se tabhi ham 
//input pe jo bhi fill hua hai waha use kar paenge aur onchange on click use kar paenge 
export default Input