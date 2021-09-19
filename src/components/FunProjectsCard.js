import './FunProjectsCard.css'
import LanguageColor from './LanguageColor'
import { useState, useEffect } from 'react'

const FunProjectsCard = (props) => {
    const colors = {
        JavaScript : "#efdf54",
        HTML : "#d94b23",
        Python : "#3f73a6"
    }

    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/jolenechong/repos")
        .then((response) => response.json())
        .then((data) => {
            for(var i= 0; i < data.length;i++){
                if (props.repo == data[i].name){
                    setRepo(data[i].homepage)
                }
                
            }
        });
    },[]);

    return (
        <div className='cardRepo'>
        <h3>{props.repo}</h3>
        <p>{props.description}
        </p>
        {repo && <a href={repo} target='_blank'><i className="fas fa-globe"></i></a>}
        <a href={props.link} target='_blank'><i className="fab fa-github"></i></a>

        <p className='language'><LanguageColor color={colors[props.language]}></LanguageColor>{props.language}</p>

    </div>
    )
}

export default FunProjectsCard
