import React from "react";




function Staffsignup () {
    return(
        <div className='bg-background m-auto font-serif	 h-[100vh] w-fit rounded-t-2x'>
            <div className='text-black text-5xl text-center border-2 rounded-t-lg shadow-2xl p-[20px]  bg-white '>
                VERIFY EMAIL
            </div>
            <p className="text-center m-[30px]">To verify your email, we sent a code to <br></br> philipbassey123@gmail.com. <button> (Change)</button></p>
            <form className="p-[10px]">
                <label/>Enter Code: <br/>
                <input for = "name" type="password" className="w-[500px] h-[50px] border-2 rounded-md" placeholder="Enter code "/>
            </form>
            <footer className="p-[10px]">
                <button className="bg-green items-center text-center text-white border-2 rounded-2xl w-full">
                    Sign Up
                </button>
            </footer>
        </div>
    )
}

export default Staffsignup