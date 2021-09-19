import './FunProjectsCard.css'
import LanguageColor from './LanguageColor'

const FunProjectsCard = (props) => {
    const colors = {
        JavaScript : "#efdf54",
        HTML : "#d94b23",
        Python : "#3f73a6"
    }

    return (
        <div className='cardRepo'>
        <h3>{props.name}</h3>
        <p>{props.description}
        </p>
        {props.homepage && <a href={props.homepage} target='_blank'><i className="fas fa-globe"></i></a>}
        <a href={props.html_url} target='_blank'><i className="fab fa-github"></i></a>

        <p className='language'><LanguageColor color={colors[props.language]}></LanguageColor>{props.language}</p>

    </div>
    )
}

export default FunProjectsCard
