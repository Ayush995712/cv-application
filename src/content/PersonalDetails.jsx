import { useState } from "react";

export function PersonalDetails({name, setName, email, setEmail, phoneNumber, setPhoneNumber, address, setAddress, loadExample}) {
    const [open, setOpen] = useState(true);

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px] shadow-xl shadow-blue-250">
            <div className="text-white font-bold text-lg/7 cursor-pointer flex justify-between" onClick={() => {
                setOpen(!open)
            }} >
                <div>Personal Details</div>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=85327&format=png&color=000000" alt="icon" className={`w-5 h-5 transform transition-transform duration-200 ${
            open ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
            {open && (
            <div className="transform transition-transform duration-500">
                <div>
                    <div className="text-white">Full Name</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={loadExample ? "Jon Doe" : name} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <div className="text-white">Email</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={loadExample ? "jondoe12@gmail.com" : email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Phone Number</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={loadExample ? "+91 7898234782" : phoneNumber} onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Address</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={loadExample ? "Durgapur, West Bengal" : address} onChange={(e) => {
                        setAddress(e.target.value);
                    }} />
                </div>
            </div>)}
        </div>
    )
}