
const About = ({heading,title}) => {
    return (
        <>
        <div className="text-center mt-16">
            <p className="text-[20px] text-[#555555] ">{heading}</p>
            <h2 className="text-[55px] font-bold ">{title}</h2>
        </div>
        </>
    );
};

export default About;