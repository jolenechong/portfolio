
interface Props{
    text: String
}

export default function TechStackBox({text}: Props) {

    return (
        <>
        <div className="bg-gradient-to-r to-cyan-500 from-[#D798BE]
                        inline-block py-2 px-3 mx-2 my-1 rounded-full">
            <p className="text-black font-semibold text-sm">{text}</p>
        </div>


        </>
    );
}