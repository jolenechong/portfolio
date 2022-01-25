import "./IndivProjectPages.css";

export default function IndivProjectPages(props) {
  const text = props.scope
  const scope = text.split('>>>')

  const txt = props.outcome
  const outcome = txt.split('>>>')

  // console.log(scope)

  // for(var i=0;i<scope.length;i++){
  //   console.log(scope[i],'yes')
  // }
  
  // return newText

  return (
    <>
      <section id="indivprojpages">
        <div className="container-indiv">
        <div className="project-header">
          <h1>{props.title}</h1>
          <p>Technology Used: <span>{props.stack}</span></p>
        </div>
        <div class="row">
            <div class="column">
              <h1>Scope</h1>
              {/* <p>{scope}</p> */}
              {scope.map(item => {
          return <><p>{item}</p><br/></>;
        })}
              <p>Feel free to view <a href={props.site} target="_blank">live site</a> and <a href={props.code} target="_blank">source code</a>.</p>
            </div>
            <div className="column">
              <h1>Role</h1>
              <p>{props.role}</p>
              <h1>Date</h1>
              <p>{props.date}</p>
            </div>
          </div>

          <div className="row">
            <div className="column">
              <img src={props.src} alt={props.alt}/>
              <img src={props.src1} alt={props.alt}/>
              <img src={props.src2} alt={props.alt}/>
            </div>
            <div className="column" id="project-outcome">
            <h1>Outcome</h1>
            {outcome.map(item => {
          return <><p>{item}</p><br/></>;
        })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
