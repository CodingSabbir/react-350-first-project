
const Card = ({title,icon,work,year}) => {
    return (
        <>
            <div className="text-center border-2 h-[200px] w-[300px] p-5 rounded-[30px]">
                <div className="flex justify-center text-[25px] pb-5">
                    <p>{icon}</p>
                </div>
                <h3 className="text-[30px] font-semibold">{title}</h3>
                <p className="text-[20px] text-[#555555]">{year}</p>
                <p  className="text-[22px] text-[#555555]">{work}</p>
            </div>

        </>
    );
};

export default Card;