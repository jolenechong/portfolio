import { useState, useEffect } from "react";
import ArchiveProjectBox from "../../components/home/archiveProject";
import IntroSection from "../../components/home/introSection";
import ProjectBox, { ProjectDetails } from "../../components/home/project";
import { IPinnedRepo } from "get-pinned-repos";
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
    "Categorizing Essays with AI" : {
      "techStack": ["NLTK", "Gensim", "Python"],
      "desc" : "Multi-Class Text Classification and LDA Topic Modelling to categorize essays into different topics.",
      "previewLink": "https://categorizing-essays-ai.streamlit.app/", 
      "sourceLink": "https://github.com/jolenechong/categorizingEssays",
      "thumbnail": "CategorizingEssaysAI.webp"
    },
    // "ChatHealth WebApp": {
    //   "techStack": ["NodeJS", "Javascript", "BoredAPI", "Socket.io"],
    //   "desc" : "With ChatHealth we would be able to rant annonymously and get your mind off your struggles.",
    //   "previewLink": "https://chathealth.onrender.com/",
    //   "sourceLink": "https://github.com/jolenechong/ChatHealth",
    //   "thumbnail": "ChatHealth.webp"
    // }
  } as ProjectsList;

  const [repositories, setRepositories] = useState<IPinnedRepo[]>([]);

  useEffect(() => {
    AOS.init({duration: 2000, easing: 'ease-in-out', offset: 300});

    const fetchData = async () => {
      const pinned = await fetch(`/repos`)
        .then((res) => res.json());
      setRepositories(pinned);
    };
    fetchData()
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
                <div data-aos="fade-up" key={index}>
                  <ProjectBox name={projectName} details={projects[projectName]} />
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
              <div data-aos="fade-up" key={index}>
                <ArchiveProjectBox repo={repo ? repo : true}/>
              </div>
            )
          }
        </div>

      </div>
    </section>
    
    </>
  );
}