import React from "react";
import { useState, useEffect } from "react";
import "./FunProjects.css";
import LanguageColor from "./LanguageColor";

const FunProjects = () => {
  const [repo, setRepo] = useState([]);
  const colors = {
    JavaScript: "#efdf54",
    HTML: "#d94b23",
    Python: "#3f73a6",
    "Jupyter Notebook": "#d15a00",
  };

  useEffect(() => {
    fetch("https://api.github.com/users/jolenechong/starred")
      .then((response) => response.json())
      .then((data) => {
        setRepo(data);
      });
  }, []);

  return (
    <>
      <section id="funProjects">
        <h1>Recent projects from Github</h1>
        <p>Interested in projects outside of web development?</p>
        <div className="funProjContainer">
          {repo.length > 0 ? (
            repo.map((repoDetails) => (
              <div className="cardRepo">
                <h3>{repoDetails.name}</h3>
                <p>{repoDetails.description}</p>
                <div className="icons-div">
                  {repoDetails.homepage && (
                    <a href={repoDetails.homepage} target="_blank">
                      <i className="fas fa-globe"></i>
                    </a>
                  )}
                  <a href={repoDetails.html_url} target="_blank">
                    <i className="fab fa-github"></i>
                  </a>
                </div>

                <div className="topics-div">
                  {repoDetails.topics.length > 0 ? (
                    repoDetails.topics.map((topic) => (
                      <span>{topic}</span>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>

                <p className="language">
                  <LanguageColor
                    color={colors[repoDetails.language]}
                  ></LanguageColor>
                  {repoDetails.language}
                </p>
              </div>
            ))
          ) : (
          <p>LOADING...</p>
          )}
        </div>
      </section>
    </>
  );
};

export default FunProjects;
