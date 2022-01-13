import React from "react";
import { useState, useEffect } from "react";
import Repo from "./FunProjectsCard";
import "./FunProjects.css";

const FunProjects = () => {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/jolenechong/starred")
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
          Interested in projects outside of web development?
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
