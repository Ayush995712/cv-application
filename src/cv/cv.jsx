export function CV({name, email, phoneNumber, address, college, degree, startDate, endDate, location, educationDetails, setEducationDetails}) {
    return (
        <div className="shadow-xl">
            <div className="personal-details w-[800px] h-[200px] bg-cyan-900 text-white flex flex-col justify-center p-[20px] gap-[12px] box-border">
                <div className="text-2xl font-bold flex justify-center">{name}</div>
                <div className="flex justify-center gap-[12px]">
                    <div>{email}</div>
                    <div>{phoneNumber}</div>
                    <div>{address}</div>
                </div>
            </div>
            <div className="pt-[16px] pr-[16px] pb-[24px] pl-[24px] flex flex-col gap-[12px]">
                <div className="flex justify-center items-center text-lg font-bold bg-cyan-200">Education</div>
                <div className="flex flex-col gap-[12px]">
                    {educationDetails.map((element, index) => (
                            <div key={index} className="flex gap-[12px]">
                                <div>
                                    <div>{element.startDate}-{element.endDate}</div>
                                    <div>{element.location}</div>
                                </div>
                                <div>
                                    <div>{element.college}</div>
                                    <div>{element.degree}</div>
                                </div>
                            </div>))}
                </div>
            </div>
        </div>
    )
}