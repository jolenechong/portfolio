import React from "react";
import thecosypawsIMG from "../images/theCosyPawsWebDev.webp";
import NYPLIT from "../images/NYPLITWebDev.webp";
import ChatHealth from "../images/ChatHealth.webp";
import MainProjectCard from "./MainProjectCard";
import "./FunProjects.css";

export default function Projects() {
  return (
    <>
      <section id="projects" style={{ paddingTop: "50px" }}>
        <h1>Web Development Projects</h1>
        <p>Looking for freelance work? These are some of my freelance projects/best works in web dev.</p>
        {/* <MainProjectCard
          src={thecosypawsIMG}
          title="PastaWorks"
          stack="ReactJS"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis libero nisi."
        /> */}
        <MainProjectCard
          src={NYPLIT}
          // linkto="/project1"
          title="NYP LIT Website"
          stack="HTML/CSS and Javascript"
          site="https://nyp-lit.github.io"
          code="https://github.com/nyp-lit/nyp-lit.github.io"
          description="Custom designed and built for NYP LIT (Ladies In Tech), a Special Interest Group in NYP."
        />
        <MainProjectCard
          src={thecosypawsIMG}
          linkto="/project2"
          title="The Cosy Paws"
          stack="Shopify, HTML/CSS and Javascript"
          site="https://thecosypaws.com.sg/"
          code="https://github.com/jolenechong/TheCosyPaws"
          description="An ecommerce website built on shopify for a client, with custom built pages."
        />
        <MainProjectCard
          src={ChatHealth}
          // linkto="https://github.com/jolenechong/ChatHealth"
          title="ChatHealth WebApp"
          linktoALT="https://github.com/jolenechong/ChatHealth#readme"
          stack="NodeJS, VanilaJS, Bored API, Socket.io"
          site="https://chat-health.herokuapp.com/"
          code="https://github.com/jolenechong/ChatHealth"
          description="With ChatHealth we would be able to rant annonymously and get your mind off your struggles."
        />
        {/* <MainProjectCard
          src="https://i.ibb.co/0h3mqy1/Screenshot-2021-09-02-113229.png"
          // linkto=""
          title="Full-stack Movie App"
          stack="ReactJS, NodeJS, TMDB API"
          // site="https://thecosypaws.com.sg/"
          // code=""
          description="[UNDER WORKS] Keep track of the movies you watched and the ones you like."
        /> */}
      </section>
    </>
  );
}
