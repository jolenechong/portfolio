import { useState, useEffect } from "react";
import ArchiveProjectBox from "../../components/home/archiveProject";
import IntroSection from "../../components/home/introSection";
import ProjectBox, { Project, ProjectDetails } from "../../components/home/project";
import AOS from "aos";
import 'aos/dist/aos.css'

interface ProjectsList {
  [key: string] : ProjectDetails;
}

export default function Home() {

  // configs for home page
  const techStackList = ["HTML/CSS", "Javascript", "ReactJS", "NodeJS", "Typescript", "Python", "Flask", "Kotlin", "NextJS"]

  const projects = {
    "WordConnect" : {
      "techStack": ["Typescript ReactJS", "NodeJS", "MongoDB", "TailwindCSS", "SCSS"],
      "desc" : "A Real Time Multi-Player game built with WebSockets where users collaborate to solve a crossword puzzle.",
      "previewLink": "https://wordconnect.onrender.com/",
      "sourceLink": "https://github.com/jolenechong/portfolio/tree/main/src/assets/WordConnect/README.md",
      "thumbnail": "WordConnect.webp"
    },
    "NeuroNote" : {
      "techStack": ["Kotlin", "Android Studio", "TensorflowLite"],
      "desc" : "Mobile Application with AI  to help identify early stages in youths at risk. In partnership with Society Against Family Violence.",
      "sourceLink": "https://github.com/jolenechong/portfolio/tree/main/src/assets/NeuroNote/README.md",
      "thumbnail": "NeuroNote.webp"
    },
    "ChatHealth WebApp": {
      "techStack": ["NodeJS", "Javascript", "BoredAPI", "Socket.io"],
      "desc" : "With ChatHealth we would be able to rant annonymously and get your mind off your struggles.",
      "previewLink": "https://chathealth.onrender.com/",
      "sourceLink": "https://github.com/jolenechong/ChatHealth",
      "thumbnail": "ChatHealth.webp"
    }
  } as ProjectsList;

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    AOS.init({duration: 2000, easing: 'ease-in-out', offset: 300});

    fetch("https://gh-pinned-repos.egoist.dev/?username=jolenechong")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <>
    <IntroSection techStackList={techStackList}/>

    <section className="bg-gradient-to-tl to-primaryBG via-gradientRed from-primaryBG">
      <div className="max-w-[1000px] m-auto">
        <h1 className="text-center text-2xl py-8">Projects</h1>
        <div>
          {
            Object.keys(projects).map((projectName, index) => {
              return (
                <div data-aos="fade-up">
                  <ProjectBox name={projectName} details={projects[projectName]} key={index} />
                </div>
              )
            })
          }
        </div>
      </div>
    </section>

    <section className="bg-gradient-to-tr to-primaryBG via-gradientRed from-primaryBG">
      <div className="max-w-[1000px] m-auto py-20">
        <h1 className="text-center text-2xl py-8">Other Noteworthy Projects</h1>
        <div className="flex flex-wrap justify-center">
          {
            repositories.map((repo, index) => 
              <div data-aos="fade-up">
                <ArchiveProjectBox repo={repo} key={index}/>
              </div>
            )
          }
        </div>

      </div>
    </section>
    
    </>
  );
}