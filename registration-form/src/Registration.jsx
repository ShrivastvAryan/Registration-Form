import { useState } from "react"

export const RegistrationForm=()=>{

    const[user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    //handling the input values

    const handleInput=(e)=>{
        console.log(e);
        let name= e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]: value, // here name is dynamic value
        }) 
    };

    //handling form submission

    const handleSubmit=(e)=>{
        e.preventDefault() // to disable refreshing of page after submitting
        alert("Registration successful");
    }



    return(
        <>
        <div className="bg-black h-screen w-screen">
            <div className="flex justify-center items-center h-screen">
            <div className="mx-auto bg-gradient-to-r from-gray-600 to-slate-700 h-3/5 w-4/5 rounded-2xl">

            <h1 className="text-4xl text-white mx-auto w-fit ">Registration form</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username" className=" text-white text-2xl p-2">Username</label>
                    <input type="text" name="username"
                     placeholder="username"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-300 p-1 rounded-md"
                    value={user.username}
                    onChange={handleInput}/>
                </div>

                <div>
                    <label htmlFor="email" className=" text-white text-2xl p-2">Email</label>
                    <input type="text" name="email"
                     placeholder="email"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-300 p-1 rounded-md"
                    value={user.email}
                    onChange={handleInput}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className=" text-white text-2xl p-2">Phone</label>
                    <input type="text" name="phone"
                     placeholder="phone"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-300 p-1 rounded-md"
                    value={user.phone}
                    onChange={handleInput}
                    />
                </div>

                <div>
                    <label htmlFor="password" className=" text-white text-2xl p-2">Password</label>
                    <input type="password" name="password"
                     placeholder="password"
                     required
                     autoComplete="off"
                    className=" m-2 bg-blue-300 p-1 rounded-md"
                    value={user.password}
                    onChange={handleInput}/>
                </div>

                <button type="submit" className="bg-blue-300 p-1 text-xl m-6 rounded-md cursor-pointer">Submit</button>
            </form>
            </div>
            </div>
        </div>
        </>
    )
}