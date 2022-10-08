import Button from "../../button";

export default function ArchiveProjectBox({repo}: any) {
    

    return (
        <>
        <div className="p-6 max-w-[300px]">
            <h2>{repo.repo}</h2>
            <span className="text-primary text-sm">{repo.language}</span>
            <p className="pt-4 text-sm">{repo.description}</p>
            <a className="hover:no-underline duration-200" href={repo.website}>Preview</a>
            <a className="mx-2 hover:no-underline duration-200" href={repo.link}>Source</a>
        </div>
        </>
    );
}