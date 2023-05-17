const Presentation = () => {
    
    return (
        <div className="w-full h-[520px] relative bg-brown-gold">
                video content
                <div 
                    className="
                        bg-dark-gold 
                        absolute 
                        bottom-0 
                        left-5 
                        w-[250px] 
                        h-[300px]
                        flex flex-col justify-around
                        items-center
                    "
                    >
                    <div className="text-xl text-white-gold w-[100%] text-center">
                        Some text for the future
                    </div>
                    <button className="px-5 py-2 font-bold text-white-gold border-[1px]">Discover</button>
                </div>
        </div>
    )
}

export default Presentation;