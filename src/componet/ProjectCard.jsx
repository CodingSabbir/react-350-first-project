import Button from "./Button";

const ProjectCard = ({project,img}) => {
    return (
        <>
           <div className="mt-10">
                <div className="border bg-gray-50 border-[#ADC4CE] rounded-[35px] text-center p-12">
                <img className=" rounded-3xl" src={img}alt="" />
                <h2 className=" text-[36px] font-semibold mt-5">{project}</h2>
                <div className="flex justify-center mt-5 gap-4">
                < Button btn1='GitHub'/>
                < Button btn1='Live Demo'/>
                </div>
                </div>
            </div> 
        </>
    );
};

export default ProjectCard;