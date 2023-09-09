import SkillCard from "./SkillCard";
import { FcAcceptDatabase } from "react-icons/fc";
const Experience = () => {
    const skill=[
        {
            id:0,
            work:'Frontend Development',
            h:'HTML',
            hex:'Experienced',
            c:'CSS',
            cex:'Experienced',
            s:'SASS',
            sex:'Intermediate',
            j:'JavaScript',
            jex:'Basic',
            t:'TypeScript',
            tex:'Basic',
            m:'Material UI',
            mex:'Intermediate',
            icon:<FcAcceptDatabase/>
        },
        {
            id:1,
            work:'Backend Development',
            h:'Basic',
            hex:'Node JS',
            c:'Intermediate',
            cex:'Express JS',
            s:'Intermediate',
            sex:'Intermediate',
            j:'Git',
            jex:'Intermediate',
            t:'TypeScript',
            tex:'Basic',
            m:'Material UI',
            mex:'Intermediate',
            icon:<FcAcceptDatabase/>
        },
    ]

    return (
        <>
            <div className="flex justify-center gap-14">
            {
                    skill.map((skillData)=>
                    <SkillCard
                    work={skillData.work} h={skillData.h} hex={skillData.hex} c={skillData.c} cex={skillData.cex} s={skillData.s} sex={skillData.sex} j={skillData.j} jex={skillData.jex} t={skillData.t}  tex={skillData.tex} m={skillData.m}  mex={skillData.mex} icon={skillData.icon}     
                    />  
                    )
                     
                }
            </div>
        </>
    );
};

export default Experience;