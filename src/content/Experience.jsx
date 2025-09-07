import { useState } from "react"

export function Experience({company, setCompany, positionTitle, setPositionTitle, startDateInCompany, setStartDateInCompany, endDateInCompany, setEndDateInCompany, locationOfWork, setLocationOfWork, description, setDescription}) {
    const [open, setOpen] = useState(false);
    const [addExperience, setAddExperience] = useState(false);

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px] shadow-xl shadow-blue-250">
            <div className="text-white font-bold text-lg/7 cursor-pointer flex justify-between" onClick={() => {
                setOpen(!open);
                {addExperience ? setAddExperience(false) : setAddExperience(addExperience)};
                }} >
                <div>Experience</div>
                <div>
                    <img src="https://img.icons8.com/?size=100&id=85327&format=png&color=000000" alt="icon" className={`w-5 h-5 transform transition-transform duration-100 ${open ? "rotate-180" : "rotate-0"}`} />
                </div>
            </div>
            {addExperience && <div className="flex flex-col gap-[4px]">
                <div>
                    <div>Company Name</div>
                    <div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={company} placeholder="Enter Company name" onChange={(e) => setCompany(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>Position Title</div>
                    <div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={positionTitle} placeholder="Enter Position title" onChange={(e) => setPositionTitle(e.target.value)}></input>
                    </div>
                </div>
                <div className="flex">
                    <div>
                        <div>Start Date</div>
                        <div>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={startDateInCompany} placeholder="Enter Start Date" onChange={(e) => setStartDateInCompany(e.target.value)}></input>
                        </div>
                    </div>
                    <div>
                        <div>End Date</div>
                        <div>
                            <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={endDateInCompany} placeholder="Enter End Date" onChange={(e) => setEndDateInCompany(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div>
                    <div>Location</div>
                    <div>
                        <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={locationOfWork} placeholder="Enter Location" onChange={(e) => setLocationOfWork(e.target.value)}></input>
                    </div>
                </div>
                <div>
                    <div>Description</div>
                    <div>
                        <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Write the description here ..."></textarea>
                    </div>
                </div>
            </div>}
            {open && <div className="flex justify-center items-center">
                <button className="border border-gray-300 rounded-3xl px-[12px] py-[8px] cursor-pointer text-cyan-100" onClick={() => {
                    setAddExperience(true);
                    setOpen(false);
                    }}>Add Experience &#43;</button>
            </div>}
        </div>
    )
}