import Button from "../../button";

export default function ArchiveProjectBox({repo}: any) {
    

    return (
        <>
        <div className="p-6 sm:max-w-[300px]">
            <h2>{repo.repo}</h2>
            <span className="text-primary text-sm">{repo.language}</span>
            <p className="pt-2">{repo.description}</p>
            <a className="border-primary border-b-2 hover:border-0 duration-150 no-underline" href={repo.website}>Preview</a>
            <a className="ml-4 border-primary border-b-2 hover:border-0 duration-150 no-underline" href={repo.link}>Source</a>
        </div>
        </>
    );
}