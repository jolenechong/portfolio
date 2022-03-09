import "../../App.scss";
import React,{ useState, useEffect} from 'react';
import TechTag from "../../components/home/category";
import ProjectBox from "../../components/home/projects";
import ArchiveProjectBox from '../../components/home/archiveprojects'
import styles from "./index.module.scss";
import ChatHealthIMG from "../../images/ChatHealth.webp";
import AnalysisIMG from "../../images/AnalysisOnHousing.webp";
import FullstackForumIMG from "../../images/FullstackForum.webp";

export default function Home() {
  const tech = [
    ".html/css",
    ".javascript",
    ".reactJS",
    ".nodeJS",
    ".python",
    ".flask",
    '.webdesign',
    '.webflow',
    '.shopify'
  ];

  const [repository, setRepository] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jolenechong/starred")
      .then((response) => response.json())
      .then((data) => {
        setRepository(data);
      });
  }, []);

  return (
    <>
      <section id='intro' className={styles.intro}>
        <h1>HELLO</h1>
        <p>
          I'm jolene, I <span className={styles.highlight}>design</span> and{" "}
          <span className={styles.highlight}>build user interfaces</span>. Check
          out my works below. Based in Singapore, remotely available at
          jolenechong7@gmail.com
        </p>
        <div className={styles.techstack}>
          {tech.map((tec, i) => (
            <TechTag key={i} tech={tec} />
          ))}
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ProjectBox
          image={ChatHealthIMG}
          title="ChatHealth WebApp"
          stack="NodeJS, Javascript, Bored API, Socket.io"
          description="With ChatHealth we would be able to rant annonymously and get your mind off your struggles."
          site="https://chat-health.herokuapp.com"
          code="https://github.com/jolenechong/ChatHealth"
          linkto="https://github.com/jolenechong/ChatHealth#readme"
        />
        <ProjectBox
          image={FullstackForumIMG}
          title="Fullstack Forum"
          stack="Flask, SQLAlchemy, HTML/CSS, Javascript"
          description="Fullstack CRUD Forum Website with Authentication and ability to create, delete, edit posts and more"
          // site="https://chat-health.herokuapp.com"
          code="https://github.com/jolenechong/FullstackForum"
          linkto="https://github.com/jolenechong/FullstackForum#readme"
        />
        <ProjectBox
          image={AnalysisIMG}
          title="Housing Price Analysis"
          stack="Python, PowerBI"
          description="PowerBI dashboard, Web scraping and Python Scripts to clean data and analyse data."
          site="https://vimeo.com/678118497"
          code="https://github.com/jolenechong/SingaporeHousingPriceAnalysis"
          linkto="https://github.com/jolenechong/SingaporeHousingPriceAnalysis#readme"
        />
      </section>

      <section id="archive">
        <h2>Other Noteworthy Mentions</h2>
        <div className={styles.archiveproj}>
        {repository.length > 0 ? (
            repository.map((repoDetails,i) => (
              <ArchiveProjectBox key={i} props={repoDetails}/>
            ))
          ) : (
          <p>LOADING...</p>
          )}
        </div>
      </section>
    </>
  );
}
