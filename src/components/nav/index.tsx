import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav() {

    return (
        <>
        <nav className='fixed top-4 right-4 z-10'>
            <a
                href='mailto:jolenechong7@gail.com'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
            <a
                href='https://linkedin.com/in/jolene-chong'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
            <a
                href='https://github.com/jolenechong'
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="pr-3 text-textPrimary hover:text-primary duration-200" size='xl'/>
            </a>
        </nav>


        </>
    );
}