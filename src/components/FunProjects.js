import Card from "./FunProjectsCard.js";
import React from "react";
import KamogaWebDev from "../images/KamogaWebDev.png";

const FunProjects = () => {
  function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
  }
  return (
    <>
      <h2
        id="sideprojects"
        style={{
          textAlign: "center",
          paddingTop: "200px",
          fontFamily: "Source Code Pro",
          paddingLeft: "10px",
          paddingRight: "10px"
        }}
      >
        Here are some fun side projects and past projects I've worked on!
      </h2>
      <div id="funProjectsContainer" style={{ paddingBottom: "200px" }}>
        <div style={{ maxWidth: "900px", width:'100%'}}>
          <div className="projectsFun">
            <div>
              <a className="tablinks" onClick={() => openTab("WebDev")}>
                🌐WebDev/WebDesign
              </a>
            </div>
            <div>
              {" "}
              <a className="tablinks" onClick={() => openTab("SideProj1")}>
                ‍🖥️HTML/CSS, Javascript
              </a>
            </div>
            {/* <div>
              {" "}
              <a className="tablinks" onClick={() => openTab("SideProj2")}>
                ⚙️Fun Side Projects - Python
              </a>
            </div> */}
          </div>
          <div className="projectsHere">
            <div id="WebDev" className="tabcontent">
              <Card
                src="https://i.ibb.co/DgFGQWZ/Kings-Resort-Page.png"
                alt="KingsResortPage"
                title="Kings Resort Website"
                site="https://jolenechong.github.io/kingsResortHotel/index.html"
                code="https://github.com/jolenechong/kingsResortHotel"
                description="Designed on figma and then developed with HTML/CSS and Javascript for a school project."
              />
              <Card
                src={KamogaWebDev}
                alt="kamoga web dev"
                title="Kamoga"
                description="A simple 3 page website for a client. Designed on Figma and built with custom code and EditorX."
                site="https://nyan285.editorx.io/kamoga"
                // code="https://github.com/jolenechong/shoppingCart-javascript"
              />
            </div>
            <div
              id="SideProj1"
              className="tabcontent"
              style={{ display: "none" }}
            >
              <Card
                src="https://i.ibb.co/TvSt0Hd/task-Tacker.png"
                alt="taskTracker"
                title="ReactJS - Task Tracker"
                description="Practising ReactJS with this tasktracker! Add, delete or set a reminder for your tasks!"
                site="https://hn3hh.csb.app/"
                code="https://github.com/jolenechong/TaskTrackerReactJS"
              />
              <Card
                src="https://i.ibb.co/4NbfJrL/javascript-Shopping-Cart.png"
                alt="javascript-Shopping-Cart"
                title="title"
                description="A fun side project, this is a javascript shopping cart which stores items ordered in a list."
                site="https://jolenechong.github.io/shoppingCart-javascript/"
                code="https://github.com/jolenechong/shoppingCart-javascript"
                title="JS Shopping Cart"
              />
            </div>
            <div
              id="SideProj2"
              className="tabcontent"
              style={{ display: "none" }}
            >
              {/* <Card
                src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1080&fit=max&s=359e8e12304ffa04a38627a157fc3362"
                title="title"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis libero nisi. Donec vel erat et arcu accumsan varius sit amet ac metus. Morbi sit amet faucibus ipsum."
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunProjects;

// export default FunProjects;
