export default function ArchiveProjectBox({repo}: any) {
    return (
        <>
        <div className="p-6 sm:max-w-[300px]">
            <h2>{repo.name}</h2>
            <span className="text-primary text-sm">{repo.primaryLanguage.name}</span>
            <p className="pt-2">{repo.description}</p>
            {repo.homepageUrl ? <a className="border-primary border-b-2 hover:border-0 duration-150 no-underline mr-4" href={repo.homepageUrl}>Preview</a> : null}
            <a className=" border-primary border-b-2 hover:border-0 duration-150 no-underline" href={repo.url}>Source</a>
        </div>
        </>
    );
}