import "../../App.scss";
import React from 'react';
import styles from './index.module.scss'
import ResumeEmbed from '../../images/JoleneChongResume.pdf'

export default function Resume() {

  return (
    <>
      <section>
        <h1>My Resume</h1>
        <p>
          Thanks for having an interst in looking at my resume! I'm open for
          remote work and freelance projects. Feel free to contact me at
          jolenechong7@gmail.com
        </p>
        <a href={ResumeEmbed} download className={styles.resumeDownload}>Download Resume</a>
        <br/>
        <br/>
        <embed src={ResumeEmbed} width="700" height="800" />

      </section>
    </>
  );
}
