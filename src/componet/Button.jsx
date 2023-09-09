

const Button = ({btn1}) => {
    return (
        <>
            <div>
            <button className="hover:bg-black hover:text-white px-5 py-3 border w-[160px] border-black rounded-full font-semibold">{btn1}</button>  
            </div>
        </>
    );
};

export default Button;