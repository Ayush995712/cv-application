import { useState } from "react"

export function Experience({company, setCompany, positionTitle, setPositionTitle, startDateInCompany, setStartDateInCompany, endDateInCompany, setEndDateInCompany, locationOfWork, setLocationOfWork, description, setDescription, experience, setExperience}) {
    const [open, setOpen] = useState(false);
    const [addExperienceBtn, setAddExperienceBtn] = useState(false);
    const [selectedExperience, setSelectedExperience] = useState(null);

    function saveExperience() {
        if(selectedExperience) {
            setExperience(prev => 
                prev.map(e => 
                    e.company === selectedExperience.company ? {company, positionTitle, startDateInCompany, endDateInCompany, locationOfWork, description} : e));
                    setSelectedExperience(null);
        } else {
            setExperience(prev => [...prev, 
                {company, positionTitle, startDateInCompany, endDateInCompany, locationOfWork, description}
            ]);
        }
        console.log(experience);
        setAddExperienceBtn(false);
        setOpen(true);
    }

    function cancelExperience() {
        setAddExperienceBtn(false);
        setOpen(true);
        setSelectedExperience(null);
    }

    function deleteExperience() {
        if(selectedExperience) {
            setExperience(prev => 
                prev.filter(e => e.company !== selectedExperience.company)
            )
        }
        setSelectedExperience(null);
        setAddExperienceBtn(false);
        setOpen(true);
    }

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px] shadow-xl shadow-blue-250">
            <div>
                <div className="text-white font-bold text-lg/7 cursor-pointer flex justify-between" onClick={() => {
                    setOpen(!open);
                    {addExperienceBtn ? setAddExperienceBtn(false) : setAddExperienceBtn(addExperienceBtn)};
                    }} >
                    <div>Experience</div>
                    <div>
                        <img src="https://img.icons8.com/?size=100&id=85327&format=png&color=000000" alt="icon" className={`w-5 h-5 transform transition-transform duration-100 ${open ? "rotate-180" : "rotate-0"}`} />
                    </div>
                </div>
                <div className="flex flex-col gap-[6px]">
                    {open && experience.map((e, index) => (
                        <div key={index} className="w-full border border-cyan-200 rounded-lg text-xl font-semibold bg-[beige] cursor-pointer" onClick={() =>  {
                            setAddExperienceBtn(true);
                            setOpen(false);
                            setSelectedExperience(e);
                            setCompany(e.company);
                            setPositionTitle(e.positionTitle);
                            setStartDateInCompany(e.startDateInCompany);
                            setEndDateInCompany(e.endDateInCompany);
                            setLocationOfWork(e.locationOfWork);
                            setDescription(e.description);
                        }}>{e.company}</div>
                        ))}
                </div>
            </div>
            {addExperienceBtn && <div className="flex flex-col gap-[4px]">
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
                <div className="flex justify-between">
                    <div>
                        <button className="border border-gray-300 px-[8px] py-[6px] rounded-2xl cursor-pointer" onClick={saveExperience}>Save</button>
                    </div>
                    <div className="flex gap-[6px]">
                        <button className="border border-gray-300 px-[8px] py-[6px] rounded-2xl cursor-pointer" onClick={cancelExperience}>Cancel</button>
                        <button className="border border-gray-300 px-[8px] py-[6px] rounded-2xl cursor-pointer" onClick={deleteExperience}>Delete</button>
                    </div>
                </div>
            </div>}
            {open && <div className="flex justify-center items-center">
                <button className="border border-gray-300 rounded-3xl px-[12px] py-[8px] cursor-pointer text-cyan-100" onClick={() => {
                    setCompany('');
                    setPositionTitle('');
                    setStartDateInCompany('');
                    setEndDateInCompany('');
                    setLocationOfWork('');
                    setDescription('');
                    setAddExperienceBtn(true);
                    setOpen(false);
                }}>Add Experience &#43;</button>
            </div>}
        </div>
    )
}