import { useState } from "react";

export function Education({setCollege, setDegree, setStartDate, setEndDate, setLocation, college, degree, startDate, endDate, location, educationDetails,  setEducationDetails}) {
    const [open, setOpen] = useState(false);
    const [addEducation, setAddEducation] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState(null);

    function saveEducation() {
        if(selectedEducation) {
            setEducationDetails(prev => 
                prev.map(el => 
                    el.college === selectedEducation.college ? {college, degree, startDate, endDate, location} : el
                )
            );
            setSelectedEducation(null);
        } else {
            setEducationDetails(prev => [...prev, 
                {college, degree, startDate, endDate, location}
            ])
        }
        setOpen(true);
        setAddEducation(false);
    }

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px] shadow-xl shadow-blue-250">
            <div className="flex flex-col">
                <div className="text-white font-bold text-lg/7 cursor-pointer flex justify-between" onClick={() => {
                    setOpen(!open)
                }} >
                    <div>Education</div>
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=85327&format=png&color=000000" alt="icon" className={`w-5 h-5 transform transition-transform duration-100 ${
                open ? "rotate-180" : "rotate-0"}`} />
                    </div>
                </div>
                <div className="flex flex-col rounded-lg gap-[4px]">
                    {open && educationDetails.map((element, index) => (
                        <div key={index} className="w-full border border-cyan-200 rounded-lg text-xl font-semibold bg-[beige] cursor-pointer" onClick={() => {
                            setSelectedEducation(element);
                            setCollege(element.college);
                            setDegree(element.degree);
                            setStartDate(element.startDate);
                            setEndDate(element.endDate);
                            setLocation(element.location);
                            setAddEducation(true)
                            setOpen(false);
                        }} >{element.college}</div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-[4px]">
            {addEducation && (
                <div>
                    <div>
                        <div className="text-white">College</div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={college} onChange={(e) => {
                            setCollege(e.target.value);
                        }} />
                    </div>
                    <div>
                        <div className="text-white">Degree</div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={degree} onChange={(e) => {
                            setDegree(e.target.value);
                        }} />
                    </div>
                    <div className="flex gap-[6px]">
                        <div className="flex flex-col">
                            <div className="text-white">Start Date</div>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={startDate} onChange={(e) => {
                                setStartDate(e.target.value);
                            }} />
                        </div>
                        <div className="flex flex-col">
                            <div className="text-white">End Date</div>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={endDate} onChange={(e) => {
                                setEndDate(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div>
                        <div className="text-white">Location</div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={location} onChange={(e) => {
                            setLocation(e.target.value);
                        }} />
                    </div>
                    <div className="flex justify-between">
                        <button className="border border-gray-300 text-cyan-100 rounded-3xl px-3 py-2 focus:outline-none cursor-pointer mt-[4px]" onClick={saveEducation} >Save</button>
                        <div>
                            <button className="border border-gray-300 text-cyan-100 rounded-3xl px-3 py-2 focus:outline-none cursor-pointer mt-[4px]" onClick={() => {
                                setSelectedEducation(null);
                                setAddEducation(false);
                                setOpen(true);
                            }} >Cancel</button>
                            <button className="border border-gray-300 text-cyan-100 rounded-3xl px-3 py-2 focus:outline-none cursor-pointer mt-[4px]" onClick={() => {
                                setEducationDetails(prev => prev.filter(e => e.college !== selectedEducation.college));
                                setSelectedEducation(null);
                                setAddEducation(false);
                                setOpen(true);
                            }} >Delete</button>
                        </div>
                    </div>
                </div>
                )}
                {open && <div className="flex justify-center items-center">
                    <button className="border border-gray-300 text-cyan-100 rounded-3xl px-3 py-2 focus:outline-none cursor-pointer mt-[8px]" onClick={() => {
                        setCollege("");
                        setDegree("");
                        setStartDate("");
                        setEndDate("");
                        setLocation("");
                        setSelectedEducation(null);
                        setAddEducation(true);
                        setOpen(false)
                    }} >Add Education &#43;</button>
                </div>}
            </div>
        </div>
    )
}