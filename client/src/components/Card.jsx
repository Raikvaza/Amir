const Card = ({type, title }) =>{

return(
    <div className="w-full md:w-[400px] flex flex-col justify-center items-center gap-4 py-5 bg-white">
        <div className="text-[20px] font-bold">
            {type}
        </div>
        <div className="text-[18px]">
            {title}
        </div>
        <div className="h-[200px] w-[80%] bg-white-gold ">
            Some image for the future
        </div>
    </div>
)
}

export default Card;