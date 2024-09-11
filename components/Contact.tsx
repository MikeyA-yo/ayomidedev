"use client";

import { useState } from "react";

export default function Contact() {
    const [data, setData] = useState({name:"", email:"", message:""});
    const handleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setData(prev => {
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    const handleMessage = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setData(prev =>{
            return {
                ...prev,
                [e.target.name] : e.target.value
            }
        })
    }
    async function sendMessage(data:{name:string, email:string, message:string}) {
        if(data.name.length < 2 || data.email.length < 4 || data.message.length === 0){
            return
        }
        const jsonData = JSON.stringify(data)
        const res = await fetch("/api", {
            method:"POST",
            body:jsonData
        })
        if(res.ok){
            return
        }
    }
  return (
    <>
      <div
        className="flex flex-col gap-2 items-center justify-center mt-4"
        id="contact"
      >
        <h3 className="text-2xl lg:text-3xl font-bold">Contact Me</h3>
        <div className="flex flex-col gap-4 items-center bg-[#2E073F] p-4 text-[#EBD3F8]">
          <div className="flex lg:flex-row md:flex-row flex-col gap-2">
            <div className="flex flex-col gap-2">
              Name:
              <input onChange={handleInput} name="name" className="p-2 text-[#AD49E1] rounded" />
            </div>
            <div className="flex flex-col gap-2">
              Email:
              <input onChange={handleInput} name="email" className="p-2 text-[#AD49E1] rounded" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            Message:
            <textarea
            onChange={handleMessage}
              name="message"
              placeholder="Type in your Message..."
              className="min-h-24 p-2 text-[#AD49E1]"
            />
          </div>
          <div>
            <button onClick={()=>{
                sendMessage(data)
            }} className="bg-[#7A1CAC] rounded p-2">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}
