import Card from "./Card";
import { FcDoughnutChart } from "react-icons/fc";
import { FcDataRecovery } from "react-icons/fc";

const Imgarea = () => {
    const data=[
        {
            id:0,
            title:'Experience',
            year:'2+ years',
            work:'Frontend Development',
            icon:<FcDoughnutChart/>
        },
        {
            id:1,
            title:'Education',
            year:'B.Sc. Bachelors Degree',
            work:'M.Sc. Masters Degree',
            icon:<FcDataRecovery/>
        },
    ]
    return (
        <>
           <div className="flex grid-cols-2 px-32 mt-10 justify-center gap-20">
                    <img className="w-96 h-[430px] rounded-[35px]" src="https://thriving-dragon-a3fcd9.netlify.app/assets/about-pic.png" alt="" />
               
                <div className="mt-12">
                    <div className="flex gap-10">
                        {
                        data.map((item,index)=> <Card key={index} title={item.title} icon={item.icon} year={item.year} work={item.work}/>)
                        }
                    </div> 
                        <p className="text-[18px] mt-10 text-[#555555]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, natus eaque nulla culpa placeat dolor dolorem accusamus est vel animi, neque tenetur impedit perferendis, aspernatur quasi aperiam eligendi. Ipsam quisquam rerum numquam ipsa iusto, velit reiciendis error dolores soluta iste?</p> 
                </div>
                
            </div> 
           
        </>
    );
};

export default Imgarea;