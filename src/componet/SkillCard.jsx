
const SkillCard = ({work,h,hex,c,cex,s,sex,j,jex,t,tex,m,mex,icon}) => {
    return (
        <>
           <div className="grid grid-cols-1  mt-10">
            <div className="border-2 w-[500px] p-10 rounded-[30px]">
                <h2 className="text-[35px] font-semibold text-[#555555] text-center">{work}</h2>
                <div className="flex justify-between py-4">
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{h}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{hex}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{c}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{cex}</p>
                    </div>
                </div>
                <div className="flex justify-between py-4">
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{s}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{sex}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{j}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{jex}</p>
                    </div>
                </div>
                <div className="flex justify-between py-4">
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{t}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{tex}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center gap-3">
                            <i className="text-[28px]">{icon}</i>
                            <label className="text-[24px] font-semibold">{m}</label>
                        </div>
                        <p className="ml-10 text-[#555555] text-[18px]">{mex}</p>
                    </div>
                </div>
            </div>
            <div></div>
            </div> 
        </>
    );
};

export default SkillCard;