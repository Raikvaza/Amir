import Card from "./Card";

const News = () => {
    return (
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center pb-5 items-center bg-white">
            <div className="w-[80%] font-bold text-[20px] text-center py-4 border-b-[2px] border-b-brown-gold">
                CURRENT HIGHLIGHTS
            </div>
            <Card type="New/Collection" title="Something happened"/>
            <Card type="News" title="Something happened"/>

            <Card type="News" title="Something happened"/>
            <div className="md:flex-[100%] flex w-full justify-center items-center">
                <button className=" py-2 px-10 border-[2px] border-white-gold">More</button>
            </div>
        </div>
    )
}

export default News;