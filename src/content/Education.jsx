import { useState } from "react";

export function Education({setCollege, setDegree, setStartDate, setEndDate, setLocation}) {

    const [open, setOpen] = useState(false);

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px] shadow-xl shadow-blue-250">
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
            <div className="flex flex-col gap-[4px]">
                <div>
                    <div className="text-white">College</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setCollege(e.target.value);
                    }} />
                </div>
                <div>
                    <div className="text-white">Degree</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setDegree(e.target.value);
                    }} />
                </div>
                <div className="flex gap-[6px]">
                    <div className="flex flex-col">
                        <div className="text-white">Start Date</div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                            setStartDate(e.target.value);
                        }} />
                    </div>
                    <div className="flex flex-col">
                        <div className="text-white">End Date</div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                            setEndDate(e.target.value);
                        }} />
                    </div>
                </div>
                <div>
                    <div className="text-white">Location</div>
                    <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                        setLocation(e.target.value);
                    }} />
                </div>
                <div className="flex justify-center items-center">
                    <button className=" border border-gray-300 text-cyan-100 rounded-3xl px-3 py-2 focus:outline-none cursor-pointer mt-[8px]">Add Education &#43;</button>
                </div>
            </div>)}
        </div>
    )
}