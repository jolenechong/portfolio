import "./IndivProjectPages.css";

export default function IndivProjectPages(props) {
  return (
    <>
      <section id="indivprojpages">
        {/* <header id="indivprojpagesbg">
          <h1 style={{ fontSize: "35px" }}>{props.title}</h1>
        </header> */}
        <div className="container-indiv">
        <div className="project-header">
          <h1>{props.title}</h1>
          <p>Technology Used: <span>{props.stack}</span></p>
        </div>
        <div class="row">
            <div class="column">
              <h1>Scope</h1>
              <p>{props.description}</p>
              <br/>
              <p>Feel free to view <a href={props.site} target="_blank">live site</a> and <a href={props.code} target="_blank">source code</a>.</p>

              {/* <h1>Role</h1>
              <p>{props.role}</p> */}
              {/* <h1>Date</h1>
              <p>{props.date}</p> */}
            </div>
            <div class="column">
              <h1>Role</h1>
              <p>{props.role}</p>
              <h1>Date</h1>
              <p>{props.date}</p>
            </div>

          </div>
          <br/>
              <img src={props.src} alt={props.alt}/>
              <img src={props.src1} alt={props.alt}/>
              <img src={props.src2} alt={props.alt}/>
              <br/><br/>
        </div>
          {/* <div id="nextProject">
            <div>
              <p>Next Section</p>
              <h1>The Cosy Paws</h1>
            </div>
          </div> */}
      </section>
    </>
  );
}
