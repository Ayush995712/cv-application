import { useState } from "react";

export function Education({college, setCollege}) {

    const [open, setOpen] = useState(true);

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px]">
            <div className="text-white font-bold text-lg/7 cursor-pointer flex justify-between" onClick={() => {
                setOpen(!open)
            }} >
                <div>Education</div>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=85327&format=png&color=000000" alt="icon" className={`w-5 h-5 transform transition-transform duration-100 ${
            open ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
            {open && (
            <div>
                <div>
                    <div className="text-white">College</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setCollege(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Degree</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Start Date</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }} />
                    <div className="text-white">End Date</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setPhoneNumber(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Location</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setAddress(e.target.value);
                    }} />
                </div>
            </div>)}
        </div>
    )
}