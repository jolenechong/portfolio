import "./IndivProjectPages.css";

export default function IndivProjectPages(props) {
  return (
    <>
      <section id="indivprojpages">
        <header id="indivprojpagesbg">
          <h1 style={{ fontSize: "35px" }}>{props.title}</h1>
        </header>
        <main>
          <div class="row">
            <div class="column">
              <h1>About Project</h1>
              <p>{props.description}</p>
              <h1>Links</h1>
              {props.site && (
                <a href={props.site} target="_blank">
                  Live Demo
                </a>
              )}
              <br />
              {props.code && (
                <a href={props.code} target="_blank">
                  Source Code
                </a>
              )}
              <h1>Technology Used</h1>
              <p>{props.stack}</p>
              <h1>Role</h1>
              <p>{props.role}</p>
              <h1>Date</h1>
              <p>{props.date}</p>
            </div>
            <div class="column">
              <img src={props.src} />
              <img src={props.src1} />
              <img src={props.src2} />
            </div>
          </div>
          {/* <div id="nextProject">
            <div>
              <p>Next Section</p>
              <h1>The Cosy Paws</h1>
            </div>
          </div> */}
        </main>
      </section>
    </>
  );
}
