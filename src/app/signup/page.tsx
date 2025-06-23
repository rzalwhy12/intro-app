"use client"
import { log } from "console";
import { useRef,useState } from "react";

function SignupPage(){
    const inUsername = useRef<HTMLInputElement>(null);

    const [print, setprint] = useState(""); //[value, fuction(newValue){}]
    //Menyimpan kumpulan data di dalam useState
    const [data, setData] = useState<string[]>([]);

    function onBtSubmit(){
        if(inUsername.current){
            console.log(inUsername.current.value);
            // setprint(inUsername.current.value)
            // data.push(inUsername.current.value)
            // setData([...data, inUsername.current.value]);
            // inUsername.current.value = "";

            // 1. Periksa apakah username dari inUsername sudah ada didalam state data
            const newUsername = inUsername.current.value.trim();
            const isDuplicate = data.includes(newUsername);

            if (isDuplicate) {
                // 3. Jika sudah ada berikan peringatan alert
                alert("Username sudah ada bro");
            } else {
                // 2. Jika belum ada maka tambahkan
                setData([...data, newUsername]);
                inUsername.current.value = ""; 
                
            }
            
        }
    }
    function displayData(){
        return data.map((value:string, index:number)=>{
            return <li key={`${value}-${index}`} className="w-full shadow-lg p-2 rounded-3xl ">{value}</li>
        })
    }

    return <div>
        <div className=" w-80 py-6 px-4 m-auto mt-20 rounded-3xl shadow-lg">
        <h1 className="text-2xl font-bold">Signup</h1>
        {/* <span>{print}</span> */}

        <div className="my-4">
            <label htmlFor="">Username</label>
            <br />
            <input type="text" placeholder="Masukan username" className="w-full border p-2 rounded-2xl mt-2 shadow" ref={inUsername}/>

        </div>
        <div className="text-right">
        <button type="button" className="border py-1.5 px-2 rounded-3xl bg-black text-white text-sm shadow-2xl ml-auto " onClick={onBtSubmit}>submit</button>
        </div>
        </div>
        <ul id="print-data-username" className="w-80 m-auto mt-6">
            {displayData()}
        </ul>
    </div>
}

export default SignupPage;

//https://github.com/abdi-class/jcwd0612-intro-app