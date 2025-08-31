export function PersonalDetails({name, setName}) {

    return (
        <div className="w-[400px] h-auto bg-blue-400 rounded-lg p-[12px]">
            <div className="text-white font-bold text-lg/7">Personal Details</div>
            <div>
                <div className="text-white">Full Name</div>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => {
                    setName(e.target.value);
                }} />
            </div>
            <div>
                <div className="text-white">Email</div>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div>
                <div className="text-white">Phone Number</div>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                <div className="text-white">Address</div>
                <input type="text" className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
        </div>
    )
}