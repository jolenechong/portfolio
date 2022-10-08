import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    text: String
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    onLink?: string | undefined;
    type?: string;
}

export default function Button({ text, onClick, onLink, type }: Props) {

    return (
        <>
            {type !== 'submit' ?
                <a
                    className={`inline-block ${type !== 'source' && "bg-gradient-to-r from-cyan-500 to-blue-500"} text-white 
            no-underline rounded-lg px-8 py-2 my-2 font-semibold`}
                    href={onLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {
                        type === "preview" ?
                            <FontAwesomeIcon icon={faGlobe} className="pr-2" size='lg' />
                            : type === "source" && <FontAwesomeIcon icon={faGithub} className="pr-2" size='lg' />
                    }
                    {text}</a>
                : <button
                    type='submit'
                    className={`inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white 
                no-underline rounded-lg px-8 py-2 my-2 font-semibold`} >{text}</button>}
        </>
    );
}