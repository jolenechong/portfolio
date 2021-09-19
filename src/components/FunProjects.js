import React from "react";
import { useState, useEffect } from "react";
import Repo from "./FunProjectsCard";
import "./FunProjects.css";

const FunProjects = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=jolenechong")
      .then((response) => response.json())
      .then((data) => {
        setRepo(data);
      });
  },[]);

  return (
    <>
      <section id="funProjects">
        <h1>Recent projects from Github</h1>
        <p>
          Interested in my projects outside of web development? These are my
          pinned repos pulled from Github API. Click on{" "}
          <i className="fas fa-globe"></i> to view the live sites and{" "}
          <i className="fab fa-github"></i> to view the source code on github.
        </p>
        <div className="funProjContainer">
          {repo.length > 0 ? (
            repo.map((repoDetails) => (
              <Repo key={repoDetails.id} {...repoDetails} />
            ))
          ) : (
            <Repo repo="LOADING..."/>
          )}
        </div>
      </section>
    </>
  );
};

export default FunProjects;
