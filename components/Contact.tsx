"use client";
export default function Contact(){
    return (
        <>
            <div className="flex flex-col gap-2 items-center justify-center mt-4" id="contact">
                <h3>Contact Me</h3>
               <div className="flex flex-col gap-2 items-center">
               <div className="flex gap-2">
                   <div className="flex flex-col gap-1">
                    Name:
                    <input className="p-2" />
                   </div>
                   <div className="flex flex-col gap-1">
                    Email:
                    <input className="p-2" />
                   </div>
                </div>
                <div></div>
                <div></div>
               </div>
            </div>
        </>
    )
}