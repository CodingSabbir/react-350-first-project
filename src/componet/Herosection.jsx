import Button from "./Button";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
const Herosection = () => {  
    return (
        <>
            <div className="flex grid-cols-2 mt-32 justify-center gap-16">
                <div>
                    <img className="w-96 " src="https://thriving-dragon-a3fcd9.netlify.app/assets/profile-pic.png" alt="" />
                </div>
                <div className="mt-20 text-center">
                    <p className="text-[#555555] text-[25px] font-semibold">Hello, I'm</p>
                    <h2 class="font-semibold text-[65px]">John Doe</h2>
                    <h3 className="text-[32px] text-[#555555] font-semibold">Frontend Developer</h3>
                    <div className="flex justify-between">
                    <div>
                    <div className="flex gap-4 mt-5">
                        < Button btn1='Download CV'/>
                        < Button btn1='Contact Info'/>
                    </div>
                        <div className="flex justify-center mt-5 gap-5">
                        <i className="bg-black text-white p-3 text-xl rounded-full"><FaLinkedinIn/></i>
                        <i className="bg-black text-white p-3 text-xl rounded-full"><BsGithub/></i>
                        </div>
                    </div>
                    </div>
                </div>
               
            </div>
        </>
    );
};

export default Herosection;