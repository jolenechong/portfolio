import './FunProjectsCard.css'

const FunProjectsCard = (props) => {
    return (
        <>
            <div className='funProjectCard'>
                <img src={props.src} alt={props.alt}/>
                <div className='cardOverlay'>
                    <h2 style={{padding:'12px 5px',}}>{props.title}</h2>
                <div className="links">
                    {props.site && <a href={props.site} target='_blank'><i class="fas fa-globe"></i></a>}
                    {props.site && <a href={props.code} target='_blank'><i class="fab fa-github"></i></a>}
                </div>
                    <p style={{padding: '10px 0',}}>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default FunProjectsCard
