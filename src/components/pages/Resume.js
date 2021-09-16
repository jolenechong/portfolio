import "../../App.css";
import "./Resume.css";
import ResumeEmbed from "../../images/JoleneChongResume.pdf";

export default function Resume() {
  return (
    <>
      <section id="resumeIntro">
        <h1>My Resume</h1>
        <p>
          Thanks for having an interst in looking at my resume! I'm open for
          remote work and freelance projects. Feel free to contact me at
          jolenechong7@gmail.com
        </p>
        <a href={ResumeEmbed} download>Download Resume</a>
      </section>
      <section id="resume">
        <embed src={ResumeEmbed} width="700" height="800" />
      </section>
    </>
  );
}
