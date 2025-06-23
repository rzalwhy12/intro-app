"use client"
function SignupPage(){
    return <div>
        <div className="border border-black w-80 py-6 px-4 m-auto mt-20">
        <h1 className="text-2xl font-bold">Signup</h1>
        <div className="my-4">
            <label htmlFor="">Username</label>
            <br />
            <input type="text" placeholder="Masukan username" className="w-full border p-2 rounded-2xl mt-2 shadow"/>
        </div>
        <div className="text-right">
        <button type="submit" className="border py-1.5 px-2 rounded-3xl bg-black text-white text-sm shadow-2xl ml-auto">submit</button>
        </div>
        </div>
    </div>
}

export default SignupPage;