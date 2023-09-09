
import About from "./componet/About";
import Experience from "./componet/Experience";
import Herosection from "./componet/Herosection";
import Imgarea from "./componet/Imgarea";
import ProjectCard from "./componet/ProjectCard";


const App = () => {
  return (
    <>
      <Herosection/>
      <About heading='Get To Know More' title='About Me'/>
      <Imgarea/>
      <About heading='Explore My' title='Experience'/>
      <Experience/>
      <About heading='Browse My Recent' title='Projects'/>
      <div className="flex justify-center px-36 gap-10">
      <ProjectCard project='Project One' img='https://thriving-dragon-a3fcd9.netlify.app/assets/project-1.png'/>
      <ProjectCard project='Project Two' img='https://thriving-dragon-a3fcd9.netlify.app/assets/project-2.png'/>
      </div>
      <About heading='Get In Touch' title='Contact Me'/>
      <div className="justify-center flex px-36 pb-5">
        <ProjectCard project='Project Three' img='https://thriving-dragon-a3fcd9.netlify.app/assets/project-3.png'/>
      </div>
    </>
  );
};

export default App;
