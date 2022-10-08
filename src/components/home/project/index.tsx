import Button from "../../button";

export interface Project {
    name: string,
    details: ProjectDetails;
}

export interface ProjectDetails {
    techStack: string[];
    desc: string;
    previewLink?: string;
    sourceLink?: string;
    thumbnail: string;
}


export default function ProjectBox({name, details}: Project) {

    return (
        <>
        <div className="lg:flex py-4">
            <img
                src={require(`../../../assets/${details.thumbnail}`)}
                alt=""
                className="max-w-[450px] w-[90%] object-cover flex-1 rounded-lg m-auto"/>
            <div className="p-6 flex-1">
                <h1>{name}</h1>
                {details.techStack.map((tech, i) => [
                    <span className="text-primary" key={i}>{i > 0 && ", "}{tech}</span>
                ])}
                <p className="pt-4">{details.desc}</p>
                {details.previewLink && 
                <>
                    <p className="text-sm text-gray-500 pt-2">*There may be long load times for servers to start up</p>
                    <Button type="preview" text="Preview" onLink={details.previewLink}/>
                </>}
                {details.sourceLink && details.previewLink ?
                    <Button type="source" text="Source" onLink={details.sourceLink}/>
                : <Button type="sourceOnly" text="Source" onLink={details.sourceLink}/>}
            </div>
        </div>


        </>
    );
}