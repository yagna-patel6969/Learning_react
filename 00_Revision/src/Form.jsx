import React, { useState } from 'react'

function Form() {
    const [message,setMessage]=useState("");
    const [userName,setuserName]=useState("");
    const submited =(e)=>{
        setMessage("Form submited");
        console.log(userName);
        e.preventDefault();
        setuserName("")
    }
    return (
        <div>

                        {/*first method*/}
            {/* <form>
                <input type="text" placeholder='Enter user name' />
                <button onClick={(e)=>{submited(e)}}>Submit</button>
                <h1>{message}</h1>

                <button onClick={submited}>Click here</button>
            </form> */}

                        {/*Second method*/}

            {/* <form>
                <input type="text" placeholder='Enter user name' />
                <button onClick={submited}>Submit</button>
                <h1>{message}</h1>

                <button onClick={submited}>Click here</button>
            </form> */}

                
                            {/*Third method */}

            {/* <form onSubmit={submited}>
                <input type="text" placeholder='Enter user name' />
                <button>Submit</button>
                <h1>{message}</h1>
            </form> */}
            
            {/* There is no diffrence between all of methods works same */}

                        {/* Two way binding in form */}

            <form onSubmit={submited}>
                <input 
                value={userName}
                type="text" 
                placeholder='Enter user name'
                onChange={(e)=>{
                    setuserName(e.target.value);
                    }
                }
                />
                <button>Submit</button>
                <h1>{message}</h1>
            </form> 

        </div>

)
}

export default Form
