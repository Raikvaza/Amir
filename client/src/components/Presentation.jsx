const Presentation = () => {
    
    return (
        <div className="w-full h-[520px] relative bg-yellow">
                video content
                <div 
                    className="
                        bg-black 
                        absolute 
                        bottom-0 
                        left-5 
                        w-[200px] 
                        h-[300px]
                        flex flex-col justify-evenly
                        items-center
                    "
                    >
                    <div className="text-yellow w-[60%] text-center">
                        Some text for the future
                    </div>
                    <button className="p-5 font-bold text-yellow border-[1px] rounded-md">Discover</button>
                </div>
        </div>
    )
}

export default Presentation;