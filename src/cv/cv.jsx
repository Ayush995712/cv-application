export function CV({name, email, phoneNumber, address}) {
    return (
        <div>
            <div className="personal-details w-[800px] h-[200px] bg-cyan-900 text-white flex flex-col justify-center p-[20px] rounded-lg gap-[12px] box-border">
                <div className="text-xl flex justify-center">{name}</div>
                <div className="flex justify-center gap-[12px]">
                    <div>{email}</div>
                    <div>{phoneNumber}</div>
                    <div>{address}</div>
                </div>
            </div>
            <div>
            
            </div>
        </div>
    )
}